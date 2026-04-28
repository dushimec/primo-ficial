import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { TrainingBenefits } from "@/components/sections/training-benefits"
import { TrainingForm } from "@/components/sections/training-form"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Training Program | Primo Fiscal Partners`,
  description: "Professional training program offering hands-on experience in accounting, tax compliance, and financial advisory services for career development.",
  keywords: [
    ...siteConfig.keywords,
    "accounting training Rwanda",
    "tax training program",
    "financial services internship",
    "professional development Rwanda",
    "accounting career training",
  ],
  openGraph: {
    title: `Training Program | Primo Fiscal Partners`,
    description: "Join our professional training program for hands-on experience in accounting, tax, and financial advisory services.",
    url: `${siteConfig.url}/training`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners Training Program",
      },
    ],
  },
}

export default function training() {
  return (
    <div className="bg-[#1e1b2e] text-white">
      <div className="layout-container">
        <PageHeader
          title="Training Program"
          description="Start your career with us! We offer exciting training opportunities for students and recent graduates."
        />
        <TrainingBenefits />
        <TrainingForm />
      </div>
    </div>
  )
}
