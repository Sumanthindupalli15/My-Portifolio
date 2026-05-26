"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import {
  Send,
  Mail,
  Globe,
  GitBranch,
  MapPin,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "isumanth8@gmail.com",
      href: "mailto:isumanth8@gmail.com",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Globe,
      label: "LinkedIn",
      value: "Indupalli Sumanth",
      href: "https://www.linkedin.com/in/indupalli-sumanth-07b6651b8",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: GitBranch,
      label: "GitHub",
      value: "sumanth-indupalli",
      href: "https://github.com/sumanth-indupalli",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const inputBaseClass = "w-full px-5 py-4 rounded-2xl dark:bg-dark-900/50 bg-gray-50/80 border dark:text-white text-dark-900 placeholder-transparent focus:outline-none transition-all duration-500 peer";
  const labelBaseClass = "absolute left-5 text-sm transition-all duration-300 pointer-events-none";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-dark-950 dark:via-primary-950/[0.02] dark:to-dark-950 bg-gradient-to-b from-gray-50/50 via-primary-50/20 to-gray-50/50" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          gradient="from-indigo-400 to-cyan-400"
          subtitle="I'm always open to new opportunities and interesting projects. Feel free to reach out!"
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="group relative flex items-center gap-4 p-5 rounded-2xl dark:glass-card glass-card-light neon-border hover:border-primary-500/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${info.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={20} className="text-white/80" />
                  </div>
                  <div className="relative flex-grow">
                    <p className="text-[10px] dark:text-dark-600 text-dark-400 uppercase tracking-[0.2em] font-mono">
                      {info.label}
                    </p>
                    <p className="font-semibold dark:text-white text-dark-900 text-sm mt-0.5">
                      {info.value}
                    </p>
                  </div>
                  {info.href.startsWith("http") && (
                    <ArrowUpRight size={16} className="relative text-dark-500 group-hover:text-primary-400 transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-3xl dark:glass-card glass-card-light neon-border overflow-hidden"
            >
              {/* Form background glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/5 rounded-full blur-[80px]" />

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle size={22} />
                    </motion.div>
                    <span className="text-sm font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBaseClass} ${
                      errors.name
                        ? "border-red-500/30 focus:border-red-500/50"
                        : "dark:border-white/[0.06] border-gray-200 focus:border-primary-500/40"
                    }`}
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`${labelBaseClass} ${
                      focusedField === "name" || formData.name
                        ? "-top-2.5 text-xs text-primary-400 bg-dark-950 dark:bg-dark-950 px-2"
                        : "top-4 dark:text-dark-500 text-dark-400"
                    }`}
                  >
                    Your name
                  </label>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBaseClass} ${
                      errors.email
                        ? "border-red-500/30 focus:border-red-500/50"
                        : "dark:border-white/[0.06] border-gray-200 focus:border-primary-500/40"
                    }`}
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className={`${labelBaseClass} ${
                      focusedField === "email" || formData.email
                        ? "-top-2.5 text-xs text-primary-400 bg-dark-950 dark:bg-dark-950 px-2"
                        : "top-4 dark:text-dark-500 text-dark-400"
                    }`}
                  >
                    your@email.com
                  </label>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputBaseClass} resize-none ${
                      errors.message
                        ? "border-red-500/30 focus:border-red-500/50"
                        : "dark:border-white/[0.06] border-gray-200 focus:border-primary-500/40"
                    }`}
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className={`${labelBaseClass} ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 text-xs text-primary-400 bg-dark-950 dark:bg-dark-950 px-2"
                        : "top-4 dark:text-dark-500 text-dark-400"
                    }`}
                  >
                    Your message...
                  </label>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1.5 mt-2 text-xs text-red-400"
                    >
                      <AlertCircle size={12} />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white btn-primary overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
