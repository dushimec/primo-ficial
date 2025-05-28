import { Card } from "@/components/ui/card"

export function TrainingDetails() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Program Overview</h2>

      <div className="mb-6">
        <h3 className="text-orange-400 font-medium mb-2">Duration</h3>
        <p className="text-sm">3-6 months, full-time or part-time position</p>
      </div>

      <div>
        <h3 className="text-orange-400 font-medium mb-2">What You'll Learn</h3>
        <ul className="space-y-2 text-sm list-disc pl-5">
          <li>Accounting principles and procedures</li>
          <li>Financial statement preparation</li>
          <li>Business advisory skills</li>
          <li>Professional software tools</li>
          <li>Client communication skills</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-orange-400 font-medium mb-2">Requirements</h3>
        <ul className="space-y-2 text-sm list-disc pl-5">
          <li>Currently studying or recently completed degree in Accounting, Finance, or related field</li>
          <li>Strong academic performance</li>
          <li>Excellent analytical and communication skills</li>
          <li>Proficiency in MS Office</li>
        </ul>
      </div>
    </Card>
  )
}
