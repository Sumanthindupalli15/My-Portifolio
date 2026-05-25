"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
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
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
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
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/5",
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
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/5",
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
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/5",
    skills: [
      { name: "AWS (S3)", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Engineering Practices",
    icon: Wrench,
    color: "from-rose-500 to-pink-500",
    borderColor: "border-rose-500/20",
    bgColor: "bg-rose-500/5",
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
    color: "from-cyan-500 to-sky-500",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/5",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 85 },
      { name: "OOP", level: 90 },
      { name: "Design Patterns", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-950/50 dark:via-primary-950/5 dark:to-dark-950/50 bg-gradient-to-b from-gray-50 via-primary-50/30 to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-dark-900 mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 shadow-lg dark:shadow-none card-hover h-full`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl ${category.bgColor}`}>
                    <category.icon
                      size={22}
                      className={`bg-gradient-to-r ${category.color} bg-clip-text`}
                      style={{ color: "inherit" }}
                    />
                  </div>
                  <h3 className="font-bold dark:text-white text-dark-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm dark:text-dark-300 text-dark-600">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono dark:text-dark-500 text-dark-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full dark:bg-white/5 bg-gray-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.1 + i * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
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
