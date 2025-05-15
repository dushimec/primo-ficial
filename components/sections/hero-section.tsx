import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <AnimatedSection animation="fade-right" className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Your Trusted Partner in <br />
            <span className="text-orange-400">Financial Excellence</span>
          </h1>
          <p className="mb-6 text-sm max-w-md">
            We provide comprehensive accounting, tax, and advisory services to help your business thrive in today's
            dynamic market.
          </p>
          <div className="flex space-x-4">
            <Button href="/services" variant="primary">
              Our Services
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="fade-left" className="md:w-1/2">
          <Image
            src="https://upraise.io/wp-content/uploads/2019/11/How-To-Make-The-Most-Of-Business-Meetings-Banner.png"
            alt="Primo Ficial Partners business meeting"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </AnimatedSection>
      </div>
    </section>
  )
}
