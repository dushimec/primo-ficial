import { hash } from "bcryptjs"
import { prisma } from "../db/prisma"
import loggerService from "./logger-service"

interface AdminUser {
  id?: string
  name: string
  email: string
  password: string
  role: "admin" | "editor"
}

export class AdminService {
  private static instance: AdminService

  private constructor() {}

  public static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService()
    }
    return AdminService.instance
  }

  async createAdminUser(userData: AdminUser): Promise<boolean> {
    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      })

      if (existingUser) {
        loggerService.warn("Admin user already exists", { email: userData.email })
        return false
      }

      // Hash the password
      const hashedPassword = await hash(userData.password, 10)

      // Create the user
      await prisma.user.create({
        data: {
          name: userData.name,
          email: userData.email,
          password: hashedPassword,
          role: userData.role || "admin",
        },
      })

      loggerService.info("Admin user created successfully", { email: userData.email })
      return true
    } catch (error) {
      loggerService.error("Error creating admin user", { error })
      return false
    }
  }

  async getAllAdminUsers(): Promise<AdminUser[]> {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      })

      return users as unknown as AdminUser[]
    } catch (error) {
      loggerService.error("Error fetching admin users", { error })
      return []
    }
  }

  async getUserByEmail(email: string): Promise<AdminUser | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          role: true,
        },
      })

      return user as unknown as AdminUser
    } catch (error) {
      loggerService.error("Error fetching user by email", { error })
      return null
    }
  }
}

export default AdminService.getInstance()
