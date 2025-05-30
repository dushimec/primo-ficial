import type { Metadata } from "next"
import { TrainingDetails } from "@/components/sections/training-details"
import { DetailedApplicationForm } from "@/components/sections/detailed-application-form"
import { PageHeader } from "@/components/ui/page-header"
import { siteConfig } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Training Program Details",
  description:
    "Detailed information about our training program including duration, what you'll learn, requirements, and application process.",
  keywords: [
    ...siteConfig.keywords,
    "training details",
    "training requirements",
    "training application",
    "accounting training",
    "finance training",
  ],
}

export default function TrainingDetailed() {
  return (
    <div className="bg-[#1e1b2e] text-white min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <PageHeader title="Training Program" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TrainingDetails />
          <DetailedApplicationForm />
        </div>
      </div>
    </div>
  )
}
