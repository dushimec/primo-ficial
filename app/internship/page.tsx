import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { InternshipBenefits } from "@/components/sections/internship-benefits"
import { InternshipForm } from "@/components/sections/internship-form"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Internship Program | ${siteConfig.name}`,
  description: "Join our internship program to gain hands-on experience in accounting, tax, and financial services.",
  keywords: [
    ...siteConfig.keywords,
    "accounting internship",
    "financial services internship",
    "Somalia internship program",
    "accounting student opportunities",
    "finance career start",
  ],
  openGraph: {
    title: `Internship Program | ${siteConfig.name}`,
    description: "Join our internship program to gain hands-on experience in accounting, tax, and financial services.",
    url: `${siteConfig.url}/internship`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primo Fiscal Partners Internship Program",
      },
    ],
  },
}

export default function Internship() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader
          title="Internship Program"
          description="Start your career with us! We offer exciting internship opportunities for students and recent graduates."
        />
        <InternshipBenefits />
        <InternshipForm />
      </div>
    </div>
  )
}
