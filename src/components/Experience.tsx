"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "Packaged App Development Associate",
    project: "Supplier Hub",
    location: "Hyderabad, India",
    period: "Feb 2024 – Present",
    description: [
      "Designed, developed, and maintained backend and frontend components of a multi-tier enterprise application following standard software engineering practices.",
      "Implemented complex PostgreSQL database functions to process and integrate high-volume supplier data into downstream SAP systems, ensuring consistency and performance.",
      "Developed scalable RESTful APIs using Node.js to support report generation and data access for user-facing applications.",
      "Built dynamic and reusable Angular UI components, improving usability and enabling user-centric workflows.",
      "Applied object-oriented design principles and data structures to implement business logic efficiently and reliably.",
      "Contributed to code reviews, debugging, and issue resolution to maintain high code quality and application stability.",
    ],
    technologies: ["Angular", "Node.js", "PostgreSQL", "SAP", "RESTful APIs", "Git"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-950 dark:via-primary-950/[0.02] dark:to-dark-950 bg-gradient-to-b from-gray-50/50 via-primary-50/20 to-gray-50/50" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          gradient="from-indigo-400 to-cyan-400"
          subtitle="Building impactful solutions at scale"
        />

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px dark:bg-dark-800 bg-gray-200 transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full origin-top"
            >
              <div className="w-full h-full bg-gradient-to-b from-primary-500 via-purple-500 to-cyan-500" />
            </motion.div>
          </div>

          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-10 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="w-4 h-4 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50" />
                    <div className="absolute -inset-2 bg-primary-500/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                  </motion.div>
                </div>

                {/* Date card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-20 md:pl-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-primary-500/5 bg-primary-50 text-primary-400 text-sm font-mono border dark:border-primary-500/10 border-primary-200 ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <Calendar size={14} />
                    {exp.period}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"} pl-20 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="relative p-8 rounded-3xl dark:glass-card glass-card-light neon-border group hover:border-primary-500/20 transition-all duration-500"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-2xl dark:bg-primary-500/10 bg-primary-50 group-hover:scale-110 transition-transform duration-300">
                          <Briefcase size={22} className="text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold dark:text-white text-dark-900">
                            {exp.role}
                          </h3>
                          <p className="text-primary-400 font-semibold mt-1">{exp.company}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm dark:text-dark-500 text-dark-400">
                            <span className="flex items-center gap-1.5">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>
                          <span className="inline-block mt-3 px-3 py-1 rounded-lg text-xs font-mono dark:bg-purple-500/10 bg-purple-50 text-purple-400 border dark:border-purple-500/10 border-purple-200">
                            Project: {exp.project}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            className="flex gap-3 text-sm dark:text-dark-300 text-dark-600 leading-relaxed"
                          >
                            <span className="text-primary-400 mt-1 flex-shrink-0 text-xs">●</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.05 }}
                            className="px-3 py-1.5 text-xs rounded-lg dark:bg-white/[0.03] bg-gray-50 dark:text-dark-300 text-dark-600 font-mono border dark:border-white/5 border-gray-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
