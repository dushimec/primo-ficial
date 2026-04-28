import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { IndustrySection } from "@/components/sections/industry-section"
import { HowWeWork } from "@/components/sections/how-we-work"
import { StatsSection } from "@/components/sections/stats-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { siteConfig } from "@/lib/utils"
// import Slider from "@/components/slide/SlideSection"

export const metadata: Metadata = {
  title: "Primo Fiscal Partners | Accounting & Tax Services Rwanda",
  description: "Your trusted partner in accounting, tax compliance, and financial growth. Professional services for SMEs, corporates, NGOs, and institutions across Rwanda.",
  keywords: siteConfig.keywords,
  openGraph: {
    title: "Primo Fiscal Partners | Accounting & Tax Services Rwanda",
    description: "Professional accounting, tax compliance, and financial advisory services for businesses across Rwanda.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners Rwanda",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="bg-[#1e1b2e] text-white">
      {/* <Slider /> */}
      <HeroSection />
      <ServicesSection />
      <IndustrySection />
      <HowWeWork />
      <StatsSection />
      <CTABanner />
    </div>
  )
}
