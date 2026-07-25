"use client";

import { Star, Quote, Plus } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { FadeIn } from "../../animations/FadeIn";

export default function TestimonialsPage() {
  const handleReviewSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your feedback has been registered and sent to the QA queue for validation.");
  };

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

      {/* Double Column Grid: Testimonials & Share Experience */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (8/12): Testimonials Masonry Grid */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <FadeIn key={t.id} delay={idx * 0.05} direction="up" className="h-full">
                  <Card className="flex flex-col justify-between space-y-6 h-full border border-gold-border/20 relative group">
                    <div className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors">
                      <Quote className="w-8 h-8" />
                    </div>

                    {/* Stars */}
                    <div className="flex space-x-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-sm md:text-base italic text-warm-white/90 leading-relaxed flex-grow">
                      "{t.quote}"
                    </blockquote>

                    {/* Author block */}
                    <div className="border-t border-gold-border/10 pt-4 flex flex-col font-sans">
                      <cite className="not-italic text-xs font-bold text-gold uppercase tracking-wider">
                        {t.author}
                      </cite>
                      <span className="text-[10px] text-warm-muted mt-0.5">
                        {t.role} — {t.projectAssociated}
                      </span>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column (4/12): Submission Card */}
          <div className="lg:col-span-4">
            <aside className="sticky top-[100px] bg-dark-surface border border-gold-border p-6 md:p-8 space-y-6 shadow-2xl">
              
              <div className="space-y-1">
                <h4 className="font-serif text-xl font-bold text-warm-white">Share Your Review</h4>
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Feedback Portal</p>
              </div>

              <p className="text-xs text-warm-muted font-sans leading-relaxed">
                Are you an owner of a Terra Infracon floor? We would love to hear your feedback on design, construction, and customer support.
              </p>

              <form onSubmit={handleReviewSubmission} className="space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Unit / Plot Reference (e.g. Plot 12)"
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors"
                  />
                  <select 
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white/70 focus:outline-none focus:border-gold transition-colors"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select Associated Project</option>
                    <option value="terra-elegance">Terra Elegance</option>
                    <option value="other">Other Development</option>
                  </select>
                  <textarea
                    required
                    placeholder="Your Review Message"
                    rows={4}
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-dark-bg hover:bg-gold-light py-3 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>[[ Submit Testimonial ]]</span>
                </button>
              </form>

            </aside>
          </div>

        </div>
      </section>

    </div>
  );
}
