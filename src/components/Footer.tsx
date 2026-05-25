"use client";

import { GitFork, Globe, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: GitFork,
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
    <footer className="relative border-t dark:border-white/10 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm dark:text-dark-400 text-dark-500">
            <span>© {new Date().getFullYear()} Indupalli Sumanth. Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>and Next.js</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg dark:text-dark-400 text-dark-500 hover:text-primary-400 dark:hover:bg-white/5 hover:bg-gray-100 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
