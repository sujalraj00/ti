"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageSquare, Calendar } from "lucide-react";
import { headerNavLinks } from "../data/navigation";
import { companyDetails } from "../data/company";
import { useScroll } from "../hooks/useScroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeMega, setActiveMega] = useState(false);
  const pathname = usePathname();
  const { isScrolled } = useScroll();

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
            ? "py-4 bg-dark-bg/90 backdrop-blur-md border-b border-gold-border"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group relative z-50">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors duration-300">
              TERRA INFRACON
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-warm-muted group-hover:text-warm-white transition-colors duration-300">
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
                    <button className="flex items-center space-x-1 font-sans text-sm tracking-wider uppercase text-warm-white hover:text-gold transition-colors duration-300">
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMega ? "rotate-185" : ""}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {activeMega && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-dark-surface border border-gold-border p-6 rounded-lg shadow-2xl backdrop-blur-xl"
                        >
                          <div className="grid grid-cols-1 gap-4">
                            <div className="text-[10px] uppercase tracking-wider text-gold font-bold border-b border-gold-border/20 pb-2">
                              Residential Portfolios
                            </div>
                            <div className="flex flex-col space-y-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="group flex flex-col p-2.5 rounded hover:bg-dark-surface-hover transition-colors"
                                >
                                  <span className="font-serif text-base text-warm-white group-hover:text-gold transition-colors">
                                    {child.label.split(" (")[0]}
                                  </span>
                                  <span className="text-[11px] text-warm-muted group-hover:text-warm-white/80 transition-colors">
                                    {child.label.includes("(") ? child.label.substring(child.label.indexOf("(")) : ""}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="border-t border-gold-border/20 pt-3 mt-1 flex justify-between items-center text-xs">
                              <span className="text-warm-muted">Ready to invest in Sohna?</span>
                              <Link href="/projects" className="text-gold font-bold hover:underline flex items-center space-x-1">
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
                  className="relative py-2 font-sans text-sm tracking-wider uppercase text-warm-white hover:text-gold transition-colors duration-300"
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span>{link.label}</span>
                  {/* Floating gold underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Schedule CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact?topic=visit"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-none border border-gold text-gold font-sans text-xs uppercase tracking-widest bg-transparent hover:bg-gold hover:text-dark-bg transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule a Visit</span>
            </Link>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-warm-white hover:text-gold transition-colors duration-300 relative z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-bg z-40 lg:hidden flex flex-col justify-center px-8"
          >
            {/* Background Blob decoration */}
            <div className="bg-blob top-1/4 left-1/4" />

            <nav className="flex flex-col space-y-6 text-left max-w-md mx-auto w-full relative z-10">
              <div className="text-[11px] uppercase tracking-[0.25em] text-gold font-bold mb-2">
                Navigation Menu
              </div>
              {headerNavLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col"
                >
                  {!link.children ? (
                    <Link
                      href={link.href}
                      className={`font-serif text-3xl md:text-4xl hover:text-gold transition-colors py-2 ${
                        pathname === link.href ? "text-gold" : "text-warm-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div className="flex flex-col space-y-2 py-2">
                      <span className="font-serif text-3xl md:text-4xl text-warm-muted uppercase tracking-wider">
                        {link.label}
                      </span>
                      <div className="pl-4 flex flex-col space-y-3 mt-2 border-l border-gold-border/30">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="font-sans text-sm uppercase tracking-widest text-warm-white hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Action Contacts in Mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-gold-border/20 flex flex-col space-y-4 text-xs font-sans uppercase tracking-widest text-warm-muted"
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
                  className="text-center bg-gold text-dark-bg py-3 font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-colors mt-2"
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
