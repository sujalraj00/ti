"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold-dark origin-left z-[10000] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;
