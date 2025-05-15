"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedSection } from "@/components/ui/animated-section"
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
  motivationLetter: string
}

interface FormStatus {
  type: "success" | "error" | "loading" | null
  message: string
}

export function InternshipForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    fieldOfStudy: "",
    motivationLetter: "",
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
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.university ||
      !formData.fieldOfStudy ||
      !formData.motivationLetter
    ) {
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
        body: JSON.stringify(formData),
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
          motivationLetter: "",
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
    <AnimatedSection animation="fade-up">
      <Card className="max-w-md mx-auto">
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
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <Input
            label="University/Institution"
            id="university"
            name="university"
            type="text"
            placeholder="Your university"
            value={formData.university}
            onChange={handleChange}
            required
          />

          <Input
            label="Field of Study"
            id="fieldOfStudy"
            name="fieldOfStudy"
            type="text"
            placeholder="Your field of study"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            required
          />

          <Textarea
            label="Motivation Letter"
            id="motivationLetter"
            name="motivationLetter"
            placeholder="Tell us why you want to join our internship program"
            value={formData.motivationLetter}
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
    </AnimatedSection>
  )
}
