"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Edit, Eye, Check, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface InternshipApplication {
  _id: string
  fullName: string
  email: string
  phone: string
  university: string
  fieldOfStudy: string
  motivationLetter: string
  createdAt: string
  status?: "pending" | "approved" | "rejected"
}

interface InternshipsTableProps {
  onNotification: (type: "success" | "error", message: string) => void
}

export function InternshipsTable({ onNotification }: InternshipsTableProps) {
  const [internships, setInternships] = useState<InternshipApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [viewInternship, setViewInternship] = useState<InternshipApplication | null>(null)
  const [editInternship, setEditInternship] = useState<InternshipApplication | null>(null)
  const [deleteInternship, setDeleteInternship] = useState<InternshipApplication | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch internships
  useEffect(() => {
    fetchInternships()
  }, [])

  const fetchInternships = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/internship")
      const result = await response.json()

      if (result.success) {
        setInternships(result.data)
      } else {
        setError(result.message || "Failed to fetch internship applications")
      }
    } catch (error) {
      setError("An error occurred while fetching internship applications")
      console.error("Error fetching internships:", error)
    } finally {
      setLoading(false)
    }
  }

  // Handle edit internship
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editInternship) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/internship/${editInternship._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editInternship),
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", "Internship application updated successfully")
        setEditInternship(null)
        fetchInternships()
      } else {
        onNotification("error", result.message || "Failed to update internship application")
      }
    } catch (error) {
      onNotification("error", "An error occurred while updating the internship application")
      console.error("Error updating internship:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle delete internship
  const handleDeleteConfirm = async () => {
    if (!deleteInternship) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/internship/${deleteInternship._id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", "Internship application deleted successfully")
        setDeleteInternship(null)
        fetchInternships()
      } else {
        onNotification("error", result.message || "Failed to delete internship application")
      }
    } catch (error) {
      onNotification("error", "An error occurred while deleting the internship application")
      console.error("Error deleting internship:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle status change
  const handleStatusChange = async (id: string, status: "pending" | "approved" | "rejected") => {
    try {
      const response = await fetch(`/api/internship/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", `Application ${status} successfully`)
        fetchInternships()
      } else {
        onNotification("error", result.message || "Failed to update application status")
      }
    } catch (error) {
      onNotification("error", "An error occurred while updating the application status")
      console.error("Error updating status:", error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "approved":
        return <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Approved</span>
      case "rejected":
        return <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs">Rejected</span>
      default:
        return <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Pending</span>
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="animate-spin mr-2" size={20} />
        <span>Loading internship applications...</span>
      </div>
    )
  }

  if (error) {
    return <div className="text-red-400 py-4">{error}</div>
  }

  if (internships.length === 0) {
    return <div className="py-4">No internship applications found.</div>
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">University</th>
              <th className="text-left py-2 px-4">Field of Study</th>
              <th className="text-left py-2 px-4">Status</th>
              <th className="text-left py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship._id} className="border-b border-gray-700 hover:bg-[#252338]">
                <td className="py-2 px-4">{formatDate(internship.createdAt)}</td>
                <td className="py-2 px-4">{internship.fullName}</td>
                <td className="py-2 px-4">{internship.university}</td>
                <td className="py-2 px-4">{internship.fieldOfStudy}</td>
                <td className="py-2 px-4">{getStatusBadge(internship.status)}</td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8"
                      onClick={() => setViewInternship(internship)}
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8"
                      onClick={() => setEditInternship(internship)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8 hover:bg-red-500/20"
                      onClick={() => setDeleteInternship(internship)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Internship Dialog */}
      <Dialog open={!!viewInternship} onOpenChange={(open) => !open && setViewInternship(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Internship Application Details</DialogTitle>
          </DialogHeader>
          {viewInternship && (
            <div className="space-y-4 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Status</h3>
                  <div className="mt-1">{getStatusBadge(viewInternship.status)}</div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-green-500/20 hover:bg-green-500/30"
                    onClick={() => handleStatusChange(viewInternship._id, "approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-red-500/20 hover:bg-red-500/30"
                    onClick={() => handleStatusChange(viewInternship._id, "rejected")}
                  >
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleStatusChange(viewInternship._id, "pending")}
                  >
                    Mark Pending
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Date</h3>
                  <p>{formatDate(viewInternship.createdAt)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Full Name</h3>
                  <p>{viewInternship.fullName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Email</h3>
                  <p>{viewInternship.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                  <p>{viewInternship.phone || "N/A"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">University</h3>
                  <p>{viewInternship.university}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Field of Study</h3>
                  <p>{viewInternship.fieldOfStudy}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Motivation Letter</h3>
                <p className="bg-[#252338] p-3 rounded-md mt-1 whitespace-pre-wrap">
                  {viewInternship.motivationLetter}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="secondary" onClick={() => setViewInternship(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Internship Dialog */}
      <Dialog open={!!editInternship} onOpenChange={(open) => !open && setEditInternship(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Internship Application</DialogTitle>
          </DialogHeader>
          {editInternship && (
            <form onSubmit={handleEditSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  value={editInternship.fullName}
                  onChange={(e) => setEditInternship({ ...editInternship, fullName: e.target.value })}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={editInternship.email}
                  onChange={(e) => setEditInternship({ ...editInternship, email: e.target.value })}
                  required
                />
                <Input
                  label="Phone"
                  value={editInternship.phone}
                  onChange={(e) => setEditInternship({ ...editInternship, phone: e.target.value })}
                />
                <Input
                  label="University"
                  value={editInternship.university}
                  onChange={(e) => setEditInternship({ ...editInternship, university: e.target.value })}
                  required
                />
                <Input
                  label="Field of Study"
                  value={editInternship.fieldOfStudy}
                  onChange={(e) => setEditInternship({ ...editInternship, fieldOfStudy: e.target.value })}
                  required
                />
                <div className="flex items-center space-x-4">
                  <label className="block text-sm mb-1">Status</label>
                  <div className="flex space-x-2">
                    <Button
                      type="button"
                      size="sm"
                      variant={editInternship.status === "pending" ? "primary" : "secondary"}
                      onClick={() => setEditInternship({ ...editInternship, status: "pending" })}
                    >
                      Pending
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={editInternship.status === "approved" ? "primary" : "secondary"}
                      onClick={() => setEditInternship({ ...editInternship, status: "approved" })}
                    >
                      Approved
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={editInternship.status === "rejected" ? "primary" : "secondary"}
                      onClick={() => setEditInternship({ ...editInternship, status: "rejected" })}
                    >
                      Rejected
                    </Button>
                  </div>
                </div>
              </div>
              <Textarea
                label="Motivation Letter"
                value={editInternship.motivationLetter}
                onChange={(e) => setEditInternship({ ...editInternship, motivationLetter: e.target.value })}
                required
              />
              <DialogFooter>
                <Button type="button" variant="secondary" onClick={() => setEditInternship(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Internship Dialog */}
      <Dialog open={!!deleteInternship} onOpenChange={(open) => !open && setDeleteInternship(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Internship Application</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Are you sure you want to delete the application from <strong>{deleteInternship?.fullName}</strong>?
            </p>
            <p className="text-sm text-gray-400 mt-2">This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setDeleteInternship(null)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className="bg-red-500 hover:bg-red-600"
              onClick={handleDeleteConfirm}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
