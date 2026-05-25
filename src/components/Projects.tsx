"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, GitFork, Layers } from "lucide-react";

const projects = [
  {
    title: "Supplier Hub",
    description:
      "Multi-tier enterprise application for managing supplier data with high-volume data integration into SAP systems. Features complex PostgreSQL functions, RESTful APIs, and dynamic Angular UI components.",
    technologies: ["Angular", "Node.js", "PostgreSQL", "SAP", "REST APIs"],
    github: "#",
    live: "#",
    featured: true,
    color: "from-primary-500/20 to-blue-500/20",
  },
  {
    title: "API Report Generator",
    description:
      "Scalable RESTful API service built with Node.js for automated report generation and data access. Supports high-volume data processing with optimized database queries and caching strategies.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Redis"],
    github: "#",
    live: "#",
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Cloud Storage Manager",
    description:
      "AWS S3-based file management system with secure upload/download capabilities, access control, and automated backup scheduling. Features a clean React interface for file operations.",
    technologies: ["React", "AWS S3", "Node.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Data Pipeline Optimizer",
    description:
      "High-performance data pipeline for processing and transforming supplier data between multiple systems. Implements efficient algorithms for data validation, deduplication, and synchronization.",
    technologies: ["Python", "PostgreSQL", "Apache Kafka", "Docker"],
    github: "#",
    live: "#",
    featured: false,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "RAG Q&A Agent",
    description:
      "AI-powered Q&A agent using Retrieval-Augmented Generation. Upload documents, embed them with OpenAI, store vectors in PostgreSQL (pgvector), and get accurate answers with source citations. Features a conversational Next.js interface with drag-and-drop upload, conversation history, and expandable source references.",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI", "PostgreSQL", "pgvector", "Next.js", "AWS S3"],
    github: "https://github.com/yourusername/rag-qa-agent",
    live: "#",
    featured: true,
    color: "from-indigo-500/20 to-cyan-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js 14 and Framer Motion. Features smooth animations, dark/light mode, and a clean design system with Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    featured: false,
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive web application for visualizing sorting and graph algorithms. Built to help understand data structures and algorithm concepts through step-by-step animations.",
    technologies: ["React", "TypeScript", "D3.js", "CSS Modules"],
    github: "#",
    live: "#",
    featured: false,
    color: "from-cyan-500/20 to-sky-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-dark-900 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="mt-4 dark:text-dark-400 text-dark-500 max-w-2xl mx-auto">
              A selection of projects I&apos;ve worked on, ranging from enterprise applications to personal explorations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full rounded-2xl dark:bg-dark-900/80 bg-white border dark:border-white/5 border-gray-200 overflow-hidden shadow-lg dark:shadow-none"
              >
                {/* Gradient header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.color}`}
                />

                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-xl dark:bg-white/5 bg-gray-100">
                      <Layers size={24} className="text-primary-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg dark:text-dark-400 text-dark-500 hover:text-primary-400 dark:hover:bg-white/5 hover:bg-gray-100 transition-colors"
                        aria-label="View source code"
                      >
                        <GitFork size={18} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg dark:text-dark-400 text-dark-500 hover:text-primary-400 dark:hover:bg-white/5 hover:bg-gray-100 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold dark:text-white text-dark-900 mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm dark:text-dark-400 text-dark-500 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-lg dark:bg-white/5 bg-gray-100 dark:text-dark-300 text-dark-600 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
