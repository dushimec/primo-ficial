import { FileText, FileBarChart2, BarChart3, MonitorSmartphone } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function AlternateServicesList() {
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
                 <li>Bookkeeping and financial record maintenance</li>
                 <li>Financial statement preparation and analysis</li>
                 <li>Bank reconciliation and cash management</li>
                 <li>Payroll processing and compliance</li>
                 <li>Accounts payable and receivable management</li>
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
                 <li>Tax planning and strategy development</li>
                 <li>Tax return preparation and filing</li>
                 <li>VAT compliance, registration, and filing</li>
                 <li>Tax audit preparation and representation</li>
                 <li>International tax consulting and compliance</li>
               </ul>
             </Card>
           </AnimatedSection>

           {/* Advisory Services */}
           <AnimatedSection animation="fade-up" delay={300}>
             <Card className="h-full">
               <div className="flex items-center mb-4">
                 <BarChart3 className="text-orange-400 mr-2" size={20} />
                 <h2 className="text-lg font-semibold">Consulting</h2>
               </div>
               <ul className="space-y-2 text-sm">
                 <li>Business growth strategy and planning</li>
                 <li>Financial planning and analysis</li>
                 <li>Risk management and mitigation</li>
                 <li>Merger and acquisition support</li>
                 <li>Business valuation and due diligence</li>
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
                 <li>Accounting software implementation and training</li>
                 <li>Sage software setup and support</li>
                 <li>Xero ERP integration and configuration</li>
                 <li>QuickBooks setup and training</li>
                 <li>Customized software consulting and support</li>
               </ul>
             </Card>
           </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
