import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function TeamSection() {
  return (
    <div>
      <AnimatedSection className="text-center">
        <h2 className="text-xl font-semibold text-center mb-8">Our Leadership Team</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="John Doe"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-1">John Doe</h3>
            <p className="text-sm text-gray-300 mb-2">
              25+ years of experience in financial consulting and business strategy
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Jane Smith"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-1">Jane Smith</h3>
            <p className="text-sm text-gray-300 mb-2">Expert in financial planning and risk management</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <Card className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Michael Johnson"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-1">Michael Johnson</h3>
            <p className="text-sm text-gray-300 mb-2">
              Specializes in optimizing business processes and client relations
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
