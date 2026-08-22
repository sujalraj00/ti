"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { companyDetails } from "../data/company";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "../components/ui/Button";
import { SampleStar, SampleDisclaimer } from "../components/SampleMark";

// Simple count up component for statistics
interface CounterProps {
  value: number;
  suffix?: string;
}

function StatCounter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / 40); // Increment chunk size
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-gold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export function AboutBrand() {
  return (
    <section id="about-us" className="py-20 md:py-28 relative overflow-hidden bg-dark-bg">
      {/* Background decoration blob */}
      <div className="bg-blob top-1/3 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Brand Copy */}
          <div className="flex flex-col space-y-6 md:space-y-8 items-start">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                About Terra Infracon
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-warm-white">
                Built on integrity<br />
                <span className="text-gold italic font-serif font-light">Delivered with precision!</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base text-warm-muted leading-relaxed font-sans font-light">
              <p>{companyDetails.description}</p>
              <p>{companyDetails.aboutPhilosophy}</p>
            </div>

            {/* Dynamic Counter Grid
            <div className="grid grid-cols-3 gap-6 md:gap-10 border-y border-gold-border/20 py-8 w-full">
              <div className="flex flex-col space-y-1.5">
                <StatCounter value={12} suffix="+" />
                <span className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">
                  Years Exp
                </span>
              </div>
              <div className="flex flex-col space-y-1.5">
                <StatCounter value={500} suffix="+" />
                <span className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">
                  Happy Families
                </span>
              </div>
              <div className="flex flex-col space-y-1.5">
                <StatCounter value={2} suffix="M+" />
                <span className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">
                  Sq.Ft. Delivered
                </span>
              </div>
            </div> */}

            <div className="flex items-center space-x-4">
              <Link href="/about">
                <Button variant="primary">Read Full History</Button>
              </Link>
              <Link href="/contact">
                <Button variant="text" className="group">
                  <span>Get In Touch</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Parallax Image Collage */}
          <div className="relative h-[480px] md:h-[580px] w-full">
            {/* Primary Landscape Image */}
            <FadeIn direction="up" delay={0.2} className="absolute left-0 top-0 w-3/4 h-2/3 z-10 shadow-2xl">
              <div className="relative w-full h-full border border-gold-border overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
                  alt="Premium Facade Concept"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-bg/25 group-hover:bg-dark-bg/10 transition-colors" />
                <SampleStar />
              </div>
            </FadeIn>

            {/* Secondary Portrait Image (Offset overlap) */}
            <FadeIn direction="up" delay={0.4} className="absolute right-0 bottom-0 w-3/5 h-2/3 z-20 shadow-2xl">
              <div className="relative w-full h-full border border-gold-border overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                  alt="Luxury Interior Lobby"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-bg/25 group-hover:bg-dark-bg/10 transition-colors" />
                <SampleStar />
              </div>
            </FadeIn>
            <SampleDisclaimer className="absolute -bottom-8 left-0" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutBrand;
