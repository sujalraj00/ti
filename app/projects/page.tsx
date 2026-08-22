"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Layers, Layout, ArrowRight } from "lucide-react";
import { projects } from "../../data/project";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { FadeIn } from "../../animations/FadeIn";
import { SampleStar, SampleDisclaimer } from "../../components/SampleMark";

export default function ProjectsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Ongoing", "Upcoming", "Launch Soon"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || project.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full bg-dark-bg relative overflow-hidden min-h-screen pb-20">
      {/* Background decoration blob */}
      <div className="bg-blob top-10 left-10" />

      {/* Page Header */}
      <section className="relative py-20 md:py-24 border-b border-gold-border/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Terra Portfolios
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-white">
            Exclusive Residences
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest text-warm-muted">
            Independent Floors, High-Rises, & Premium Plots in Gurugram Corridor
          </p>
        </div>
      </section>

      {/* Directory Tools Section */}
      <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gold-border/15 pb-6">

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-[10px] font-sans uppercase tracking-widest border transition-all duration-300 ${activeFilter === filter
                    ? "bg-gold text-dark-bg border-gold font-bold"
                    : "bg-transparent text-warm-white border-gold-border/20 hover:border-gold/50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-surface border border-gold-border/30 pl-10 pr-4 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 rounded-none focus:outline-none focus:border-gold transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gold-border/20">
            <p className="text-sm font-sans text-warm-muted uppercase tracking-widest">
              No projects found matching the criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.05} direction="up" className="h-full">
                <Card className="flex flex-col h-full p-0 group overflow-hidden border border-gold-border/20 relative">

                  {/* Left border overlay on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-10" />

                  {/* Project Image Viewport */}
                  <div className="relative h-64 md:h-72 w-full overflow-hidden shrink-0">
                    <Image
                      src={project.images.hero}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <SampleStar className="left-3 right-auto top-3" />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4 bg-dark-bg/90 border border-gold-border text-[9px] uppercase tracking-widest font-bold px-3 py-1 text-gold">
                      {project.status}
                    </div>

                    {/* Price Tag watermark */}
                    <div className="absolute bottom-4 left-4 bg-gold text-dark-bg text-[10px] uppercase tracking-widest font-bold px-3.5 py-1.5 shadow-lg">
                      {project.startingPrice.includes("Price") ? "₹1.25 Cr* Onwards" : project.startingPrice.replace(/\[\[|\]\]/g, "")}
                    </div>
                  </div>

                  {/* Project Summary Body */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1 text-[10px] text-gold uppercase tracking-widest font-bold">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{project.type}</span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-warm-white group-hover:text-gold transition-colors">
                        {project.name}
                      </h3>

                      <div className="flex items-center space-x-1.5 text-xs text-warm-muted font-sans">
                        <MapPin className="w-3.5 h-3.5 text-gold/80" />
                        <span>{project.location}</span>
                      </div>

                      <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light pt-2 line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Footer / CTA block */}
                    <div className="border-t border-gold-border/10 pt-5 flex items-center justify-between text-xs font-sans">
                      <span className="text-[10px] uppercase tracking-widest text-warm-muted">
                        RERA Registered
                      </span>
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center space-x-1.5 text-gold font-bold hover:text-gold-light group/link"
                      >
                        <span>Explore Floorplans</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </Card>
              </FadeIn>
            ))}
          </div>
        )}
        {filteredProjects.length > 0 && (
          <SampleDisclaimer className="mt-8" />
        )}
      </section>

    </div>
  );
}
