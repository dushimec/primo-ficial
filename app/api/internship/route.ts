import { type NextRequest, NextResponse } from "next/server"
import { getValidClient } from "@/lib/db/mongodb"
import emailService from "@/lib/services/email-service"
import loggerService from "@/lib/services/logger-service"

interface InternshipFormData {
  fullName: string
  email: string
  phone: string
  university: string
  fieldOfStudy: string
  motivationLetter: string
  createdAt?: Date
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json()

    // Validate the form data
    const { fullName, email, phone, university, fieldOfStudy, motivationLetter } = data

    if (!fullName || !email || !university || !fieldOfStudy || !motivationLetter) {
      return NextResponse.json({ success: false, message: "All fields except phone are required" }, { status: 400 })
    }

    // Create internship form data object
    const internshipFormData: InternshipFormData = {
      fullName,
      email,
      phone: phone || "",
      university,
      fieldOfStudy,
      motivationLetter,
      createdAt: new Date(),
    }

    // Log the incoming request
    loggerService.info("Internship application received", { email })

    // Save to database
    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("internship_applications")

    const result = await collection.insertOne(internshipFormData)

    if (!result.acknowledged) {
      loggerService.error("Failed to save internship application to database", { email })
      return NextResponse.json({ success: false, message: "Failed to process your application" }, { status: 500 })
    }

    // Send email notification to admin
    // Note: We're reusing the email service but would ideally create a specific template for internships
    const emailResult = await emailService.sendContactNotification({
      name: fullName,
      email,
      phone,
      message: `
        University/Institution: ${university}
        Field of Study: ${fieldOfStudy}
        
        Motivation Letter:
        ${motivationLetter}
      `,
    })

    if (!emailResult.success) {
      loggerService.warn("Failed to send email notification for internship application", { email })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully. We will review it and contact you soon!",
    })
  } catch (error) {
    // Log the error
    loggerService.error("Error processing internship application", { error })

    // Return error response
    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}

export async function GET() {
  // This endpoint is for admin use only and should be protected
  // In a real application, you would add authentication here

  try {
    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("internship_applications")

    const applications = await collection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json({ success: true, data: applications })
  } catch (error) {
    loggerService.error("Error fetching internship applications", { error })
    return NextResponse.json({ success: false, message: "Failed to fetch internship applications" }, { status: 500 })
  }
}
