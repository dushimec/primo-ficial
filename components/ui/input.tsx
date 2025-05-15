import { cn } from "@/lib/utils"
import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  fullWidth?: boolean
}

export function Input({ label, className, fullWidth = true, id, ...props }: InputProps) {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label htmlFor={id} className="block text-sm mb-1">
          {label} {props.required && "*"}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "p-2 rounded bg-[#1e1b2e] border border-gray-700 text-white text-sm focus:border-orange-400 focus:outline-none transition-colors",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      />
    </div>
  )
}
