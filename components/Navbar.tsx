"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageSquare, Calendar, Sun, Moon } from "lucide-react";
import { headerNavLinks } from "../data/navigation";
import { companyDetails } from "../data/company";
import { useScroll } from "../hooks/useScroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();
  const { isScrolled } = useScroll();

  // Initialize theme from local storage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  // Close drawer and mega menu on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveMega(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 glass-nav"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group relative z-50">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors duration-500">
              TERRA INFRACON
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-warm-muted group-hover:text-warm-white transition-colors duration-500">
              Crafting Dream Homes
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {headerNavLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => setActiveMega(true)}
                    onMouseLeave={() => setActiveMega(false)}
                  >
                    <button className="flex items-center space-x-1 font-sans text-xs tracking-widest uppercase text-warm-white hover:text-gold transition-colors duration-300 cursor-pointer">
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${activeMega ? "rotate-180 text-gold" : ""}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {activeMega && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-dark-surface/95 border border-gold-border p-6 rounded-none shadow-2xl backdrop-blur-xl"
                        >
                          <div className="grid grid-cols-1 gap-4">
                            <div className="text-[10px] uppercase tracking-widest text-gold font-bold border-b border-gold-border/20 pb-2">
                              Residential Portfolios
                            </div>
                            <div className="flex flex-col space-y-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group flex flex-col p-2.5 hover:bg-dark-surface-hover/80 transition-colors duration-300"
                                >
                                  <span className="font-serif text-base text-warm-white group-hover:text-gold transition-colors duration-300">
                                    {child.label.split(" (")[0]}
                                  </span>
                                  <span className="text-[10px] text-warm-muted group-hover:text-warm-white/80 transition-colors duration-300">
                                    {child.label.includes("(") ? child.label.substring(child.label.indexOf("(")) : ""}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="border-t border-gold-border/20 pt-3 mt-1 flex justify-between items-center text-xs">
                              <span className="text-warm-muted font-light">Ready to invest in Sohna?</span>
                              <Link href="/projects" className="text-gold font-bold hover:text-gold-light transition-colors flex items-center space-x-1 uppercase tracking-wider text-[10px]">
                                <span>View Directory</span>
                                <span>→</span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 font-sans text-xs tracking-widest uppercase text-warm-white hover:text-gold transition-colors duration-500"
                >
                  <span>{link.label}</span>
                  {/* Floating gold underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Schedule CTA & Theme Switcher */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-gold-border hover:border-gold text-gold hover:text-gold-light transition-colors duration-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <Link
              href="/contact?topic=visit"
              className="inline-flex items-center space-x-2 px-5 py-2.5 border border-gold text-gold font-sans text-[11px] uppercase tracking-widest bg-transparent hover:bg-gold hover:text-dark-bg transition-all duration-500"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule a Visit</span>
            </Link>
          </div>

          {/* Mobile Header Toolbar (Hamburger & Theme Toggle) */}
          <div className="lg:hidden flex items-center space-x-4 relative z-50">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-gold-border text-gold hover:text-gold-light transition-colors duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 text-warm-white hover:text-gold transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-md z-40 lg:hidden flex flex-col justify-center px-8"
          >
            {/* Background Blob decoration */}
            <div className="bg-blob top-1/4 left-1/4" />

            <nav className="flex flex-col space-y-6 text-left max-w-md mx-auto w-full relative z-10">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2">
                Navigation Menu
              </div>
              {headerNavLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  {!link.children ? (
                    <Link
                      href={link.href}
                      className={`font-serif text-3xl hover:text-gold transition-colors py-1 ${
                        pathname === link.href ? "text-gold" : "text-warm-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div className="flex flex-col space-y-2 py-1">
                      <span className="font-serif text-xl text-warm-muted uppercase tracking-widest">
                        {link.label}
                      </span>
                      <div className="pl-4 flex flex-col space-y-3 mt-1 border-l border-gold-border/35">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="font-sans text-xs uppercase tracking-widest text-warm-white hover:text-gold transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Contacts in Mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-gold-border/20 flex flex-col space-y-4 text-[10px] font-sans uppercase tracking-widest text-warm-muted"
              >
                <div className="flex items-center space-x-3 text-warm-white">
                  <Phone className="w-4 h-4 text-gold" />
                  <a href={`tel:${companyDetails.phone}`} className="hover:text-gold transition-colors">
                    {companyDetails.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-warm-white">
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <a
                    href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    WhatsApp Enquiries
                  </a>
                </div>
                <Link
                  href="/contact?topic=visit"
                  className="text-center bg-gold text-dark-bg py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-colors mt-2"
                >
                  Schedule A Visit
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
