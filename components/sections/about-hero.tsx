import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { PageHeader } from "@/components/ui/page-header"

export function AboutHero() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <PageHeader title="About Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2022/06/01/a-view-of-m-peace-plaza-popularly-known-as-kwa-makuza-was-established-in-2015.since-then-the-leading-commercial-building-has-been-the-one-stop-shop-destination.-courtesy.jpg"
                alt="Modern office building in Kigali, Rwanda"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-base md:text-lg mb-6 text-gray-300 leading-relaxed">
              Primo Fiscal Partners is a Rwanda based accounting and tax advisory firm dedicated to helping organizations achieve financial clarity, compliance, and operational efficiency.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We support organizations of all sizes from small and medium enterprises to large corporations and public institutions—in managing their financial and tax responsibilities with confidence. Our services include bookkeeping, financial reporting, tax advisory, audit preparation, and business consulting. We help clients remain compliant with regulations while improving operational efficiency and decision-making.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
