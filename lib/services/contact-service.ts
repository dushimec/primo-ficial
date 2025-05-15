import { getValidClient } from "../db/mongodb"
import { ObjectId } from "mongodb"

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
  private dbName = "primo_fiscal"
  private collectionName = "contact_submissions"

  private constructor() {}

  public static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService()
    }
    return ContactService.instance
  }

  async saveContactSubmission(data: ContactFormData): Promise<ContactFormResponse> {
    try {
      const client = await getValidClient()
      const db = client.db(this.dbName)
      const collection = db.collection(this.collectionName)

      // Add timestamp
      const submissionData = {
        ...data,
        createdAt: new Date(),
      }

      const result = await collection.insertOne(submissionData)

      if (result.acknowledged) {
        return {
          id: result.insertedId.toString(),
          success: true,
          message: "Contact form submitted successfully",
        }
      } else {
        throw new Error("Failed to save contact submission")
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
      const client = await getValidClient()
      const db = client.db(this.dbName)
      const collection = db.collection(this.collectionName)

      const submissions = await collection.find({}).sort({ createdAt: -1 }).toArray()

      return submissions as unknown as ContactFormData[]
    } catch (error) {
      console.error("Error fetching contact submissions:", error)
      return []
    }
  }

  async getContactSubmissionById(id: string): Promise<ContactFormData | null> {
    try {
      const client = await getValidClient()
      const db = client.db(this.dbName)
      const collection = db.collection(this.collectionName)

      const submission = await collection.findOne({ _id: new ObjectId(id) })

      return submission as unknown as ContactFormData
    } catch (error) {
      console.error("Error fetching contact submission:", error)
      return null
    }
  }
}

export default ContactService.getInstance()
