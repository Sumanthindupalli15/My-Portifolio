"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionVariants: Record<string, { hidden: Variant; visible: Variant }> = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function ScrollReveal({
  children,
  width = "100%",
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = directionVariants[direction];

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
