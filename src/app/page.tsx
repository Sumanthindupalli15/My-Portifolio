"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950"
    >
      {/* Background aurora */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <motion.div
            className="text-5xl sm:text-7xl font-bold mb-2"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(99,102,241,0)",
                "0 0 40px rgba(99,102,241,0.3)",
                "0 0 20px rgba(99,102,241,0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-gradient-hero">Indupalli</span>
            <span className="text-white ml-3">Sumanth</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm font-mono text-dark-500 tracking-[0.3em] uppercase mt-4"
        >
          Portfolio
        </motion.div>

        {/* Loading bar */}
        <div className="mt-8 mx-auto w-48 h-[1px] bg-dark-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: 0.5, duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="h-full w-full"
            style={{
              background: "linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)",
            }}
          />
        </div>
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
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
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
        </SmoothScroll>
      </motion.div>
    </>
  );
}
