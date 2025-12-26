import Link from "next/link"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function MissionValues() {
  return (
    <div className="mb-12">
      <AnimatedSection className="text-center">
        <h2 className="text-xl font-semibold text-center mb-8">Our Mission & Values</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="text-center h-full">
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-300">
              At PRIMO FISCAL PARTNERS, our mission is to empower individuals and businesses to navigate the complexities of taxation with confidence and precision. We go beyond simple tax preparation, serving as a trusted partner dedicated to optimizing your financial outcomes and ensuring unwavering compliance with evolving tax laws and regulations.
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="text-center h-full">
            <h3 className="font-semibold mb-2">Who We Are</h3>
            <p className="text-sm text-gray-300">
              We are a team of highly qualified and experienced tax specialists, including Certified Public Accountants (CPAs), tax attorneys, and enrolled agents. Our professionals are experts in interpreting complex domestic and international tax legislation, leveraging deep knowledge and analytical skills to provide insightful, tailored solutions.
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <Card className="text-center h-full">
            <h3 className="font-semibold mb-2">Our Approach</h3>
            <p className="text-sm text-gray-300">
              We believe in a proactive, year-round approach to tax management. We take the time to understand your unique financial situation and long-term goals, enabling us to identify tax-saving opportunities and develop customized strategies that minimize your tax liabilities within the legal framework.
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <Card className="h-full">
            <h3 className="font-semibold mb-4 text-center">Key Services</h3>
            <ul className="text-sm text-gray-300 space-y-3">
              <li><strong>Tax Planning & Strategy:</strong> Developing effective strategies for current and future tax efficiency.</li>
              <li><strong>Compliance Management:</strong> Ensuring accurate and timely preparation and submission of all required tax returns and reports (e.g., Corporate Income Tax, VAT, Personal Income Tax).</li>
              <li><strong>Audit & Dispute Resolution:</strong> Representing clients before tax authorities to resolve inquiries and disputes.</li>
              <li><strong>Specialized Advisory:</strong> Expert guidance on international taxation, mergers and acquisitions, estate planning, and specific industry incentives like R&D tax reliefs.</li>
            </ul>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={500}>
          <Card className="text-center h-full">
            <p className="text-sm text-gray-300">
              We are committed to building a world built on the foundations of trust, transparency, and exceptional service. <Link href="/contact" className="text-orange-400 hover:underline">Visit our Contact Us page</Link> to schedule an initial consultation and discover how we can help you achieve your financial objectives.
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
