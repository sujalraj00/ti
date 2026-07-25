"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost" | "gold-outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-widest transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-gold/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden select-none",
          
          // Variants
          variant === "primary" && 
            "bg-gold text-dark-bg border border-gold hover:shadow-[0_0_20px_rgba(197,168,92,0.4)]",
            
          variant === "ghost" && 
            "bg-transparent text-gold border border-gold hover:bg-gold hover:text-dark-bg",
            
          variant === "gold-outline" && 
            "bg-transparent text-warm-white border border-gold-border hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(197,168,92,0.15)]",
            
          variant === "text" && 
            "bg-transparent text-gold hover:text-gold-light p-0 border-none inline-flex items-center space-x-1.5 normal-case tracking-normal hover-underline-lux",
            
          // Sizes
          size === "sm" && "px-4 py-2.5 text-[10px]",
          size === "md" && "px-6 py-3.5 text-xs",
          size === "lg" && "px-8 py-4.5 text-xs md:text-sm",
          className
        )}
        {...props}
      >
        {/* Shine hover effect for primary and ghost/gold-outline buttons */}
        {variant !== "text" && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shine_1.5s_ease-in-out_infinite] pointer-events-none" />
        )}
        
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
