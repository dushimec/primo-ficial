import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { siteConfig } from "@/lib/utils"
// import Slider from "@/components/slide/SlideSection"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
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
      <StatsSection />
    </div>
  )
}
