import { cn } from "@/lib/utils"
import type { TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  className?: string
  fullWidth?: boolean
}

export function Textarea({ label, className, fullWidth = true, id, ...props }: TextareaProps) {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label htmlFor={id} className="block text-sm mb-1">
          {label} {props.required && "*"}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "p-2 rounded bg-[#1e1b2e] border border-gray-700 text-white text-sm h-24 focus:border-orange-400 focus:outline-none transition-colors",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      />
    </div>
  )
}
