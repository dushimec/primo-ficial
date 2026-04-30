import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Register",
  description: "Create admin account for Primo Fiscal Partners",
}

export default function AdminRegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
