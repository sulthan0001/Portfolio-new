"use client"

import { motion } from "framer-motion"
import {
  Home,
  User,
  BookOpen,
  Briefcase,
  Layers,
  Mail
} from "lucide-react"
import { useState, useEffect } from "react"

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: BookOpen },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

const Footer = ({ variant, onAboutHover }: { variant?: 'vertical', onAboutHover?: (hovered: boolean) => void }) => {
  const currentYear = new Date().getFullYear()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sectionMap = navItems.map(item => ({ id: item.id, section: item.id }))
      const scrollPosition = window.scrollY + 100
      let found = false
      for (const { id, section } of sectionMap) {
        const element = document.getElementById(id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            found = true
            break
          }
        }
      }
      if (!found && window.scrollY < 100) setActiveSection("home")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const mainContent = document.getElementById('main-content');
    const section = document.getElementById(sectionId);
    if (mainContent && section && mainContent.contains(section)) {
      // Scroll the main content area
      const sectionTop = section.offsetTop;
      mainContent.scrollTo({ top: sectionTop - 40, behavior: 'smooth' });
      setActiveSection(sectionId);
      return;
    }
    // Fallback: scroll window
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("home")
      return
    }
    if (section) {
      const offsetTop = section.offsetTop
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  if (variant === 'vertical') {
    // Render vertical nav bar
    return (
      <nav className="flex flex-col items-center justify-center h-full py-8 px-2 bg-black/70 rounded-3xl shadow-xl gap-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          const isAbout = item.id === 'about'
          return (
            <div key={item.id} className="relative flex items-center group">
              <button
                aria-label={item.label}
                onClick={() => scrollToSection(item.id)}
                className={`mb-2 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 text-xl ${
                  isActive
                    ? "bg-primary/80 text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-primary/30"
                }`}
                onMouseEnter={isAbout && onAboutHover ? () => onAboutHover(true) : undefined}
                onMouseLeave={isAbout && onAboutHover ? () => onAboutHover(false) : undefined}
              >
                <Icon className="w-6 h-6" />
              </button>
              {/* Option label on hover */}
              <span
                className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-green-500 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-50"
              >
                {item.label}
              </span>
            </div>
          )
        })}
      </nav>
    )
  }

  return (
    <>
      {/* Floating Footer Menu */}
      <nav className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 w-full max-w-md md:max-w-xl lg:max-w-2xl px-2">
        <ul className="flex items-center justify-center gap-2 px-2 py-2 md:px-4 md:py-2 rounded-2xl bg-background/80 shadow-lg backdrop-blur-md border border-border text-base md:text-lg"
            style={{
              height: '56px',
              minHeight: '56px',
              ...(typeof window !== 'undefined' && window.innerWidth < 768 ? { bottom: '2vw' } : {})
            }}
        >
          {navItems.map((item) => {
            const Icon = item.icon
            // Home is only active if activeSection is 'home', others only if their id matches
            const isActive = activeSection === item.id
            return (
              <li key={item.id} className="flex-1">
                <button
                  aria-label={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex flex-col items-center justify-center w-full h-full p-2 md:p-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary/80 text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-primary/30"
                  }`}
                >
                  <Icon className="w-7 h-7 md:w-6 md:h-6 mb-0.5" />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* Static Footer Info */}
      <footer className="py-8 border-t border-border bg-transparent relative z-10 mt-24">
        <div className="container flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-0"
            >
              <p className="text-muted-foreground text-sm">© {currentYear} Nagendra Kumar. All rights reserved.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-sm">Built with Next.js, React, and Tailwind CSS</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
