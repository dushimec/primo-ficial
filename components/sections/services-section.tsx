import { FileText, FileBarChart2, BarChart3 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardIcon, CardTitle, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our <span className="text-orange-400">Services</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="h-full">
              <CardIcon>
                <FileText size={28} />
              </CardIcon>
              <CardTitle>Accounting</CardTitle>
              <CardContent>
                Accurate bookkeeping, financial reporting, and well-structured records that provide full visibility into your financial position and ensure audit readiness.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="h-full">
              <CardIcon>
                <FileBarChart2 size={28} />
              </CardIcon>
              <CardTitle>Tax</CardTitle>
              <CardContent>Comprehensive tax compliance, planning, and advisory services designed to reduce risk and ensure adherence to all regulatory requirements.</CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="h-full">
              <CardIcon>
                <BarChart3 size={28} />
              </CardIcon>
              <CardTitle>Consulting</CardTitle>
              <CardContent>Strategic financial and business advisory services that improve performance, strengthen systems, and support long-term growth.</CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
