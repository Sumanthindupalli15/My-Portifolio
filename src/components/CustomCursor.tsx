"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 300 });
  const scale = useMotionValue(1);
  const ringScale = useSpring(scale, { damping: 20, stiffness: 300 });
  const isVisible = useRef(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      if (!isVisible.current) {
        isVisible.current = true;
      }
    };

    const handleMouseDown = () => scale.set(0.8);
    const handleMouseUp = () => scale.set(1);

    const handleHover = () => scale.set(1.5);
    const handleUnhover = () => scale.set(1);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [cursorX, cursorY, scale]);

  // Don't render on mobile
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        style={{ x: cursorX, y: cursorY, scale: ringScale }}
      />
      <motion.div
        className="cursor-ring hidden md:block"
        style={{ x: ringX, y: ringY, scale: ringScale, translateX: -16, translateY: -16 }}
      />
    </>
  );
}
