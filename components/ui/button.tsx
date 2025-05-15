"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = cn(
    "px-4 py-2 rounded text-sm transition",
    variant === "primary"
      ? "bg-orange-400 text-white hover:bg-orange-500"
      : "border border-orange-400 text-white hover:bg-orange-400/10",
    fullWidth && "w-full",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
