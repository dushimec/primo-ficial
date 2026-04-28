import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "Primo Fiscal Partners",
  description:
    "Your trusted partner in accounting, tax compliance, and financial growth. We support businesses across Rwanda with reliable financial services that drive clarity and sustainable success.",
  url: "https://www.primofiscalpartners.rw",
  // Use absolute URL for social/OG images
  ogImage: "https://www.primofiscalpartners.rw/logo.png",
  links: {
    twitter: "https://twitter.com/primofiscal",
    facebook: "https://facebook.com/primofiscalpartners",
    linkedin: "https://linkedin.com/company/primo-fiscal-partners",
  },
  keywords: [
    "accounting services Rwanda",
    "tax compliance Rwanda",
    "financial advisory services",
    "business consulting Rwanda",
    "financial planning",
    "bookkeeping services",
    "tax planning and compliance",
    "business advisory",
    "financial services Rwanda",
    "SME accounting services",
    "corporate tax services",
    "audit preparation",
    "business growth strategy",
    "financial management",
    "accounting training Rwanda",
    "tax advisory services",
  ],
}
