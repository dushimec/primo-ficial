"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold,
  rootMargin,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin })

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "fade-left": "-translate-x-10 opacity-0",
    "fade-right": "translate-x-10 opacity-0",
  }

  const visibleClass = "translate-y-0 translate-x-0 opacity-100"

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isVisible ? visibleClass : animationClasses[animation],
        "transition-all duration-700 ease-out",
        delay ? `delay-${delay}` : "",
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
