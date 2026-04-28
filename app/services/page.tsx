import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { ServicesList } from "@/components/sections/services-list"
import { ServiceApproach } from "@/components/sections/service-approach"
import { IndustrySection } from "@/components/sections/industry-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Our Services | Primo Fiscal Partners",
  description: "Comprehensive accounting, tax compliance, consulting, and training services for SMEs, corporates, NGOs, and institutions across Rwanda.",
  keywords: [
    ...siteConfig.keywords,
    "accounting services Rwanda",
    "tax compliance Rwanda",
    "business consulting services",
    "financial advisory Rwanda",
    "corporate tax services",
    "audit preparation services",
  ],
  openGraph: {
    title: "Our Services | Primo Fiscal Partners",
    description: "Professional accounting, tax, consulting, and training services tailored for businesses across Rwanda.",
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
    <div className="bg-[#1e1b2e] text-white">
      <div className="layout-container">
        <PageHeader title="Our Services" />
        <ServicesList />
        <ServiceApproach />
        <IndustrySection />
        <StatsSection />
        <CTABanner />
      </div>
    </div>
  )
}
