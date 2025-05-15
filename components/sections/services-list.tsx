import { FileText, FileBarChart2, BarChart3, MonitorSmartphone, Building2, PiggyBank } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Accounting Services */}
      <AnimatedSection animation="fade-up" delay={100}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <FileText className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Accounting Services</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Monthly bookkeeping and reconciliation</li>
            <li>Financial statement preparation</li>
            <li>Payroll processing and management</li>
            <li>Accounts payable and receivable</li>
            <li>Cash flow management</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Tax Services */}
      <AnimatedSection animation="fade-up" delay={200}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <FileBarChart2 className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Tax Services</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Complete tax planning and compliance</li>
            <li>Personal tax planning and returns</li>
            <li>VAT registration and filing</li>
            <li>Tax credit representation</li>
            <li>International tax consulting</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Business Advisory */}
      <AnimatedSection animation="fade-up" delay={300}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <BarChart3 className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Business Advisory</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Business strategy development</li>
            <li>Financial planning and analysis</li>
            <li>Budgeting and forecasting</li>
            <li>Risk assessment and management</li>
            <li>Performance optimization</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Digital Solutions */}
      <AnimatedSection animation="fade-up" delay={400}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <MonitorSmartphone className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Digital Solutions</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Accounting software implementation</li>
            <li>Digital transformation consulting</li>
            <li>Cloud accounting solutions</li>
            <li>System integration services</li>
            <li>Technology training and support</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Business Formation */}
      <AnimatedSection animation="fade-up" delay={500}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <Building2 className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Business Formation</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Company registration and setup</li>
            <li>Business structure consulting</li>
            <li>Regulatory compliance</li>
            <li>License and permit assistance</li>
            <li>Corporate governance advisory</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Financial Planning */}
      <AnimatedSection animation="fade-up" delay={600}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <PiggyBank className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Financial Planning</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Investment strategy development</li>
            <li>Retirement planning</li>
            <li>Estate planning</li>
            <li>Wealth management</li>
            <li>Succession planning</li>
          </ul>
        </Card>
      </AnimatedSection>
    </div>
  )
}
