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
        "bg-[#252338] p-6 rounded-xl border border-transparent",
        hover && "hover:shadow-xl hover:shadow-orange-400/20 hover:border-orange-400/50 hover:scale-[1.02] transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("font-semibold mb-2 text-lg", className)}>{children}</h3>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-sm text-gray-300 leading-relaxed", className)}>{children}</div>
}

export function CardIcon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex justify-center mb-6", className)}>
      <div className="bg-orange-400/10 p-4 rounded-full">
        <div className="text-orange-400 w-6 h-6">{children}</div>
      </div>
    </div>
  )
}
