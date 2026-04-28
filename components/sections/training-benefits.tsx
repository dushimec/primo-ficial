import { GraduationCap, Users, FileCode, Award } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardIcon, CardTitle, CardContent } from "@/components/ui/card"

export function TrainingBenefits() {
  return (
    <section className="section-spacing">
      <div className="layout-container">
        <AnimatedSection className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Choose Our Training Program?</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="text-center h-full">
              <CardIcon>
                <GraduationCap size={28} />
              </CardIcon>
              <CardTitle>Practical Experience</CardTitle>
              <CardContent>Hands-on experience with real-world financial scenarios</CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="text-center h-full">
              <CardIcon>
                <Users size={28} />
              </CardIcon>
              <CardTitle>Expert Mentorship</CardTitle>
              <CardContent>Work directly with certified professionals and industry experts</CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="text-center h-full">
              <CardIcon>
                <FileCode size={28} />
              </CardIcon>
              <CardTitle>Real Projects</CardTitle>
              <CardContent>Work on actual client projects and case studies</CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="text-center h-full">
              <CardIcon>
                <Award size={28} />
              </CardIcon>
              <CardTitle>Professional Development</CardTitle>
              <CardContent>Build skills and knowledge for career advancement</CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
