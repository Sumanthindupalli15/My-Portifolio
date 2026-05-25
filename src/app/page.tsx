"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center dark:bg-dark-950 bg-white"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-7xl font-bold text-gradient mb-4"
        >
          {"<IS />"}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-sm font-mono dark:text-dark-400 text-dark-500"
        >
          Loading portfolio...
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
          className="h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 mt-4 rounded-full mx-auto max-w-[200px]"
        />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
