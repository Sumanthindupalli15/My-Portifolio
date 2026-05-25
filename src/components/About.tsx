"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Code2, Database, Cloud, GitBranch, Layout, Server } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2, category: "language" },
  { name: "C++", icon: Code2, category: "language" },
  { name: "Python", icon: Code2, category: "language" },
  { name: "TypeScript", icon: Code2, category: "language" },
  { name: "Angular", icon: Layout, category: "framework" },
  { name: "Node.js", icon: Server, category: "framework" },
  { name: "RESTful APIs", icon: Server, category: "framework" },
  { name: "Next.js", icon: Layout, category: "framework" },
  { name: "PostgreSQL", icon: Database, category: "database" },
  { name: "SQL", icon: Database, category: "database" },
  { name: "AWS (S3)", icon: Cloud, category: "cloud" },
  { name: "Git", icon: GitBranch, category: "tool" },
  { name: "VS Code", icon: Code2, category: "tool" },
];

const categoryColors: Record<string, string> = {
  language: "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/20",
  framework: "from-emerald-500/20 to-emerald-600/20 text-emerald-400 border-emerald-500/20",
  database: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/20",
  cloud: "from-violet-500/20 to-violet-600/20 text-violet-400 border-violet-500/20",
  tool: "from-rose-500/20 to-rose-600/20 text-rose-400 border-rose-500/20",
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-dark-900 mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg dark:text-dark-300 text-dark-600 leading-relaxed">
                I&apos;m a Software Engineer with <span className="text-primary-400 font-semibold">2+ years</span> of experience
                in designing, developing, and maintaining scalable software applications. Currently working
                at <span className="text-primary-400 font-semibold">Accenture</span> as a Packaged App Development Associate.
              </p>
              <p className="text-lg dark:text-dark-300 text-dark-600 leading-relaxed">
                I have a strong foundation in computer science fundamentals including data structures, algorithms,
                object-oriented design, and software engineering principles. I&apos;m experienced in building
                RESTful APIs, multi-tier applications, and backend systems with a focus on performance, reliability,
                and code quality.
              </p>
              <p className="text-lg dark:text-dark-300 text-dark-600 leading-relaxed">
                Passionate about writing clean, testable code and continuously improving engineering productivity.
                I work collaboratively with cross-functional teams to deliver features within defined timelines.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "5+", label: "Certifications" },
                  { number: "10+", label: "Technologies" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl dark:bg-dark-900/50 bg-white border dark:border-white/5 border-gray-200"
                  >
                    <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-xs dark:text-dark-400 text-dark-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-xl font-semibold dark:text-white text-dark-900 mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r border ${
                      categoryColors[skill.category]
                    } text-sm font-medium cursor-default`}
                  >
                    <skill.icon size={14} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-8 text-xs dark:text-dark-400 text-dark-500">
                {[
                  { label: "Languages", color: "bg-blue-400" },
                  { label: "Frameworks", color: "bg-emerald-400" },
                  { label: "Databases", color: "bg-amber-400" },
                  { label: "Cloud", color: "bg-violet-400" },
                  { label: "Tools", color: "bg-rose-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
