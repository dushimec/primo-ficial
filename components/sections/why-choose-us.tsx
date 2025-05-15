import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function WhyChooseUs() {
  return (
    <Card className="mb-12">
      <h2 className="text-xl font-semibold text-center mb-8">Why Choose Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <AnimatedSection animation="fade-up" delay={100}>
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <div className="bg-orange-400/20 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-sm text-gray-300">
              Our certified professionals bring years of experience and expertise to every project.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <div className="bg-orange-400/20 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">Tailored Solutions</h3>
            <p className="text-sm text-gray-300">
              We customize our services to meet your specific business needs and goals.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#1e1b2e] p-2 rounded-full">
                <div className="bg-orange-400/20 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">Proven Track Record</h3>
            <p className="text-sm text-gray-300">
              Our success stories span from small businesses to large enterprises.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </Card>
  )
}
