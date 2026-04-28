import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden section-spacing">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://pbs.twimg.com/media/D0Si5Q_X0AAejyZ.jpg"
          alt="Modern office building representing professional financial services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white layout-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Ready to Transform Your Financial Operations?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
          Partner with Primo Fiscal Partners today and take the first step toward financial clarity, compliance, and sustainable growth.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button href="/contact" variant="primary" className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-4">
            Contact Us Today
          </Button>
          <Button href="/services" variant="secondary" className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-4">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
