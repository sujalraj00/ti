"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

export function TimelineSection() {
  const milestones = [
    {
      year: "2014",
      title: "Corporate Inception",
      description: "Terra Infracon Pvt. Ltd. was incorporated in Gurugram, India, with a vision to develop sustainable, high-integrity boutique residential spaces.",
    },
    {
      year: "2017",
      title: "First Deliveries",
      description: "Successfully handed over our first luxury independent villa floors in Gurugram, establishing our reputation for high-end construction quality.",
    },
    {
      year: "2020",
      title: "Expansion into Sohna Corridor",
      description: "Acquired strategic land reserves near the foot of the Aravallis, anticipating the growth shift towards eco-luxury boutique lifestyles.",
    },
    {
      year: "2024",
      title: "HARERA License Approval",
      description: "Secured Haryana RERA approvals (RC/REP/HARERA/GGM/854/2024/81) and launched our flagship independent floors project, Terra Elegance.",
    },
    {
      year: "2027",
      title: "Expected Deliveries",
      description: "Ongoing structural concrete work for Terra Elegance on schedule for handover in [[December 2027]], along with new pipeline high-rises.",
    },
  ];

  return (
    <section id="timeline" className="py-24 md:py-32 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
      <div className="bg-blob bottom-1/4 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center space-y-3 mb-20 md:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white max-w-xl leading-tight">
            Our Process & Milestones
          </h2>
          <div className="h-[1px] w-12 bg-gold mt-2" />
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spine Node Pinpoint */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dark-bg border-2 border-gold rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(197,168,92,0.4)] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping opacity-75" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Column */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-10">
                    <FadeIn direction={isEven ? "left" : "right"} delay={0.1}>
                      <div className="p-6 bg-dark-surface/40 border border-gold-border hover:border-gold/30 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 relative">
                        <span className="font-serif text-3xl font-bold text-gold block mb-1">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-warm-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                          {item.description}
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TimelineSection;
