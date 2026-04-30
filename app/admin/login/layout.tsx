import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Admin login for Primo Fiscal Partners",
}

export default function AdminLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
