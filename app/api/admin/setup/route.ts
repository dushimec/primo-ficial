import { type NextRequest, NextResponse } from "next/server"
import adminService from "@/lib/services/admin-service"
import loggerService from "@/lib/services/logger-service"

// This is a one-time setup endpoint to create the initial admin user
// In a production environment, you would want to secure this endpoint
// or remove it after initial setup

export async function POST(request: NextRequest) {
  try {
    // Check if setup key is valid
    const setupKey = request.headers.get("x-setup-key")

    if (!setupKey || setupKey !== process.env.ADMIN_SETUP_KEY) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    // Parse the request body
    const data = await request.json()

    // Validate the data
    const { name, email, password, role } = data

    if (!name || !email || !password || !role) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    // Create the admin user
    const result = await adminService.createAdminUser({
      name,
      email,
      password,
      role: role === "admin" ? "admin" : "editor",
    })

    if (result) {
      return NextResponse.json({
        success: true,
        message: "Admin user created successfully",
      })
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to create admin user or user already exists" },
        { status: 400 },
      )
    }
  } catch (error) {
    loggerService.error("Error in admin setup", { error })

    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}
