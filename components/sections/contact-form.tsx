"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

interface FormStatus {
  type: "success" | "error" | "loading" | null
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      })
      return
    }

    // Set loading state
    setStatus({
      type: "loading",
      message: "Sending your message...",
    })

    try {
      const response = await fetch("/api/contact", {
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
          name: "",
          email: "",
          phone: "",
          message: "",
        })

        setStatus({
          type: "success",
          message: result.message,
        })
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again.",
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
    <AnimatedSection animation="fade-right">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>

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
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />

          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
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
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Card>
    </AnimatedSection>
  )
}
