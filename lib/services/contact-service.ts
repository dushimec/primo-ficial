import { prisma } from "../db/prisma"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  createdAt?: Date
}

export interface ContactFormResponse {
  id?: string
  success: boolean
  message: string
}

export class ContactService {
  private static instance: ContactService

  private constructor() {}

  public static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService()
    }
    return ContactService.instance
  }

  async saveContactSubmission(data: ContactFormData): Promise<ContactFormResponse> {
    try {
      const submission = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || "",
          message: data.message,
        },
      })

      return {
        id: submission.id,
        success: true,
        message: "Contact form submitted successfully",
      }
    } catch (error) {
      console.error("Error saving contact submission:", error)
      return {
        success: false,
        message: "Failed to save contact submission",
      }
    }
  }

  async getContactSubmissions(): Promise<ContactFormData[]> {
    try {
      const submissions = await prisma.contactSubmission.findMany({
        orderBy: {
          createdAt: "desc",
        },
      })

      return submissions as unknown as ContactFormData[]
    } catch (error) {
      console.error("Error fetching contact submissions:", error)
      return []
    }
  }

  async getContactSubmissionById(id: string): Promise<ContactFormData | null> {
    try {
      const submission = await prisma.contactSubmission.findUnique({
        where: { id },
      })

      return submission as unknown as ContactFormData
    } catch (error) {
      console.error("Error fetching contact submission:", error)
      return null
    }
  }
}

export default ContactService.getInstance()
