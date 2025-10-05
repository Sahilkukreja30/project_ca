"use client";
import { useEffect, useMemo } from "react";
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
import MissionVision from "../components/Mission";

export default function HomePage() {
  // Count-up animation logic
  useEffect(() => {
    const els = document.querySelectorAll("[data-countto]");
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (el) => {
      const target = parseInt(el.getAttribute("data-countto"), 10) || 0;
      const duration = parseInt(el.getAttribute("data-duration"), 10) || 1500;
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
            e.target.dataset.counted = "1";
            animate(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("[data-counter]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Hero slides
  const heroSlides = useMemo(
    () => [
      {
        src: "/slide1.png",
        title: "Strong Foundations, Brighter Horizons",
        subtitle: "Structured Growth for modern businesses",
        cta: { label: "Explore Services", href: "/services/audit-assurance" },
      },
      {
        src: "/slide2.png",
        title: "Build on Collaboration, Driven by Expertise",
        subtitle: "Together, we create solutions that last.",
        cta: { label: "Direct & International Tax", href: "/services/direct-international-tax" },
      },
      {
        src: "/slide3.png",
        title: "Unlocking New Possibilities",
        subtitle: "From challenges to opportunities",
        cta: { label: "Regulatory & FEMA/FDI", href: "/services/fema-rbi" },
      },
    ],
    []
  );

  const partnerSlides = [
    { src: "/hero.jpeg", name: "CA Vishal N Shah", role: "Founder & Partner" },
    { src: "/hero2.jpeg", name: "CA Nishant S Chitalia", role: "Co-Founder & Partner" },
  ];

  const fadeSlide = (dir = "left", distance = 60) => {
    const x = dir === "left" ? -distance : dir === "right" ? distance : 0;
    const y = dir === "up" ? -distance : dir === "down" ? distance : 0;
    return {
      hidden: { opacity: 0, x, y },
      show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
    };
  };

  return (
    <main className="bg-white">
      {/* ---- HERO SECTION ---- */}
      <section className="relative h-[80vh] min-h-[480px] w-full">
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
                <Image src={s.src} alt={s.title} fill priority={i === 0} className="object-cover" />
                <div className="absolute inset-0 bg-[#0F2742]/60" />
                <div className="absolute inset-0 flex items-center justify-start px-6 md:px-10">
                  <div className="max-w-xl md:max-w-2xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                      {s.title}
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-slate-100">{s.subtitle}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="rounded-full border bg-[#1FA3A3] hover:bg-teal-800 border-white/55 px-5 py-3 text-sm font-medium text-white/90"
                      >
                        Book a consultation
                      </Link>
                      <Link
                        href={s.cta.href}
                        className="rounded-full px-5 py-3 bg-white/30 text-sm font-medium border border-white/60 text-white hover:bg-white/10 shadow hover:brightness-95"
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

      {/* ---- ABOUT SECTION ---- */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-16 lg:gap-24 md:grid-cols-2">
          {/* Left: Swiper */}
          <motion.div
            variants={fadeSlide("left", 80)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative h-[420px] sm:h-[480px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
          >
            <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 2000 }} loop>
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
            <h2 className="text-3xl font-semibold text-[#0F2742]">Founder – CA Vishal N Shah</h2>
            <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed">
              CA Vishal N Shah, the founding partner, is an Associate Member of the Institute of Chartered Accountants of India with over a decade of experience spanning industry and professional practice. He specializes in direct taxation and advisory services, with a proven track record in appellate matters, mergers & acquisitions, project financing, and government liaison.
            </p>
            <h2 className="mt-8 text-3xl font-semibold text-[#0F2742]">Co-Founder – CA Nishant S Chitalia</h2>
            <p className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed">
              CA Nishant S Chitalia, co-founder and partner, brings over 12 years of professional experience in taxation, valuation, trust audits, and consultancy. He is known for delivering practical, timely, and compliance-focused solutions, helping clients navigate complex regulatory frameworks with clarity and confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---- STATS ---- */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[#f1f3f5]" />
        <div className="mx-auto max-w-7xl px-6">
          <StatsRibbon />
        </div>
      </section>

      {/* ---- MISSION & VISION ---- */}
      <MissionVision />

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
