import { AnimatedSection } from "@/components/ui/animated-section"

export function StatsSection() {
  return (
    <section className="py-12 px-6 bg-[#252338]">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose <span className="text-orange-400">Us</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-orange-400 text-2xl font-bold mb-1">15+</h3>
              <p className="text-sm">Years Experience</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-orange-400 text-2xl font-bold mb-1">500+</h3>
              <p className="text-sm">Satisfied Clients</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-orange-400 text-2xl font-bold mb-1">100%</h3>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-orange-400 text-2xl font-bold mb-1">24/7</h3>
              <p className="text-sm">Support Available</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
