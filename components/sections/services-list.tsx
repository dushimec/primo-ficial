import { FileText, FileBarChart2, BarChart3, MonitorSmartphone } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function ServicesList() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accounting Services */}
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="h-full">
              <div className="flex items-center mb-4">
                <FileText className="text-orange-400 mr-2" size={20} />
                <h2 className="text-lg font-semibold">Accounting</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li>Accurate bookkeeping and financial record maintenance</li>
                <li>Financial statement preparation and analysis</li>
                <li>Management accounts for informed decision-making</li>
                <li>Audit preparation and support</li>
                <li>Cash flow management and optimization</li>
              </ul>
            </Card>
          </AnimatedSection>

          {/* Tax Services */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="h-full">
              <div className="flex items-center mb-4">
                <FileBarChart2 className="text-orange-400 mr-2" size={20} />
                <h2 className="text-lg font-semibold">Tax</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li>Comprehensive tax planning and strategy</li>
                <li>Tax filing and compliance reporting</li>
                <li>VAT registration, filing, and advisory</li>
                <li>Tax audit preparation and representation</li>
                <li>International tax consulting and compliance</li>
              </ul>
            </Card>
          </AnimatedSection>

          {/* Consulting */}
          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="h-full">
              <div className="flex items-center mb-4">
                <BarChart3 className="text-orange-400 mr-2" size={20} />
                <h2 className="text-lg font-semibold">Consulting</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li>Financial systems improvement and optimization</li>
                <li>Business strategy and growth advisory</li>
                <li>Internal controls development</li>
                <li>Performance analysis and benchmarking</li>
                <li>Risk management and mitigation</li>
              </ul>
            </Card>
          </AnimatedSection>

          {/* Training */}
          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="h-full">
              <div className="flex items-center mb-4">
                <MonitorSmartphone className="text-orange-400 mr-2" size={20} />
                <h2 className="text-lg font-semibold">Training</h2>
              </div>
              <ul className="space-y-2 text-sm">
                <li>Financial literacy and capacity building</li>
                <li>Staff workshops and skill development</li>
                <li>Compliance training and best practices</li>
                <li>On-site coaching and mentoring</li>
                <li>Customized training programs</li>
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
