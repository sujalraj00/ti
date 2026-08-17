"use client";

import { Award, Compass, TrendingUp, Map, Layers } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { Card } from "../components/ui/Card";

export function WhyInvestSohna() {
  const points = [
    {
      icon: TrendingUp,
      title: "Rapid Capital Appreciation",
      description: "Sohna is Gurugram's fastest-growing residential corridor, witnessing consistent double-digit year-on-year appreciation in land and boutique floor values.",
    },
    {
      icon: Map,
      title: "Unmatched Connectivity",
      description: "Seamless travel via the 6-lane Sohna Elevated Highway (15-min to Rajiv Chowk) and direct corridors linking to KMP Expressway and Delhi-Mumbai Expressway.",
    },
    {
      icon: Layers,
      title: "The Eco-Luxury Sweet Spot",
      description: "Nestled directly against the Aravalli forest reserves, Sohna offers a unique biosphere with up to 3x lower pollution indices compared to central Gurgaon.",
    },
    {
      icon: Award,
      title: "Educational & Commercial Hub",
      description: "Home to premium global education institutes like GD Goenka World School and K.R. Mangalam, alongside upcoming institutional IT zones.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
      <div className="bg-blob top-1/4 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left Side (5/12): Growth Header */}
          <div className="lg:col-span-5 flex flex-col space-y-6 items-start">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Location Analysis
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-white leading-tight">
                Why Invest in <br />
                <span className="text-gold italic font-serif font-light">Sohna Corridor?</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-warm-muted leading-relaxed font-sans font-light">
              Sohna has transitioned from a weekend retreat to Gurugram's most premium luxury low-rise zone. As corporate hubs saturate, demand has shifted toward larger residential floor plans, scenic topography, and clean air environments.
            </p>

            <div className="flex flex-col space-y-3.5 font-sans text-xs pt-2">
              <div className="flex items-center space-x-3 text-warm-white">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-light">30 Mins to Gurgaon Golf Course Extension</span>
              </div>
              <div className="flex items-center space-x-3 text-warm-white">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-light">25 min to Rajiv Chowk</span>
              </div>
              <div className="flex items-center space-x-3 text-warm-white">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-light">RERA Governed Protected Greenbelts</span>
              </div>
            </div>
          </div>

          {/* Right Side (7/12): Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <FadeIn key={index} delay={index * 0.15} direction="up">
                  <Card className="flex flex-col space-y-3.5 h-full" variant="glass">
                    <Icon className="w-6 h-6 text-gold" />
                    <h3 className="font-serif text-lg font-bold text-warm-white">
                      {point.title}
                    </h3>
                    <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">
                      {point.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyInvestSohna;
