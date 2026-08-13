"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Star, Phone, MessageSquare, Mail, Map } from "lucide-react";
import { companyDetails } from "../data/company";
import { galleryImages } from "../data/gallery";
import { testimonials } from "../data/testimonials";
import { projects } from "../data/project";
import { generateLocalBusinessSchema } from "../data/seo";
import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import AboutBrand from "../sections/AboutBrand";
import FlagshipProject from "../sections/FlagshipProject";
import WhyChooseUs from "../sections/WhyChooseUs";
import WhyInvestSohna from "../sections/WhyInvestSohna";
import TimelineSection from "../sections/TimelineSection";
import FaqAccordion from "../sections/FaqAccordion";
import BlogSection from "../sections/BlogSection";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { FadeIn } from "../animations/FadeIn";

export default function Home() {
  const businessSchema = generateLocalBusinessSchema(companyDetails);

  // Get 4 images for the Gallery Preview
  const previewImages = galleryImages.filter((img) => img.category !== "construction").slice(0, 4);

  // Get active testimonials
  const activeTestimonials = testimonials.slice(0, 3);

  // Get ongoing/upcoming projects list
  const activeProjects = projects;

  return (
    <div className="w-full relative overflow-hidden bg-dark-bg">
      {/* JSON-LD Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Background blobs */}
      <div className="bg-blob top-10 left-10" />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Marquee Trust Bar */}
      <TrustBar />

      {/* 3. About Company / Story */}
      <AboutBrand />

      {/* 4. Flagship Project Highlight */}
      <FlagshipProject />

      {/* 5. Why Choose us (Value Grid) */}
      <WhyChooseUs />

      {/* 6. Why Invest in Sohna */}
      <WhyInvestSohna />

      {/* 7. Projects Gallery Preview Grid */}
      <section className="py-20 md:py-28 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
        <div className="bg-blob top-1/3 right-1/4" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Visual Portfolios
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
                Glimpse Inside Terra Elegance
              </h2>
            </div>
            <Link href="/gallery" className="shrink-0">
              <Button variant="gold-outline" className="flex items-center space-x-2">
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Masonry-like Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewImages.map((img, idx) => (
              <FadeIn key={img.id} delay={idx * 0.1} direction="up">
                <div className="group relative h-[320px] overflow-hidden border border-gold-border/20 shadow-xl cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle dark-gold gradient cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Text Overlay on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-warm-white mt-1">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Process Timeline */}
      <TimelineSection />

      {/* 9. Blog Section (New) */}
      <BlogSection />

      {/* 
        ========================================================================
        TESTIMONIALS SECTION (Commented out for next version - DO NOT DELETE CODE)
        ========================================================================
        9. Testimonials Slider Preview
        <section className="py-20 md:py-28 bg-dark-bg border-t border-gold-border/10 relative overflow-hidden">
          <div className="bg-blob bottom-10 right-10" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            
            <div className="flex flex-col items-center text-center space-y-3 mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Homeowner Reviews
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
                Families Who Found Their Forever Home
              </h2>
              <div className="h-[1px] w-12 bg-gold mt-2" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {activeTestimonials.map((t, idx) => (
                <FadeIn key={t.id} delay={idx * 0.15} direction="up" className="h-full">
                  <Card className="flex flex-col justify-between space-y-6 h-full border border-gold-border/30 relative">
                    <div className="flex space-x-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>

                    <blockquote className="font-serif text-sm md:text-base italic text-warm-white/95 leading-relaxed flex-grow">
                      "{t.quote}"
                    </blockquote>

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

            <div className="flex justify-center mt-12">
              <Link href="/testimonials">
                <Button variant="gold-outline">View All Reviews</Button>
              </Link>
            </div>

          </div>
        </section>
      */}

      {/* 10. Faq Accordion */}
      <FaqAccordion />

      {/* 11. Contact CTA Block */}
      <section className="py-20 md:py-28 bg-dark-surface border-t border-gold-border/10 relative overflow-hidden">
        <div className="bg-blob top-1/4 left-1/4" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Contact Prompts */}
            <div className="flex flex-col space-y-6 items-start">
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                  Get in Touch
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-white">
                  Your dream home starts with a conversation.
                </h2>
              </div>
              <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                Reach out to our executive real estate advisory team. Whether you need site maps, project pricing spreadsheets, or RERA certificates, we are here to support your investment journey.
              </p>
              
              <div className="flex flex-col space-y-4 pt-2 font-sans text-xs md:text-sm text-warm-white">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 border border-gold-border/20 text-gold bg-dark-bg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href={`tel:${companyDetails.phone}`} className="hover:text-gold transition-colors font-bold">
                    {companyDetails.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 border border-gold-border/20 text-gold bg-dark-bg">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <a 
                    href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold transition-colors font-bold"
                  >
                    {companyDetails.whatsapp} (WhatsApp Support)
                  </a>
                </div>
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 border border-gold-border/20 text-gold bg-dark-bg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${companyDetails.email}`} className="hover:text-gold transition-colors font-bold">
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Form CTA trigger */}
            <div className="p-8 bg-dark-bg/60 border border-gold-border/20 backdrop-blur-md flex flex-col space-y-6 items-center text-center">
              <h3 className="font-serif text-xl font-bold text-warm-white">
                Request Cost Sheet & Brochure
              </h3>
              <p className="text-xs text-warm-muted font-sans leading-relaxed">
                Submit an enquiry to get the pricing configurations, payment plans, and floor layout files for Terra Elegance Sector-7 Sohna.
              </p>
              <Link href="/contact" className="w-full">
                <Button variant="primary" className="w-full">
                  Submit Formal Enquiry
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 12. Full Width Google Maps Embed */}
      <section className="w-full h-[350px] md:h-[450px] border-t border-gold-border/10 relative">
        <iframe
          src={companyDetails.googleMapsIframeUrl}
          className="w-full h-full grayscale invert-[0.9] opacity-80"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Terra Infracon Corporate Location"
        />
        <div className="absolute bottom-4 left-4 bg-dark-bg/95 border border-gold-border/30 p-4 backdrop-blur-md hidden sm:flex items-center space-x-3 font-sans text-xs">
          <Map className="w-4 h-4 text-gold" />
          <div>
            <p className="font-bold text-warm-white">Corporate Office</p>
            <p className="text-warm-muted">{companyDetails.address.building}, Sector-49, Gurgaon</p>
          </div>
        </div>
      </section>

    </div>
  );
}
