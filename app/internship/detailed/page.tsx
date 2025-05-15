import type { Metadata } from "next"
import { InternshipDetails } from "@/components/sections/internship-details"
import { DetailedApplicationForm } from "@/components/sections/detailed-application-form"
import { PageHeader } from "@/components/ui/page-header"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Internship Program Details",
  description:
    "Detailed information about our internship program including duration, what you'll learn, requirements, and application process.",
  keywords: [
    ...siteConfig.keywords,
    "internship details",
    "internship requirements",
    "internship application",
    "accounting internship",
    "finance internship",
  ],
}

export default function InternshipDetailed() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader title="Internship Program" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InternshipDetails />
          <DetailedApplicationForm />
        </div>
      </div>
    </div>
  )
}
