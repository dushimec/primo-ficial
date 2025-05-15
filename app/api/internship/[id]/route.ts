import { type NextRequest, NextResponse } from "next/server"
import { getValidClient } from "@/lib/db/mongodb"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import loggerService from "@/lib/services/logger-service"

// Get a single internship application by ID
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
    const collection = db.collection("internship_applications")

    const application = await collection.findOne({ _id: new ObjectId(id) })

    if (!application) {
      return NextResponse.json({ success: false, message: "Internship application not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: application })
  } catch (error) {
    loggerService.error("Error fetching internship application", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Update an internship application
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
    const { fullName, email, phone, university, fieldOfStudy, motivationLetter, status } = data

    if (!fullName || !email || !university || !fieldOfStudy || !motivationLetter) {
      return NextResponse.json({ success: false, message: "All fields except phone are required" }, { status: 400 })
    }

    const client = await getValidClient()
    const db = client.db("primo_fiscal")
    const collection = db.collection("internship_applications")

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          fullName,
          email,
          phone,
          university,
          fieldOfStudy,
          motivationLetter,
          status: status || "pending",
          updatedAt: new Date(),
        },
      },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, message: "Internship application not found" }, { status: 404 })
    }

    loggerService.info("Internship application updated", { id, email })
    return NextResponse.json({ success: true, message: "Internship application updated successfully" })
  } catch (error) {
    loggerService.error("Error updating internship application", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

// Delete an internship application
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
    const collection = db.collection("internship_applications")

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: "Internship application not found" }, { status: 404 })
    }

    loggerService.info("Internship application deleted", { id })
    return NextResponse.json({ success: true, message: "Internship application deleted successfully" })
  } catch (error) {
    loggerService.error("Error deleting internship application", { error, id: params.id })
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}
