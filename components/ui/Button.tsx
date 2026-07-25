import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "gold-outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          variant === "primary" && "bg-gold text-dark-bg hover:bg-gold-light hover:-translate-y-0.5 border border-gold hover:border-gold-light",
          variant === "ghost" && "bg-transparent text-gold border border-gold hover:bg-gold hover:text-dark-bg hover:-translate-y-0.5",
          variant === "gold-outline" && "bg-transparent text-warm-white border border-gold-border hover:border-gold hover:text-gold",
          variant === "text" && "bg-transparent text-gold hover:text-gold-light p-0 border-none inline-flex items-center space-x-1.5 normal-case tracking-normal",
          // Sizes
          size === "sm" && "px-4 py-2 text-[10px]",
          size === "md" && "px-6 py-3 text-xs",
          size === "lg" && "px-8 py-4 text-sm",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
