"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  Calendar,
  Sun,
  Moon,
} from "lucide-react";

import { headerNavLinks } from "../data/navigation";
import { companyDetails } from "../data/company";
import { useScroll } from "../hooks/useScroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const pathname = usePathname();
  const { isScrolled } = useScroll();

  /* =========================================================
     THEME INITIALIZATION
  ========================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const initialTheme: "dark" | "light" =
      savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  /* =========================================================
     THEME TOGGLE
  ========================================================= */

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  /* =========================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ========================================================= */

  useEffect(() => {
    setIsOpen(false);
    setActiveMega(false);
  }, [pathname]);

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  /* =========================================================
     LOGO ANIMATION
  ========================================================= */

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      filter: "blur(8px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          h-[92px]
          transition-all
          duration-500
          overflow-visible
        "
      >
        {/* Navbar background */}
        <div
          className={`
            absolute
            inset-0
            -z-10
            w-full
            h-full
            transition-all
            duration-500
            ${isScrolled
              ? "bg-dark-bg/85 backdrop-blur-xl border-b border-gold-border/30"
              : "bg-transparent"
            }
          `}
        />

        {/* Main container */}
        <div
          className="
            relative
            h-full
            w-full
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            overflow-visible
          "
        >
          <div className="h-full w-full flex items-center overflow-visible">

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              aria-label="Terra Infracon Home"
              className="
                relative
                z-50
                flex
                items-center
                flex-shrink-0
                overflow-visible
              "
            >
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="
                  relative
                  flex
                  items-center
                  overflow-visible
                "
              >
                {/* Logo glow */}
                <div
                  className="
                    absolute
                    -inset-4
                    rounded-2xl
                    bg-gold/5
                    blur-2xl
                    pointer-events-none
                  "
                />

                <Image
                  src="/TerraInfraconLogo.png"
                  alt="Terra Infracon"
                  width={270}
                  height={62}
                  priority
                  className={`
                    relative
                    block
                    h-auto
                    object-contain
                    origin-left
                    transition-all
                    duration-500
                    ease-out
                    drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]
                    ${isScrolled
                      ? "w-[180px] sm:w-[200px] md:w-[220px] lg:w-[230px]"
                      : "w-[190px] sm:w-[215px] md:w-[235px] lg:w-[250px]"
                    }
                  `}
                />
              </motion.div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden lg:flex items-center gap-8 ml-auto h-full">
              {headerNavLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                /* =================================================
                    DROPDOWN LINK
                ================================================== */

                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="
                        relative
                        h-full
                        flex
                        items-center
                      "
                      onMouseEnter={() => setActiveMega(true)}
                      onMouseLeave={() => setActiveMega(false)}
                    >
                      <button
                        type="button"
                        className="
                          flex
                          items-center
                          gap-1
                          py-2
                          font-sans
                          text-xs
                          tracking-widest
                          uppercase
                          text-warm-white
                          hover:text-gold
                          transition-colors
                          duration-300
                          cursor-pointer
                        "
                      >
                        <span>{link.label}</span>

                        <ChevronDown
                          className={`
                            w-3.5
                            h-3.5
                            transition-transform
                            duration-500
                            ${activeMega
                              ? "rotate-180 text-gold"
                              : ""
                            }
                          `}
                        />
                      </button>

                      {/* Mega menu */}
                      <AnimatePresence>
                        {activeMega && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                            }}
                            transition={{
                              duration: 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="
                              absolute
                              left-1/2
                              -translate-x-1/2
                              top-full
                              mt-1
                              w-[480px]
                              bg-dark-surface/95
                              border
                              border-gold-border
                              p-6
                              shadow-2xl
                              backdrop-blur-xl
                            "
                          >
                            <div className="flex flex-col gap-4">

                              {/* Title */}
                              <div
                                className="
                                  text-[10px]
                                  uppercase
                                  tracking-widest
                                  text-gold
                                  font-bold
                                  border-b
                                  border-gold-border/20
                                  pb-2
                                "
                              >
                                Residential Portfolios
                              </div>

                              {/* Projects */}
                              <div className="flex flex-col gap-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="
                                      group
                                      flex
                                      flex-col
                                      p-3
                                      hover:bg-dark-surface-hover/80
                                      transition-colors
                                      duration-300
                                    "
                                  >
                                    <span
                                      className="
                                        font-serif
                                        text-base
                                        text-warm-white
                                        group-hover:text-gold
                                        transition-colors
                                        duration-300
                                      "
                                    >
                                      {child.label.split(" (")[0]}
                                    </span>

                                    {child.label.includes("(") && (
                                      <span
                                        className="
                                          text-[10px]
                                          text-warm-muted
                                          group-hover:text-warm-white/80
                                          transition-colors
                                          duration-300
                                        "
                                      >
                                        {child.label.substring(
                                          child.label.indexOf("(")
                                        )}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>

                              {/* Footer */}
                              <div
                                className="
                                  border-t
                                  border-gold-border/20
                                  pt-3
                                  flex
                                  justify-between
                                  items-center
                                "
                              >
                                <span className="text-xs text-warm-muted font-light">
                                  Ready to invest in Sohna?
                                </span>

                                <Link
                                  href="/projects"
                                  className="
                                    text-gold
                                    font-bold
                                    hover:text-gold-light
                                    transition-colors
                                    flex
                                    items-center
                                    gap-1
                                    uppercase
                                    tracking-wider
                                    text-[10px]
                                  "
                                >
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

                /* =================================================
                    NORMAL LINK
                ================================================== */

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="
                      relative
                      h-full
                      flex
                      items-center
                      py-2
                      font-sans
                      text-xs
                      tracking-widest
                      uppercase
                      text-warm-white
                      hover:text-gold
                      transition-colors
                      duration-500
                    "
                  >
                    <span>{link.label}</span>

                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="
                          absolute
                          bottom-[18px]
                          left-0
                          right-0
                          h-[1.5px]
                          bg-gold
                        "
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================== */}

            <div className="hidden lg:flex items-center gap-6 ml-8 h-full">

              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  border
                  border-gold-border
                  hover:border-gold
                  text-gold
                  hover:text-gold-light
                  transition-colors
                  duration-300
                  cursor-pointer
                "
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Schedule */}
              <Link
                href="/contact?topic=visit"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  h-12
                  px-5
                  border
                  border-gold
                  text-gold
                  font-sans
                  text-[11px]
                  uppercase
                  tracking-widest
                  bg-transparent
                  hover:bg-gold
                  hover:text-dark-bg
                  transition-all
                  duration-500
                "
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a Visit</span>
              </Link>
            </div>

            {/* =================================================
                MOBILE CONTROLS
            ================================================== */}

            <div
              className="
                lg:hidden
                flex
                items-center
                gap-3
                ml-auto
                relative
                z-50
              "
            >
              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  border
                  border-gold-border
                  text-gold
                  hover:text-gold-light
                  transition-colors
                  duration-300
                "
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Menu */}
              <button
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  text-warm-white
                  hover:text-gold
                  transition-colors
                  duration-300
                "
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-40
              lg:hidden
              flex
              flex-col
              justify-center
              px-8
              bg-dark-bg/95
              backdrop-blur-md
            "
          >
            {/* Decorative blob */}
            <div className="bg-blob top-1/4 left-1/4" />

            <nav className="relative z-10 flex flex-col space-y-6 max-w-md mx-auto w-full">

              {/* Heading */}
              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-gold
                  font-bold
                  mb-2
                "
              >
                Navigation Menu
              </div>

              {/* Links */}
              {headerNavLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col"
                >
                  {!link.children ? (
                    <Link
                      href={link.href}
                      className={`
                        font-serif
                        text-3xl
                        hover:text-gold
                        transition-colors
                        py-1
                        ${pathname === link.href
                          ? "text-gold"
                          : "text-warm-white"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div className="flex flex-col gap-2 py-1">

                      <span
                        className="
                          font-serif
                          text-xl
                          text-warm-muted
                          uppercase
                          tracking-widest
                        "
                      >
                        {link.label}
                      </span>

                      <div
                        className="
                          pl-4
                          flex
                          flex-col
                          gap-3
                          mt-1
                          border-l
                          border-gold-border/35
                        "
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="
                              font-sans
                              text-xs
                              uppercase
                              tracking-widest
                              text-warm-white
                              hover:text-gold
                              transition-colors
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile contact section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
                className="
                  pt-6
                  border-t
                  border-gold-border/20
                  flex
                  flex-col
                  gap-4
                  text-[10px]
                  font-sans
                  uppercase
                  tracking-widest
                  text-warm-muted
                "
              >
                {/* Phone */}
                <div className="flex items-center gap-3 text-warm-white">
                  <Phone className="w-4 h-4 text-gold" />

                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="hover:text-gold transition-colors"
                  >
                    {companyDetails.phone}
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 text-warm-white">
                  <MessageSquare className="w-4 h-4 text-gold" />

                  <a
                    href={`https://wa.me/${companyDetails.whatsapp
                      .replace(/\+/g, "")
                      .replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    WhatsApp Enquiries
                  </a>
                </div>

                {/* Schedule */}
                <Link
                  href="/contact?topic=visit"
                  className="
                    text-center
                    bg-gold
                    text-dark-bg
                    py-3.5
                    font-bold
                    text-xs
                    uppercase
                    tracking-widest
                    hover:bg-gold-light
                    transition-colors
                    mt-2
                  "
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