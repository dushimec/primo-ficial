import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "Primo Ficial Partners",
  description:
    "Your trusted partner in financial excellence, providing comprehensive accounting, tax, and advisory services to help your business thrive.",
  url: "https://primoficialpartners.com",
  ogImage: "/logo.png",
  links: {
    twitter: "https://twitter.com/primoficial",
    facebook: "https://facebook.com/primoficialpartners",
    linkedin: "https://linkedin.com/company/primo-ficial-partners",
  },
  keywords: [
    "accounting services",
    "tax services",
    "financial advisory",
    "business consulting",
    "financial planning",
    "bookkeeping",
    "tax planning",
    "business formation",
    "financial services",
    "Somalia accounting firm",
    "East Africa financial services",
    "digital accounting solutions",
    "tax compliance",
    "business strategy",
    "financial management",
    "accounting internship",
  ],
}
