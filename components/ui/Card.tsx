import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "borderless";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 md:p-8 rounded-none transition-all duration-500",
          variant === "glass" && "bg-dark-surface/60 backdrop-blur-md border border-gold-border",
          variant === "solid" && "bg-dark-surface border border-gold-border/40",
          variant === "borderless" && "bg-transparent border-none p-0",
          hoverEffect && "hover:bg-dark-surface-hover/80 hover:border-gold/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
