"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Edit, Eye, Check, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface TrainingApplication {
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

interface TrainingsTableProps {
  onNotification: (type: "success" | "error", message: string) => void
}

export function TrainingsTable({ onNotification }: TrainingsTableProps) {
  const [trainings, setTrainings] = useState<TrainingApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [viewTraining, setViewTraining] = useState<TrainingApplication | null>(null)
  const [editTraining, setEditTraining] = useState<TrainingApplication | null>(null)
  const [deleteTraining, setDeleteTraining] = useState<TrainingApplication | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch trainings
  useEffect(() => {
    fetchTrainings()
  }, [])

  const fetchTrainings = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/training")
      const result = await response.json()

      if (result.success) {
        setTrainings(result.data)
      } else {
        setError(result.message || "Failed to fetch training applications")
      }
    } catch (error) {
      setError("An error occurred while fetching training applications")
      console.error("Error fetching trainings:", error)
    } finally {
      setLoading(false)
    }
  }

  // Handle edit training
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editTraining) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/training/${editTraining._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editTraining),
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", "Training application updated successfully")
        setEditTraining(null)
        fetchTrainings()
      } else {
        onNotification("error", result.message || "Failed to update training application")
      }
    } catch (error) {
      onNotification("error", "An error occurred while updating the training application")
      console.error("Error updating training:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle delete training
  const handleDeleteConfirm = async () => {
    if (!deleteTraining) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/training/${deleteTraining._id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", "Training application deleted successfully")
        setDeleteTraining(null)
        fetchTrainings()
      } else {
        onNotification("error", result.message || "Failed to delete training application")
      }
    } catch (error) {
      onNotification("error", "An error occurred while deleting the training application")
      console.error("Error deleting training:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle status change
  const handleStatusChange = async (id: string, status: "pending" | "approved" | "rejected") => {
    try {
      const response = await fetch(`/api/training/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", `Application ${status} successfully`)
        fetchTrainings()
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
        <span>Loading training applications...</span>
      </div>
    )
  }

  if (error) {
    return <div className="text-red-400 py-4">{error}</div>
  }

  if (trainings.length === 0) {
    return <div className="py-4">No training applications found.</div>
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
            {trainings.map((internship) => (
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
                      onClick={() => setViewTraining(internship)}
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8"
                      onClick={() => setEditTraining(internship)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8 hover:bg-red-500/20"
                      onClick={() => setDeleteTraining(internship)}
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

      {/* View Training Dialog */}
      <Dialog open={!!viewTraining} onOpenChange={(open) => !open && setViewTraining(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Training Application Details</DialogTitle>
          </DialogHeader>
          {viewTraining && (
            <div className="space-y-4 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Status</h3>
                  <div className="mt-1">{getStatusBadge(viewTraining.status)}</div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-green-500/20 hover:bg-green-500/30"
                    onClick={() => handleStatusChange(viewTraining._id, "approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-red-500/20 hover:bg-red-500/30"
                    onClick={() => handleStatusChange(viewTraining._id, "rejected")}
                  >
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleStatusChange(viewTraining._id, "pending")}
                  >
                    Mark Pending
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Date</h3>
                  <p>{formatDate(viewTraining.createdAt)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Full Name</h3>
                  <p>{viewTraining.fullName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Email</h3>
                  <p>{viewTraining.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                  <p>{viewTraining.phone || "N/A"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">University</h3>
                  <p>{viewTraining.university}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Field of Study</h3>
                  <p>{viewTraining.fieldOfStudy}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Motivation Letter</h3>
                <p className="bg-[#252338] p-3 rounded-md mt-1 whitespace-pre-wrap">
                  {viewTraining.motivationLetter}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="secondary" onClick={() => setViewTraining(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Training Dialog */}
      <Dialog open={!!editTraining} onOpenChange={(open) => !open && setEditTraining(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Training Application</DialogTitle>
          </DialogHeader>
          {editTraining && (
            <form onSubmit={handleEditSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  value={editTraining.fullName}
                  onChange={(e) => setEditTraining({ ...editTraining, fullName: e.target.value })}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={editTraining.email}
                  onChange={(e) => setEditTraining({ ...editTraining, email: e.target.value })}
                  required
                />
                <Input
                  label="Phone"
                  value={editTraining.phone}
                  onChange={(e) => setEditTraining({ ...editTraining, phone: e.target.value })}
                />
                <Input
                  label="University"
                  value={editTraining.university}
                  onChange={(e) => setEditTraining({ ...editTraining, university: e.target.value })}
                  required
                />
                <Input
                  label="Field of Study"
                  value={editTraining.fieldOfStudy}
                  onChange={(e) => setEditTraining({ ...editTraining, fieldOfStudy: e.target.value })}
                  required
                />
                <div className="flex items-center space-x-4">
                  <label className="block text-sm mb-1">Status</label>
                  <div className="flex space-x-2">
                    <Button
                      type="button"
                      size="sm"
                      variant={editTraining.status === "pending" ? "primary" : "secondary"}
                      onClick={() => setEditTraining({ ...editTraining, status: "pending" })}
                    >
                      Pending
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={editTraining.status === "approved" ? "primary" : "secondary"}
                      onClick={() => setEditTraining({ ...editTraining, status: "approved" })}
                    >
                      Approved
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={editTraining.status === "rejected" ? "primary" : "secondary"}
                      onClick={() => setEditTraining({ ...editTraining, status: "rejected" })}
                    >
                      Rejected
                    </Button>
                  </div>
                </div>
              </div>
              <Textarea
                label="Motivation Letter"
                value={editTraining.motivationLetter}
                onChange={(e) => setEditTraining({ ...editTraining, motivationLetter: e.target.value })}
                required
              />
              <DialogFooter>
                <Button type="button" variant="secondary" onClick={() => setEditTraining(null)}>
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

      {/* Delete Training Dialog */}
      <Dialog open={!!deleteTraining} onOpenChange={(open) => !open && setDeleteTraining(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Training Application</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Are you sure you want to delete the application from <strong>{deleteTraining?.fullName}</strong>?
            </p>
            <p className="text-sm text-gray-400 mt-2">This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setDeleteTraining(null)}>
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
