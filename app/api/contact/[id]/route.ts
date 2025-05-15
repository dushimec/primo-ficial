import { type NextRequest, NextResponse } from "next/server"
import { getValidClient } from "@/lib/db/mongodb"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import loggerService from "@/lib/services/logger-service"

// Get a single contact by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
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

    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("contact_submissions")

    const contact = await collection.findOne({ _id: new ObjectId(id) })

    if (!contact) {
      return NextResponse.json({ success: false, message: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    loggerService.error("Error fetching contact", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Update a contact
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
    const { name, email, phone, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, email, and message are required" }, { status: 400 })
    }

    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("contact_submissions")

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, email, phone, message, updatedAt: new Date() } },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, message: "Contact not found" }, { status: 404 })
    }

    loggerService.info("Contact updated", { id, email })
    return NextResponse.json({ success: true, message: "Contact updated successfully" })
  } catch (error) {
    loggerService.error("Error updating contact", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Delete a contact
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
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

    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("contact_submissions")

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: "Contact not found" }, { status: 404 })
    }

    loggerService.info("Contact deleted", { id })
    return NextResponse.json({ success: true, message: "Contact deleted successfully" })
  } catch (error) {
    loggerService.error("Error deleting contact", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
