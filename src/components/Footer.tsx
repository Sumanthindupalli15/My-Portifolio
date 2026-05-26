"use client";

import { GitBranch, Globe, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const socialLinks = [
  {
    icon: GitBranch,
    href: "https://github.com/sumanth-indupalli",
    label: "GitHub",
  },
  {
    icon: Globe,
    href: "https://www.linkedin.com/in/indupalli-sumanth-07b6651b8",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:isumanth8@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Animated gradient line */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Social Icons with magnetic hover */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <MagneticButton key={link.label} strength={0.4}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative p-3.5 rounded-2xl dark:bg-white/[0.02] bg-gray-50 dark:text-dark-400 text-dark-500 hover:text-primary-400 border dark:border-white/[0.04] border-gray-200 hover:border-primary-500/20 transition-all duration-500"
                  aria-label={link.label}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <link.icon size={20} className="relative z-10" />
                </motion.a>
              </MagneticButton>
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 via-purple-500 to-cyan-500 text-white font-bold text-xl shadow-lg shadow-primary-500/25"
          >
            IS
          </motion.div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm dark:text-dark-600 text-dark-400 font-mono">
            <span>© {new Date().getFullYear()}</span>
            <span className="dark:text-dark-700 text-dark-300">·</span>
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.div>
            <span>by Indupalli Sumanth</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
