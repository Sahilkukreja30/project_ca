"use client";
import { useEffect, useRef } from "react";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from "swiper/modules";
import { motion } from "framer-motion";
// Swiper styles (global; safe in client component)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ServicesSection from "@/components/ServiceSection";
import MissionVision from "@/components/Mission";



export default function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-countto]');
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);


    const animate = (el) => {
      const target = parseInt(el.getAttribute('data-countto'), 10) || 0;
      const duration = parseInt(el.getAttribute('data-duration'), 10) || 1500;
      const start = performance.now();
      const from = 0;


      function frame(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = easeOutCubic(p);
        const val = Math.round(from + (target - from) * eased);
        el.textContent = val.toLocaleString();
        if (p < 1) requestAnimationFrame(frame);
      }


      requestAnimationFrame(frame);
    };


    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target.dataset.counted) {
            e.target.dataset.counted = '1';
            animate(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );


    document.querySelectorAll('[data-counter]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);



  // Refs for counters
  // ---- HERO SLIDES (replace image paths with your assets in /public) ----
  const heroSlides = useMemo(
    () => [
      {
        src: "/slide1.png",
        title: "Strong Foundations, Brighter Horizons",
        subtitle:
          "Structured Growth for modern businesses",
        cta: { label: "Explore Services", href: "/services/audit-assurance" },
      },
      {
        src: "/slide2.png",
        title: "Build on Collaboration, Driven by Expertise",
        subtitle:
          "Together, we create solutions that last.",
        cta: { label: "Direct & International Tax", href: "/services/direct-international-tax" },
      },
      {
        src: "/slide3.png",
        title: "Unlocking New Possibilities",
        subtitle:
          "From challenges to opportunities",
        cta: { label: "Regulatory & FEMA/FDI", href: "/services/regulatory-fema-fdi" },
      },
    ],
    []
  );

  // ---- PARTNER INTRO (About) ----
  const partnerSlides = [
    { src: "/hero.jpeg", name: "CA Vishal N Shah", role: "Founder & Partner" },
    { src: "/hero2.jpeg", name: "CA Nishant S Chitalia", role: "Co‑Founder & Partner" },
  ];

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
    <main className="bg-white">

      <section className="relative h-[80vh] min-h-[520px] w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade, Keyboard]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          keyboard
          loop
          className="h-full"
        >
          {heroSlides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0F2742]/60" />
                <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl font-semibold text-white md:text-6xl">{s.title}</h1>
                    <p className="mt-4 text-base text-slate-100 md:text-lg">{s.subtitle}</p>
                    <div className="mt-6 flex gap-3">
                      <Link
                        href="/contact"
                        className="rounded-full border bg-[#1FA3A3] hover:bg-teal-800 border-white/55 px-5 py-3 text-sm font-medium text-white/90 "
                      >
                        Book a consultation
                      </Link>
                      <Link
                        href={s.cta.href}
                        className="rounded-full  px-5 py-3 bg-white/30 text-sm font-medium border-white/60 text-white hover:bg-white/10 shadow hover:brightness-95"
                      >
                        {s.cta.label}
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ---------------- About: Partner carousel + copy ---------------- */}
      <section className="mx-auto w-7xl py-16 md:py-24">
        <div className="grid gap-32 md:grid-cols-2">
          {/* Left: partner swiper (2s interval) */}
          <motion.div variants={fadeSlide("left", 80)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }} className="relative h-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              className="h-full"
            >
              {partnerSlides.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-full w-full">
                    <Image src={p.src} alt={p.name} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
                      <p className="text-lg font-semibold">{p.name}</p>
                      <p className="text-sm/6 opacity-90">{p.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Right: firm intro */}
          <motion.div variants={fadeSlide("right", 80)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}>
            <h2 className="text-3xl font-semibold text-[#0F2742]">Founder – CA Vishal N Shah</h2>
            <p className="mt-4 text-slate-700">
              CA Vishal N Shah, the founding partner, is an Associate Member of the Institute of Chartered Accountants of India with over a decade of experience spanning industry and professional practice.
              He specializes in direct taxation and advisory services, with a proven track record in appellate matters, mergers & acquisitions, project financing, and government liaison.
              Over the years, he has successfully guided projects and companies at both national and international levels. His portfolio of work includes business valuations, project set-ups, stock audits, debt management, and royalty assessments, making him a trusted advisor for businesses seeking clarity and growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <h2 className="text-3xl font-semibold text-[#0F2742]">Co-Founder – CA Nishant S Chitalia</h2>
              <p className="mt-4 text-slate-700">
                CA Nishant S Chitalia, co-founder and partner, is also an Associate Member of the Institute of Chartered Accountants of India with extensive professional and industry experience of more than 12 years.
                He brings deep expertise in taxation and appellate advisory, complemented by hands-on practice in valuation, trust audits, society audits, and consultancy services.
                Having worked with organizations of both national and international repute, Nishant has built a reputation for delivering practical, timely, and compliance-focused solutions. His approach emphasizes precision, client trust, and long-term value creation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Stats cards ---------------- */}
      <section className="relative overflow-hidden py-20">
        {/* Grey ribbon background with subtle vertical stripes */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#f1f3f5]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_120px,rgba(255,255,255,0.35)_120px,rgba(255,255,255,0.35)_240px)]" />


        {/* Chart silhouette across the top (soft rise with peaks) */}
        <svg className="pointer-events-none absolute top-0 left-0 right-0 -z-10 h-40 w-full text-white/45" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,160 L0,80 C120,95 240,110 360,100 C520,88 640,60 800,76 C960,92 1080,140 1200,128 C1320,116 1380,104 1440,100 L1440,160 Z" />
        </svg>


        {/* Peak dots to mimic reference markers */}
        <div className="pointer-events-none absolute left-0 right-0 top-10 -z-10 flex w-full justify-between px-[8%]">
          <span className="h-3 w-3 rounded-full border border-white/70 bg-[#e6eaee] shadow" />
          <span className="h-3 w-3 rounded-full border border-white/70 bg-[#e6eaee] shadow" />
          <span className="h-3 w-3 rounded-full border border-white/70 bg-[#e6eaee] shadow" />
          <span className="h-3 w-3 rounded-full border border-white/70 bg-[#e6eaee] shadow" />
          <span className="h-3 w-3 rounded-full border border-white/70 bg-[#e6eaee] shadow" />
        </div>


        {/* bottom blue angled band */}
        <svg className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-24 w-full text-[#0f6fb2]" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,0 L0,20 C160,10 320,30 480,40 C640,50 800,56 960,45 C1120,34 1280,8 1440,20 L1440,0 Z" />
        </svg>


        <div className="mx-auto max-w-7xl px-6">
          <StatsRibbon />
        </div>
      </section>

      {/* ---------------- Mission & Vision ---------------- */}
      <MissionVision />

      {/* ---------------- Services on teal gradient ---------------- */}
      <ServicesSection />

      {/* ---------------- Final CTA ---------------- */}
      <section className=" bg-[#0e2f5b] py-14 text-center text-white">
        <div className="mx-auto max-w-7xl flex flex-row justify-between border bg-gradient-to-r from-[#0e2f5b] to-[#008080] border-white/25 rounded-2xl p-8">
          <div className="">
            <h2 className="text-2xl font-semibold md:text-3xl">Let’s discuss your requirements</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm/6 text-slate-200">
              From tax and regulatory to transactions and assurance — we’ll tailor a solution to your goals.
            </p>
          </div>
          <motion.div variants={fadeSlide("down", 80)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}  className="mt-6 gap-3">
            <Link href="/contact" className="rounded-full bg-[#1FA3A3] px-5 py-3 text-sm font-medium text-white shadow hover:brightness-95">Contact us</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
function StatsRibbon() {
  const data = [
    { key: 'years', label: 'Years of Experience', value: yearSpan(2013), suffix: '+', icon: YearIcon },
    { key: 'services', label: 'Services We Offer', value: 10, suffix: '+', icon: BriefcaseIcon },
    { key: 'countries', label: 'Countries Operations', value: 2, suffix: '+', icon: PinIcon },
    { key: 'professionals', label: 'Professionals', value: 20, suffix: '+', icon: UsersIcon },
    { key: 'clients', label: 'Happy Clients', value: 150, suffix: '+', icon: UsersIcon },
  ];


  return (
    <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
      {data.map((s) => (
        <div key={s.key} className="flex flex-col border border-cyan-500/70 rounded-2xl py-2 px-10 items-center text-center scale-100 duration-300 cursor-default shadow-none hover:scale-105 hover:shadow-2xl shadow-cyan-700/20">
          {/* icon */}
          <div className="text-[#0f6fb2]">
            {s.icon && <s.icon className="h-16 w-16" aria-hidden />}
          </div>
          {/* number + plus */}
          <div className="mt-4 text-4xl font-extrabold tracking-tight text-[#0f6fb2]">
            <span data-counter data-countto={s.value} data-duration="1400">0</span>
            <span aria-hidden className="align-super text-3xl">{s.suffix || ''}</span>
          </div>
          {/* label */}
          <div className="mt-2 text-lg font-semibold text-slate-900">{s.label}</div>
        </div>
      ))}
    </div>
  );
}


/* Icons */
function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" {...props}>
      <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}
function YearIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" {...props}>
      <path d="M3 4h18M3 12h18M3 20h18" />
    </svg>
  );
}
/* ---------------- Utils ---------------- */
function yearSpan(startYear) {
  const now = new Date().getFullYear();
  return Math.max(1, now - startYear);
}
