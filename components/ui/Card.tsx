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
          variant === "glass" && "glass-card",
          variant === "solid" && "bg-dark-surface border border-gold-border/20 shadow-xl",
          variant === "borderless" && "bg-transparent border-none p-0",
          hoverEffect && variant !== "glass" && "hover:bg-dark-surface-hover hover:border-gold/30 hover:-translate-y-1 hover:shadow-2xl",
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
