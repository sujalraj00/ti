"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faq";
import { FadeIn } from "../animations/FadeIn";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "RERA", "Project", "Payment", "General"];

  const filteredItems = faqItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
      <div className="bg-blob top-1/4 left-1/4" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white leading-tight">
            Frequently Asked Queries
          </h2>
          <div className="h-[1px] w-12 bg-gold mt-2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null);
              }}
              className={`px-4 py-2 text-[10px] font-sans uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-dark-bg border-gold font-bold"
                  : "bg-transparent text-warm-white border-gold-border/20 hover:border-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <FadeIn key={item.id} delay={index * 0.05} direction="up">
                <div className="border border-gold-border/20 bg-dark-surface/40 backdrop-blur-md">
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
                  >
                    <span className="font-serif text-sm md:text-base font-bold text-warm-white group-hover:text-gold transition-colors duration-300">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold transition-transform duration-500 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {/* Dynamic Height Expand */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "max-h-[200px] border-t border-gold-border/10" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FaqAccordion;
