"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { y: "110%", rotate: 2 },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const, // Luxury cubic easing
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.25em] py-[0.1em] -my-[0.1em]">
          <motion.span
            variants={childVariants}
            className="inline-block origin-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export default TextReveal;
