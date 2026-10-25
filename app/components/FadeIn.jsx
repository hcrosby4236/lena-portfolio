"use client";

import { motion, useReducedMotion } from "motion/react";

export default function FadeIn({
  children,
  delay = 0,
  onScroll = false,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 30,
      }}
      animate={onScroll ? undefined : { opacity: 1, y: 0 }}
      whileInView={onScroll ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}