import React from "react";
import { cn } from "../../lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col space-y-1.5 text-left">
        {label && (
          <label className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full min-h-[120px] bg-dark-surface border border-gold-border/30 px-4 py-3 text-sm font-sans text-warm-white placeholder:text-warm-muted/40 rounded-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/25 transition-all duration-300 resize-y",
            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/25",
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-[11px] text-red-400 font-sans tracking-wide">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
