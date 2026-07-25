"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorType = "default" | "hover" | "drag" | "view";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Highly dampened luxurious springs for smooth follow delay
  const springConfig = { damping: 45, stiffness: 350, mass: 0.55 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const closestLink = target.closest("a");
      const closestButton = target.closest("button") || target.closest("[role='button']");
      const closestDrag = target.closest(".cursor-drag") || target.classList.contains("cursor-drag");
      const closestView = target.closest(".cursor-view") || target.classList.contains("cursor-view") || target.tagName === "IMG";

      if (closestDrag) {
        setCursorType("drag");
      } else if (closestView) {
        setCursorType("view");
      } else if (closestLink || closestButton || target.classList.contains("interactive")) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Outer ring scales and backgrounds depending on the hovered element
  const getOuterVariants = () => {
    switch (cursorType) {
      case "hover":
        return {
          scale: 1.6,
          backgroundColor: "rgba(197, 168, 92, 0.1)",
          borderColor: "var(--gold-primary)",
        };
      case "drag":
        return {
          scale: 2.2,
          backgroundColor: "var(--gold-primary)",
          borderColor: "var(--gold-primary)",
        };
      case "view":
        return {
          scale: 2.2,
          backgroundColor: "var(--gold-primary)",
          borderColor: "var(--gold-primary)",
        };
      default:
        return {
          scale: isClicking ? 0.8 : 1,
          backgroundColor: "rgba(197, 168, 92, 0)",
          borderColor: "rgba(197, 168, 92, 0.4)",
        };
    }
  };

  return (
    <>
      {/* Dynamic Cursor Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[9999] hidden md:flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={getOuterVariants()}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
      >
        {/* Dynamic inner text for special actions */}
        {(cursorType === "drag" || cursorType === "view") && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-dark-bg font-sans font-bold text-[7px] uppercase tracking-widest"
          >
            {cursorType}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Pinpoint Dot */}
      {cursorType !== "drag" && cursorType !== "view" && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999] hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: cursorType === "hover" ? 0.3 : 1,
            backgroundColor: cursorType === "hover" ? "var(--gold-light)" : "var(--gold-primary)",
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </>
  );
}

export default CustomCursor;
