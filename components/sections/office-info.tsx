import { MapPin, Phone, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"

export function OfficeInfo() {
  return (
    <AnimatedSection animation="fade-left">
      <div className="space-y-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Office Location</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-400/20 p-2 rounded-full mr-3 mt-1">
                <MapPin className="text-orange-400" size={16} />
              </div>
              <div>
                <p className="text-sm">
                 YYussa City Center
                  <br />
                  (Former Makuza Pease Plazza)
                  <br />
                  F2-37
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-400/20 p-2 rounded-full mr-3 mt-1">
                <Phone className="text-orange-400" size={16} />
              </div>
              <div>
                <p className="text-sm">
                  +252 789 877 775
                  <br />
                  +252 789 500 455
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-400/20 p-2 rounded-full mr-3 mt-1">
                <Mail className="text-orange-400" size={16} />
              </div>
              <div>
                <p className="text-sm">primoficial.partner@gmail.com</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Monday - Friday</span>
              <span className="text-sm text-orange-400">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Saturday</span>
              <span className="text-sm text-orange-400">9:00 AM - 1:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Sunday</span>
              <span className="text-sm text-orange-400">Closed</span>
            </div>
          </div>
        </Card>
      </div>
    </AnimatedSection>
  )
}
