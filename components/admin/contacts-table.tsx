"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Edit, Eye, Check, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface ContactSubmission {
  _id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

interface ContactsTableProps {
  onNotification: (type: "success" | "error", message: string) => void
}

export function ContactsTable({ onNotification }: ContactsTableProps) {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [viewContact, setViewContact] = useState<ContactSubmission | null>(null)
  const [editContact, setEditContact] = useState<ContactSubmission | null>(null)
  const [deleteContact, setDeleteContact] = useState<ContactSubmission | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch contacts
  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/contact")
      const result = await response.json()

      if (result.success) {
        setContacts(result.data)
      } else {
        setError(result.message || "Failed to fetch contacts")
      }
    } catch (error) {
      setError("An error occurred while fetching contacts")
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  // Handle edit contact
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editContact) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/contact/${editContact._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editContact),
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", "Contact updated successfully")
        setEditContact(null)
        fetchContacts()
      } else {
        onNotification("error", result.message || "Failed to update contact")
      }
    } catch (error) {
      onNotification("error", "An error occurred while updating the contact")
      console.error("Error updating contact:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle delete contact
  const handleDeleteConfirm = async () => {
    if (!deleteContact) return

    try {
      setIsSubmitting(true)
      const response = await fetch(`/api/contact/${deleteContact._id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        onNotification("success", "Contact deleted successfully")
        setDeleteContact(null)
        fetchContacts()
      } else {
        onNotification("error", result.message || "Failed to delete contact")
      }
    } catch (error) {
      onNotification("error", "An error occurred while deleting the contact")
      console.error("Error deleting contact:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="animate-spin mr-2" size={20} />
        <span>Loading contacts...</span>
      </div>
    )
  }

  if (error) {
    return <div className="text-red-400 py-4">{error}</div>
  }

  if (contacts.length === 0) {
    return <div className="py-4">No contact submissions found.</div>
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Email</th>
              <th className="text-left py-2 px-4">Phone</th>
              <th className="text-left py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="border-b border-gray-700 hover:bg-[#252338]">
                <td className="py-2 px-4">{formatDate(contact.createdAt)}</td>
                <td className="py-2 px-4">{contact.name}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.phone || "N/A"}</td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8"
                      onClick={() => setViewContact(contact)}
                    >
                      <Eye size={16} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8"
                      onClick={() => setEditContact(contact)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="p-1 h-8 w-8 hover:bg-red-500/20"
                      onClick={() => setDeleteContact(contact)}
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

      {/* View Contact Dialog */}
      <Dialog open={!!viewContact} onOpenChange={(open) => !open && setViewContact(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {viewContact && (
            <div className="space-y-4 py-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400">Date</h3>
                <p>{formatDate(viewContact.createdAt)}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Name</h3>
                <p>{viewContact.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Email</h3>
                <p>{viewContact.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                <p>{viewContact.phone || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Message</h3>
                <p className="bg-[#252338] p-3 rounded-md mt-1">{viewContact.message}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="secondary" onClick={() => setViewContact(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Contact Dialog */}
      <Dialog open={!!editContact} onOpenChange={(open) => !open && setEditContact(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Contact</DialogTitle>
          </DialogHeader>
          {editContact && (
            <form onSubmit={handleEditSubmit} className="space-y-4 py-4">
              <Input
                label="Name"
                value={editContact.name}
                onChange={(e) => setEditContact({ ...editContact, name: e.target.value })}
                required
              />
              <Input
                label="Email"
                type="email"
                value={editContact.email}
                onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
                required
              />
              <Input
                label="Phone"
                value={editContact.phone}
                onChange={(e) => setEditContact({ ...editContact, phone: e.target.value })}
              />
              <Textarea
                label="Message"
                value={editContact.message}
                onChange={(e) => setEditContact({ ...editContact, message: e.target.value })}
                required
              />
              <DialogFooter>
                <Button type="button" variant="secondary" onClick={() => setEditContact(null)}>
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

      {/* Delete Contact Dialog */}
      <Dialog open={!!deleteContact} onOpenChange={(open) => !open && setDeleteContact(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Contact</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Are you sure you want to delete the contact from <strong>{deleteContact?.name}</strong>?
            </p>
            <p className="text-sm text-gray-400 mt-2">This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setDeleteContact(null)}>
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
