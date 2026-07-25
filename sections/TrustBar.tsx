import React from "react";

export function TrustBar() {
  const words = [
    "INNOVATIVE DESIGN",
    "SUSTAINABLE CONSTRUCTION",
    "RERA APPROVED",
    "TIMELY DELIVERY",
    "ARAVALLI VIEWS",
    "PREMIUM PLOTS",
    "BOUTIQUE LIVING",
  ];

  // Repeat items to fill scroll track
  const marqueeItems = [...words, ...words, ...words];

  return (
    <div className="bg-dark-surface border-y border-gold-border/20 py-4.5 relative overflow-hidden select-none z-10">
      <div className="flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12">
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-12 font-sans text-xs tracking-[0.3em] font-bold text-gold">
              <span>{item}</span>
              <span className="text-gold-light opacity-55 text-sm font-light font-serif">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
