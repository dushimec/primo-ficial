import { Users, Clock, ShieldCheck } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardIcon, CardTitle, CardContent } from "@/components/ui/card"

export function ServiceApproach() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Our Service Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="h-full">
                <CardIcon>
                  <Users size={28} />
                </CardIcon>
                <CardTitle>Personal Touch</CardTitle>
                <CardContent>Dedicated account manager for your business</CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="h-full">
                <CardIcon>
                  <Clock size={28} />
                </CardIcon>
                <CardTitle>Timely Delivery</CardTitle>
                <CardContent>Meeting deadlines with precision</CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="h-full">
                <CardIcon>
                  <ShieldCheck size={28} />
                </CardIcon>
                <CardTitle>Quality Assured</CardTitle>
                <CardContent>Highest standards of service delivery</CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
