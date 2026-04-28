import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardTitle, CardContent } from "@/components/ui/card"

export function MissionValues() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Mission & Values</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="text-center h-full">
              <CardTitle>Our Mission</CardTitle>
              <CardContent>
                To empower businesses and institutions with reliable financial systems, effective tax strategies, and actionable insights that support sustainable growth.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="text-center h-full">
              <CardTitle>What We Do</CardTitle>
              <CardContent>
                We provide accurate bookkeeping, financial reporting, and structured accounting systems that support informed decision-making. We offer tax compliance, planning, and advisory services to help businesses minimize risk and remain fully compliant. We deliver financial and business advisory services that improve performance, systems, and strategic direction.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="text-center h-full">
              <CardTitle>Who We Serve</CardTitle>
              <CardContent>
                Small and Medium Enterprises (SMEs), large corporations, government institutions, and non-governmental organizations (NGOs) across Rwanda.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="h-full">
              <CardTitle className="text-center">Our Services</CardTitle>
              <CardContent>
                <ul className="space-y-3">
                  <li><strong>Accounting:</strong> Bookkeeping, financial reporting, management accounts, and audit preparation.</li>
                  <li><strong>Tax:</strong> Tax planning, filing, compliance, and advisory services.</li>
                  <li><strong>Consulting:</strong> Financial systems improvement, business strategy, and performance analysis.</li>
                  <li><strong>Training:</strong> Capacity-building programs to enhance financial skills and knowledge.</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500}>
            <Card className="text-center h-full">
              <CardTitle>Our Commitment</CardTitle>
              <CardContent>
                We are committed to building relationships founded on trust, transparency, and exceptional service. <Link href="/contact" className="text-orange-400 hover:underline">Contact us</Link> to schedule an initial consultation and discover how we can help you achieve your financial objectives.
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
