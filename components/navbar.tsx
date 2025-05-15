"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1e1b2e]/95 shadow-md py-2" : "bg-[#1e1b2e] py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={48}
              height={48}
              className="rounded-md bg-white p-1"
              priority
            />
            <span className="ml-2 font-semibold text-white text-sm sm:text-base">
              Primo <span className="text-orange-400">Ficial</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="text-white hover:text-orange-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/about-us" className="text-white hover:text-orange-400 transition-colors duration-300">
            About Us
          </Link>
          <Link href="/services" className="text-white hover:text-orange-400 transition-colors duration-300">
            Services
          </Link>
          <Link href="/internship" className="text-white hover:text-orange-400 transition-colors duration-300">
            Internship
          </Link>
          <Link href="/contact" className="text-white hover:text-orange-400 transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-[#252338]"
          onClick={(e) => {
            e.stopPropagation()
            setIsMenuOpen(!isMenuOpen)
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-[#1e1b2e] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-16`}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          <div className="w-full border-b border-gray-700 pb-4 mb-2 flex flex-col items-center">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={64}
              height={64}
              className="rounded-md bg-white p-1 mb-2"
              priority
            />
            <span className="text-xl font-semibold">
              Primo <span className="text-orange-400">Ficial</span> Partners
            </span>
          </div>

          <Link
            href="/"
            className="w-full text-white hover:text-orange-400 py-3 px-4 rounded-md hover:bg-[#252338] transition-colors duration-200 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="w-full text-white hover:text-orange-400 py-3 px-4 rounded-md hover:bg-[#252338] transition-colors duration-200 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="w-full text-white hover:text-orange-400 py-3 px-4 rounded-md hover:bg-[#252338] transition-colors duration-200 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/internship"
            className="w-full text-white hover:text-orange-400 py-3 px-4 rounded-md hover:bg-[#252338] transition-colors duration-200 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Internship
          </Link>
          <Link
            href="/contact"
            className="w-full text-white hover:text-orange-400 py-3 px-4 rounded-md hover:bg-[#252338] transition-colors duration-200 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="mt-6 pt-6 border-t border-gray-700 w-full text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
