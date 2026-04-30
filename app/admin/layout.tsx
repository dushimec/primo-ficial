import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen bg-[#1e1b2e]">
      {children}
    </main>
  )
}
