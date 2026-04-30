import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import loggerService from "@/lib/services/logger-service"
import { EmailService } from "@/lib/services/email-service"

// Get a single training application by ID
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const application = await prisma.trainingApplication.findUnique({
      where: { id },
    })

    if (!application) {
      return NextResponse.json({ success: false, message: "Training application not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: application })
  } catch (error) {
    const { id } = await params
    loggerService.error("Error fetching training application", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Update a training application
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const data = await request.json()
    const { fullName, email, phone, university, fieldOfStudy, motivationLetter, status } = data

    if (!fullName || !email || !university || !fieldOfStudy || !motivationLetter) {
      return NextResponse.json({ success: false, message: "All fields except phone are required" }, { status: 400 })
    }

    const updateData: any = {
      fullName,
      email,
      phone,
      university,
      fieldOfStudy,
      motivationLetter,
    }

    // Only update status if provided
    if (status && ["pending", "approved", "rejected"].includes(status)) {
      updateData.status = status
    }

    const application = await prisma.trainingApplication.update({
      where: { id },
      data: updateData,
    })

    if (!application) {
      return NextResponse.json({ success: false, message: "Training application not found" }, { status: 404 })
    }

    loggerService.info("Training application updated", { id, email })

    // Send email notification if status is approved or rejected
    if (status === "approved" || status === "rejected") {
      const emailService = EmailService.getInstance()
      const emailResult = await emailService.sendTrainingStatusNotification({
        fullName,
        email,
        phone,
        university,
        fieldOfStudy,
        motivationLetter,
        status,
      })
      if (!emailResult.success) {
        loggerService.error("Failed to send status notification email", { id, email, status })
      }
    }

    return NextResponse.json({ success: true, message: "Training application updated successfully" })
  } catch (error) {
    const { id } = await params
    loggerService.error("Error updating training application", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Delete a training application
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const application = await prisma.trainingApplication.delete({
      where: { id },
    })

    if (!application) {
      return NextResponse.json({ success: false, message: "Training application not found" }, { status: 404 })
    }

    loggerService.info("Training application deleted", { id })
    return NextResponse.json({ success: true, message: "Training application deleted successfully" })
  } catch (error) {
    const { id } = await params
    loggerService.error("Error deleting training application", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
