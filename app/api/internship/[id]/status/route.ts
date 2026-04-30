import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import loggerService from "@/lib/services/logger-service"
import { EmailService } from "@/lib/services/email-service"

// Update the status of a training application
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const data = await request.json()
    const { status } = data

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ success: false, message: "Valid status is required" }, { status: 400 })
    }

    // First get the application to have the email for notification
    const application = await prisma.trainingApplication.findUnique({
      where: { id },
    })

    if (!application) {
      return NextResponse.json({ success: false, message: "Training application not found" }, { status: 404 })
    }

    // Update the status
    await prisma.trainingApplication.update({
      where: { id },
      data: {
        status,
        statusUpdatedAt: new Date(),
      },
    })

    // Send notification email to the applicant
    if (status !== "pending") {
      try {
        const emailService = EmailService.getInstance()
        await emailService.sendTrainingStatusNotification({
          fullName: application.fullName,
          email: application.email,
          phone: application.phone || "",
          university: application.university,
          fieldOfStudy: application.fieldOfStudy,
          motivationLetter: application.motivationLetter,
          status,
        })
        loggerService.info("Status notification email sent", { id, email: application.email, status })
      } catch (emailError) {
        loggerService.error("Failed to send status notification email", {
          error: emailError,
          id,
          email: application.email,
        })
      }
    }

    loggerService.info("Training application status updated", { id, status, email: application.email })
    return NextResponse.json({ success: true, message: `Training application ${status} successfully` })
  } catch (error) {
    const { id } = await params
    loggerService.error("Error updating training application status", { error, id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
