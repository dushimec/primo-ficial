import { type NextRequest, NextResponse } from "next/server"
import adminService from "@/lib/services/admin-service"
import loggerService from "@/lib/services/logger-service"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json()

    // Validate the data
    const { name, email, password, role } = data

    if (!name || !email || !password) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ success: false, message: "Password must be at least 6 characters" }, { status: 400 })
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
        message: "Admin account created successfully",
      })
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to create admin account or user already exists" },
        { status: 400 },
      )
    }
  } catch (error) {
    loggerService.error("Error in admin register", { error })

    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}
