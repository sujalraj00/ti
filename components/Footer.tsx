"use client";

import Link from "next/link";
import { companyDetails } from "../data/company";
import { footerLinks } from "../data/navigation";
import { socialLinks } from "../data/social";

// Custom inline SVG icons matching Lucide's style (24x24, stroke width 2, rounded caps)
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
                const IconComponent = iconMap[social.iconName];
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
                id="newsletter-email"
                type="email"
                required
                autoComplete="email"
                name="email"
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
            <strong className="text-gold font-semibold">RERA DISCLAIMER:</strong> The project details, plans, images, specifications, and values shown on this website are intended for demonstration purposes only. Complete project details, prices, and floor plans will be updated immediately upon receiving approved final files from the client. RERA registration number: <span className="text-warm-white font-medium">{companyDetails.rera}</span>.
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
