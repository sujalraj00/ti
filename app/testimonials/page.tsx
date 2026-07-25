"use client";

import { Testimonials } from "../../components/ui/demo";

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-dark-bg relative overflow-hidden min-h-screen pb-20">
      {/* Background decoration blob */}
      <div className="bg-blob top-10 left-10" />

      {/* Page Header */}
      <section className="relative py-20 md:py-24 border-b border-gold-border/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Verified Experiences
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-white">
            Homeowner Testimonials
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest text-warm-muted">
            Families Who Found Their Forever Home With Terra Infracon
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <Testimonials />
      </div>
    </div>
  );
}
