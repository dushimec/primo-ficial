import { AnimatedSection } from "@/components/ui/animated-section"

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const titleParts = title.split(" ")
  const lastWord = titleParts.pop()
  const firstPart = titleParts.join(" ")

  return (
    <AnimatedSection className="text-center mb-12">
      <h1 className="text-2xl font-bold text-center">
        {firstPart} <span className="text-orange-400">{lastWord}</span>
      </h1>
      {description && <p className="text-center text-sm mt-2 max-w-2xl mx-auto">{description}</p>}
    </AnimatedSection>
  )
}
