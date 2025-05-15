import { MongoClient, ServerApiVersion } from "mongodb"

// Only throw an error if we're not in a build environment
if (!process.env.MONGODB_URI && process.env.NODE_ENV !== "production" && process.env.VERCEL_ENV !== "production") {
  console.warn("MongoDB URI is not defined. Please add your MongoDB URI to .env.local")
}

const uri = process.env.MONGODB_URI || ""
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

// Create a conditional connection that only connects when the URI is available
const createConnection = () => {
  if (!uri) {
    throw new Error("Please add your MongoDB URI to environment variables")
  }

  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof global & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    return globalWithMongo._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    return client.connect()
  }
}

// Don't actually connect during build time
if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "production") {
  // This is a build step, don't actually connect
  clientPromise = Promise.resolve({} as MongoClient)
} else {
  try {
    clientPromise = createConnection()
  } catch (error) {
    console.error("MongoDB connection error:", error)
    // Provide a fallback promise that will throw a more helpful error when used
    clientPromise = Promise.resolve({} as MongoClient)
  }
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise

// Helper function to check if the connection is valid before using it
export async function getValidClient() {
  const client = await clientPromise

  // Check if this is a real client or our fallback empty object
  if (!client.db) {
    throw new Error("MongoDB connection not available. Please check your environment variables.")
  }

  return client
}
