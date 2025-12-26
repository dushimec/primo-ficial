import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function WhyChooseUs() {
  return (
    <Card className="mb-12">
      <h2 className="text-xl font-semibold text-center mb-8">Why Choose Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <AnimatedSection animation="fade-up" delay={100}>
          <div>
            <h3 className="font-semibold mb-2">Expertise & Experience</h3>
            <p className="text-sm text-gray-300">
              Decades of combined experience across various industries and tax situations, led by CPAs, tax attorneys, and enrolled agents.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div>
            <h3 className="font-semibold mb-2">Peace of Mind</h3>
            <p className="text-sm text-gray-300">
              We manage the complexities so you can focus on running your business.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div>
            <h3 className="font-semibold mb-2">Tailored Solutions</h3>
            <p className="text-sm text-gray-300">
              Bespoke advice specific to your circumstances—not generic answers.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div>
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-gray-300">
              Our network allows us to seamlessly manage cross-border tax affairs for multinational clients.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </Card>
  )
}
