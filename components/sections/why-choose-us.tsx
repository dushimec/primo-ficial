import { ShieldCheck, ClipboardCheck, Lightbulb, TrendingUp } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardIcon, CardTitle, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="h-full">
              <CardIcon>
                <ShieldCheck size={28} />
              </CardIcon>
              <CardTitle>Integrity</CardTitle>
              <CardContent>
                We deliver services with professionalism, transparency, and ethical standards.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="h-full">
              <CardIcon>
                <ClipboardCheck size={28} />
              </CardIcon>
              <CardTitle>Compliance</CardTitle>
              <CardContent>
                We ensure your business meets all legal and regulatory obligations.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="h-full">
              <CardIcon>
                <Lightbulb size={28} />
              </CardIcon>
              <CardTitle>Insight</CardTitle>
              <CardContent>
                We turn financial data into clear, actionable business intelligence.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="h-full">
              <CardIcon>
                <TrendingUp size={28} />
              </CardIcon>
              <CardTitle>Results</CardTitle>
              <CardContent>
                We focus on measurable outcomes that support growth and sustainability.
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
