import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { ServicesList } from "@/components/sections/services-list"
import { ServiceApproach } from "@/components/sections/service-approach"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive accounting, tax, advisory, and digital services for businesses of all sizes.",
  keywords: [
    ...siteConfig.keywords,
    "accounting services Somalia",
    "tax planning East Africa",
    "business advisory services",
    "financial consulting",
    "digital accounting solutions",
  ],
  openGraph: {
    title: "Services | Primo Fiscal Partners",
    description:
      "Explore our comprehensive accounting, tax, advisory, and digital services for businesses of all sizes.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners Services",
      },
    ],
  },
}

export default function Services() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader title="Our Services" />
        <ServicesList />
        <ServiceApproach />
      </div>
    </div>
  )
}
