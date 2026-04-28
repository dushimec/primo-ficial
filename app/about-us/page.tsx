import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { MissionValues } from "@/components/sections/mission-values"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { CTABanner } from "@/components/sections/cta-banner"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About Us | Primo Fiscal Partners",
  description: "Primo Fiscal Partners is a Rwanda-based accounting and tax advisory firm dedicated to helping organizations achieve financial clarity, compliance, and operational efficiency.",
  keywords: [
    ...siteConfig.keywords,
    "Rwanda accounting firm",
    "tax advisory Rwanda",
    "financial consulting Rwanda",
    "corporate tax services",
    "business advisory services",
  ],
  openGraph: {
    title: "About Us | Primo Fiscal Partners",
    description: "Learn about our mission to empower businesses with reliable financial systems and effective tax strategies.",
    url: `${siteConfig.url}/about-us`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "About Primo Fiscal Partners",
      },
    ],
  },
}

export default function AboutUs() {
  return (
    <div className="bg-[#1e1b2e] text-white">
      <AboutHero />
      <MissionValues />
      <WhyChooseUs />
      <CTABanner />
    </div>
  )
}
