"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Check,
  Info,
  FileText,
  Calendar,
  Compass,
  Phone,
  MessageSquare,
  Mail,
  Layers,
  Landmark,
  Download,
  X,
} from "lucide-react";

import { projects } from "../../../data/project";
import { companyDetails } from "../../../data/company";
import { generateProjectSchema } from "../../../data/seo";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { FadeIn } from "../../../animations/FadeIn";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const project = projects.find((p) => p.id === id);

  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "location"
  >("overview");

  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);
  const [isFloorPlanLightboxOpen, setIsFloorPlanLightboxOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  const projectSchema = generateProjectSchema(project, companyDetails);

  // Get other/related projects
  const relatedProjects = projects.filter((p) => p.id !== project.id);

  // ── LAUNCHING SOON: minimal page ──────────────────────────────────────
  if (project.status === "Launch Soon") {
    return (
      <div className="w-full bg-dark-bg relative overflow-hidden pb-16">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectSchema),
          }}
        />

        {/* Hero Banner */}
        <section className="relative h-[70dvh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${project.images.hero}')`,
            }}
          />
        </section>

        {/* Contact for More Information */}
        <section className="max-w-2xl mx-auto px-6 md:px-12 pt-16 relative z-10">
          <div className="bg-dark-surface border border-gold-border p-8 md:p-10 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Coming Soon
              </span>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-warm-white">
                Contact Us for More Information
              </h2>

              <p className="text-sm text-warm-muted font-sans font-light leading-relaxed max-w-md mx-auto">
                This project is launching soon. Register your interest below and
                our team will reach out with exclusive pre-launch details.
              </p>
            </div>

            {/* Enquiry Form */}
            <form
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitMessage(null);
                setSubmitError(null);

                const formData = new FormData(e.currentTarget);
                const payload = {
                  name: formData.get("name") as string,
                  phone: formData.get("phone") as string,
                  email: formData.get("email") as string,
                  project: project.name,
                  message: "Pre-launch Interest Registration",
                  consent: true,
                };

                try {
                  const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  const result = await response.json();

                  if (response.ok && result.success) {
                    setSubmitMessage(
                      "Thank you! Your interest has been registered. We will contact you with pre-launch details soon."
                    );
                  } else {
                    setSubmitError(
                      result.message ||
                      "Failed to submit request. Please try again."
                    );
                  }
                } catch {
                  setSubmitError(
                    "A connection error occurred. Please try again later."
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-4"
            >
              <div className="space-y-3">
                <input
                  type="text"
                  id="launch-soon-name"
                  name="name"
                  required
                  disabled={isSubmitting}
                  placeholder="Your Name"
                  suppressHydrationWarning
                  className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-3 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                />

                <input
                  type="tel"
                  id="launch-soon-phone"
                  name="phone"
                  required
                  disabled={isSubmitting}
                  placeholder="Phone Number"
                  suppressHydrationWarning
                  className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-3 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                />

                <input
                  type="email"
                  id="launch-soon-email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  placeholder="Email Address"
                  suppressHydrationWarning
                  className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-3 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                />
              </div>

              {submitMessage && (
                <p className="text-[11px] text-gold font-sans font-medium bg-gold/10 border border-gold/20 p-3">
                  {submitMessage}
                </p>
              )}

              {submitError && (
                <p className="text-[11px] text-red-500 font-sans font-medium bg-red-950/20 border border-red-900/30 p-3">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-dark-bg hover:bg-gold-light py-3.5 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Mail className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? "Submitting..."
                    : "Register Interest"}
                </span>
              </button>
            </form>

            {/* Call / WhatsApp */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${companyDetails.phone}`}
                className="py-3 border border-gold-border/40 hover:border-gold text-center text-xs font-bold text-warm-white uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call Us</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.whatsapp
                  .replace(/\+/g, "")
                  .replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 border border-gold-border/40 hover:border-gold text-center text-xs font-bold text-warm-white uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 border-t border-gold-border/15 mt-20 relative z-10">
            <div className="flex flex-col space-y-2 mb-10 text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                Explore More
              </span>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-white">
                Related Residences
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="border border-gold-border/20 bg-dark-surface p-6 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                      {p.type}
                    </span>

                    <h4 className="font-serif text-xl font-bold text-warm-white group-hover:text-gold transition-colors">
                      {p.name}
                    </h4>

                    <div className="flex items-center space-x-1.5 text-xs text-warm-muted font-sans">
                      <MapPin className="w-3.5 h-3.5 text-gold/80" />
                      <span>{p.location}</span>
                    </div>

                    <p className="text-xs text-warm-muted leading-relaxed font-sans font-light line-clamp-2 pt-2">
                      {p.shortDescription}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${p.id}`}
                    className="text-xs font-bold text-gold uppercase tracking-widest hover:underline inline-flex items-center space-x-1"
                  >
                    <span>View Details</span>
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // Form submission handler
  const handleBrochureRequest = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      project: project.name,
      message: "Brochure & Price Sheet Request",
      consent: true,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage(
          "Thank you! Your enquiry has been submitted. The download links have been activated."
        );

        alert(
          `Brochure and Price Sheet request successful! PDF downloads simulated.`
        );
      } else {
        setSubmitError(
          result.message || "Failed to submit request. Please try again."
        );
      }
    } catch (err) {
      setSubmitError(
        "A connection error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-dark-bg relative overflow-hidden pb-16">
      {/* JSON-LD Project Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      {/* ============================================================
          1. LARGE LUXURY HERO BANNER
      ============================================================ */}
      <section className="relative h-[60dvh] w-full flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.images.hero}')`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-10">
          <div className="max-w-4xl flex flex-col space-y-4 items-start">
            {/* Status & Type Pills */}
            {/*
            <div className="flex items-center space-x-2">
              <span className="bg-gold text-dark-bg text-[9px] uppercase tracking-widest font-bold px-3 py-1">
                {project.status}
              </span>

              <span className="bg-dark-surface/80 border border-gold-border text-warm-white text-[9px] uppercase tracking-widest font-bold px-3 py-1 backdrop-blur-sm">
                {project.type}
              </span>
            </div>
            */}

            {/*
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-warm-white">
              {project.name}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-sans text-warm-muted">
              <span className="flex items-center space-x-1.5 text-gold">
                <MapPin className="w-4 h-4" />
                <span className="tracking-wide uppercase font-bold">
                  {project.location}
                </span>
              </span>

              <span className="hidden sm:inline">|</span>

              <span>
                HARERA Reg:{" "}
                <strong className="text-warm-white">
                  {project.rera.replace(/\[\[|\]\]/g, "")}
                </strong>
              </span>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* ============================================================
          2. DOUBLE-COLUMN OVERVIEW & ENQUIRY
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ========================================================
              LEFT COLUMN
          ======================================================== */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            {/* Navigation Tabs */}
            <div className="flex border-b border-gold-border/20">
              {["overview", "specs", "location"].map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(
                      tab as "overview" | "specs" | "location"
                    )
                  }
                  className={`px-6 py-4.5 text-[10px] font-sans uppercase tracking-widest border-b-2 font-bold transition-all ${activeTab === tab
                    ? "border-gold text-gold"
                    : "border-transparent text-warm-muted hover:text-warm-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* ======================================================
                TAB 1: OVERVIEW
            ====================================================== */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-warm-white">
                    Project Overview
                  </h3>

                  <p className="text-sm md:text-base text-warm-muted leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>

                {/* Quick highlights metrics grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-dark-surface/40 border border-gold-border/20 p-6 md:p-8">
                  {/*
                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-warm-muted uppercase tracking-widest">
                      Starting Price
                    </span>

                    <span className="font-serif text-lg font-bold text-gold">
                      {project.startingPrice.replace(/\[\[|\]\]/g, "")}
                    </span>
                  </div>
                  */}

                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-warm-muted uppercase tracking-widest">
                      Configurations
                    </span>

                    <span className="font-serif text-lg font-bold text-gold">
                      {project.configurations.replace(/\[\[|\]\]/g, "")}
                    </span>
                  </div>

                  {/*
                  <div className="flex flex-col space-y-1">
                    <span className="text-[10px] text-warm-muted uppercase tracking-widest">
                      Unit Sizes
                    </span>

                    <span className="font-serif text-lg font-bold text-gold">
                      {project.unitSizes.replace(/\[\[|\]\]/g, "")}
                    </span>
                  </div>
                  */}

                  {/*
                  <div className="flex flex-col space-y-1 sm:col-span-1 pt-4 border-t border-gold-border/10 sm:border-none sm:pt-0">
                    <span className="text-[10px] text-warm-muted uppercase tracking-widest">
                      Possession Date
                    </span>

                    <span className="font-serif text-lg font-bold text-gold">
                      {project.possessionDate.replace(/\[\[|\]\]/g, "")}
                    </span>
                  </div>
                  */}

                  <div className="flex flex-col space-y-1 pt-4 border-t border-gold-border/10 sm:border-none sm:pt-0">
                    <span className="text-[10px] text-warm-muted uppercase tracking-widest">
                      Project Type
                    </span>

                    <span className="font-serif text-lg font-bold text-gold">
                      {project.type}
                    </span>
                  </div>

                  <div className="flex flex-col space-y-1 pt-4 border-t border-gold-border/10 sm:border-none sm:pt-0">
                    <span className="text-[10px] text-warm-muted uppercase tracking-widest">
                      License Status
                    </span>

                    <span className="font-serif text-lg font-bold text-gold">
                      RERA Approved
                    </span>
                  </div>
                </div>

                {/* Key Highlights */}
                {project.highlights.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-bold text-warm-white">
                      Key Highlights
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {project.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start space-x-2 font-sans text-xs"
                        >
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />

                          <div>
                            <strong className="text-warm-white block">
                              {h.label}
                            </strong>

                            <span className="text-warm-muted font-light">
                              {h.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================
                TAB 2: SPECIFICATIONS
            ====================================================== */}
            {activeTab === "specs" && (
              <div className="space-y-8 animate-fadeIn">
                <h3 className="font-serif text-2xl font-bold text-warm-white">
                  Architectural Specifications
                </h3>

                {project.specifications.length === 0 ? (
                  <p className="text-xs text-warm-muted uppercase tracking-widest">
                    Specifications will be updated shortly.
                  </p>
                ) : (
                  <div className="space-y-6">
                    {project.specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gold-border/10 pb-5 last:border-none"
                      >
                        <h4 className="font-serif text-base font-bold text-gold mb-3">
                          {spec.category}
                        </h4>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-warm-muted font-sans font-light">
                          {spec.details.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ======================================================
                TAB 3: LOCATION
            ====================================================== */}
            {activeTab === "location" && (
              <div className="space-y-8 animate-fadeIn">
                <h3 className="font-serif text-2xl font-bold text-warm-white">
                  Connectivity & Locations
                </h3>

                {project.locationAdvantages.length === 0 ? (
                  <p className="text-xs text-warm-muted uppercase tracking-widest">
                    Location advantages will be updated shortly.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {project.locationAdvantages.map((adv, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="font-serif text-base font-bold text-gold border-b border-gold-border/15 pb-1">
                          {adv.category}
                        </h4>

                        <ul className="space-y-2 text-xs md:text-sm text-warm-muted font-sans font-light">
                          {adv.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2"
                            >
                              <span className="w-1 h-1 bg-gold rounded-full shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Location Map */}
                {project.images.masterPlan &&
                  project.images.masterPlan.startsWith("/") && (
                    <div className="mt-8 border border-gold-border/20 p-6 bg-dark-surface/40 flex flex-col space-y-4">
                      <h4 className="font-serif text-base font-bold text-warm-white">
                        Location Map & Proximity
                      </h4>

                      <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto overflow-hidden border border-gold-border/10 bg-dark-bg">
                        <Image
                          src={project.images.masterPlan}
                          alt="Terra Elegance Location Map"
                          fill
                          sizes="(max-width: 768px) 100vw, 672px"
                          className="object-contain p-2"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs pt-2 font-sans">
                        <span className="text-warm-muted">
                          Sector-7 Sohna, Gurugram Location Layout Map
                        </span>

                        <a
                          href={project.images.masterPlan}
                          download
                          className="px-4 py-2 border border-gold bg-gold text-dark-bg font-sans text-xs uppercase tracking-widest font-bold hover:bg-gold-light transition-all"
                        >
                          Download Location Map
                        </a>
                      </div>
                    </div>
                  )}
              </div>
            )}

            {/* ======================================================
                3. FLOOR & MASTER PLANS
            ====================================================== */}
            <div className="border-t border-gold-border/25 pt-10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-warm-white">
                Floor & Master Plans
              </h3>

              {project.images.floorPlans &&
                project.images.floorPlans.length > 0 &&
                project.images.floorPlans[0].startsWith("/") ? (
                <div className="space-y-6">
                  {/* Floor plan selectors */}
                  <div className="flex flex-wrap gap-2">
                    {project.images.floorPlans.map((plan, idx) => {
                      const filename = plan.split("/").pop() || "";

                      let displayName = filename
                        .replace(/-/g, " ")
                        .replace(/\.[^/.]+$/, "");

                      if (filename.includes("161"))
                        displayName = "161 Stilt Floor";
                      else if (filename.includes("162-168-stilt"))
                        displayName = "162-168 Stilt Floor";
                      else if (filename.includes("162-168-typical"))
                        displayName = "162-168 Typical Floor";
                      else if (filename.includes("162-168-terrrace"))
                        displayName = "162-168 Terrace";
                      else if (filename.includes("171-177-typical-stilt"))
                        displayName = "171-177 Typical-Stilt Floor";
                      else if (filename.includes("171-177-typical"))
                        displayName = "171-177 Typical Floor";

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedFloorPlan(idx)}
                          className={`px-4.5 py-2.5 text-[10px] font-sans uppercase tracking-widest border transition-all duration-300 ${selectedFloorPlan === idx
                            ? "bg-gold text-dark-bg border-gold font-bold"
                            : "bg-transparent text-warm-white border-gold-border/20 hover:border-gold/50"
                            }`}
                        >
                          {displayName}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active plan preview */}
                  <div className="border border-gold-border/20 bg-dark-surface/40 p-6 flex flex-col items-center space-y-4">
                    <div
                      className="relative w-full h-[400px] md:h-[500px] bg-dark-bg border border-gold-border/10 cursor-pointer overflow-hidden group"
                      onClick={() =>
                        setIsFloorPlanLightboxOpen(true)
                      }
                    >
                      <Image
                        src={
                          project.images.floorPlans[
                          selectedFloorPlan
                          ]
                        }
                        alt={
                          project.images.floorPlans[
                            selectedFloorPlan
                          ].split("/").pop() ||
                          "Floor Plan Layout"
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 border border-gold text-gold font-bold text-xs uppercase tracking-widest bg-dark-surface">
                          Click to Expand Layout
                        </span>
                      </div>
                    </div>

                    {/* Preview controls */}
                    <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs pt-2 font-sans">
                      <div className="text-warm-muted text-center sm:text-left">
                        <span className="font-bold text-warm-white uppercase tracking-wider block text-[10px]">
                          Active Blueprint:
                        </span>

                        {(() => {
                          const plan =
                            project.images.floorPlans[
                            selectedFloorPlan
                            ];

                          const filename =
                            plan.split("/").pop() || "";

                          if (filename.includes("161"))
                            return "161 Stilt Floor Plan";

                          if (filename.includes("162-168-stilt"))
                            return "162-168 Stilt Floor Plan";

                          if (filename.includes("162-168-typical"))
                            return "162-168 Typical Floor Plan";

                          if (filename.includes("162-168-terrrace"))
                            return "162-168 Terrace Floor Plan";

                          if (filename.includes("171-177-typical-stilt"))
                            return "171-177 Typical-Stilt Floor Plan";

                          if (filename.includes("171-177-typical"))
                            return "171-177 Typical Floor Plan";

                          return filename;
                        })()}
                      </div>

                      <div className="flex space-x-3 w-full sm:w-auto justify-center">
                        <Button
                          variant="gold-outline"
                          size="sm"
                          onClick={() =>
                            setIsFloorPlanLightboxOpen(true)
                          }
                        >
                          Enlarge Plan
                        </Button>

                        <a
                          href={
                            project.images.floorPlans[
                            selectedFloorPlan
                            ]
                          }
                          download
                          className="px-4 py-2 border border-gold bg-gold text-dark-bg font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-gold-light transition-all flex items-center"
                        >
                          Download Layout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Floor Plan Placeholder */}
                  <div className="border border-dashed border-gold-border/30 bg-dark-surface/30 p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <Layers className="w-10 h-10 text-gold/60" />

                    <div className="space-y-1">
                      <h4 className="font-serif text-base font-bold text-warm-white">
                        Floor Plan Layout
                      </h4>

                      <p className="text-[10px] font-sans text-warm-muted uppercase tracking-widest">
                        3 BHK & 4 BHK Layout Drafts
                      </p>
                    </div>

                    <p className="text-xs text-warm-muted leading-relaxed font-sans font-light max-w-[240px]">
                      Detailed blueprint drawings, dimensions, and layout maps
                      will be updated immediately upon client clearance.
                    </p>

                    <Button
                      variant="gold-outline"
                      size="sm"
                      className="opacity-80 cursor-not-allowed"
                    >
                      Preview Plan
                    </Button>
                  </div>

                  {/* Master Plan Placeholder */}
                  <div className="border border-dashed border-gold-border/30 bg-dark-surface/30 p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <Compass className="w-10 h-10 text-gold/60" />

                    <div className="space-y-1">
                      <h4 className="font-serif text-base font-bold text-warm-white">
                        Master Plan Layout
                      </h4>

                      <p className="text-[10px] font-sans text-warm-muted uppercase tracking-widest">
                        Plot Enclave Topology
                      </p>
                    </div>

                    <p className="text-xs text-warm-muted leading-relaxed font-sans font-light max-w-[240px]">
                      Landscape pathway grids, botanical gardens, and
                      peripheral road placements.
                    </p>

                    <Button
                      variant="gold-outline"
                      size="sm"
                      className="opacity-80 cursor-not-allowed"
                    >
                      Preview Layout
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* ======================================================
                4. CONSTRUCTION UPDATES
            ====================================================== */}
            <div className="border-t border-gold-border/25 pt-10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-warm-white">
                Construction Status Logs
              </h3>

              <div className="border border-gold-border/20 bg-dark-surface/20 p-6 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-sans text-gold font-bold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />

                  <span>Dynamic Construction Timeline</span>
                </div>

                <div className="space-y-3 font-sans text-xs text-warm-muted font-light pl-6 border-l border-gold-border/20">
                  <div>
                    <strong className="text-warm-white block uppercase tracking-wider text-[10px]">
                      Q1 2026 update:
                    </strong>

                    <p>
                      {project.images.constructionUpdates[0]?.replace(
                        /\[\[|\]\]/g,
                        ""
                      ) ||
                        "RCC Foundation slabs and pillar frames casting completed."}
                    </p>
                  </div>

                  <div className="pt-2">
                    <strong className="text-warm-white block uppercase tracking-wider text-[10px]">
                      Q2 2026 update:
                    </strong>

                    <p>
                      {project.images.constructionUpdates[1]?.replace(
                        /\[\[|\]\]/g,
                        ""
                      ) ||
                        "Internal partition brickwork and electrical conduit mappings ongoing."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN — STICKY ENQUIRY SIDEBAR
          ======================================================== */}
          <div className="lg:col-span-4">
            <aside className="sticky top-[100px] bg-dark-surface border border-gold-border p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="space-y-1">
                <h4 className="font-serif text-xl font-bold text-warm-white">
                  Brochure & Price Sheet
                </h4>

                <p className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  Project Downloads
                </p>
              </div>

              <div className="border-y border-gold-border/10 py-4.5 space-y-3.5 font-sans text-xs text-warm-muted">
                <div className="flex justify-between">
                  <span>Brochure Size:</span>

                  <strong className="text-warm-white">
                    Brochure.PDF - 4.2 MB
                  </strong>
                </div>

                <div className="flex justify-between">
                  <span>Price List:</span>

                  <strong className="text-warm-white">
                    PriceSheet.PDF - 850 KB
                  </strong>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleBrochureRequest}
                className="space-y-4"
              >
                <p className="text-xs text-warm-muted font-sans leading-relaxed">
                  Enter your details below to unlock downloads and request
                  pricing lists.
                </p>

                <div className="space-y-3">
                  <input
                    type="text"
                    id="brochure-name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="Your Name"
                    suppressHydrationWarning
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                  />

                  <input
                    type="tel"
                    id="brochure-phone"
                    name="phone"
                    required
                    disabled={isSubmitting}
                    placeholder="Phone Number"
                    suppressHydrationWarning
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                  />

                  <input
                    type="email"
                    id="brochure-email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Email Address"
                    suppressHydrationWarning
                    className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2.5 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                  />
                </div>

                {submitMessage && (
                  <p className="text-[11px] text-gold font-sans font-medium bg-gold/10 border border-gold/20 p-2.5">
                    {submitMessage}
                  </p>
                )}

                {submitError && (
                  <p className="text-[11px] text-red-500 font-sans font-medium bg-red-950/20 border border-red-900/30 p-2.5">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-dark-bg hover:bg-gold-light py-3 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Download className="w-4 h-4" />

                  <span>
                    {isSubmitting
                      ? "Submitting..."
                      : "Download Brochure"}
                  </span>
                </button>
              </form>

              {/* Call / WhatsApp */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="py-2.5 border border-gold-border/40 hover:border-gold text-center text-xs font-bold text-warm-white uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.whatsapp
                    .replace(/\+/g, "")
                    .replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 border border-gold-border/40 hover:border-gold text-center text-xs font-bold text-warm-white uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. RELATED PROJECTS
      ============================================================ */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 border-t border-gold-border/15 mt-20 relative z-10">
          <div className="flex flex-col space-y-2 mb-10 text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
              Explore More
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-white">
              Related Residences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <div
                key={p.id}
                className="border border-gold-border/20 bg-dark-surface p-6 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                    {p.type}
                  </span>

                  <h4 className="font-serif text-xl font-bold text-warm-white group-hover:text-gold transition-colors">
                    {p.name}
                  </h4>

                  <div className="flex items-center space-x-1.5 text-xs text-warm-muted font-sans">
                    <MapPin className="w-3.5 h-3.5 text-gold/80" />

                    <span>{p.location}</span>
                  </div>

                  <p className="text-xs text-warm-muted leading-relaxed font-sans font-light line-clamp-2 pt-2">
                    {p.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/projects/${p.id}`}
                  className="text-xs font-bold text-gold uppercase tracking-widest hover:underline inline-flex items-center space-x-1"
                >
                  <span>View Details</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          FLOOR PLAN LIGHTBOX
      ============================================================ */}
      {isFloorPlanLightboxOpen &&
        project.images.floorPlans &&
        project.images.floorPlans.length > 0 && (
          <div
            onClick={() => setIsFloorPlanLightboxOpen(false)}
            className="fixed inset-0 bg-dark-bg/95 backdrop-blur-md z-[10000] flex items-center justify-center p-6 md:p-12 cursor-pointer"
          >
            <button
              onClick={() => setIsFloorPlanLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 bg-dark-surface border border-gold-border text-warm-white hover:text-gold transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <span className="font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-1">
                Close X
              </span>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4"
            >
              <div className="relative w-full h-[70dvh] flex items-center justify-center">
                <img
                  src={
                    project.images.floorPlans[selectedFloorPlan]
                  }
                  alt="Floor Plan Full Resolution"
                  className="max-w-full max-h-full object-contain border border-gold-border/20 shadow-2xl bg-white"
                />
              </div>

              <div className="text-center space-y-1">
                <h2 className="font-serif text-lg font-bold text-warm-white text-center">
                  {(() => {
                    const plan =
                      project.images.floorPlans[
                      selectedFloorPlan
                      ];

                    const filename =
                      plan.split("/").pop() || "";

                    if (filename.includes("161"))
                      return "161 Stilt Floor Plan";

                    if (filename.includes("162-168-stilt"))
                      return "162-168 Stilt Floor Plan";

                    if (filename.includes("162-168-typical"))
                      return "162-168 Typical Floor Plan";

                    if (filename.includes("162-168-terrrace"))
                      return "162-168 Terrace Floor Plan";

                    if (filename.includes("171-177-typical-stilt"))
                      return "171-177 Typical-Stilt Floor Plan";

                    if (filename.includes("171-177-typical"))
                      return "171-177 Typical Floor Plan";

                    return filename;
                  })()}
                </h2>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}