"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ServicesSection from "../components/ServiceSection";
import StatsSection from "@/components/StatsStrip";


export default function HomePage() {

  const partnerSlides = [
    { src: "/hero.png", name: "CA Vishal N Shah", role: "Founder & Partner" },
    { src: "/hero3.jpeg", name: "CA Nishant S Chitalia", role: "Co-Founder & Partner" },
  ];
  const sliderSlides = [
    { src: "/background.png", title: "Welcome to Vishal N Shah & Co", subtitle: "Trusted Chartered Accountants — Practical. Compliant. Commercial."},
    {src:"/slide2.png",title:"Empowering Compliance",subtitle:"Proactive, accurate, and timely regulatory guidance that helps you stay compliant with evolving laws while reducing risk and complexity.",},
    {src:"/slide1.png",title:"Enabling Growth",subtitle:"Strategic, practical advisory that enhances efficiency, unlocks opportunities, and supports long-term business expansion.",}
  ];
  const fadeSlide = (dir = "left", distance = 60) => {
    const x = dir === "left" ? -distance : dir === "right" ? distance : 0;
    const y = dir === "up" ? -distance : dir === "down" ? distance : 0;
    return {
      hidden: { opacity: 0, x, y },
      show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    };
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTitle = {
    hidden: { y: 28, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
  };
  const slideSub = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.62, delay: 0.12, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <main className="bg-white">
      {/* ---- HERO SECTION ---- */}
      <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        onSwiper={(sw) => setActiveIndex(sw.realIndex)}            // <- use realIndex on init
        onSlideChange={(sw) => setActiveIndex(sw.realIndex)}       // <- use realIndex on every slide change
        className="h-[520px] md:h-[640px]"
      >
        {sliderSlides.map((s, i) => {
          const isActive = activeIndex === i;
          return (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <Image src={s.src} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/18 to-transparent" />

                <div className="absolute inset-0 mx-auto max-w-7xl flex items-center px-6 md:px-20">
                  <div className="">
                    <motion.h1
                      variants={slideTitle}
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                      className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                    >
                      {s.title}
                    </motion.h1>

                    <motion.p
                      variants={slideSub}
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                      className="mt-4 text-slate-100 text-base md:text-lg max-w-2xl"
                    >
                      {s.subtitle}
                    </motion.p>

                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>

      {/* ---- ABOUT SECTION ---- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-16 lg:gap-24 md:grid-cols-2">
          {/* Left: Swiper */}
          <motion.div
            variants={fadeSlide("left", 80)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative h-[500px] sm:h-[450px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
          >
            <Swiper modules={[Autoplay, EffectFade]} effect="fade" className="h-full" autoplay={{ delay: 2000 }} loop>
              {partnerSlides.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-full w-full">
                    <Image src={p.src} alt={p.name} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
                      <p className="text-lg font-semibold">{p.name}</p>
                      <p className="text-sm opacity-90">{p.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Right: text */}
          <motion.div variants={fadeSlide("right", 80)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
            <h2 className="text-[2rem] font-semibold text-[#0F2742] tracking-wide">
              Practical advice. Dependable execution.
            </h2>
            <p className="mt-4 text-slate-700 leading-8 text-justify">
              Established in 2013, our firm supports clients across diverse industries, business sizes and geographies. With a strong foundation in taxation, audit, financial reporting and regulatory advisory, we deliver solutions that are technically sound and commercially relevant.
            </p>
            <p className="mt-2 text-slate-700 leading-8 text-justify">Our team combines deep subject-matter expertise with disciplined internal processes, ensuring every engagement is executed with precision and accountability. Whether it involves direct tax advisory, statutory audits, FEMA/RBI compliance or transaction support, we focus on providing guidance that is accurate, timely and easy to act upon.</p>
          </motion.div>
        </div>
      </section>

      {/* ---- STATS ---- */}
      <StatsSection/>


      {/* ---- SERVICES ---- */}
      <ServicesSection />

      {/* ---- FINAL CTA ---- */}
      <section className="bg-[#0e2f5b] py-10 sm:py-14 text-center text-white px-4">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 border bg-gradient-to-r from-[#0e2f5b] to-[#008080] border-white/25 rounded-2xl p-6 sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Let’s discuss your requirements</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-slate-200">
              From tax and regulatory to transactions and assurance — we’ll tailor a solution to your goals.
            </p>
          </div>
          <motion.div variants={fadeSlide("down", 80)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
            <Link href="/contact" className="rounded-full bg-[#1FA3A3] px-5 py-3 text-sm font-medium text-white shadow hover:brightness-95">
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Stats Ribbon ---------- */
function StatsRibbon() {
  const data = [
    { key: "years", label: "Years of Experience", value: yearSpan(2013), suffix: "+", icon: YearIcon },
    { key: "services", label: "Services We Offer", value: 10, suffix: "+", icon: BriefcaseIcon },
    { key: "countries", label: "Countries Operations", value: 2, suffix: "+", icon: PinIcon },
    { key: "professionals", label: "Professionals", value: 20, suffix: "+", icon: UsersIcon },
    { key: "clients", label: "Happy Clients", value: 150, suffix: "+", icon: UsersIcon },
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {data.map((s) => (
        <div key={s.key} className="flex flex-col border border-cyan-500/70 rounded-2xl py-4 px-6 items-center text-center shadow-none hover:scale-105 hover:shadow-xl transition">
          <div className="text-[#0f6fb2]">
            {s.icon && <s.icon className="h-14 w-14 md:h-16 md:w-16" aria-hidden />}
          </div>
          <div className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0f6fb2]">
            <span data-counter data-countto={s.value} data-duration="1400">0</span>
            <span className="align-super text-xl md:text-2xl">{s.suffix}</span>
          </div>
          <div className="mt-1 text-sm md:text-base font-semibold text-slate-900">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Icons ---------- */
function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}
function YearIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 4h18M3 12h18M3 20h18" />
    </svg>
  );
}

/* ---------- Utils ---------- */
function yearSpan(startYear) {
  const now = new Date().getFullYear();
  return Math.max(1, now - startYear);
}
