"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/utils"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Navigation items with paths and labels
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
  ]

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

  // Prevent scrolling and blur page content when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.classList.add("mobile-menu-open")
    } else {
      document.body.style.overflow = "auto"
      document.body.classList.remove("mobile-menu-open")
    }
    return () => {
      document.body.style.overflow = "auto"
      document.body.classList.remove("mobile-menu-open")
    }
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#1e1b2e] shadow-lg shadow-black/10 py-2 md:bg-[#1e1b2e]/95 md:backdrop-blur-xl"
          : "bg-[#1e1b2e] py-4 md:bg-[#1e1b2e]/80 md:backdrop-blur-md"
      } md:backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} Logo`}
                width={48}
                height={48}
                className="relative rounded-full bg-white p-1 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="ml-3 font-bold text-white text-sm sm:text-base tracking-tight">
              Primo <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Fiscal</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group",
                isActive(item.href)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              <span className="relative z-10">{item.label}</span>
              {isActive(item.href) && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg border border-orange-500/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                  </div>
                </div>
              )}
              {!isActive(item.href) && (
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
              )}
              {isActive(item.href) && (
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 blur-sm"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative text-white focus:outline-none p-2 rounded-lg hover:bg-[#252338] transition-all duration-300 z-50"
          onClick={(e) => {
            e.stopPropagation()
            setIsMenuOpen(!isMenuOpen)
          }}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
            ></div>
          </div>
        </button>
      </div>

      {/* Backdrop overlay for mobile menu - blurs underlying content */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-orange-500/10 to-amber-500/10 backdrop-blur-md z-40 transition-opacity duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-[#1e1b2e]/95 z-50 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700/50">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full blur opacity-50"></div>
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  width={56}
                  height={56}
                  className="relative rounded-full bg-white p-1"
                  priority
                />
              </div>
              <div className="ml-3">
                <span className="text-lg font-bold text-white block">Primo</span>
                <span className="text-sm text-orange-400">Fiscal Partners</span>
              </div>
            </div>
            <button
              className="text-white hover:text-orange-400 p-2 rounded-lg transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex-1 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "w-full text-left py-4 px-5 rounded-xl transition-all duration-300 group relative overflow-hidden",
                  isActive(item.href)
                    ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#252338]"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium relative z-10">{item.label}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                    isActive(item.href)
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-[#252338]/0 group-hover:bg-[#252338] text-gray-500 group-hover:text-orange-400"
                  )}>
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {isActive(item.href) && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-400 rounded-l"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Footer */}
          <div className="pt-6 mt-auto border-t border-gray-700/50">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p className="text-center text-xs text-gray-600 mt-1">
              Your trusted financial partner
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
