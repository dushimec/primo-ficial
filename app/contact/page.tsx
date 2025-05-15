import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { ContactForm } from "@/components/sections/contact-form"
import { OfficeInfo } from "@/components/sections/office-info"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
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

export default function Contact() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader title="Contact Us" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactForm />
          <OfficeInfo />
        </div>
      </div>
    </div>
  )
}
