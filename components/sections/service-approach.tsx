import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function ServiceApproach() {
  return (
    <AnimatedSection animation="fade-up">
      <Card>
        <h2 className="text-xl font-semibold text-center mb-8">Our Service Approach</h2>

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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Personal Touch</h3>
              <p className="text-sm text-gray-300">Dedicated account manager for your business</p>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm text-gray-300">Meeting deadlines with precision</p>
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
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-300">Highest standards of service delivery</p>
            </div>
          </AnimatedSection>
        </div>
      </Card>
    </AnimatedSection>
  )
}
