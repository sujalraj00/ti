"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryImages } from "../../data/gallery";
import { FadeIn } from "../../animations/FadeIn";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["all", "interior", "exterior", "construction", "drone", "rendering"];

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <div className="w-full bg-dark-bg relative overflow-hidden min-h-screen pb-20">
      {/* Background decoration blob */}
      <div className="bg-blob top-10 left-10" />

      {/* Page Header */}
      <section className="relative py-20 md:py-24 border-b border-gold-border/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Project Portfolios
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-white">
            Architectural Gallery
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest text-warm-muted">
            Explore Interiors, Facades, Drone Vistas, and Construction Milestones
          </p>
        </div>
      </section>

      {/* Categories Filter Menu */}
      <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-2 border-b border-gold-border/15 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-4.5 py-2.5 text-[10px] font-sans uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-dark-bg border-gold font-bold"
                  : "bg-transparent text-warm-white border-gold-border/20 hover:border-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Columns Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <FadeIn key={img.id} delay={idx * 0.05} direction="up" className="break-inside-avoid">
              <div 
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden border border-gold-border/20 shadow-xl cursor-pointer bg-dark-surface"
              >
                {/* Image Wrap */}
                <div className="relative w-full h-auto min-h-[220px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  />
                </div>

                {/* Dark Gold Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Info block overlay appearing on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-base font-bold text-warm-white mt-1">
                    {img.title}
                  </h3>
                  <p className="text-[11px] text-warm-muted leading-relaxed font-sans font-light mt-1 max-w-[280px]">
                    {img.description}
                  </p>
                  <div className="mt-4 flex items-center space-x-1.5 text-xs text-gold font-bold uppercase tracking-widest">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge Image</span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Native Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 bg-dark-bg/95 backdrop-blur-md z-[10000] flex items-center justify-center p-6 md:p-12"
        >
          {/* Close trigger */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-dark-surface border border-gold-border text-warm-white hover:text-gold transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Controls */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2.5 bg-dark-surface/80 border border-gold-border text-warm-white hover:text-gold transition-colors z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2.5 bg-dark-surface/80 border border-gold-border text-warm-white hover:text-gold transition-colors z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative w-full h-[60dvh] flex items-center justify-center">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-w-full max-h-full object-contain border border-gold-border/20 shadow-2xl"
              />
            </div>
            {/* Image descriptors */}
            <div className="text-center space-y-1 max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                {filteredImages[lightboxIndex].category}
              </span>
              <h2 className="font-serif text-lg md:text-xl font-bold text-warm-white">
                {filteredImages[lightboxIndex].title}
              </h2>
              <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">
                {filteredImages[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
