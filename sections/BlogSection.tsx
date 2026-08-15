"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { blogPosts } from "../data/blogs";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { FadeIn } from "../animations/FadeIn";

export function BlogSection() {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="bg-blob bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span>Insights & Perspectives</span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
              Real Estate & Living Articles
            </h2>
            <p className="text-xs md:text-sm text-warm-muted max-w-xl font-sans font-light mt-1">
              Expert guides on low-rise independent floors, infrastructure growth in Sohna, and creating healthy living spaces.
            </p>
          </div>
          <Link href="/blog" className="shrink-0">
            <Button variant="gold-outline" className="flex items-center space-x-2">
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 0.15} direction="up" className="h-full">
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="flex flex-col justify-between h-full border border-gold-border/20 group-hover:border-gold/50 transition-all duration-500 p-0 overflow-hidden bg-dark-surface/40">
                  
                  {/* Card Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Category Pill */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-dark-bg/90 border border-gold-border/40 text-gold text-[9px] uppercase tracking-widest font-bold px-3 py-1 backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    
                    <div className="space-y-2.5">
                      {/* Meta Info */}
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

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold text-warm-white group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      {/* Subtitle / Excerpt */}
                      <p className="text-xs text-warm-muted leading-relaxed font-sans font-light line-clamp-3">
                        {post.subtitle} — {post.excerpt}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="pt-4 border-t border-gold-border/10 flex items-center justify-between font-sans text-xs">
                      <span className="text-gold font-bold uppercase tracking-wider text-[11px] group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                  </div>

                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-12 md:hidden">
          <Link href="/blog" className="w-full">
            <Button variant="gold-outline" className="w-full justify-center">
              Explore All Articles
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default BlogSection;
