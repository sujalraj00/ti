"use client";

import Link from "next/link";
import { companyDetails } from "../data/company";
import { footerLinks } from "../data/navigation";
import { socialLinks } from "../data/social";
import * as Icons from "lucide-react";

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our premium newsletter registry!");
  };

  return (
    <footer className="bg-dark-surface border-t border-gold-border pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration blob */}
      <div className="bg-blob bottom-0 right-0 opacity-20 translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Company Profile */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif text-xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors duration-500">
                TERRA INFRACON
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-warm-muted">
                Crafting Dream Homes
              </span>
            </Link>
            <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">
              {companyDetails.description}
            </p>
            <div className="flex flex-col space-y-1.5 pt-1 font-sans text-[10px] text-warm-muted">
              <span>GSTIN: <strong className="text-warm-white font-medium">{companyDetails.gst}</strong></span>
              <span>HARERA: <strong className="text-warm-white font-medium">{companyDetails.rera}</strong></span>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social) => {
                const IconComponent = (Icons as any)[social.iconName];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-gold-border text-warm-muted hover:text-gold hover:border-gold hover:shadow-[0_0_10px_rgba(197,168,92,0.15)] transition-all duration-500"
                    title={social.platform}
                  >
                    {IconComponent ? <IconComponent className="w-3.5 h-3.5" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Portfolios */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-bold border-b border-gold-border/20 pb-2.5">
              Our Portfolios
            </h3>
            <ul className="flex flex-col space-y-3 font-sans text-xs">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-warm-muted hover:text-gold hover:pl-1 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Address */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-bold border-b border-gold-border/20 pb-2.5">
              Corporate Office
            </h3>
            <address className="not-italic flex flex-col space-y-4 font-sans text-xs text-warm-muted font-light">
              <p className="leading-relaxed">
                {companyDetails.address.suite}, {companyDetails.address.building},<br />
                {companyDetails.address.sector}, {companyDetails.address.street},<br />
                {companyDetails.address.city}, {companyDetails.address.state} - {companyDetails.address.pinCode}
              </p>
              <div className="flex flex-col space-y-2 border-t border-gold-border/15 pt-4 text-[11px]">
                <span className="flex items-center gap-2">
                  <span className="text-gold font-medium">T:</span>
                  <a href={`tel:${companyDetails.phone}`} className="text-warm-white hover:text-gold transition-colors">{companyDetails.phone}</a>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-gold font-medium">W:</span>
                  <a href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`} className="text-warm-white hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">{companyDetails.whatsapp}</a>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-gold font-medium">E:</span>
                  <a href={`mailto:${companyDetails.email}`} className="text-warm-white hover:text-gold transition-colors">{companyDetails.email}</a>
                </span>
              </div>
            </address>
          </div>

          {/* Column 4: Newsletter Registry */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-bold border-b border-gold-border/20 pb-2.5">
              Newsletter Registry
            </h3>
            <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">
              Subscribe to receive exclusive launches, construction updates, and investment analysis briefings.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2.5 pt-1">
              <input
                type="email"
                required
                placeholder="Enter corporate email"
                className="w-full bg-dark-bg border border-gold-border px-3.5 py-3 text-xs font-sans text-warm-white placeholder:text-warm-muted/30 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gold text-dark-bg hover:bg-gold-light py-3 font-sans text-[11px] uppercase tracking-widest font-bold transition-all duration-500 cursor-pointer"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        {/* RERA Disclaimer */}
        <div className="border-t border-gold-border/20 pt-8 pb-4">
          <p className="text-[10px] text-warm-muted/70 leading-relaxed font-sans text-justify font-light">
            <strong className="text-gold font-semibold">RERA DISCLAIMER:</strong> The project details, plans, images, specifications, and values shown on this website (such as unit layouts, floor configurations, starting prices, brochure downloads, gallery images, and drone views) marked with double brackets e.g. <span className="text-gold-light">"[[...]]"</span> are premium placeholder representations. They are intended for demonstration purposes only. Complete project details, prices, and floor plans will be updated immediately upon receiving approved final files from the client. RERA registration number: <span className="text-warm-white font-medium">{companyDetails.rera}</span>.
          </p>
        </div>

        {/* Bottom footer bar */}
        <div className="border-t border-gold-border/15 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-warm-muted font-sans font-light">
          <p>© {new Date().getFullYear()} Terra Infracon Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
