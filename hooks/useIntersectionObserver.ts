import { useEffect, useRef, useState } from "react";

interface CustomObserverInit extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver(options: CustomObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && options.triggerOnce) {
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => {
      if (el && !options.triggerOnce) {
        observer.unobserve(el);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
}

// Global script fallback registration for standard CSS .reveal elements
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before scrolling fully in
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
