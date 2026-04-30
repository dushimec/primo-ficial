"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminRegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState<"admin" | "editor">("admin")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess("Admin account created successfully!")
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setRole("admin")
        setTimeout(() => {
          router.push("/admin/login")
        }, 1500)
      } else {
        setError(data.message || "Failed to create admin account")
      }
    } catch (error) {
      setError("An unexpected error occurred")
      console.error("Registration error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen flex items-center justify-center py-12 px-6">
      <Card className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Register</h1>

        {error && <div className="mb-4 p-3 rounded text-sm bg-red-500/20 text-red-200">{error}</div>}
        {success && <div className="mb-4 p-3 rounded text-sm bg-green-500/20 text-green-200">{success}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />

          <Input
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />

          <Input
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
          />


          <Button type="submit" variant="primary" fullWidth className={loading ? "opacity-70 cursor-not-allowed" : ""}>
            {loading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/admin/login" className="text-blue-400 hover:underline">
            Sign in
          </a>
        </p>
      </Card>
    </div>
  )
}
