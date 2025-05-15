import { FileText, FileBarChart2, BarChart3 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardIcon, CardTitle, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl font-bold text-center mb-12">
            Our <span className="text-orange-400">Services</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="h-full">
              <CardIcon>
                <FileText size={24} />
              </CardIcon>
              <CardTitle>Accounting Services</CardTitle>
              <CardContent>
                Comprehensive bookkeeping and financial reporting to keep your business on track.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="h-full">
              <CardIcon>
                <FileBarChart2 size={24} />
              </CardIcon>
              <CardTitle>Tax Services</CardTitle>
              <CardContent>Expert tax planning and compliance services to optimize your tax position.</CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="h-full">
              <CardIcon>
                <BarChart3 size={24} />
              </CardIcon>
              <CardTitle>Advisory Services</CardTitle>
              <CardContent>Strategic business advice to help you make informed decisions and grow.</CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
