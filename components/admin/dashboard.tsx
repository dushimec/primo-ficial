"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactsTable } from "@/components/admin/contacts-table"
import { TrainingsTable } from "@/components/admin/internships-table"
import { AlertCircle, CheckCircle } from "lucide-react"

interface AdminDashboardProps {
  user?: {
    name?: string | null
    email?: string | null
    role?: string | null
  }
}

export function AdminDashboard({ user }: AdminDashboardProps) {
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
  }

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message })
    setTimeout(() => {
      setNotification({ type: null, message: "" })
    }, 5000)
  }

  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            {user?.name && (
              <p className="text-sm text-gray-400">
                Logged in as {user.name} ({user.role})
              </p>
            )}
          </div>
          <Button variant="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>

        {notification.type && (
          <div
            className={`mb-6 p-4 rounded-md flex items-center ${
              notification.type === "success" ? "bg-green-500/20" : "bg-red-500/20"
            }`}
          >
            {notification.type === "success" ? (
              <CheckCircle className="text-green-400 mr-2" size={18} />
            ) : (
              <AlertCircle className="text-red-400 mr-2" size={18} />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        <Tabs defaultValue="contacts">
          <TabsList className="mb-6">
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            <TabsTrigger value="trainings">Training Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Form Submissions</h2>
              <ContactsTable onNotification={showNotification} />
            </Card>
          </TabsContent>

          <TabsContent value="trainings">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Training Applications</h2>
              <TrainingsTable onNotification={showNotification} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
