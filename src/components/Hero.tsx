"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg grid-fade" />

      {/* Aurora blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/15 rounded-full aurora-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full aurora-blob-2" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500/8 rounded-full aurora-blob-3" />

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 360],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12 + i * 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
          className="absolute border dark:border-primary-400/[0.07] border-primary-400/10 rounded-xl"
          style={{
            width: 30 + i * 20,
            height: 30 + i * 20,
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
        />
      ))}

      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, -60, 0],
            x: [0, Math.sin(i) * 20, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 rounded-full bg-primary-400/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Problem Solver",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
    sectionRef.current.style.setProperty("--mouse-x", `${x}%`);
    sectionRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 35 : 70
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden spotlight"
      onMouseMove={handleMouseMove}
    >
      <AuroraBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono dark:bg-white/[0.03] bg-gray-50 text-primary-400 border dark:border-white/[0.06] border-gray-200 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="dark:text-dark-300 text-dark-600">Available for opportunities</span>
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[0.9]"
        >
          <span className="dark:text-white text-dark-900 block sm:inline">Hi, I&apos;m </span>
          <span className="text-gradient-hero block mt-2 sm:mt-0">
            Indupalli Sumanth
          </span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center"
        >
          <span className="dark:text-dark-400 text-dark-500">I&apos;m a </span>
          <span className="text-primary-400 font-mono ml-2">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-[3px] h-7 bg-primary-400 ml-1 align-middle rounded-full"
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg dark:text-dark-400 text-dark-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Software Engineer with 2+ years of experience building scalable applications.
          Passionate about clean code, data structures, and crafting elegant solutions
          to complex problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl font-medium text-white overflow-hidden btn-primary"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink size={18} />
                View My Work
              </span>
            </motion.a>
          </MagneticButton>

          <MagneticButton>
            <motion.a
              href="/api/resume"
              download="Indupalli_Sumanth_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-medium dark:text-white text-dark-800 dark:glass-card glass-card-light hover:border-primary-500/20 transition-all duration-500"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] dark:text-dark-600 text-dark-400 font-mono tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border dark:border-dark-700 border-dark-300 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary-400"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t dark:from-dark-950 from-white to-transparent" />
    </section>
  );
}
