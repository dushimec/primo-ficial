import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import loggerService from "@/lib/services/logger-service"

// Get a single contact submission by ID
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const contact = await prisma.contactSubmission.findUnique({
      where: { id },
    })

    if (!contact) {
      return NextResponse.json({ success: false, message: "Contact submission not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    loggerService.error("Error fetching contact submission", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Update a contact submission
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    const data = await request.json()
    const { name, email, phone, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, email, and message are required" }, { status: 400 })
    }

    const contact = await prisma.contactSubmission.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        message,
      },
    })

    if (!contact) {
      return NextResponse.json({ success: false, message: "Contact submission not found" }, { status: 404 })
    }

    loggerService.info("Contact submission updated", { id, email })
    return NextResponse.json({ success: true, message: "Contact submission updated successfully" })
  } catch (error) {
    loggerService.error("Error updating contact submission", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Delete a contact submission
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    const contact = await prisma.contactSubmission.delete({
      where: { id },
    })

    if (!contact) {
      return NextResponse.json({ success: false, message: "Contact submission not found" }, { status: 404 })
    }

    loggerService.info("Contact submission deleted", { id })
    return NextResponse.json({ success: true, message: "Contact submission deleted successfully" })
  } catch (error) {
    loggerService.error("Error deleting contact submission", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
