import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[#252338] p-6 rounded-lg",
        hover && "hover:shadow-lg hover:shadow-orange-400/10 transition-shadow duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("font-semibold mb-2", className)}>{children}</h3>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-sm text-gray-300", className)}>{children}</div>
}

export function CardIcon({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-orange-400 mb-4", className)}>{children}</div>
}
