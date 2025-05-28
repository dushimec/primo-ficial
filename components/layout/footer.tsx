import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { siteConfig } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-[#1e1b2e] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <Link href="/" className="mb-6 transition-transform duration-300 hover:scale-110 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} Logo`}
            width={64}
            height={64}
            className=" p-1"
            priority
          />
          <span className="mt-2 text-base font-semibold">
            Primo <span className="text-orange-400">Fiscal</span> Partners
          </span>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center sm:items-start md:items-center">
            <h3 className="font-medium mb-2">Location</h3>
            <p className="text-center sm:text-left md:text-center text-sm">
              YYussa City Center
              <br />
              (Former Makuza Peace
              <br />
              Plazza)
              <br />
              F2-37
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-medium mb-2">Contact</h3>
            <p className="text-center text-sm">
              +252 789 877 775
              <br />
              +252 788 595 456
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end md:items-center">
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-center sm:text-right md:text-center text-sm">primoficialpartners@gmail.com</p>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <Link
            href="#"
            aria-label="Facebook"
            className="text-white hover:text-orange-400 transition-colors duration-300"
          >
            <Facebook size={18} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="text-white hover:text-orange-400 transition-colors duration-300"
          >
            <Twitter size={18} />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="text-white hover:text-orange-400 transition-colors duration-300"
          >
            <Linkedin size={18} />
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
