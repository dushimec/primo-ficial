import { FileText, FileBarChart2, BarChart3, MonitorSmartphone } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function AlternateServicesList() {
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
            <li>Bookkeeping and financial record maintenance</li>
            <li>Financial statement preparation</li>
            <li>Bank reconciliation</li>
            <li>Payroll processing</li>
            <li>Accounts payable and receivable management</li>
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
            <li>Tax planning and strategy</li>
            <li>Tax return preparation</li>
            <li>VAT compliance and filing</li>
            <li>Tax audit support</li>
            <li>International tax consulting</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Advisory Services */}
      <AnimatedSection animation="fade-up" delay={300}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <BarChart3 className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Advisory Services</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Business growth strategy</li>
            <li>Financial planning and analysis</li>
            <li>Risk management</li>
            <li>Merger and acquisition support</li>
            <li>Business valuation</li>
          </ul>
        </Card>
      </AnimatedSection>

      {/* Software Solutions */}
      <AnimatedSection animation="fade-up" delay={400}>
        <Card className="h-full">
          <div className="flex items-center mb-4">
            <MonitorSmartphone className="text-orange-400 mr-2" size={20} />
            <h2 className="text-lg font-semibold">Software Solutions</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li>Accounting software implementation and training</li>
            <li>Sage software setup and support</li>
            <li>Xero ERP integration</li>
            <li>QuickBooks configuration</li>
            <li>Custom software consulting</li>
          </ul>
        </Card>
      </AnimatedSection>
    </div>
  )
}
