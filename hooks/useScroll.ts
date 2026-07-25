import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollState, setScrollState] = useState({
    y: 0,
    x: 0,
    direction: "up" as "up" | "down",
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      const isScrolled = currentScrollY > 50;

      setScrollState({
        y: currentScrollY,
        x: currentScrollX,
        direction,
        isScrolled,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollState;
}
