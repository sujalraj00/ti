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
    <footer className="bg-dark-surface border-t border-gold-border/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration blob */}
      <div className="bg-blob bottom-0 right-0 opacity-40 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Profile */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors">
                TERRA INFRACON
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-warm-muted">
                Crafting Dream Homes
              </span>
            </Link>
            <p className="text-xs text-warm-muted leading-relaxed font-sans max-w-sm">
              {companyDetails.description}
            </p>
            <div className="flex flex-col space-y-1 pt-2 font-sans text-[11px] text-warm-muted">
              <span>GST Registration: <strong className="text-warm-white">{companyDetails.gst}</strong></span>
              <span>HARERA Registration: <strong className="text-warm-white">{companyDetails.rera}</strong></span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social) => {
                // Dynamic resolution of Lucide Icons
                const IconComponent = (Icons as any)[social.iconName];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gold-border/20 text-warm-muted hover:text-gold hover:border-gold transition-all duration-300"
                    title={social.platform}
                  >
                    {IconComponent ? <IconComponent className="w-4 h-4" /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Directory */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-gold-border/10 pb-2">
              Our Portfolios
            </h3>
            <ul className="flex flex-col space-y-2.5 font-sans text-xs">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-warm-muted hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-gold-border/10 pb-2">
              Corporate Office
            </h3>
            <address className="not-italic flex flex-col space-y-3 font-sans text-xs text-warm-muted">
              <p className="leading-relaxed">
                {companyDetails.address.suite}, {companyDetails.address.building},<br />
                {companyDetails.address.sector}, {companyDetails.address.street},<br />
                {companyDetails.address.city}, {companyDetails.address.state} - {companyDetails.address.pinCode}
              </p>
              <div className="flex flex-col space-y-1 border-t border-gold-border/10 pt-3">
                <span>Phone: <a href={`tel:${companyDetails.phone}`} className="text-warm-white hover:text-gold">{companyDetails.phone}</a></span>
                <span>WhatsApp: <a href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`} className="text-warm-white hover:text-gold" target="_blank" rel="noopener noreferrer">{companyDetails.whatsapp}</a></span>
                <span>Email: <a href={`mailto:${companyDetails.email}`} className="text-warm-white hover:text-gold">{companyDetails.email}</a></span>
              </div>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-gold-border/10 pb-2">
              Newsletter Registry
            </h3>
            <p className="text-xs text-warm-muted leading-relaxed font-sans">
              Subscribe to receive exclusive launches, construction updates, and investment analysis briefings.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2 pt-1">
              <input
                type="email"
                required
                placeholder="Enter corporate email"
                className="w-full bg-dark-bg border border-gold-border/30 px-3.5 py-2 text-xs font-sans text-warm-white placeholder:text-warm-muted/50 rounded-none focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gold text-dark-bg hover:bg-gold-light py-2 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer Warning */}
        <div className="border-t border-gold-border/10 pt-8 pb-4">
          <p className="text-[10px] text-warm-muted/80 leading-relaxed font-sans text-justify">
            <strong className="text-gold">RERA DISCLAIMER:</strong> The project details, plans, images, specifications, and values shown on this website (such as unit layouts, floor configurations, starting prices, brochure downloads, gallery images, and drone views) marked with double brackets e.g. <span className="text-gold-light">"[[...]]"</span> are premium placeholder representations. They are intended for demonstration purposes only. Complete project details, prices, and floor plans will be updated immediately upon receiving approved final files from the client. RERA registration number: <span className="text-warm-white">{companyDetails.rera}</span>.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gold-border/10 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-warm-muted font-sans">
          <p>© {new Date().getFullYear()} Terra Infracon Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
