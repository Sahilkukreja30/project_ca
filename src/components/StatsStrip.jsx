"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    id: "years",
    svgIcon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-[2] text-sky-700" fill="none">
        <path d="M18 42V28a6 6 0 016-6h0a6 6 0 016 6v14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 24l8-4 8 4" stroke="currentColor" />
        <path d="M44 18h8" stroke="currentColor" />
      </svg>
    ),
    value: 12,
    suffix: "+",
    label: "Years of experience",
  },
  {
    id: "services",
    svgIcon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-[2] text-sky-700" fill="none">
        <circle cx="32" cy="32" r="14" stroke="currentColor" />
        <path d="M10 34h44" stroke="currentColor" />
        <path d="M32 10v44" stroke="currentColor" />
      </svg>
    ),
    value: 10,
    suffix: "+",
    label: "Services We Offers",
  },
  {
    id: "countries",
    svgIcon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-[2] text-sky-700" fill="none">
        <rect x="8" y="12" width="48" height="32" rx="3" stroke="currentColor" />
        <path d="M20 44h24" stroke="currentColor" />
      </svg>
    ),
    value: 2,
    suffix: "",
    label: "Countries Operations",
  },
  {
    id: "professionals",
    svgIcon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-[2] text-sky-700" fill="none">
        <circle cx="32" cy="22" r="6" stroke="currentColor" />
        <path d="M12 52c0-11 9-14 20-14s20 3 20 14" stroke="currentColor" />
      </svg>
    ),
    value: 20,
    suffix: "+",
    label: "Professionals",
  },
  {
    id: "clients",
    svgIcon: (
      <svg viewBox="0 0 64 64" className="w-14 h-14 stroke-[2] text-sky-700" fill="none">
        <path d="M20 46v-6a6 6 0 016-6h0a6 6 0 016 6v6" stroke="currentColor" />
        <path d="M40 46v-6a6 6 0 016-6h0a6 6 0 016 6v6" stroke="currentColor" />
        <circle cx="24" cy="28" r="4" stroke="currentColor" />
        <circle cx="44" cy="28" r="4" stroke="currentColor" />
      </svg>
    ),
    value: 150,
    suffix: "+",
    label: "Happy Clients",
  },
];

// small intersection hook
function useOnScreen(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setInView(true));
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function useCountUp(target, started, duration = 1200) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const step = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      setNum(current);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, started]);

  return num;
}

export default function StatsSection() {
  const { ref, inView } = useOnScreen();

  return (
    <section className="relative bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((s, i) => {
            const count = useCountUp(s.value, inView, 1300);

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ translateY: -6, boxShadow: "0 18px 30px rgba(13, 26, 40, 0.06)" }}
                className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden"
                style={{ minHeight: 220 }}
              >
                {/* angled top shading */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`grad-${s.id}`} x1="0" x2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#f7f7f8" />
                      </linearGradient>
                    </defs>
                    <path d="M0 40 L380 0 L400 0 L400 220 L0 220 Z" fill={`url(#grad-${s.id})`} />
                  </svg>
                </div>

                {/* content */}
                <div className="relative z-10 flex flex-col items-center text-center p-8 pt-12">
                  <div className="text-sky-700 mb-4">{s.svgIcon}</div>

                  <div className="text-4xl sm:text-5xl font-extrabold text-sky-600 mb-2 leading-none">
                    {count}
                    <span className="ml-1 align-super text-2xl">{s.suffix}</span>
                  </div>

                  <div className="mt-2 text-sm sm:text-base font-semibold text-slate-800 font-serif">{s.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
