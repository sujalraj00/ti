"use client";

import React from "react";
import { companyDetails } from "../data/company";

export default function FloatingEnquireButton() {
  const cleanNumber = companyDetails.whatsapp.replace(/\+/g, "").replace(/\s/g, "");
  const defaultMessage = encodeURIComponent(
    "Hello Terra Infracon, I would like to enquire about your luxury residential floors."
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Quick WhatsApp Enquiry"
      className="fixed bottom-6 right-6 z-[9999] pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative flex items-center gap-2.5
          bg-dark-surface/95 hover:bg-dark-surface
          backdrop-blur-md
          border border-gold-border/60 hover:border-[#25D366]
          text-warm-white
          pl-3 pr-4 py-2.5 sm:py-3
          rounded-full
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          hover:shadow-[0_8px_32px_rgba(37,211,102,0.3)]
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:scale-105
          cursor-pointer select-none
        "
      >
        {/* Glow halo */}
        <span
          className="
            absolute -inset-0.5 rounded-full
            bg-gradient-to-r from-gold/20 via-[#25D366]/25 to-gold/20
            blur-sm opacity-0 group-hover:opacity-100
            transition-opacity duration-300 -z-10
          "
        />

        {/* WhatsApp Icon Circle with Pulsing Beacon */}
        <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] text-white shadow-sm flex-shrink-0">
          <svg
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.2.3-.777.978-.953 1.179-.175.2-.351.226-.652.075-.3-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.613.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.151-.677-1.63-.928-2.232-.244-.587-.492-.507-.677-.517-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507 0 1.479 1.078 2.908 1.229 3.109.15.2 2.121 3.238 5.138 4.542.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9-.12.58-.352 1.78-1.258 2.03-1.836.25-.578.25-1.074.175-1.174-.075-.1-.275-.15-.576-.301zM12 2a9.93 9.93 0 00-8.583 14.93L2 22l5.228-1.37A9.932 9.932 0 1012 2zm0 18.2a8.217 8.217 0 01-4.195-1.15l-.3-.178-3.111.816.83-3.033-.196-.312A8.225 8.225 0 1112 20.2z"
              fill="currentColor"
            />
          </svg>

          {/* Online green indicator dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] ring-2 ring-dark-surface" />
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[9px] uppercase tracking-widest text-gold font-semibold">
            Chat With Us
          </span>
          <span className="text-xs sm:text-[13px] font-sans font-bold uppercase tracking-wider text-warm-white group-hover:text-gold transition-colors">
            Enquire Now
          </span>
        </div>
      </a>
    </aside>
  );
}
