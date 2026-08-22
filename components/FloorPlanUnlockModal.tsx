"use client";

import { useState } from "react";
import { X, Mail, Loader2 } from "lucide-react";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";

export const FLOOR_PLAN_UNLOCK_KEY = "terra-floor-plans-unlocked";

interface FloorPlanUnlockModalProps {
  projectName: string;
  onClose: () => void;
  onUnlocked: () => void;
}

export function FloorPlanUnlockModal({
  projectName,
  onClose,
  onUnlocked,
}: FloorPlanUnlockModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      project: projectName,
      message:
        (formData.get("message") as string) ||
        "Floor plan enquiry — Contact Us for More Information",
      consent: true,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        sessionStorage.setItem(FLOOR_PLAN_UNLOCK_KEY, "true");
        onUnlocked();
      } else {
        setError(
          result.message ||
            "Could not submit your enquiry. Please check the details and try again."
        );
      }
    } catch {
      setError("A connection error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-dark-bg/90 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="floor-plan-enquiry-title"
    >
      <div
        className="relative w-full max-w-lg bg-dark-surface border border-gold-border p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-warm-white hover:text-gold transition-colors"
          aria-label="Close enquiry form"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6 pr-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Floor Plans
          </span>
          <h2
            id="floor-plan-enquiry-title"
            className="font-serif text-2xl md:text-3xl font-bold text-warm-white"
          >
            Contact Us for More Information
          </h2>
          <p className="text-xs md:text-sm text-warm-muted font-sans font-light leading-relaxed">
            Share your details to view the floor plans for {projectName}. Our
            team will also follow up with additional project information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label="Full Name"
            placeholder="Your name"
            required
            minLength={2}
            disabled={isSubmitting}
            autoComplete="name"
          />
          <Input
            name="phone"
            type="tel"
            label="Phone"
            placeholder="10–15 digit mobile number"
            required
            pattern="[0-9+\s-]{10,15}"
            title="Phone must be 10-15 digits"
            disabled={isSubmitting}
            autoComplete="tel"
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            required
            disabled={isSubmitting}
            autoComplete="email"
          />
          <Textarea
            name="message"
            label="Query (optional)"
            placeholder="Tell us what you would like to know…"
            disabled={isSubmitting}
            className="min-h-[88px]"
          />

          {error && (
            <p className="text-[11px] text-red-400 font-sans bg-red-950/20 border border-red-900/30 p-2.5">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting…</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Submit Query</span>
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
