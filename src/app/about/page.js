"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import CoreValues from "@/components/CoreValues";

const fade = (dir = "up", d = 60, t = 0.7) => {
  const x = dir === "left" ? -d : dir === "right" ? d : 0;
  const y = dir === "up" ? -d : dir === "down" ? d : 0;
  return {
    hidden: { opacity: 0, x, y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: t, ease: [0.22, 1, 0.36, 1] } },
  };
};

export default function AboutPage() {
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
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#05223f] to-[#0f7b86]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
          <motion.div variants={fade("up", 24)} initial="hidden" animate="show" className="max-w-3xl">
            <p className="text-sky-100/90 text-sm font-medium tracking-wide">Vishal N. Shah & Co.</p>
            <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Trusted Chartered Accountants — Practical. Compliant. Commercial.
            </h1>
            <p className="mt-4 text-sky-50/90 text-sm sm:text-base md:text-base text-justify leading-relaxed">
              We are a senior-led professional services firm delivering clear, pragmatic tax, assurance and corporate solutions. Headquartered in Mumbai with a cross-border footprint, our team blends technical depth, commercial judgement and hands-on execution to help businesses scale securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE + FOUNDER DETAILS */}
      <section className="mx-auto max-w-7xl grid items-start gap-10 px-4 sm:px-6 py-12 md:py-20 md:grid-cols-2">
        {/* Founder Image */}
        <motion.div
          variants={fade("left", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[300px] sm:h-[360px] md:h-[500px] overflow-hidden rounded-2xl border border-slate-100 shadow"
        >
          <div className="relative h-full w-full">
            <Image src="/hero.png" alt="CA Vishal N Shah" fill className="object-cover" priority />
          </div>
        </motion.div>

        {/* Founder Description */}
        <motion.div
          variants={fade("right", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-2xl sm:text-[2rem] font-semibold text-[#0F2742]">Founder — Vishal N. Shah</h2>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            CA Vishal Shah, a specialist in Indirect taxes, qualified Chartered Accountant brings over 10 years
            of expertise in <span className="font-bold">Finance</span>, <span className="font-bold">Taxation</span>, and <span className="font-bold">Business advisory</span>. With a strong track record of
            delivering strategic financial solutions, he has been instrumental in helping businesses achieve
            growth, compliance, and profitability.
          </p>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            At Vishal N. Shah & Co., he leads a team that provides a full suite of professional services including <span className="font-bold">Audit and Assurance, Indirect taxation, Accounting and Bookkeeping,</span> <span className="font-bold">Business valuation, company formation, and Compliance management.</span> Additionally, his
            business acumen is brilliantly reflected in his virtual CFO roles. His commitment to accuracy,
            integrity, and innovation ensures that every client receives tailored solutions suited to their
            business needs.

          </p>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            Driven by a passion for empowering entrepreneurs and strengthening financial discipline, he
            continues to set new standards in client service and professional excellence.
            With a remarkable career spanning over a <span className="font-bold">decade</span>, he brings extensive expertise to his role
            and has an illustrious career. He has been a trusted advisor to numerous corporate and noncorporate entities on a wide range of financial matters.
          </p>
        </motion.div>
      </section>

      {/* CO-FOUNDER SECTION */}
      <section className="mx-auto max-w-7xl grid items-start gap-10 px-4 sm:px-6 pb-12 md:pb-20 md:grid-cols-2">
        {/* Co-Founder Description */}
        <motion.div
          variants={fade("left", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-1 space-y-3"
        >
          <h2 className="text-2xl sm:text-[2rem] font-semibold text-[#0F2742]">Co-Founder — Nishant S Chitalia</h2>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            Nishant Chitalia is a seasoned professional specializing in <span className="font-bold">Direct taxes , IPO advisory, and
            Corporate fund-raising.</span> With over a decade of industry experience, he combines strong
            expertise in business strategy, operations, and client relationship management.
          </p>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            As a direct tax specialist, he advises clients on <span className="font-bold">Tax planning, Compliance, and Complex structuring matters</span>
            , helping businesses optimize tax efficiency while meeting regulatory
            standards.
          </p>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            He also plays a key role in <span className="font-bold">IPO and Corporate fund-raising</span> engagements, working closely with
            investment bankers, legal counsel, and regulators. His work includes IPO readiness
            assessments, due diligence coordination, offer document preparation, and ensuring
            compliance with <span className="font-bold">SEBI</span> and stock exchange requirements. In fund-raising, he supports
            companies in identifying investors, structuring deals, and securing both equity and debt
            financing.
          </p>
          <p className="text-slate-700 text-sm sm:text-[15px] md:text-[16.5px] text-justify leading-relaxed">
            {"Focused on delivering value and sustainable outcomes, he continues to strengthen client relationships and contribute to the firm's growth and innovation."}
          </p>
        </motion.div>

        {/* Co-Founder Image */}
        <motion.div
          variants={fade("right", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[300px] sm:h-[360px] md:h-[480px] overflow-hidden rounded-2xl border border-slate-100 shadow order-1 md:order-2"
        >
          <Image src="/hero3.jpeg" alt="CA Nishant S Chitalia" fill className="object-cover" priority />
        </motion.div>
      </section>

      {/* MISSION & VISION CARDS (DARK) */}
      <section className="bg-[#0e2f5b] py-10 md:py-20">
        <motion.div
          variants={fadeSlide("down", 80)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-7xl px-4 sm:px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Our Purpose & Direction</h2>
            <p className="mt-2 text-sky-300 max-w-2xl mx-auto text-sm sm:text-base">
              A clear mission and a forward-looking vision guide our commitment to ethical,
              reliable and growth-focused professional services.
            </p>
          </div>

          <div className="mt-6 md:mt-10 grid gap-6 md:grid-cols-2">
            {/* Mission Dark Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0A2D45] to-[#0F445D] border border-white/10 p-4 sm:p-6 md:p-9
                         transform transition duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hover:-translate-y-2 md:hover:shadow-[0_22px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow">
                  <IconMission className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-teal-300" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white">Our Mission</h3>
                  <p className="mt-2 text-sky-200 text-sm md:text-base leading-relaxed text-justify">
                    To deliver reliable, compliant and commercially sound financial guidance
                    through deep expertise, confidentiality and uncompromising ethics.
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-sky-300 leading-relaxed">
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                      <span>Client-first advisory backed by real experience</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                      <span>Accuracy, confidentiality and ethical practice</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                      <span>Continuous learning + strong internal processes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>

            {/* Vision Dark Card */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0A2D45] to-[#0F445D] border border-white/10 p-4 sm:p-6 md:p-9
                         transform transition duration-300 ease-[cubic-bezier(.22,1,.36,1)] md:hover:-translate-y-2 md:hover:shadow-[0_22px_50px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow">
                  <IconVision className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-teal-300" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white">Our Vision</h3>
                  <p className="mt-2 text-sky-200 text-sm md:text-base leading-relaxed text-justify">
                    To be recognized as a trustworthy, quality-driven and impact-oriented
                    professional services firm, expanding responsibly across regions.
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-sky-300 leading-relaxed">
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                      <span>Ethics, independence & quality at the core</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                      <span>Services that scale with growing businesses</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-teal-300" />
                      <span>A meaningful presence across industries & regions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </section>

      <CoreValues />

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#05223f] to-[#0f7b86]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">Discuss your requirements with our team</h3>
              <p className="mt-1 text-sky-50/90 text-sm md:text-base">Whether it’s a one-time compliance matter or ongoing advisory — we tailor solutions that suit your business.</p>
            </div>
            <Link href="/contact" className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20">
              Contact our experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Icons: removed whileHover to avoid touch hover artifacts --- */

function IconMission(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props} aria-hidden>
      <path d="M5 21V4m0 0h7a3 3 0 0 1 2.4 1.2l.2.3a2 2 0 0 0 1.6.8H21v7h-4.8a2 2 0 0 0-1.6.8l-.2.3A3 3 0 0 1 12 15H5" />
    </svg>
  );
}

function IconVision(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props} aria-hidden>
      <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2v2M12 20v2M2 12H4M20 12h2M5 5l1.5 1.5M18.5 17.5 20 19M5 19l1.5-1.5M18.5 6.5 20 5" />
    </svg>
  );
}
