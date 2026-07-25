"use client";

import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="w-full bg-dark-bg relative overflow-hidden min-h-[80dvh] flex flex-col items-center justify-center text-center p-6 select-none">
      {/* Background decoration blob */}
      <div className="bg-blob top-1/4 left-1/4" />

      <div className="relative z-10 space-y-6 max-w-lg">
        {/* Large 404 block */}
        <div className="flex flex-col items-center space-y-2">
          <Compass className="w-16 h-16 text-gold animate-spin-slow mb-4" />
          <h1 className="font-serif text-8xl md:text-9xl font-bold tracking-tight text-gold">
            404
          </h1>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold-light font-bold">
            Space Not Found
          </p>
        </div>

        <p className="font-sans text-sm md:text-base text-warm-muted leading-relaxed font-light">
          The property, floor layout, or destination link you are trying to visit has been relocated, is under construction, or does not exist.
        </p>

        <div className="pt-4">
          <Link href="/">
            <Button variant="primary" className="flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
