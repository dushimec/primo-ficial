import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, InstagramIcon } from "lucide-react"
import { siteConfig } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-[#1e1b2e] text-white mt-auto">
      <div className="layout-container py-12">
        {/* Top Section: Brand Identity */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-4 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={64}
              height={64}
              priority
            />
          </Link>
          <h1 className="text-2xl font-bold mb-1">
            Primo <span className="text-orange-400">Fiscal</span> Partners
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Trusted partner in accounting, tax & financial growth
          </p>
        </div>

        {/* Middle Section: Info Columns */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-10">
          {/* Location */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Location</h3>
            <p className="text-gray-300 whitespace-pre-line">
              YYussa City Center
              (Former Makuza Peace Plazza)
              F3-37
            </p>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Contact</h3>
            <p className="text-gray-300">
              <a href="tel:+250788877775" className="hover:text-white transition-colors">
                +250 788 877 775
              </a>
            </p>
          </div>
          {/* Email */}
          <div>
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-300">
              <a href="mailto:primofiscalpartners@gmail.com" className="hover:text-white transition-colors">
                primofiscalpartners@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Section */}
        <div className="flex justify-center space-x-4 mb-10">
          <Link
            href="#"
            aria-label="Facebook"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/primo_fiscal?igsh=cHBzOGt3b3JrNDNm"
            aria-label="Instagram"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <InstagramIcon size={20} />
          </Link>
        </div>

        {/* Bottom Bar: Legal */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
