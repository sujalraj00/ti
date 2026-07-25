"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, MessageSquare, Mail, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { companyDetails } from "../../data/company";
import { quickContacts, enquiryTopics } from "../../data/contact";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { FadeIn } from "../../animations/FadeIn";

// Client-side Zod validator matching the API
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9+\s-]{10,15}$/, "Phone must be 10-15 digits (plus sign allowed)"),
  email: z.string().email("Invalid email address"),
  project: z.string().min(1, "Please select an interest topic"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must consent to proceed"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactFormContent() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      project: "",
      message: "",
      consent: false,
    },
  });

  // Pre-fill project dropdown if passed in query param
  useEffect(() => {
    if (topicParam && enquiryTopics.some((t) => t.value === topicParam)) {
      setValue("project", topicParam);
    }
  }, [topicParam, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(result.message);
        reset();
      } else {
        setSubmitMessage("Submission failed. Please verify your inputs.");
      }
    } catch (err) {
      setSubmitMessage("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-dark-bg relative overflow-hidden min-h-screen pb-16">
      {/* Background decoration blob */}
      <div className="bg-blob top-10 left-10" />

      {/* Page Header */}
      <section className="relative py-20 md:py-24 border-b border-gold-border/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center space-y-4 max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Contact Registry
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-white">
            Connect With Terra
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-widest text-warm-muted">
            Request pricing sheets, schedule site visits, or consult with our architects
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5/12): Quick Contact Info & Address */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-warm-white">Our Offices</h3>
              <p className="text-xs md:text-sm text-warm-muted leading-relaxed font-sans font-light">
                For in-person consultations, visit our corporate offices in Gurugram or schedule a chauffeured site visit to our ongoing developments in Sector-7 Sohna.
              </p>
            </div>

            {/* Contacts Cards */}
            <div className="flex flex-col space-y-5">
              
              {/* Card 1: Corporate Office */}
              <div className="p-6 border border-gold-border/20 bg-dark-surface/40 backdrop-blur-md flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div className="space-y-1 text-xs">
                  <strong className="text-warm-white block font-serif text-sm">Corporate Headquarters</strong>
                  <p className="text-warm-muted font-sans font-light leading-relaxed">{quickContacts.corporateOffice}</p>
                </div>
              </div>

              {/* Card 2: Site Office */}
              <div className="p-6 border border-gold-border/20 bg-dark-surface/40 backdrop-blur-md flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div className="space-y-1 text-xs">
                  <strong className="text-warm-white block font-serif text-sm">Site Sales Pavilion</strong>
                  <p className="text-warm-muted font-sans font-light leading-relaxed">{quickContacts.siteOffice}</p>
                  <p className="text-[10px] text-gold font-bold">Timings: {quickContacts.timing}</p>
                </div>
              </div>

              {/* Card 3: Hotline Call/WhatsApp */}
              <div className="p-6 border border-gold-border/20 bg-dark-surface/40 backdrop-blur-md space-y-4">
                <strong className="text-warm-white block font-serif text-sm">Instant Connections</strong>
                <div className="flex flex-col space-y-3.5 font-sans text-xs">
                  <div className="flex items-center space-x-3 text-warm-white">
                    <Phone className="w-4 h-4 text-gold" />
                    <a href={`tel:${quickContacts.salesPhone}`} className="hover:text-gold transition-colors font-bold">
                      {quickContacts.salesPhone} (Executive Advisory Desk)
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-warm-white">
                    <MessageSquare className="w-4 h-4 text-gold" />
                    <a 
                      href={`https://wa.me/${quickContacts.whatsappNumber.replace(/\+/g, "").replace(/\s/g, "")}?text=${encodeURIComponent(quickContacts.whatsappWelcomeMessage)}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-gold transition-colors font-bold"
                    >
                      {quickContacts.whatsappNumber} (Instant WhatsApp Help)
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-warm-white">
                    <Mail className="w-4 h-4 text-gold" />
                    <a href={`mailto:${quickContacts.generalEmail}`} className="hover:text-gold transition-colors font-bold">
                      {quickContacts.generalEmail}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7/12): Enquiry Form Card */}
          <div className="lg:col-span-7">
            <Card className="p-8 md:p-10 border border-gold-border/30 bg-dark-surface/60 backdrop-blur-md">
              
              <div className="space-y-2 mb-8 text-left">
                <h3 className="font-serif text-2xl font-bold text-warm-white">Submit Enquiry Registry</h3>
                <p className="text-xs text-warm-muted font-sans font-light">
                  Required fields are marked. Submitting registers you directly with our CRM system for certified documents delivery.
                </p>
              </div>

              {/* Form container */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Submit Feedback Notification Banner */}
                {submitMessage && (
                  <div className="p-4 border border-gold/30 bg-gold/5 flex items-start space-x-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-xs font-sans text-warm-white leading-relaxed">{submitMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Full Name *"
                    placeholder="Enter name"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Input
                    label="Phone Number *"
                    placeholder="e.g. +91 9999988888"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    label="Email Address *"
                    placeholder="e.g. buyer@gmail.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <div className="w-full flex flex-col space-y-1.5 text-left">
                    <label className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">
                      Interested Project / Topic *
                    </label>
                    <select
                      className="w-full bg-dark-bg border border-gold-border/30 px-4 py-3 text-sm font-sans text-warm-white/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/25 transition-all duration-300"
                      {...register("project")}
                    >
                      <option value="" disabled>Select project or service</option>
                      {enquiryTopics.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                    {errors.project && (
                      <span className="text-[11px] text-red-400 font-sans tracking-wide">
                        {errors.project.message}
                      </span>
                    )}
                  </div>
                </div>

                <Textarea
                  label="Enquiry Details / Message"
                  placeholder="Specify preferences like configurations, budget, or request site visits..."
                  error={errors.message?.message}
                  {...register("message")}
                />

                {/* Consent Checkbox */}
                <div className="flex flex-col space-y-2 text-left">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 rounded-none accent-gold border-gold-border bg-dark-bg"
                      {...register("consent")}
                    />
                    <span className="text-[11px] text-warm-muted leading-relaxed font-sans font-light select-none">
                      I hereby authorize Terra Infracon and its executives to call, text, or WhatsApp me with updates regarding properties. I agree to the website privacy and terms of use policies.
                    </span>
                  </label>
                  {errors.consent && (
                    <span className="text-[11px] text-red-400 font-sans tracking-wide">
                      {errors.consent.message}
                    </span>
                  )}
                </div>

                {/* Submit Trigger */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-sans font-bold uppercase tracking-widest bg-gold text-dark-bg flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>[[ Validating Registry ]]</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>[[ Submit Enquiry ]]</span>
                    </>
                  )}
                </Button>

              </form>
            </Card>
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 relative z-10 h-[400px]">
        <iframe
          src={companyDetails.googleMapsIframeUrl}
          className="w-full h-full grayscale invert-[0.9] opacity-85 border border-gold-border/20"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Terra Infracon Gurgaon Headquarters Map"
        />
      </section>
    </div>
  );
}

import { Suspense } from "react";

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark-bg flex items-center justify-center space-x-2">
        <Loader2 className="w-6 h-6 text-gold animate-spin" />
        <span className="text-xs uppercase tracking-widest text-gold font-bold font-sans">Loading Enquiry Portal...</span>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
export const dynamic = "force-dynamic";
