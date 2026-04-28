import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function IndustrySection() {
  const industries = [
    {
      name: "Small & Medium Enterprises",
      image: "https://www.hyperlean.eu/wp-content/uploads/2024/12/AdobeStock_1036596319-scaled.jpeg",
      alt: "Rwandan small business owner managing finances"
    },
    {
      name: "Large Corporations",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgYjuxlGzqKpXCvppiyoaIqysjsZczPVGLw&s",
      alt: "Modern office building in Kigali, Rwanda"
    },
    {
      name: "Government Institutions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3T5yAzApTDNRU4_uTgkbXxlmCweu7vuvLw&s",
      alt: "Government administration building in Rwanda" 
    },
    {
      name: "Non-Governmental Organizations",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80",
      alt: "NGO community development project in Rwanda"
    },
    {
      name: "Education Sector",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
      alt: "School classroom in rural Rwanda"
    },
    {
      name: "Healthcare Sector",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      alt: "Health clinic providing services in Rwanda"
    }
  ]

  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Industries We Serve</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.name} animation="fade-up" delay={index * 100}>
              <Card className="h-full overflow-hidden group">
                <div className="relative aspect-video">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-semibold">{industry.name}</h3>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
