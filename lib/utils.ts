import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "Primo Fiscal Partners",
  description:
    "Your trusted partner in financial excellence, providing comprehensive accounting, tax, and advisory services to help your business thrive.",
  url: "https://www.primofiscalpartners.rw",
  ogImage: "/logo.png",
  links: {
    twitter: "https://twitter.com/primofiscal",
    facebook: "https://facebook.com/primofiscalpartners",
    linkedin: "https://linkedin.com/company/primo-fiscal-partners",
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
    "accounting training",
  ],
}
