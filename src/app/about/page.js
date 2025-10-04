"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ---------------- Helpers (animation + icons) ---------------- */
const fade = (dir = "up", d = 60, t = 0.7) => {
  const x = dir === "left" ? -d : dir === "right" ? d : 0;
  const y = dir === "up" ? -d : dir === "down" ? d : 0;
  return {
    hidden: { opacity: 0, x, y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: t, ease: [0.22, 1, 0.36, 1] } },
  };
};

function IconFlagPerson(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <path d="M5 3v18" />
      <path d="M5 5h6.5a2 2 0 0 1 1.6.8l.25.35c.3.42.78.67 1.29.67H21v6h-5.35a2 2 0 0 0-1.6.8l-.25.35a2 2 0 0 1-1.6.8H5" />
    </svg>
  );
}
function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 3.6 2.7 13.4 0 18" />
      <path d="M12 3c-2.7 3.6-2.7 13.4 0 18" />
    </svg>
  );
}
function IconBoard(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="11" rx="2" />
      <path d="M12 16v5M8 21h8" />
    </svg>
  );
}
function IconPeople(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <circle cx="8" cy="8" r="3" />
      <path d="M2 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M14.5 20a5 5 0 0 1 7 0" />
    </svg>
  );
}

/* ---------------- Page ---------------- */
export default function AboutPage() {
  // Client data (tweak if you have updated figures)
  const stats = [
    { icon: IconFlagPerson, value: 30, label: "Years of Experience" },   // 30+
    { icon: IconGlobe,      value: 200, label: "Services Delivered" },   // 200+
    { icon: IconBoard,      value: 6,  label: "Countries Operations" },  // 6+
    { icon: IconPeople,     value: 2500, label: "Happy Clients" },       // 2500+
  ];

  return (
    <main className="bg-white">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0e2f5b] to-[#1fa3a3]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <motion.div
            variants={fade("up", 20)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="text-sky-100/90 text-sm font-medium tracking-wide">About Us</p>
            <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Vishal N Shah & Co — Chartered Accountants
            </h1>
            <p className="mt-3 text-sky-50/90">
              A senior-led firm delivering practical tax, assurance and regulatory solutions.
              Headquartered in Mumbai with a presence in Dubai, we combine technical depth with
              client-first execution to help businesses move with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Who we are (image from left, text from right) ---------- */}
      <section className="mx-auto max-w-7xl grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <motion.div
          variants={fade("left", 80)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="relative h-[420px] w-full">
            {/* Swap the image with your founder/co-founder photo or a collage */}
            <Image src="/hero.jpeg" alt="Our leadership" fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
              <p className="text-lg font-semibold">Leadership you can count on</p>
              <p className="text-sm/6 opacity-90">Hands-on partners, measurable outcomes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fade("right", 80)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-3xl font-semibold text-[#0F2742]">
            Practical advice. Dependable execution.
          </h2>
          <p className="mt-4 text-slate-700">
            Established in 2013, our firm serves clients across industries and growth stages.
            We bring together strong technical capability, disciplined processes and responsive
            service to deliver clear, timely outcomes—whether it’s direct tax, audits, FEMA/RBI
            filings or transaction support.
          </p>
          <p className="mt-3 text-slate-700">
            Our operating model is simple: senior-led scoping, transparent communication and
            consistent quality powered by documented internal processes and ongoing learning.
            We partner closely with clients and specialist networks so that every engagement
            is right-sized, compliant and commercially sound.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-[#1FA3A3] px-5 py-2.5 text-sm font-medium text-white shadow hover:brightness-95"
            >
              Explore our services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-[#0F2742] hover:bg-slate-50"
            >
              Talk to us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------- Mission & Vision (no cards, DPNC-style) ---------- */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-[3px] w-full rounded-full bg-[#0F2742]" />
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <motion.article
              variants={fade("up", 40)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="flex items-start gap-4"
            >
              {/* teal target icon */}
              <svg className="mt-0.5 h-10 w-10 text-[#1FA3A3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="2" /><path d="M12 3v3M21 12h-3M12 21v-3M6 12H3" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-[#0F2742]">Our Mission</h3>
                <p className="mt-2 text-slate-700">
                  To uphold the highest standards of commitment, confidentiality and competence—and
                  to keep improving service quality through training, documented processes and a
                  culture of learning.
                </p>
              </div>
            </motion.article>

            <motion.article
              variants={fade("up", 40)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="flex items-start gap-4"
            >
              {/* teal eye icon */}
              <svg className="mt-0.5 h-10 w-10 text-[#1FA3A3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M12 2v2M12 20v2M2 12H4M20 12h2M5 5l1.5 1.5M18.5 17.5 20 19M5 19l1.5-1.5M18.5 6.5 20 5" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold text-[#0F2742]">Our Vision</h3>
                <p className="mt-2 text-slate-700">
                  To be recognised as a trusted, quality-first professional services firm—cited for
                  excellence—and to build a meaningful presence across regions.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div variants={fade("up")} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <h3 className="text-xl font-semibold text-[#0F2742]">Founder — CA Vishal N Shah</h3>
            <p className="mt-2 text-slate-700">
              Associate member of ICAI with 12+ years across industry and practice. Focus areas include
              direct taxation, appellate support, project financing, valuation and government liaison.
              He has led engagements in M&A, set-ups, stock audits and royalty assessments for domestic
              and international clients.
            </p>
          </motion.div>

          <motion.div variants={fade("up")} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <h3 className="text-xl font-semibold text-[#0F2742]">Co-Founder — CA Nishant S Chitalia</h3>
            <p className="mt-2 text-slate-700">
              Associate member of ICAI with 12+ years’ experience in taxation and advisory. He has worked
              extensively on appellate matters, valuations, audits of trusts and societies, and broader
              consulting assignments for a diverse client base.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Stats strip (teal outline icons) ---------- */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fade("up", 20)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <s.icon className="h-10 w-10" />
                <div className="mt-3 text-3xl font-semibold tracking-tight text-[#0f6fb2]">
                  {s.value.toLocaleString()}
                  <sup className="ml-0.5 text-2xl align-super">+</sup>
                </div>
                <div className="mt-1 text-[13px] text-slate-700">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gradient-to-r from-[#0e2f5b] to-[#1fa3a3]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Let’s discuss your requirements</h3>
              <p className="mt-1 text-sky-50/90">
                From Direct Tax and Regulatory to Transactions and Assurance—we’ll tailor a solution to your goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-lg bg-white/15 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
