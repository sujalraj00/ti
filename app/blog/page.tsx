"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Calendar, Clock, BookOpen, Tag } from "lucide-react";
import { blogPosts } from "../../data/blogs";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { FadeIn } from "../../animations/FadeIn";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categories list
  const categories = [
    "All",
    "Lifestyle & Architecture",
    "Infrastructure & Investment",
    "Wellness & Design",
    "Homebuyers Guide",
  ];

  // Filtered blogs logic
  const filteredBlogs = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="w-full bg-dark-bg min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="bg-blob top-20 left-10" />
      <div className="bg-blob bottom-20 right-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto pt-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold" />
            <span>Terra Editorial & Advisory</span>
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-warm-white">
            Real Estate & Living Insights
          </h1>
          <p className="text-sm md:text-base text-warm-muted leading-relaxed font-sans font-light">
            In-depth perspectives on low-rise independent floors, infrastructure momentum in Sohna & South Gurugram, healthy spatial design, and complete homebuying advice.
          </p>
          <div className="h-[1px] w-16 bg-gold mt-2" />
        </div>

        {/* Featured Post Banner */}
        {selectedCategory === "All" && searchQuery === "" && featuredPost && (
          <FadeIn direction="up">
            <div className="relative border border-gold-border/30 bg-dark-surface/60 overflow-hidden shadow-2xl group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: Big Image (7 cols) */}
                <div className="lg:col-span-7 relative h-[320px] lg:h-[450px] overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-dark-bg text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                      Featured Guide
                    </span>
                  </div>
                </div>

                {/* Right: Content (5 cols) */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-[10px] font-sans text-warm-muted">
                      <span className="text-gold font-bold uppercase tracking-wider">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl lg:text-3xl font-bold text-warm-white group-hover:text-gold transition-colors duration-300 leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="font-serif text-sm text-gold/90 italic">
                      "{featuredPost.subtitle}"
                    </p>

                    <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gold-border/20 flex items-center justify-between">
                    <span className="text-xs font-sans text-warm-white/80">
                      By <strong>{featuredPost.author.name}</strong>
                    </span>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button variant="primary" size="sm" className="flex items-center space-x-2">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-y border-gold-border/20 py-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[11px] font-sans uppercase tracking-wider font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gold text-dark-bg border border-gold"
                    : "bg-dark-surface/60 text-warm-muted border border-gold-border/20 hover:border-gold/50 hover:text-warm-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-surface/80 border border-gold-border/30 pl-10 pr-4 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="font-serif text-xl font-bold text-warm-white">No articles matched your criteria</p>
            <p className="text-xs text-warm-muted font-sans">Try selecting a different category or clearing search parameters.</p>
            <Button
              variant="gold-outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-2"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post, idx) => (
              <FadeIn key={post.id} delay={idx * 0.1} direction="up" className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <Card className="flex flex-col justify-between h-full border border-gold-border/20 group-hover:border-gold/50 transition-all duration-500 p-0 overflow-hidden bg-dark-surface/40">
                    
                    {/* Card Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="bg-dark-bg/90 border border-gold-border/40 text-gold text-[9px] uppercase tracking-widest font-bold px-3 py-1 backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                      
                      <div className="space-y-2.5">
                        <div className="flex items-center space-x-4 text-[10px] font-sans text-warm-muted">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-gold/80" />
                            <span>{post.publishDate}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-gold/80" />
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-bold text-warm-white group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs text-warm-muted leading-relaxed font-sans font-light line-clamp-3">
                          {post.subtitle} — {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gold-border/10 flex items-center justify-between font-sans text-xs">
                        <span className="text-gold font-bold uppercase tracking-wider text-[11px] group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                          <span>Read Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                    </div>

                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="border border-gold-border/30 bg-gradient-to-r from-dark-surface via-dark-bg to-dark-surface p-8 md:p-12 text-center flex flex-col items-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Real Estate Advisory
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-warm-white max-w-2xl">
            Planning to invest in an independent floor in Sohna?
          </h2>
          <p className="text-xs md:text-sm text-warm-muted max-w-xl font-sans font-light leading-relaxed">
            Our real estate advisory team provides clear property documentation, floor layout blueprints, and HARERA compliance assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="primary">Schedule Executive Consultation</Button>
            </Link>
            <Link href="/projects">
              <Button variant="gold-outline">View Terra Elegance Floors</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
