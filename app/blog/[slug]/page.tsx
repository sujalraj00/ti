"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, Calendar, Clock, User, Share2, Check, 
  ChevronDown, ArrowRight, MessageSquare, Phone, BookOpen, HelpCircle 
} from "lucide-react";
import { blogPosts } from "../../../data/blogs";
import { companyDetails } from "../../../data/company";
import { generateBlogArticleSchema } from "../../../data/seo";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { FadeIn } from "../../../animations/FadeIn";

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!post) {
    notFound();
  }

  const blogSchema = generateBlogArticleSchema(post, companyDetails);

  // Get related articles
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <div className="w-full bg-dark-bg min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Background Blobs */}
      <div className="bg-blob top-20 right-10" />
      <div className="bg-blob bottom-20 left-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-light transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-gold text-dark-bg text-[10px] uppercase tracking-widest font-bold px-3 py-1">
              {post.category}
            </span>
            <span className="text-xs font-sans text-warm-muted flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold/80" />
              <span>{post.publishDate}</span>
            </span>
            <span className="text-warm-muted">•</span>
            <span className="text-xs font-sans text-warm-muted flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold/80" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-warm-white leading-tight">
            {post.title}
          </h1>

          <p className="font-serif text-lg md:text-xl text-gold/90 italic leading-relaxed border-l-2 border-gold pl-4">
            {post.subtitle}
          </p>

          {/* Author Bar & Share */}
          <div className="flex items-center justify-between border-y border-gold-border/20 py-4 font-sans text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold font-bold font-serif">
                {post.author.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-warm-white">{post.author.name}</span>
                <span className="text-[10px] text-warm-muted">{post.author.role}</span>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="p-2 border border-gold-border/30 text-warm-muted hover:text-gold hover:border-gold transition-colors flex items-center space-x-1.5"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider font-bold">Share</span>
            </button>
          </div>
        </div>

        {/* Big Cover Image */}
        <div className="relative h-[300px] sm:h-[420px] md:h-[500px] w-full overflow-hidden border border-gold-border/30 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
        </div>

        {/* Intro Paragraphs */}
        <div className="space-y-6 text-sm md:text-base text-warm-white/90 font-sans leading-relaxed font-light">
          {post.introParagraphs.map((para, idx) => (
            <p key={idx} className={idx === 0 ? "text-base md:text-lg leading-relaxed font-normal text-warm-white" : ""}>
              {para}
            </p>
          ))}
        </div>

        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="bg-dark-surface/80 border border-gold-border/40 p-6 md:p-8 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2 text-gold font-bold text-xs uppercase tracking-widest border-b border-gold-border/20 pb-3">
              <BookOpen className="w-4 h-4" />
              <span>Key Article Takeaways</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {post.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs font-sans text-warm-muted leading-relaxed">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Body Sections */}
        <div className="space-y-10 pt-4">
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 border-t border-gold-border/10 pt-8 first:border-none first:pt-0">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-warm-white leading-snug">
                {section.heading}
              </h2>

              {section.subheading && (
                <p className="font-serif text-base text-gold/90 italic">{section.subheading}</p>
              )}

              <div className="space-y-4 text-xs md:text-sm text-warm-muted font-sans font-light leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2 pl-2">
                  {section.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5 text-xs md:text-sm text-warm-white/90 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Article FAQs Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="border-t border-gold-border/20 pt-12 space-y-6">
            <div className="flex items-center space-x-2 text-gold font-bold text-xs uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-white">
              Questions & Clarifications
            </h3>

            <div className="space-y-4">
              {post.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gold-border/20 bg-dark-surface/40 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex justify-between items-center gap-4 font-serif text-base md:text-lg font-bold text-warm-white hover:text-gold transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 font-sans text-xs md:text-sm text-warm-muted leading-relaxed font-light border-t border-gold-border/10 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Real Estate Contact CTA Box */}
        <div className="border border-gold text-center p-8 md:p-10 bg-dark-surface/90 space-y-6 shadow-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Terra Infracon Residential Advisory
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-white">
            Discover Terra Elegance Floors in Sector-7 Sohna
          </h3>
          <p className="text-xs md:text-sm text-warm-muted max-w-xl mx-auto font-sans font-light leading-relaxed">
            Looking for luxury low-rise independent floors near the Aravalli foothills? Schedule a private site visit or request complete layout blueprints today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact?topic=visit">
              <Button variant="primary">Schedule Site Visit</Button>
            </Link>
            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold-outline" className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gold-border/20 pt-12 space-y-8">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                  Recommended Reading
                </span>
                <h3 className="font-serif text-2xl font-bold text-warm-white">
                  Related Articles
                </h3>
              </div>
              <Link href="/blog" className="text-xs font-sans text-gold font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`} className="group block">
                  <Card className="flex flex-col justify-between h-full border border-gold-border/20 group-hover:border-gold/50 p-5 bg-dark-surface/40 transition-all">
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                        {related.category}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-warm-white group-hover:text-gold transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-xs text-warm-muted font-sans font-light line-clamp-2">
                        {related.subtitle}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gold-border/10 flex items-center justify-between text-[10px] text-warm-muted font-sans">
                      <span>{related.readTime}</span>
                      <span className="text-gold font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Read →</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
