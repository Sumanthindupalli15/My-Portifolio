"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ExternalLink, GitBranch, Layers, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Supplier Hub",
    description:
      "Multi-tier enterprise application for managing supplier data with high-volume data integration into SAP systems. Features complex PostgreSQL functions, RESTful APIs, and dynamic Angular UI components.",
    technologies: ["Angular", "Node.js", "PostgreSQL", "SAP", "REST APIs"],
    github: "#",
    live: "#",
    featured: true,
    gradient: "from-indigo-500 to-blue-500",
    accent: "indigo",
  },
  {
    title: "API Report Generator",
    description:
      "Scalable RESTful API service built with Node.js for automated report generation and data access. Supports high-volume data processing with optimized database queries and caching strategies.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Redis"],
    github: "#",
    live: "#",
    featured: true,
    gradient: "from-emerald-500 to-teal-500",
    accent: "emerald",
  },
  {
    title: "Cloud Storage Manager",
    description:
      "AWS S3-based file management system with secure upload/download capabilities, access control, and automated backup scheduling. Features a clean React interface for file operations.",
    technologies: ["React", "AWS S3", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false,
    gradient: "from-violet-500 to-purple-500",
    accent: "violet",
  },
  {
    title: "Data Pipeline Optimizer",
    description:
      "High-performance data pipeline for processing and transforming supplier data between multiple systems. Implements efficient algorithms for data validation, deduplication, and synchronization.",
    technologies: ["Python", "PostgreSQL", "Apache Kafka", "Docker"],
    github: "#",
    live: "#",
    featured: false,
    gradient: "from-amber-500 to-orange-500",
    accent: "amber",
  },
  {
    title: "RAG Q&A Agent",
    description:
      "AI-powered Q&A agent using Retrieval-Augmented Generation. Upload documents, embed them with OpenAI, store vectors in PostgreSQL (pgvector), and get accurate answers with source citations.",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI", "PostgreSQL", "pgvector", "Next.js", "AWS S3"],
    github: "https://github.com/yourusername/rag-qa-agent",
    live: "#",
    featured: true,
    gradient: "from-cyan-500 to-sky-500",
    accent: "cyan",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js 14 and Framer Motion. Features smooth animations, dark/light mode, and a clean design system with Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    featured: false,
    gradient: "from-rose-500 to-pink-500",
    accent: "rose",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive web application for visualizing sorting and graph algorithms. Built to help understand data structures and algorithm concepts through step-by-step animations.",
    technologies: ["React", "TypeScript", "D3.js", "CSS Modules"],
    github: "#",
    live: "#",
    featured: false,
    gradient: "from-sky-500 to-blue-500",
    accent: "sky",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 20, stiffness: 200 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="h-full"
      >
        <div className="group relative h-full rounded-3xl dark:glass-card glass-card-light neon-border overflow-hidden transition-all duration-500 hover:border-primary-500/20">
          {/* Top gradient accent line */}
          <div className={`h-[2px] bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Hover glow overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />

          <div className="p-7 flex flex-col h-full relative">
            {/* Header */}
            <div className="flex items-start justify-between mb-5">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10 dark:bg-opacity-10`}>
                <Layers size={22} className="text-white/80" />
              </div>
              <div className="flex items-center gap-1.5">
                {project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl dark:text-dark-500 text-dark-400 hover:text-primary-400 dark:hover:bg-white/5 hover:bg-gray-100 transition-all duration-300"
                    aria-label="View source code"
                  >
                    <GitBranch size={18} />
                  </motion.a>
                )}
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl dark:text-dark-500 text-dark-400 hover:text-primary-400 dark:hover:bg-white/5 hover:bg-gray-100 transition-all duration-300"
                  aria-label="View live project"
                >
                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold dark:text-white text-dark-900 mb-3 group-hover:text-primary-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm dark:text-dark-400 text-dark-500 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t dark:border-white/[0.04] border-gray-100">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs rounded-lg dark:bg-white/[0.03] bg-gray-50 dark:text-dark-400 text-dark-500 font-mono border dark:border-white/[0.04] border-gray-200 hover:border-primary-500/20 hover:text-primary-400 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          gradient="from-indigo-400 to-cyan-400"
          subtitle="A selection of projects I've worked on, ranging from enterprise applications to personal explorations"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
