import type { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { MissionValues } from "@/components/sections/mission-values"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Primo Fiscal Partners, our history, mission, values, and leadership team.",
  keywords: [
    ...siteConfig.keywords,
    "financial services company",
    "accounting firm history",
    "financial leadership team",
    "Somalia financial experts",
    "East Africa accounting firm",
  ],
  openGraph: {
    title: "About Us | Primo Fiscal Partners",
    description: "Learn about Primo Fiscal Partners, our history, mission, values, and leadership team.",
    url: `${siteConfig.url}/about-us`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners",
      },
    ],
  },
}

export default function AboutUs() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <AboutHero />
        <MissionValues />
        <WhyChooseUs />
      </div>
    </div>
  )
}
