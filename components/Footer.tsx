"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowUp,
  Building2,
} from "lucide-react";
import { companyDetails } from "../data/company";
import { footerLinks } from "../data/navigation";
import { socialLinks } from "../data/social";

// Custom inline SVG icons matching Lucide's style
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Twitter: TwitterIcon,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-surface border-t border-gold-border/40 pt-16 pb-8 relative overflow-hidden text-warm-white">
      {/* Background Glow Overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Top Banner Accent */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10">
        <div className="border border-gold-border/20 bg-dark-bg/60 backdrop-blur-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold to-gold-dark" />
          <div className="space-y-1 text-center md:text-left pl-2">
            <h4 className="font-serif text-lg md:text-xl font-bold tracking-wide text-warm-white">
              Elevate Your Living Experience Near Gurugram
            </h4>
            <p className="text-xs text-warm-muted font-sans font-light">
              Explore boutique independent floors crafted with privacy, elegance & modern engineering.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 border border-gold bg-gold text-dark-bg font-sans text-xs uppercase tracking-widest font-bold hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(197,168,92,0.15)] flex items-center gap-2 group-hover:scale-105"
          >
            <Building2 className="w-4 h-4" />
            <span>Schedule Site Visit</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Column 1: Brand & Credentials */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="font-serif text-2xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors duration-300">
                TERRA INFRACON
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-warm-muted font-sans font-medium flex items-center gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                Crafting Dream Homes
              </span>
            </Link>

            <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">
              {companyDetails.description}
            </p>

            {/* Credentials Badges */}
            <div className="flex flex-col space-y-2 pt-1 font-sans text-[11px]">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-gold-border/20 bg-dark-bg/40 w-fit text-warm-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>GSTIN: <strong className="text-warm-white font-medium">{companyDetails.gst}</strong></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-gold-border/20 bg-dark-bg/40 w-fit text-warm-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>HARERA: <strong className="text-warm-white font-medium">{companyDetails.rera}</strong></span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-warm-muted/80 block mb-2 font-sans font-medium">
                Connect With Us
              </span>
              <div className="flex items-center space-x-2.5">
                {socialLinks.map((social) => {
                  const IconComponent = iconMap[social.iconName];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center border border-gold-border/30 bg-dark-bg/40 text-warm-muted hover:text-dark-bg hover:bg-gold hover:border-gold hover:scale-110 transition-all duration-300"
                      title={social.platform}
                    >
                      {IconComponent ? <IconComponent className="w-3.5 h-3.5" /> : null}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Our Portfolios */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-bold border-b border-gold-border/25 pb-2.5 flex items-center justify-between">
              <span>Portfolios</span>
              <span className="w-6 h-px bg-gold/40" />
            </h3>
            <ul className="flex flex-col space-y-3 font-sans text-xs">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-warm-muted hover:text-gold transition-colors duration-300"
                  >
                    <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-transform duration-300 mr-1.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-bold border-b border-gold-border/25 pb-2.5 flex items-center justify-between">
              <span>Company</span>
              <span className="w-6 h-px bg-gold/40" />
            </h3>
            <ul className="flex flex-col space-y-3 font-sans text-xs">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-warm-muted hover:text-gold transition-colors duration-300"
                  >
                    <ChevronRight className="w-3 h-3 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-transform duration-300 mr-1.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate Office & Newsletter */}
          <div className="flex flex-col space-y-5">
            <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-gold font-bold border-b border-gold-border/25 pb-2.5 flex items-center justify-between">
              <span>Corporate Office</span>
              <span className="w-6 h-px bg-gold/40" />
            </h3>

            <address className="not-italic flex flex-col space-y-3.5 font-sans text-xs text-warm-muted font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {companyDetails.address.suite}, {companyDetails.address.building},<br />
                  {companyDetails.address.sector}, {companyDetails.address.street},<br />
                  {companyDetails.address.city}, {companyDetails.address.state} - {companyDetails.address.pinCode}
                </p>
              </div>

              <div className="flex flex-col space-y-2 border-t border-gold-border/15 pt-3 text-xs">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="flex items-center gap-2 text-warm-muted hover:text-gold transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{companyDetails.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-warm-muted hover:text-gold transition-colors group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={`mailto:${companyDetails.email}`}
                  className="flex items-center gap-2 text-warm-muted hover:text-gold transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{companyDetails.email}</span>
                </a>

                <div className="flex items-center gap-2 text-warm-muted/80 text-[11px] pt-1">
                  <Clock className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                  <span>{companyDetails.officeTimings}</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* RERA Disclaimer Box */}
        <div className="border border-gold-border/20 bg-dark-bg/50 p-4 md:p-5 mb-8">
          <p className="text-[10px] text-warm-muted/80 leading-relaxed font-sans text-justify font-light">
            <strong className="text-gold font-semibold">SAMPLE DESIGNS:</strong> *Sample design shown for reference/illustrative purposes only.{" "}
            <strong className="text-gold font-semibold">RERA DISCLAIMER:</strong> The project details, plans, images, specifications, and values shown on this website are intended for demonstration purposes only. Complete project details, prices, and floor plans will be updated immediately upon receiving approved final files from the client. RERA registration number: <span className="text-warm-white font-medium">{companyDetails.rera}</span>.
          </p>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gold-border/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-warm-muted font-sans font-light">
          <p>© {new Date().getFullYear()} Terra Infracon Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">
              Terms of Use
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gold hover:text-gold-light transition-colors group cursor-pointer ml-2"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
