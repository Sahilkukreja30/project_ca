"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * CoreValues.responsive.tsx
 *
 * Fixed mobile layout:
 *  - On small screens the central circle is rendered inline (in-flow) and smaller so it doesn't overlap cards.
 *  - On md+ screens the decorative circle becomes absolute and larger to overlap cards as intended.
 *  - Card width/spacing adjusted for narrow screens; cards stretch to full width with sensible padding.
 *  - Improved accessible headings and preserved existing API: <CoreValues variant="dark" />
 */

const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
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
      className={`${isDark ? "bg-[#071C2C] text-sky-100" : "bg-white text-slate-800"} relative overflow-visible py-12 px-4 md:py-16 md:px-6`}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-8 md:mb-12">
          <h2
            id="core-values-heading"
            className={`text-2xl md:text-3xl font-semibold ${isDark ? "text-white" : "text-[#0F2742]"}`}
          >
            Our Core Values
          </h2>
          <p className={`${isDark ? "text-sky-300" : "text-slate-600"} mt-2 max-w-2xl mx-auto`}>The guiding principles that shape our client relationships, delivery standards and culture.</p>
        </div>

        {/* Grid wrapper */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 items-start justify-items-center">
          {/* Top-left card */}
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={cardAnim}
            className={`w-full max-w-3xl sm:max-w-xs p-5 md:p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
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
            className={`w-full max-w-3xl sm:max-w-xs p-5 md:p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-[#0F2742]"}`}>{values[1].title}</h3>
            <p className={`${isDark ? "text-sky-200" : "text-slate-700"} text-sm leading-relaxed`}>{values[1].body}</p>
          </motion.article>

          {/* MOBILE: inline small circle (visible under md) */}
          <div className="md:hidden w-full flex justify-center mt-4">
            <div
              className={`flex items-center justify-center rounded-full shadow-xl ${isDark ? "bg-gradient-to-b from-[#083047] to-[#0A2D45] ring-2 ring-[#0F27486b] text-white" : "bg-white ring-2 ring-gray-100 text-[#0F2742]"}`}
              style={{ width: 140, height: 140 }}
              aria-hidden
            >
              <div className="text-center px-3">
                <div className="text-xs font-medium opacity-80">OUR</div>
                <div className={`text-lg font-bold mt-1 ${isDark ? "text-teal-200" : "text-sky-600"}`}>Core Values</div>
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
            className={`w-full max-w-3xl sm:max-w-xs p-5 md:p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
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
            className={`w-full max-w-3xl sm:max-w-xs p-5 md:p-6 rounded-2xl border ${isDark ? "border-white/10 bg-[#0A2D45]/60" : "border-gray-100 bg-white/80"} shadow-sm`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-white" : "text-[#0F2742]"}`}>{values[3].title}</h3>
            <p className={`${isDark ? "text-sky-200" : "text-slate-700"} text-sm leading-relaxed`}>{values[3].body}</p>
          </motion.article>

          {/* DESKTOP: absolute center circle (visible on md+) */}
          <div className="hidden md:flex absolute inset-0 pointer-events-none items-center justify-center">
            <div
              className={`relative z-10 flex items-center justify-center rounded-full shadow-2xl ${isDark ? "bg-gradient-to-b from-[#083047] to-[#0A2D45] ring-4 ring-[#0F27486b] text-white" : "bg-white ring-4 ring-gray-100 text-[#0F2742]"}`}
              style={{ width: 220, height: 220 }}
              aria-hidden
            >
              <div className="text-center px-4">
                <div className="text-sm font-medium opacity-80">OUR</div>
                <div className={`text-2xl font-bold mt-1 ${isDark ? "text-teal-200" : "text-sky-600"}`}>Core Values</div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive notes: give bottom breathing room */}
      </div>

      {/* extra spacing so circle doesn't overlap next section content */}
      <div className="h-24 md:h-28" />
    </section>
  );
}
