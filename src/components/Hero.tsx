"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(rgba(51,141,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,141,252,0.03)_1px,transparent_1px)] bg-[linear-gradient(rgba(51,141,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(51,141,252,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-400/5 rounded-full blur-[80px]"
      />

      {/* Geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            delay: i * 2,
          }}
          className="absolute border dark:border-primary-500/10 border-primary-500/20 rounded-lg"
          style={{
            width: 20 + i * 15,
            height: 20 + i * 15,
            top: `${15 + i * 13}%`,
            left: `${10 + i * 15}%`,
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

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-mono dark:bg-primary-500/10 bg-primary-500/10 text-primary-400 border dark:border-primary-500/20 border-primary-500/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="dark:text-white text-dark-900">Hi, I&apos;m </span>
          <span className="text-gradient">Indupalli Sumanth</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl mb-6 h-10"
        >
          <span className="dark:text-dark-300 text-dark-600">I&apos;m a </span>
          <span className="text-primary-400 font-mono">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-[3px] h-7 bg-primary-400 ml-1 align-middle"
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base sm:text-lg dark:text-dark-400 text-dark-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Software Engineer with 2+ years of experience building scalable applications.
          Passionate about clean code, data structures, and crafting elegant solutions
          to complex problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
          >
            <ExternalLink size={18} />
            View My Work
          </motion.a>
          <motion.a
            href="/api/resume"
            download="Indupalli_Sumanth_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-3 dark:glass glass-light rounded-xl font-medium dark:text-white text-dark-800 dark:hover:bg-white/10 hover:bg-gray-50 transition-all"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs dark:text-dark-500 text-dark-400 font-mono">scroll down</span>
          <ArrowDown size={16} className="dark:text-dark-500 text-dark-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
