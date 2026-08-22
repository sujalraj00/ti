import { cn } from "../lib/utils";

export const SAMPLE_DESIGN_DISCLAIMER =
  "*Sample design shown for reference/illustrative purposes only.";

interface SampleStarProps {
  className?: string;
}

export function SampleStar({ className }: SampleStarProps) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute top-2 right-2 z-20 font-serif text-xl md:text-2xl font-bold leading-none text-gold drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]",
        className
      )}
      aria-hidden="true"
    >
      *
    </span>
  );
}

interface SampleDisclaimerProps {
  className?: string;
}

export function SampleDisclaimer({ className }: SampleDisclaimerProps) {
  return (
    <p
      className={cn(
        "text-[10px] md:text-[11px] text-warm-muted/80 font-sans italic font-light tracking-wide",
        className
      )}
    >
      {SAMPLE_DESIGN_DISCLAIMER}
    </p>
  );
}
