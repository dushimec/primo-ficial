import { type NextRequest, NextResponse } from "next/server"
import { getValidClient } from "@/lib/db/mongodb"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import loggerService from "@/lib/services/logger-service"
import emailService from "@/lib/services/email-service"

// Update the status of an internship application
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const id = params.id

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid ID format" }, { status: 400 })
    }

    const data = await request.json()
    const { status } = data

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ success: false, message: "Valid status is required" }, { status: 400 })
    }

    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("internship_applications")

    // First get the application to have the email for notification
    const application = await collection.findOne({ _id: new ObjectId(id) })

    if (!application) {
      return NextResponse.json({ success: false, message: "Internship application not found" }, { status: 404 })
    }

    // Update the status
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          status,
          statusUpdatedAt: new Date(),
        },
      },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, message: "Internship application not found" }, { status: 404 })
    }

    // Send notification email to the applicant
    if (status !== "pending") {
      try {
        await emailService.sendContactNotification({
          name: application.fullName,
          email: application.email,
          phone: application.phone || "",
          message: `Your internship application has been ${status}. ${
            status === "approved"
              ? "Congratulations! We will contact you soon with further details."
              : "Thank you for your interest in our program."
          }`,
        })
      } catch (emailError) {
        loggerService.error("Failed to send status notification email", {
          error: emailError,
          id,
          email: application.email,
        })
      }
    }

    loggerService.info("Internship application status updated", { id, status, email: application.email })
    return NextResponse.json({ success: true, message: `Internship application ${status} successfully` })
  } catch (error) {
    loggerService.error("Error updating internship application status", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
