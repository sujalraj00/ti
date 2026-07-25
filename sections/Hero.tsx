"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";
import { companyDetails } from "../data/company";
import { Button } from "../components/ui/Button";

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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-dark-bg select-none">
      {/* Background Video with Opacity animation and Banner Fallback */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.45 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
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
          <source src="/terra-elegance/cover-video.mp4" type="video/mp4" />
          <img
            src="/terra-elegance/homepage-banner.png"
            alt="Terra Elegance Homepage Banner"
            className="w-full h-full object-cover"
          />
        </video>
      </motion.div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark-bg via-dark-bg/10 to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start space-y-6 md:space-y-8"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold">
              GURUGRAM · SOHNA · INDIA
            </span>
          </motion.div>

          {/* Main Animated Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-warm-white leading-[1.05]"
          >
            Crafting Spaces <br />
            <span className="text-gold italic font-light font-serif">Where Life Flourishes.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-warm-muted leading-relaxed font-sans max-w-xl font-light"
          >
            Luxury independent residential developments at the scenic foot of the Aravallis — designed exclusively for those who refuse to compromise on quality and space.
          </motion.p>

          {/* CTA Button Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center pt-2">
            <Link href="/projects/terra-elegance">
              <Button variant="primary" size="lg" className="flex items-center space-x-2">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="gold-outline" size="lg">
                Our Story
              </Button>
            </Link>
          </motion.div>

          {/* Luxury Floating CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-widest text-warm-white font-bold border-t border-gold-border/20 pt-6 w-full max-w-lg"
          >
            <a
              href={`tel:${companyDetails.phone}`}
              className="flex items-center space-x-1.5 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call +91 124 3633146</span>
            </a>
            <span className="text-gold-border/40 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}?text=I%20am%20interested%20in%20Terra%20Elegance%20floors`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-gold transition-colors duration-300"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Status Pill (Bottom-Right) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-6 md:right-12 z-20"
      >
        <Link
          href="/projects/terra-elegance"
          className="flex items-center space-x-2 px-4 py-2.5 bg-dark-surface/80 border border-gold-border backdrop-blur-md hover:border-gold transition-all duration-300 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-warm-white group-hover:text-gold transition-colors">
            Terra Elegance — Now Selling
          </span>
        </Link>
      </motion.div>

      {/* Animated Scroll Indicator (Bottom-Left) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-12 z-20 flex flex-col items-center space-y-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-warm-muted writing-mode-vertical">
          Scroll Down
        </span>
        <div className="h-10 w-[1px] bg-gold-border/40 relative overflow-hidden">
          {/* Pulsing scroll indicator line */}
          <motion.div
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 2,
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
