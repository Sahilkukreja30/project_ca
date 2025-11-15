"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * CoreValues.jsx
 *
 * Usage:
 *  import CoreValues from "@/components/CoreValues";
 *  <CoreValues variant="dark" /> // variant optional: "dark" or "light" (default: light)
 *
 * Requirements:
 *  - Tailwind CSS in your project
 *  - framer-motion installed
 */

const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: (i = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

export default function CoreValues({ variant = "light" }) {
  const isDark = variant === "dark";

  const values = [
    {
      id: "responsive",
      title: "Responsive to needs of clients",
      body:
        "We don’t believe in one-size-fits-all solutions. Our approach combines decades of experience, clear communication, and genuine insight into your business to deliver outcomes tailored specifically to you.",
    },
    {
      id: "ethical",
      title: "Ethical business practice",
      body:
        "We uphold the highest standards of integrity. We strive to foster relationships with our clients built on the pillars of transparency, reliability, and trust between both parties.",
    },
    {
      id: "professional",
      title: "Professional Expertise",
      body:
        "Harnessing a decade of experience and specialized knowledge to deliver precise, reliable, and impactful solutions for your business.",
    },
    {
      id: "collaboration",
      title: "Collaborative approach",
      body:
        "We partner closely with our clients, combining domain expertise and practical execution to deliver pragmatic solutions that drive measurable value.",
    },
  ];

  return (
    <section
      aria-labelledby="core-values-heading"
      className={`${isDark ? "bg-[#071C2C] text-sky-100" : "bg-white text-slate-800"} relative overflow-visible py-16 px-6`}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 id="core-values-heading" className={`text-2xl md:text-3xl font-semibold ${isDark ? "text-white" : "text-[#0F2742]"}`}>
            Our Core Values
          </h2>
          <p className={`${isDark ? "text-sky-300" : "text-slate-600"} mt-2 max-w-2xl mx-auto`}>
            The guiding principles that shape our client relationships, delivery standards and culture.
          </p>
        </div>

        {/* Grid wrapper */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
          {/* Top-left card */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={cardAnim}
            className={`w-full max-w-md md:max-w-xs p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-[#0F2742]"}`}>{values[0].title}</h3>
            <p className={`${isDark ? "text-sky-200" : "text-slate-700"} text-sm leading-relaxed`}>{values[0].body}</p>
          </motion.article>

          {/* Top-right card */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
            variants={cardAnim}
            className={`w-full max-w-md md:max-w-xs p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-[#0F2742]"}`}>{values[1].title}</h3>
            <p className={`${isDark ? "text-sky-200" : "text-slate-700"} text-sm leading-relaxed`}>{values[1].body}</p>
          </motion.article>

          {/* Center circle */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div
              className={`relative z-10 flex items-center justify-center rounded-full shadow-2xl ${
                isDark ? "bg-gradient-to-b from-[#083047] to-[#0A2D45] ring-4 ring-[#0F27486b] text-white" : "bg-white ring-4 ring-gray-100 text-[#0F2742]"
              }`}
              style={{ width: 200, height: 200 }}
              aria-hidden
            >
              <div className="text-center px-4">
                <div className="text-sm font-medium opacity-80">OUR</div>
                <div className={`text-2xl font-bold mt-1 ${isDark ? "text-teal-200" : "text-sky-600"}`}>Core Values</div>
              </div>
            </div>
          </div>

          {/* Bottom-left */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
            variants={cardAnim}
            className={`w-full max-w-md md:max-w-xs p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-[#0F2742]"}`}>{values[2].title}</h3>
            <p className={`${isDark ? "text-sky-200" : "text-slate-700"} text-sm leading-relaxed`}>{values[2].body}</p>
          </motion.article>

          {/* Bottom-right */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={3}
            variants={cardAnim}
            className={`w-full max-w-md md:max-w-xs p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-[#0F2742]"}`}>{values[3].title}</h3>
            <p className={`${isDark ? "text-sky-200" : "text-slate-700"} text-sm leading-relaxed`}>{values[3].body}</p>
          </motion.article>
        </div>

        {/* Responsive layout tweaks:
            - On desktop the circle will overlap cards in the center.
            - On small screens cards stack (grid 1 or 2 columns) and the circle sits centered above them.
        */}
      </div>

      {/* extra spacing so circle doesn't overlap next section content */}
      <div className="h-28" />
    </section>
  );
}
