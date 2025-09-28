"use client";

import { useEffect, useRef, useState } from "react";

// Count-up on scroll (tiny, no deps)
function useCountUp(target, { duration = 1200 } = {}) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setN(Math.floor(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { n, ref };
}

// Fresh, custom inline icons (different from the reference site)
const Icons = {
  flag: (
    <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M5 21V3m0 0h9l-1.5 2H19l-1.6 2H12l-1.5 2H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (
    <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  chart: (
    <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <rect x="6" y="11" width="2.8" height="6" rx="0.6" fill="currentColor"/>
      <rect x="10.6" y="9" width="2.8" height="8" rx="0.6" fill="currentColor"/>
      <rect x="15.2" y="6" width="2.8" height="11" rx="0.6" fill="currentColor"/>
    </svg>
  ),
  expand: (
    <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 21v-3M12 2v3M3 10h3M18 10h3M6 18l2.2-2.2M18 18l-2.2-2.2M6 2l2.2 2.2M18 2l-2.2 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  handshake: (
    <svg width="48" height="48" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M7 13l3-3a3 3 0 014 0l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12l4 4c.8.8 2 .8 2.8 0L12 14m9-2l-4 4a2 2 0 01-2.8 0L12 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

function Stat({ icon, value, label, suffix = "+" }) {
  const { n, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 px-4 py-10 text-center"
    >
      <div className="text-sky-700">{icon}</div>
      <div className="text-4xl font-extrabold tracking-tight text-sky-700">
        {n}
        {suffix}
      </div>
      <div className="text-lg font-semibold text-slate-900">{label}</div>
    </div>
  );
}

/**
 * StatsBand
 * - Slanted light band background
 * - Five equal “pillars” with subtle vertical separators (no card borders)
 * - Big blue numbers + bold labels
 */
export default function StatsBand({
  items = [
    { icon: Icons.flag, value: 29, label: "Years of experience" },
    { icon: Icons.globe, value: 100, label: "Services We Offer" },
    { icon: Icons.chart, value: 5, label: "Countries Operations" },
    { icon: Icons.expand, value: 100, label: "Professionals" },
    { icon: Icons.handshake, value: 1500, label: "Happy Clients" },
  ],
}) {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Slanted light band */}
      <div
        className="absolute inset-0 -z-10 bg-slate-50"
        style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)" }}
        aria-hidden="true"
      />
      {/* Subtle top highlight for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-5
            lg:divide-x lg:divide-slate-200/70
            rounded-2xl bg-white/60 p-2 backdrop-blur
          "
        >
          {items.map((it, i) => (
            <Stat key={i} icon={it.icon} value={it.value} label={it.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Icons };
