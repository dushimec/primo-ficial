import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PageHeader } from "@/components/ui/page-header"

export function AboutHero() {
  return (
    <>
      <PageHeader title="About Us" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <AnimatedSection animation="fade-right">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqk7HabLFeP3kAgTtHa3gc1I_tuERFsbDC2g&s"
            alt="Office Building"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </AnimatedSection>
        <AnimatedSection animation="fade-left">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-sm mb-4">
            Founded in 2025, Primo Fiscal Partners has grown from a small consulting firm to a leading financial
            services provider in Somalia. Our journey began with a vision to transform how businesses approach financial
            management.
          </p>
          <p className="text-sm">
            Today, we serve hundreds of clients across Rwanda, providing comprehensive financial and tax services
            that help businesses thrive in our ever-evolving economic landscape.
          </p>
        </AnimatedSection>
      </div>
    </>
  )
}
