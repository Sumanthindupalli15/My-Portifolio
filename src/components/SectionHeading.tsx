"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  gradient: string;
  subtitle?: string;
}

export default function SectionHeading({ title, gradient, subtitle }: Props) {
  const words = title.split(" ");
  const lastWord = words.pop();

  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase dark:bg-primary-500/5 bg-primary-500/10 text-primary-400 border dark:border-primary-500/10 border-primary-500/20 mb-6">
          {title}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold dark:text-white text-dark-900 mb-6 tracking-tight"
      >
        {words.join(" ")}{" "}
        <span className="text-gradient">{lastWord}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg dark:text-dark-400 text-dark-500 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-[2px] mx-auto mt-8 origin-center"
        style={{
          background: "linear-gradient(90deg, #6366f1, #a855f7, #06b6d4)",
        }}
      />
    </div>
  );
}
