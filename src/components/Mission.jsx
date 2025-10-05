/* ===== Mission & Vision (theme: navy/teal, framer-hover on icons) ===== */
"use client";
import { motion } from "framer-motion";

export default function MissionVision() {
  const fadeSlide = (dir = "left", distance = 60) => {
    const x = dir === "left" ? -distance : dir === "right" ? distance : 0;
    const y = dir === "up" ? -distance : dir === "down" ? distance : 0;
    return {
      hidden: { opacity: 0, x, y },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
      },
    };
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <motion.div
        variants={fadeSlide("down", 80)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto max-w-7xl px-6"
      >
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {/* Mission */}
          <article className="flex items-start gap-4">
            <IconMission className="h-20 w-20 text-[#1FA3A3]" />
            <div>
              <h3 className="text-xl font-semibold text-[#0F2742]">Our Mission</h3>
              <p className="mt-2 text-slate-700">
                To uphold the highest standards of commitment, confidentiality and
                competence, and to continually improve service quality through
                ongoing learning, training and strong internal processes.
              </p>
            </div>
          </article>

          {/* Vision */}
          <article className="flex items-start gap-4">
            <IconVision className="h-20 w-20 text-[#1FA3A3]" />
            <div>
              <h3 className="text-xl font-semibold text-[#0F2742]">Our Vision</h3>
              <p className="mt-2 text-slate-700">
                To be recognised as a trusted, quality-first professional services
                firm—cited for excellence—and to build a meaningful presence across
                regions.
              </p>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

/* ------- Inline SVG icons as motion.svg (hover rotates + scales) ------- */
function IconMission(props) {
  return (
    <motion.svg
      whileHover={{ rotate: 30, scale: 1.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d="M5 21V4m0 0h7a3 3 0 0 1 2.4 1.2l.2.3a2 2 0 0 0 1.6.8H21v7h-4.8a2 2 0 0 0-1.6.8l-.2.3A3 3 0 0 1 12 15H5" />
    </motion.svg>
  );
}

function IconVision(props) {
  return (
    <motion.svg
      whileHover={{ rotate: 30, scale: 1.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v2M12 20v2M2 12H4M20 12h2M5 5l1.5 1.5M18.5 17.5 20 19M5 19l1.5-1.5M18.5 6.5 20 5" />
    </motion.svg>
  );
}
