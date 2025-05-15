import { CircleDollarSign, Eye, Award } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function MissionValues() {
  return (
    <div className="mb-12">
      <AnimatedSection className="text-center">
        <h2 className="text-xl font-semibold text-center mb-8">Our Mission & Values</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-400/20 p-3 rounded-full">
                <CircleDollarSign className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-gray-300">
              To provide exceptional financial services that empower businesses to achieve their full potential.
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-400/20 p-3 rounded-full">
                <Eye className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Vision</h3>
            <p className="text-sm text-gray-300">
              To be the most trusted financial partner for businesses in East Africa.
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-400/20 p-3 rounded-full">
                <Award className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Values</h3>
            <p className="text-sm text-gray-300">Integrity, Excellence, Innovation, and Client Success.</p>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
