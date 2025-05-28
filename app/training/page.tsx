import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { TrainingBenefits } from "@/components/sections/training-benefits"
import { TrainingForm } from "@/components/sections/training-form"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Training Program | ${siteConfig.name}`,
  description: "Join our training program to gain hands-on experience in accounting, tax, and financial services.",
  keywords: [
    ...siteConfig.keywords,
    "accounting training",
    "financial services training",
    "Somalia training program",
    "accounting student opportunities",
    "finance career start",
  ],
  openGraph: {
    title: `Training Program | ${siteConfig.name}`,
    description: "Join our training program to gain hands-on experience in accounting, tax, and financial services.",
    url: `${siteConfig.url}/training`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners training Program",
      },
    ],
  },
}

export default function training() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader
          title="training Program"
          description="Start your career with us! We offer exciting training opportunities for students and recent graduates."
        />
        <TrainingBenefits />
        <TrainingForm />
      </div>
    </div>
  )
}
