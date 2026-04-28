import { Lightbulb, Search, PenTool, Cog, Headphones } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function HowWeWork() {
  const steps = [
    {
      step: 1,
      icon: <Lightbulb size={24} />,
      title: "Initial Consultation",
      description: "We meet to understand your business needs, goals, and financial challenges."
    },
    {
      step: 2,
      icon: <Search size={24} />,
      title: "Needs Assessment",
      description: "We analyze your current financial systems, compliance status, and growth objectives."
    },
    {
      step: 3,
      icon: <PenTool size={24} />,
      title: "Custom Solution Design",
      description: "We create a tailored plan addressing your specific accounting, tax, and advisory needs."
    },
    {
      step: 4,
      icon: <Cog size={24} />,
      title: "Implementation",
      description: "We execute the plan with precision, ensuring minimal disruption to your operations."
    },
    {
      step: 5,
      icon: <Headphones size={24} />,
      title: "Ongoing Support",
      description: "We provide continuous monitoring, updates, and strategic advice to ensure long-term success."
    }
  ]

  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">How We Work</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.step} animation="fade-up" delay={index * 100}>
              <Card className="h-full text-center p-8">
                <div className="w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-orange-400">{step.icon}</div>
                </div>
                <div className="w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
