import { GraduationCap, Users, FileCode, Award } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function TrainingBenefits() {
  return (
    <div className="mb-12">
      <AnimatedSection className="text-center">
        <h2 className="text-xl font-semibold text-center mb-8">Why Choose Our Training Program?</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <GraduationCap className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Learning & Growth</h3>
            <p className="text-xs text-gray-300">Hands-on experience with latest technologies</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <Users className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Mentorship</h3>
            <p className="text-xs text-gray-300">Work directly with industry experts</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <FileCode className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Real Projects</h3>
            <p className="text-xs text-gray-300">Work on actual client projects</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <Card className="text-center h-full">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <Award className="text-orange-400" size={24} />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Certification</h3>
            <p className="text-xs text-gray-300">Receive certification upon completion</p>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
