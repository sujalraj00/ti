
"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { companyDetails } from "../data/company";
import { Button } from "../components/ui/Button";
import { TextReveal } from "../components/ui/TextReveal";
import { Magnetic } from "../components/ui/Magnetic";
import { SampleStar, SampleDisclaimer } from "../components/SampleMark";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;

      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay failed:", err);
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  /*
   * Logo animation
   *
   * The logo is no longer scaled.
   * Its position is controlled by the shared hero container below.
   */
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
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-dark-bg select-none">
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================= */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1.5 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/terra-elegance/homepage-banner.png"
          className="w-full h-full object-cover"
        >
          <source
            src="/terra-elegance/cover-video.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
      <SampleStar className="top-4 right-4 md:top-6 md:right-8 z-20" />

      {/* =========================================================
          CINEMATIC GRADIENT OVERLAYS
      ========================================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark-bg via-dark-bg/20 to-transparent" />

      {/* =========================================================
          LOGO
          
          IMPORTANT:
          This uses the EXACT SAME container and padding as
          the hero content below, so the left edge of the logo
          aligns perfectly with the left edge of the text.
      ========================================================= */}
      <div className="absolute top-5 left-0 right-0 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="relative inline-block pointer-events-auto"
          >
            {/* Soft ambient glow */}
            <div className="absolute -inset-4 bg-gold/5 rounded-2xl blur-2xl pointer-events-none" />

            {/* <Image
              src="/TerraInfraconLogo.png"
              alt="Terra Infracon"
              width={270}
              height={62}
              className="relative w-[220px] md:w-[270px] h-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              priority
            /> */}
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          HERO CONTENT
          
          This container is intentionally identical to the
          logo container above.
      ========================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start pt-24 md:pt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start space-y-6 md:space-y-8"
        >
          {/* =====================================================
              EYEBROW LABEL
          ===================================================== */}
          {/* <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2"
          >
            <span className="h-[1px] w-8 bg-gold" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              GURUGRAM · SOHNA · INDIA
            </span>
          </motion.div> */}

          {/* =====================================================
              MAIN ANIMATED HEADLINE
          ===================================================== */}
          <div className="flex flex-col space-y-1">
            <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-warm-white leading-[1.05] text-balance">
              <TextReveal
                text="Crafting Spaces"
                delay={0.2}
              />

              <br />

              <motion.span
                variants={itemVariants}
                className="text-gold italic font-light font-serif block mt-2"
              >
                Where Life Flourishes.
              </motion.span>
            </h1>
          </div>

          {/* =====================================================
              SUBTITLE
          ===================================================== */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-warm-muted leading-relaxed font-sans max-w-xl font-light text-balance"
          >
            Luxury independent residential development
            scenic foot at the nearby of the Aravallis — designed exclusively
            for those who refuse to compromise on quality and
            space.
          </motion.p>

          {/* =====================================================
              CTA BUTTON ROW
          ===================================================== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center pt-2"
          >
            <Magnetic>
              <Link href="/projects/terra-elegance">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link href="/about">
                <Button
                  variant="gold-outline"
                  size="lg"
                >
                  Our Story
                </Button>
              </Link>
            </Magnetic>
          </motion.div>

          {/* =====================================================
              LUXURY FLOATING CTAs
          ===================================================== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-widest text-warm-white font-bold border-t border-gold-border/20 pt-6 w-full max-w-lg"
          >
            {/* Phone */}
            <a
              href={`tel:${companyDetails.phone}`}
              className="flex items-center space-x-2 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />

              <span>
                Call +91 124 3633146
              </span>
            </a>

            {/* Divider */}
            <span className="text-gold-border/40 hidden sm:inline">
              |
            </span>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${companyDetails.whatsapp
                .replace(/\+/g, "")
                .replace(/\s/g, "")}?text=I%20am%20interested%20in%20Terra%20Elegance%20floors`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gold transition-colors duration-300"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold" />

              <span>
                WhatsApp Chat
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          FLOATING STATUS PILL — BOTTOM RIGHT
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="absolute bottom-10 right-6 md:right-12 z-20 flex flex-col items-end gap-2"
      >
        <Link
          href="/projects/terra-elegance"
          className="flex items-center space-x-2.5 px-4 py-3 bg-dark-surface/90 border border-gold-border hover:border-gold transition-all duration-500 shadow-2xl backdrop-blur-md group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />

            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>

          <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-warm-white group-hover:text-gold transition-colors">
            Terra Elegance — Now Selling
          </span>
        </Link>
        <SampleDisclaimer className="max-w-[220px] text-right text-warm-white/70" />
      </motion.div>

      {/* =========================================================
          ANIMATED SCROLL INDICATOR — BOTTOM LEFT
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="absolute bottom-10 left-6 md:left-12 z-20 flex flex-col items-center space-y-3.5 pointer-events-none"
      >
        <span className="text-[8px] uppercase tracking-[0.25em] text-warm-muted writing-mode-vertical">
          Scroll Down
        </span>

        <div className="h-12 w-[1px] bg-gold-border/40 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-4 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

