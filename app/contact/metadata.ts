import { siteConfig } from "@/lib/utils"

export const metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with our team of financial experts. We're here to help your business succeed.",
  keywords: [
    ...siteConfig.keywords,
    "contact financial advisor",
    "accounting firm contact",
    "Somalia financial services contact",
    "tax planning consultation",
    "business advisory appointment",
  ],
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Get in touch with our team of financial experts. We're here to help your business succeed.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Primo Fiscal Partners",
      },
    ],
  },
}
