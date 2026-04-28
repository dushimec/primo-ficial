import { Award, Users, ThumbsUp, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function StatsSection() {
  return (
    <section className="section-spacing" style={{ backgroundColor: '#252338' }}>
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Choose <span className="text-orange-400">Us</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="p-8">
              <div className="flex justify-center mb-4 text-orange-400">
                <Award size={32} />
              </div>
              <h3 className="text-orange-400 text-4xl font-bold mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="p-8">
              <div className="flex justify-center mb-4 text-orange-400">
                <Users size={32} />
              </div>
              <h3 className="text-orange-400 text-4xl font-bold mb-2">500+</h3>
              <p className="text-gray-300">Satisfied Clients</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="p-8">
              <div className="flex justify-center mb-4 text-orange-400">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-orange-400 text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="p-8">
              <div className="flex justify-center mb-4 text-orange-400">
                <Clock size={32} />
              </div>
              <h3 className="text-orange-400 text-4xl font-bold mb-2">24/7</h3>
              <p className="text-gray-300">Support Available</p>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
