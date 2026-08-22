"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin, ArrowRight } from "lucide-react";
import { projects } from "../data/project";
import { Button } from "../components/ui/Button";
import { FadeIn } from "../animations/FadeIn";
import { Magnetic } from "../components/ui/Magnetic";
import { SampleStar, SampleDisclaimer } from "../components/SampleMark";

export function FlagshipProject() {
  const project = projects.find((p) => p.id === "terra-elegance");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  if (!project) return null;

  return (
    <section className="relative py-24 md:py-32 bg-dark-bg border-t border-gold-border/10 overflow-hidden">
      {/* Background Luminosity Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: `url('${project.images.hero}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Columns (5/12): Project copy */}
          <div className="lg:col-span-5 flex flex-col space-y-6 items-start">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Flagship Project
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-white">
                {project.name}
              </h2>
              <div className="flex items-center space-x-1.5 text-gold text-xs font-sans mt-1">
                <MapPin className="w-4 h-4" />
                <span className="tracking-widest uppercase font-medium">{project.location}</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-warm-muted leading-relaxed font-sans font-light">
              {project.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {project.features.map((feature, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 border border-gold-border bg-dark-surface/30 backdrop-blur-md rounded-none text-[9px] uppercase tracking-widest text-warm-white font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Magnetic>
                <Link href={`/projects/${project.id}`} className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto flex items-center space-x-2">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link href="/contact?topic=terra-elegance" className="w-full sm:w-auto">
                  <Button variant="ghost" className="w-full sm:w-auto">
                    Enquire Now
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Right Columns (7/12): Luxury Embla Slider */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div className="relative overflow-hidden border border-gold-border/30 bg-dark-surface shadow-2xl cursor-drag">
              {/* Embla Viewport */}
              <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
                <div className="flex">
                  {project.images.gallery.map((src, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[300px] md:h-[420px] w-full">
                      <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        priority={index === 0}
                        className="object-cover"
                      />
                      {/* Gradient bottom overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent" />
                      <SampleStar className="left-3 right-auto top-3" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Limited Units Badge */}
              <div className="absolute top-4 right-4 bg-gold text-dark-bg text-[9px] uppercase tracking-[0.2em] font-bold px-4 py-2 z-10 shadow-xl">
                Ongoing · Limited Units
              </div>

              {/* HARERA badge watermark */}
              <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-widest text-warm-white/70 font-sans z-10 font-medium">
                HARERA Reg: {project.rera}
              </div>
            </div>

            {/* Slider Dots / Progress Controls */}
            <div className="flex justify-between items-center px-2">
              <SampleDisclaimer className="max-w-[240px]" />
              <div className="flex space-x-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      index === selectedIndex ? "bg-gold w-6" : "bg-gold-border/40 hover:bg-gold/45"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FlagshipProject;
