"use client";

import { Compass, Leaf, Handshake, ShieldCheck } from "lucide-react";
import { Card } from "../components/ui/Card";
import { FadeIn } from "../animations/FadeIn";

export function WhyChooseUs() {
  const pillars = [
    {
      icon: Compass,
      title: "Innovative Design",
      description: "Spaces designed to inspire, with form following function at every turn. We optimize layouts for abundance of natural light and cross-ventilation.",
    },
    {
      icon: Leaf,
      title: "Sustainable Construction",
      description: "Materials and methods chosen for the long game — for you and the planet. We implement rainwater harvesting, solar readiness, and thermal block efficiency.",
    },
    {
      icon: Handshake,
      title: "Customer-Centric",
      description: "Your vision drives every decision, from blueprint to possession. Transparent HARERA timelines and regular construction status logs keep you aligned.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      description: "No compromises on what goes into your walls, floors, or finishes. We source certified Grade A RCC steel, branded CP fittings, and premium tile flooring.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
      {/* Background decoration blob */}
      <div className="bg-blob bottom-1/4 left-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Title Block */}
        <div className="flex flex-col items-center text-center space-y-3 mb-20 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Corporate Values
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white max-w-xl leading-tight">
            Four pillars of every project we build.
          </h2>
          <div className="h-[1px] w-12 bg-gold mt-2" />
        </div>

        {/* 2x2 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <Card className="flex flex-col items-start space-y-4 group h-full relative overflow-hidden" variant="glass">
                  {/* Left Highlight Indicator border appearing on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                  {/* Premium Gold Icon */}
                  <div className="p-3 bg-dark-bg border border-gold-border text-gold group-hover:bg-gold group-hover:text-dark-bg transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-warm-white group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </Card>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
