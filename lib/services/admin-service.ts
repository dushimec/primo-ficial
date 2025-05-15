import { hash } from "bcryptjs"
import { getValidClient } from "../db/mongodb"
import loggerService from "./logger-service"

interface AdminUser {
  name: string
  email: string
  password: string
  role: "admin" | "editor"
}

export class AdminService {
  private static instance: AdminService
  private dbName = "primo_fiscal"
  private collectionName = "users"

  private constructor() {}

  public static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService()
    }
    return AdminService.instance
  }

  async createAdminUser(userData: AdminUser): Promise<boolean> {
    try {
      const client = await getValidClient()
      const db = client.db(this.dbName)
      const collection = db.collection(this.collectionName)

      // Check if user already exists
      const existingUser = await collection.findOne({ email: userData.email })

      if (existingUser) {
        loggerService.warn("Admin user already exists", { email: userData.email })
        return false
      }

      // Hash the password
      const hashedPassword = await hash(userData.password, 10)

      // Create the user
      const result = await collection.insertOne({
        ...userData,
        password: hashedPassword,
        createdAt: new Date(),
      })

      if (result.acknowledged) {
        loggerService.info("Admin user created successfully", { email: userData.email })
        return true
      } else {
        throw new Error("Failed to create admin user")
      }
    } catch (error) {
      loggerService.error("Error creating admin user", { error })
      return false
    }
  }

  async getAllAdminUsers(): Promise<AdminUser[]> {
    try {
      const client = await getValidClient()
      const db = client.db(this.dbName)
      const collection = db.collection(this.collectionName)

      const users = await collection
        .find({})
        .project({ password: 0 }) // Exclude password
        .toArray()

      return users as unknown as AdminUser[]
    } catch (error) {
      loggerService.error("Error fetching admin users", { error })
      return []
    }
  }
}

export default AdminService.getInstance()
