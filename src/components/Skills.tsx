"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import {
  Code2,
  Layout,
  Database,
  Cloud,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    gradient: "from-indigo-500 to-blue-500",
    borderGlow: "group-hover:shadow-indigo-500/10",
    skills: [
      { name: "Java", level: 90 },
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: Layout,
    gradient: "from-emerald-500 to-teal-500",
    borderGlow: "group-hover:shadow-emerald-500/10",
    skills: [
      { name: "Angular", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Next.js", level: 70 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-amber-500 to-orange-500",
    borderGlow: "group-hover:shadow-amber-500/10",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "SQL (Advanced)", level: 85 },
      { name: "Functions & Queries", level: 85 },
      { name: "Optimization", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-violet-500 to-purple-500",
    borderGlow: "group-hover:shadow-violet-500/10",
    skills: [
      { name: "AWS (S3)", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Engineering Practices",
    icon: Wrench,
    gradient: "from-rose-500 to-pink-500",
    borderGlow: "group-hover:shadow-rose-500/10",
    skills: [
      { name: "SDLC", level: 90 },
      { name: "Code Reviews", level: 85 },
      { name: "Unit Testing", level: 80 },
      { name: "Git Version Control", level: 90 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
  {
    title: "Computer Science",
    icon: CheckCircle2,
    gradient: "from-cyan-500 to-sky-500",
    borderGlow: "group-hover:shadow-cyan-500/10",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 85 },
      { name: "OOP", level: 90 },
      { name: "Design Patterns", level: 80 },
    ],
  },
];

const marqueeItems = [
  "Java", "C++", "Python", "TypeScript", "Angular", "Node.js", "React", "Next.js",
  "PostgreSQL", "AWS", "Docker", "Git", "REST APIs", "GraphQL", "Redis", "Kafka",
  "Tailwind", "GSAP", "Framer Motion", "D3.js",
];

function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-6 mb-16">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r dark:from-dark-950 from-gray-50 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l dark:from-dark-950 from-gray-50 to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="mx-4 px-5 py-2.5 rounded-xl text-sm font-mono dark:bg-white/[0.02] bg-white dark:text-dark-400 text-dark-500 border dark:border-white/[0.04] border-gray-200 inline-block hover:border-primary-500/20 hover:text-primary-400 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-950 dark:via-primary-950/[0.02] dark:to-dark-950 bg-gradient-to-b from-gray-50/50 via-primary-50/20 to-gray-50/50" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          gradient="from-indigo-400 to-purple-400"
          subtitle="Technologies and tools I work with"
        />

        {/* Infinite Tech Marquee */}
        <TechMarquee />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className={`group relative p-7 rounded-3xl dark:glass-card glass-card-light neon-border h-full transition-all duration-500 hover:border-primary-500/20 ${category.borderGlow} hover:shadow-xl`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />

                {/* Header */}
                <div className="relative flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={22} className="text-white/80" />
                  </div>
                  <h3 className="font-bold dark:text-white text-dark-900 text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with animated progress bars */}
                <div className="relative space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm dark:text-dark-300 text-dark-600 font-medium">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.1 + i * 0.1 + 0.5 }}
                          className="text-xs font-mono dark:text-dark-500 text-dark-400 tabular-nums"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-1.5 rounded-full dark:bg-white/[0.04] bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: catIndex * 0.08 + i * 0.08,
                            ease: [0.21, 0.47, 0.32, 0.98],
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient} relative overflow-hidden`}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
