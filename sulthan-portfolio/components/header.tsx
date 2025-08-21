"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/components/footer";

const Header = ({ setAboutGlow }: { setAboutGlow?: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const mainContent = document.getElementById("main-content");
    const section = document.getElementById(sectionId);
    if (mainContent && section && mainContent.contains(section)) {
      // Scroll the main content area
      const sectionTop = section.offsetTop;
      mainContent.scrollTo({ top: sectionTop - 40, behavior: "smooth" });
      setActiveSection(sectionId);
      return;
    }
    // Fallback: scroll window
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md",
        isScrolled ? "shadow-md py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold font-mono gradient-text hover:opacity-90 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Sulthan Basha
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={
                  link.id === "about" && setAboutGlow
                    ? () => setAboutGlow(true)
                    : undefined
                }
                onMouseLeave={
                  link.id === "about" && setAboutGlow
                    ? () => setAboutGlow(false)
                    : undefined
                }
                className={`text-sm font-medium transition-all hover:text-primary ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-foreground/80 dark:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-border hover:bg-accent"
            asChild
          >
            <Link
              href="https://github.com/sulthan0001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-border hover:bg-accent"
            asChild
          >
            <Link
              href="https://www.linkedin.com/in/sulthan-basha-2b0946253"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a
              href="./Resume_Updated.docx"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={16} className="mr-2" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 md:hidden"
          >
            <nav className="container flex flex-col py-8 space-y-6">
              {navItems.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    onMouseEnter={
                      link.id === "about" && setAboutGlow
                        ? () => setAboutGlow(true)
                        : undefined
                    }
                    onMouseLeave={
                      link.id === "about" && setAboutGlow
                        ? () => setAboutGlow(false)
                        : undefined
                    }
                    className={`text-xl font-medium transition-all ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-foreground/80 dark:text-gray-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
