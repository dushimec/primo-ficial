import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { AdminDashboard } from "@/components/admin/dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for Primo Fiscal Partners",
}

export default async function AdminDashboardPage() {
  // Check if user is authenticated
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/admin/login")
  }

  return <AdminDashboard user={session.user} />
}
