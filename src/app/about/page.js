"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


import "swiper/css";
import "swiper/css/effect-fade";



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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div variants={fade("up", 24)} initial="hidden" animate="show" className="max-w-3xl">
            <p className="text-sky-100/90 text-sm font-medium tracking-wide">About VN Shah & Co.</p>
            <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">Trusted Chartered Accountants — Practical. Compliant. Commercial.</h1>
            <p className="mt-4 text-sky-50/90">
              We are a senior-led professional services firm delivering clear, pragmatic tax, assurance and corporate solutions. Headquartered in Mumbai with a cross-border footprint, our team blends technical depth, commercial judgement and hands-on execution to help businesses scale securely.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[#1FA3A3] hover:bg-teal-800 border-white/55 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 hover:brightness-95">
                Get Expert Assistance
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/5">
                Explore services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE + FOUNDER DETAILS */}
      <section className="mx-auto max-w-7xl grid items-start gap-14 px-6 py-20 md:grid-cols-2">
        {/* Founder Image */}
        <motion.div
          variants={fade("left", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[480px] overflow-hidden rounded-2xl border border-slate-100 shadow"
        >
          <Image src="/hero.png" alt="CA Vishal N Shah" fill className="object-cover" />
        </motion.div>

        {/* Founder Description */}
        <motion.div
          variants={fade("right", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-[#0F2742]">Founder — CA Vishal N Shah</h2>
          <p className="text-slate-700 text-[15px] leading-relaxed">
            Vishal Shah, a qualified Chartered Accountant and the founder of VN Shah & Co., brings over a decade of expertise in finance, taxation and business advisory. He has played a pivotal role in guiding businesses toward sustainable financial management, compliance excellence and strategic growth.
          </p>
          <p className="text-slate-700 text-[15px] leading-relaxed">
            Vishal specialises in direct & indirect taxation, domestic and international taxation, corporate finance, business valuations, due diligence and transaction structuring. His experience spans across industries and includes handling appellate matters, government liaison, M&A support and project financing.
          </p>
          <p className="text-slate-700 text-[15px] leading-relaxed">
            As a virtual CFO for multiple organisations, he blends analytical depth with practical execution. His leadership is grounded in integrity, accuracy and a commitment to delivering customised financial solutions.
          </p>
        </motion.div>
      </section>

      {/* CO-FOUNDER SECTION */}
      <section className="mx-auto max-w-7xl grid items-start gap-14 px-6 pb-20 md:grid-cols-2">
        {/* Co-Founder Description */}
        <motion.div
          variants={fade("left", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-1 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-[#0F2742]">Co-Founder — CA Nishant S Chitalia</h2>
          <p className="text-slate-700 text-[15px] leading-relaxed">
            Nishant Chitalia is a seasoned professional with extensive experience in financial strategy, operations and client advisory. With over a decade of industry expertise, he has led large-scale financial projects and built strong client relationships across corporate and non-corporate entities.
          </p>
          <p className="text-slate-700 text-[15px] leading-relaxed">
            His specialised expertise includes IPO readiness, fund-raising (debt & equity), capital structuring and regulatory compliance. Nishant works closely with investment bankers, legal advisors and regulatory bodies to manage the end-to-end process of public offerings and corporate financing.
          </p>
          <p className="text-slate-700 text-[15px] leading-relaxed">
            He also advises organisations on long-term strategy, operational efficiency and sustainable growth initiatives. Nishant’s client-first mindset and deep financial understanding allow him to create high-impact solutions that support long-term success.
          </p>
        </motion.div>

        {/* Co-Founder Image */}
        <motion.div
          variants={fade("right", 60)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-[480px] overflow-hidden rounded-2xl border border-slate-100 shadow order-1 md:order-2"
        >
          <Image src="/hero3.jpeg" alt="CA Nishant S Chitalia" fill className="object-cover" />
        </motion.div>
      </section>

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


      {/* CTA */}
      <section className="bg-gradient-to-r from-[#05223f] to-[#0f7b86]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Discuss your requirements with our team</h3>
              <p className="mt-1 text-sky-50/90">Whether it’s a one-time compliance matter or ongoing advisory — we tailor solutions that suit your business.</p>
            </div>
            <Link href="/contact" className="rounded-lg bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20">Contact our experts</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

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