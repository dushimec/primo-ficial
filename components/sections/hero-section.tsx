import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Rwanda business professionals in strategy meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content container - centered with flexbox */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 layout-container">
        <AnimatedSection animation="fade-right" className="md:w-1/2 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Your Trusted Partner in <br />
            <span className="text-orange-400">Accounting, Tax & Financial Growth</span>
          </h1>
          <p className="mb-8 text-base md:text-lg max-w-md text-gray-200">
            Primo Fiscal Partners supports businesses across Rwanda with reliable accounting, tax compliance, and financial advisory services that drive clarity and sustainable growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" className="bg-orange-500 hover:bg-orange-600 text-white">
              Contact Us
            </Button>
            <Button href="/services" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              Our Services
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" className="md:w-1/2 w-full">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-lg mx-auto md:mx-0">
            <Image
              src="https://www.primofiscalpartners.rw/logo.png"
              alt="Primo Fiscal Partners logo"
              width={500}
              height={400}
              className="w-full h-auto object-contain bg-white/5 p-8"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
