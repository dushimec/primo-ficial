import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { ContactForm } from "@/components/sections/contact-form"
import { OfficeInfo } from "@/components/sections/office-info"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Contact Us | Primo Fiscal Partners`,
  description: "Get in touch with our team of financial experts for professional accounting, tax compliance, and business advisory services in Rwanda.",
  keywords: [
    ...siteConfig.keywords,
    "contact accountant Rwanda",
    "tax consultant Kigali",
    "financial advisory services",
    "business consultation Rwanda",
    "accounting firm contact",
  ],
  openGraph: {
    title: `Contact Us | Primo Fiscal Partners`,
    description: "Schedule a consultation with our financial experts for accounting, tax, and business advisory services.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Primo Fiscal Partners Rwanda",
      },
    ],
  },
}

export default function Contact() {
  return (
    <div className="bg-[#1e1b2e] text-white">
      <PageHeader title="Contact Us" />
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactForm />
          <OfficeInfo />
        </div>
      </div>
    </div>
  )
}
