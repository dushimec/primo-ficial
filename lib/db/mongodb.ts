import { MongoClient, ServerApiVersion } from "mongodb"

// If MONGODB_URI is missing during local dev, warn the developer
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
// We intentionally do NOT create a connection at module import time. This
// prevents build-time DNS lookups (e.g., SRV queries) which can fail in
// build environments and break static generation.
let clientPromise: Promise<MongoClient> | null = null

const createConnection = () => {
  if (!uri) {
    throw new Error("Please add your MongoDB URI to environment variables")
  }

  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof global & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect()
    }
    return globalWithMongo._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    return client.connect()
  }
}

// Public helper: obtain a valid client on demand. This will attempt to
// connect the first time it's called. To avoid connecting during build,
// set SKIP_DB_DURING_BUILD=1 in your build environment (e.g., Vercel project
// env) which will make this function throw a clear error instead of
// triggering DNS resolution.
export async function getValidClient() {
  // If the caller intentionally disabled DB access during builds, fail fast
  if (process.env.SKIP_DB_DURING_BUILD === "1") {
    throw new Error("Database access disabled during build time (SKIP_DB_DURING_BUILD=1).")
  }

  if (!clientPromise) {
    try {
      clientPromise = createConnection()
    } catch (error: any) {
      console.error("MongoDB connection error (deferred):", error)
      throw new Error("MongoDB connection failed: " + (error?.message || String(error)))
    }
  }

  const client = await clientPromise

  if (!client || !client.db) {
    throw new Error("MongoDB connection not available. Please check your environment variables.")
  }

  return client
}

// Export default as null to discourage accidental module-init connections.
export default null as unknown as Promise<MongoClient>
