"use client";

import Image from "next/image";
import { ShieldCheck, Eye, Target, Users, Award, Trophy } from "lucide-react";
import { companyDetails } from "../../data/company";
import TimelineSection from "../../sections/TimelineSection";
import { Card } from "../../components/ui/Card";
import { FadeIn } from "../../animations/FadeIn";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Unyielding Integrity",
      description: "We adhere strictly to HARERA mandates, ensuring transparent documentation and zero hidden charges at every purchase milestone.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We design spaces around the needs of modern families, optimizing carpet areas and incorporating dedicated passenger lift corridors.",
    },
    {
      icon: Award,
      title: "Quality Engineering",
      description: "From certified seismic-resistant steel structures to premium modular cabinetry, we enforce strict Grade A parameters.",
    },
  ];

  return (
    <div className="w-full bg-dark-bg relative overflow-hidden">
      {/* Background blobs */}
      <div className="bg-blob top-10 left-10" />

      {/* Hero Header */}
      <section className="relative py-24 md:py-32 flex items-center justify-center border-b border-gold-border/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Corporate Profile
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-warm-white">
            Our Story & Legacy
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest text-warm-muted">
            Crafting Premium Residential Spaces Since 2014
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                  Corporate Evolution
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-white">
                  Crafting spaces where families flourish.
                </h2>
              </div>
              <div className="space-y-4 font-sans text-sm leading-relaxed text-warm-muted font-light">
                <p>{companyDetails.aboutStory}</p>
                <p>{companyDetails.aboutPhilosophy}</p>
                <p>
                  Today, Terra Infracon Pvt. Ltd. represents a mark of quality and premium craftsmanship. Our developments in Gurgaon and Sohna are landmarks of architecture, designed to stand the test of time while preserving the natural ecology.
                </p>
              </div>
            </div>

            {/* Collage Visual */}
            <div className="lg:col-span-6 relative h-[360px] md:h-[450px] w-full">
              <div className="relative w-full h-full border border-gold-border overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                  alt="Premium Villa Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-bg/20" />
              </div>
              {/* Overlapping Badge */}
              <div className="absolute -bottom-6 -left-6 bg-dark-surface border border-gold-border p-6 shadow-2xl backdrop-blur-md hidden sm:flex flex-col">
                <span className="font-serif text-4xl font-bold text-gold">12+</span>
                <span className="text-[9px] uppercase tracking-widest text-warm-muted font-sans font-bold">Years of Trust</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-dark-surface border-y border-gold-border/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <FadeIn direction="right" className="h-full">
              <Card className="flex flex-col space-y-4 h-full p-8 md:p-10 border border-gold-border/20">
                <div className="p-3 bg-dark-bg border border-gold-border/25 rounded-none text-gold w-fit">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-white">Our Mission</h3>
                <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                  To deliver boutique independent floor structures that balance modern architectural design, ecological sustainability, and strict construction standards. We aim to make homeownership transparent, seamless, and high-value.
                </p>
              </Card>
            </FadeIn>

            {/* Vision */}
            <FadeIn direction="left" className="h-full">
              <Card className="flex flex-col space-y-4 h-full p-8 md:p-10 border border-gold-border/20">
                <div className="p-3 bg-dark-bg border border-gold-border/25 rounded-none text-gold w-fit">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-white">Our Vision</h3>
                <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                  To become the premier brand for high-end boutique independent floors in the Gurgaon-Sohna growth corridor, recognized for architectural design, HARERA compliance, and customer satisfaction.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              Core Pillars
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
              Corporate Core Values
            </h2>
            <div className="h-[1px] w-12 bg-gold mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1} direction="up">
                  <Card className="flex flex-col items-start space-y-4 h-full">
                    <Icon className="w-6 h-6 text-gold" />
                    <h3 className="font-serif text-base font-bold text-warm-white">{v.title}</h3>
                    <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">{v.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Timeline */}
      <TimelineSection />

      {/* Leadership Placeholders */}
      <section className="py-20 bg-dark-surface border-t border-gold-border/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              Our Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
              Board of Directors
            </h2>
            <div className="h-[1px] w-12 bg-gold mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director 1 */}
            <FadeIn direction="right">
              <div className="border border-gold-border/30 bg-dark-bg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
                <div className="w-32 h-32 bg-dark-surface border border-gold-border/20 relative flex items-center justify-center text-center shrink-0">
                  <span className="text-[10px] uppercase tracking-widest text-warm-muted p-2 font-sans">
                    [[ Director Photo Placeholder ]]
                  </span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                  <h3 className="font-serif text-lg font-bold text-warm-white">[[ Chairman & Managing Director ]]</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Co-Founder, Terra Infracon</p>
                  <p className="text-xs text-warm-muted leading-relaxed font-sans font-light pt-2">
                    Envisioning corporate policies, strategic growth acquisitions, and financial planning across commercial structures.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Director 2 */}
            <FadeIn direction="left">
              <div className="border border-gold-border/30 bg-dark-bg p-6 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
                <div className="w-32 h-32 bg-dark-surface border border-gold-border/20 relative flex items-center justify-center text-center shrink-0">
                  <span className="text-[10px] uppercase tracking-widest text-warm-muted p-2 font-sans">
                    [[ Director Photo Placeholder ]]
                  </span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                  <h3 className="font-serif text-lg font-bold text-warm-white">[[ Executive Director - Operations ]]</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Head of Engineering & Site QA</p>
                  <p className="text-xs text-warm-muted leading-relaxed font-sans font-light pt-2">
                    Supervising structure construction quality, site managers, procurement of certified materials, and delivery timelines.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Achievements & Credentials */}
      <section className="py-20 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col items-center text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              Credentials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
              Achievements & Certifications
            </h2>
            <div className="h-[1px] w-12 bg-gold mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Cert 1 */}
            <Card className="flex flex-col items-center text-center space-y-3 p-6">
              <Trophy className="w-8 h-8 text-gold" />
              <h4 className="font-serif text-base font-bold text-warm-white">[[ Quality Assurance Certificate ]]</h4>
              <p className="text-[10px] text-warm-muted uppercase tracking-widest">ISO 9001:2015 Registered</p>
            </Card>

            {/* Cert 2 */}
            <Card className="flex flex-col items-center text-center space-y-3 p-6">
              <Trophy className="w-8 h-8 text-gold" />
              <h4 className="font-serif text-base font-bold text-warm-white">[[ Eco Construction Honor ]]</h4>
              <p className="text-[10px] text-warm-muted uppercase tracking-widest">IGBC Green Building Member</p>
            </Card>

            {/* Cert 3 */}
            <Card className="flex flex-col items-center text-center space-y-3 p-6">
              <Trophy className="w-8 h-8 text-gold" />
              <h4 className="font-serif text-base font-bold text-warm-white">[[ HARERA Trusted Developer ]]</h4>
              <p className="text-[10px] text-warm-muted uppercase tracking-widest">Registered HARERA Partner</p>
            </Card>
          </div>

        </div>
      </section>

    </div>
  );
}
