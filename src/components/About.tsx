"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Code2, Database, Cloud, GitBranch, Layout, Server, Briefcase, Award, Zap } from "lucide-react";

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
  language: "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30",
  framework: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/10 hover:border-emerald-500/30",
  database: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/10 hover:border-amber-500/30",
  cloud: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/10 hover:border-violet-500/30",
  tool: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/10 hover:border-rose-500/30",
};

const stats = [
  { number: "2+", label: "Years Experience", icon: Briefcase },
  { number: "5+", label: "Certifications", icon: Award },
  { number: "10+", label: "Technologies", icon: Zap },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 200 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      className="text-3xl sm:text-4xl font-bold text-gradient"
    >
      {target}{suffix}
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          gradient="from-indigo-400 to-purple-400"
          subtitle="A passionate engineer who loves building things that make a difference"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Bio Card - Spans 2 columns */}
          <ScrollReveal className="lg:col-span-2">
            <TiltCard className="h-full">
              <div className="relative p-8 rounded-3xl dark:glass-card glass-card-light neon-border h-full group hover:border-primary-500/20 transition-all duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative space-y-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                    <span className="text-xs font-mono text-primary-400 uppercase tracking-[0.2em]">Who I Am</span>
                  </div>
                  <p className="text-lg dark:text-dark-300 text-dark-600 leading-relaxed">
                    I&apos;m a Software Engineer with <span className="text-primary-400 font-semibold">2+ years</span> of experience
                    in designing, developing, and maintaining scalable software applications. Currently working
                    at <span className="text-primary-400 font-semibold">Accenture</span> as a Packaged App Development Associate.
                  </p>
                  <p className="text-lg dark:text-dark-300 text-dark-600 leading-relaxed">
                    I have a strong foundation in computer science fundamentals including data structures, algorithms,
                    object-oriented design, and software engineering principles. Experienced in building
                    RESTful APIs, multi-tier applications, and backend systems.
                  </p>
                  <p className="text-lg dark:text-dark-300 text-dark-600 leading-relaxed">
                    Passionate about writing clean, testable code and continuously improving engineering productivity.
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Stats Cards */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-rows-3 gap-4 md:gap-6 h-full">
              {stats.map((stat, i) => (
                <TiltCard key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="relative p-6 rounded-2xl dark:glass-card glass-card-light neon-border group hover:border-primary-500/20 transition-all duration-500 h-full flex items-center"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-4 w-full">
                      <div className="p-3 rounded-xl dark:bg-primary-500/10 bg-primary-50 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <AnimatedCounter target={stat.number} />
                        <div className="text-xs dark:text-dark-500 text-dark-400 mt-1 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </ScrollReveal>

          {/* Tech Stack Card - Full width */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div className="relative p-8 rounded-3xl dark:glass-card glass-card-light neon-border group hover:border-primary-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em]">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r border ${
                      categoryColors[skill.category]
                    } text-sm font-medium cursor-default transition-all duration-300 backdrop-blur-sm`}
                  >
                    <skill.icon size={14} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-6 mt-8 text-xs dark:text-dark-500 text-dark-400">
                {[
                  { label: "Languages", color: "bg-indigo-400" },
                  { label: "Frameworks", color: "bg-emerald-400" },
                  { label: "Databases", color: "bg-amber-400" },
                  { label: "Cloud", color: "bg-violet-400" },
                  { label: "Tools", color: "bg-rose-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
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
