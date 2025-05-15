import { type NextRequest, NextResponse } from "next/server"
import contactService, { type ContactFormData } from "@/lib/services/contact-service"
import emailService from "@/lib/services/email-service"
import loggerService from "@/lib/services/logger-service"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await request.json()

    // Validate the form data
    const { name, email, phone, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, email, and message are required" }, { status: 400 })
    }

    // Create contact form data object
    const contactFormData: ContactFormData = {
      name,
      email,
      phone: phone || "",
      message,
    }

    // Log the incoming request
    loggerService.info("Contact form submission received", { email })

    // Save to database
    const dbResult = await contactService.saveContactSubmission(contactFormData)

    if (!dbResult.success) {
      loggerService.error("Failed to save contact submission to database", { email, error: dbResult.message })
      return NextResponse.json({ success: false, message: "Failed to process your request" }, { status: 500 })
    }

    // Send email notifications
    const emailResult = await emailService.sendContactNotification(contactFormData)

    if (!emailResult.success) {
      loggerService.warn("Failed to send email notification", { email, error: emailResult.message })
      // We still return success since the data was saved to the database
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We will contact you soon!",
    })
  } catch (error) {
    // Log the error
    loggerService.error("Error processing contact form submission", { error })

    // Return error response
    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}

export async function GET() {
  // This endpoint is for admin use only and should be protected
  // In a real application, you would add authentication here

  try {
    const submissions = await contactService.getContactSubmissions()
    return NextResponse.json({ success: true, data: submissions })
  } catch (error) {
    loggerService.error("Error fetching contact submissions", { error })
    return NextResponse.json({ success: false, message: "Failed to fetch contact submissions" }, { status: 500 })
  }
}
