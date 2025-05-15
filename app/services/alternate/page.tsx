import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { AlternateServicesList } from "@/components/sections/alternate-services-list"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Explore our comprehensive accounting, tax, advisory, and software solutions for businesses of all sizes.",
  keywords: [
    ...siteConfig.keywords,
    "accounting services Somalia",
    "tax planning East Africa",
    "business advisory services",
    "financial consulting",
    "software solutions",
  ],
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "Explore our comprehensive accounting, tax, advisory, and software solutions for businesses of all sizes.",
    url: `${siteConfig.url}/services/alternate`,
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

export default function ServicesAlternate() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader title="Our Services" />
        <AlternateServicesList />
        <WhyChooseUs />

        {/* Ready to Get Started */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6">Ready to Get Started?</h2>
          <Button href="/contact" variant="primary">
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  )
}
