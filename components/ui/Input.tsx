import React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col space-y-2 text-left">
        {label && (
          <label className="text-[10px] uppercase tracking-[0.2em] text-warm-muted font-bold">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full bg-dark-surface border border-gold-border px-4 py-3 text-sm font-sans text-warm-white placeholder:text-warm-muted/30 rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 focus:shadow-[0_0_15px_rgba(197,168,92,0.08)] transition-all duration-400",
            error && "border-red-500/40 focus:border-red-500 focus:ring-red-500/30",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-red-400 font-sans tracking-wide">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
