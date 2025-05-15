"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface FormState {
  fullName: string
  email: string
  phone: string
  university: string
  fieldOfStudy: string
  whyJoin: string
}

interface FormStatus {
  type: "success" | "error" | "loading" | null
  message: string
}

export function DetailedApplicationForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    fieldOfStudy: "",
    whyJoin: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.fullName || !formData.email || !formData.university || !formData.fieldOfStudy || !formData.whyJoin) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      })
      return
    }

    // Set loading state
    setStatus({
      type: "loading",
      message: "Submitting your application...",
    })

    try {
      const response = await fetch("/api/internship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          university: formData.university,
          fieldOfStudy: formData.fieldOfStudy,
          motivationLetter: formData.whyJoin,
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Reset form on success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          university: "",
          fieldOfStudy: "",
          whyJoin: "",
        })

        setStatus({
          type: "success",
          message: result.message,
        })
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to submit application. Please try again.",
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
      console.error("Error submitting form:", error)
    }
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Apply Now</h2>

      {status.type && (
        <div
          className={`mb-4 p-3 rounded text-sm ${
            status.type === "success"
              ? "bg-green-500/20 text-green-200"
              : status.type === "error"
                ? "bg-red-500/20 text-red-200"
                : "bg-blue-500/20 text-blue-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input label="Phone" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />

        <Input
          label="University/Institution"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />

        <Input
          label="Field of Study"
          id="fieldOfStudy"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Why do you want to intern with us?"
          id="whyJoin"
          name="whyJoin"
          value={formData.whyJoin}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          className={status.type === "loading" ? "opacity-70 cursor-not-allowed" : ""}
          onClick={status.type === "loading" ? (e) => e.preventDefault() : undefined}
        >
          {status.type === "loading" ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Card>
  )
}
