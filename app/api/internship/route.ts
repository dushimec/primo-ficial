import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import emailService from "@/lib/services/email-service"
import loggerService from "@/lib/services/logger-service"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json()

    // Validate the form data
    const { fullName, email, phone, university, fieldOfStudy, motivationLetter } = data

    if (!fullName || !email || !university || !fieldOfStudy || !motivationLetter) {
      return NextResponse.json({ success: false, message: "All fields except phone are required" }, { status: 400 })
    }

    // Save to database using Prisma
    const application = await prisma.trainingApplication.create({
      data: {
        fullName,
        email,
        phone: phone || "",
        university,
        fieldOfStudy,
        motivationLetter,
      },
    })

    // Log the incoming request
    loggerService.info("Training application received", { email, id: application.id })

     // Send email notification to admin using specific training application template
     const emailResult = await emailService.sendTrainingNotification({
       fullName,
       email,
       phone,
       university,
       fieldOfStudy,
       motivationLetter,
     })

    if (!emailResult.success) {
      loggerService.warn("Failed to send email notification for training application", { email })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully. We will review it and contact you soon!",
    })
  } catch (error) {
    // Log the error
    loggerService.error("Error processing training application", { error })

    // Return error response
    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}

export async function GET() {
  // This endpoint is for admin use only and should be protected
  // In a real application, you would add authentication here

  try {
    const applications = await prisma.trainingApplication.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ success: true, data: applications })
  } catch (error) {
    loggerService.error("Error fetching training applications", { error })
    return NextResponse.json({ success: false, message: "Failed to fetch training applications" }, { status: 500 })
  }
}
