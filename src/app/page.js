"use client";
import { useEffect, useRef } from "react";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Swiper styles (global; safe in client component)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ServicesSection from "@/components/ServiceSection";



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


  const statsData = [
    { key: 'years', label: 'Years of Practice', value: yearSpan(2013), hint: 'Established 2013' },
    { key: 'partners', label: 'Partners', value: 2 },
    { key: 'qualified', label: 'Qualified Professionals', value: 5 },
    { key: 'semi', label: 'Semi‑qualified', value: 10 },
    { key: 'assist', label: 'Staff Assistants', value: 9 },
    { key: 'admin', label: 'Admin Team', value: 3 },
    { key: 'locations', label: 'Locations', value: 2, hint: 'Mumbai & Dubai' },
    { key: 'clients', label: 'Clients Served', value: 150 },
  ];

  // Refs for counters
  // ---- HERO SLIDES (replace image paths with your assets in /public) ----
  const heroSlides = useMemo(
    () => [
      {
        src: "/slide1.png",
        title: "Assurance you can act on",
        subtitle:
          "Clear reporting, sharper decisions, and audit support that actually helps leadership move faster.",
        cta: { label: "Explore Services", href: "/services/audit-assurance" },
      },
      {
        src: "/slide2.png",
        title: "Tax strategies built for growth",
        subtitle:
          "From India to overseas jurisdictions — proactive direct & international tax planning, filings and representations.",
        cta: { label: "Direct & International Tax", href: "/services/direct-international-tax" },
      },
      {
        src: "/slide3.png",
        title: "Regulatory clarity, zero surprises",
        subtitle:
          "FEMA/FDI, RBI and Companies Act compliance handled end‑to‑end so you can focus on building.",
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



  // ---- SERVICES (cards with teal gradient background) ----
  const services = [
    {
      title: "Direct & International Tax",
      href: "/services/direct-international-tax",
      img: "/services/direct-tax.jpg",
      blurb: "Planning, filings, assessments & representations across jurisdictions.",
    },
    {
      title: "Regulatory, FEMA & FDI",
      href: "/services/regulatory-fema-fdi",
      img: "/services/fema.jpg",
      blurb: "RBI/FDI advisory, filings and end‑to‑end regulatory compliance.",
    },
    {
      title: "Transaction Advisory",
      href: "/services/transaction-advisory",
      img: "/services/transactions.jpg",
      blurb: "Valuation, due diligence, structuring and M&A support.",
    },
    {
      title: "Audit & Assurance",
      href: "/services/audit-assurance",
      img: "/services/audit.jpg",
      blurb: "Statutory, internal, trust and special purpose audits.",
    },
    {
      title: "Accounting & Payroll",
      href: "/services/accounting-payroll",
      img: "/services/accounting.jpg",
      blurb: "Managed books, payroll, MIS and controllership solutions.",
    },
    {
      title: "Company Law & Secretarial",
      href: "/services/companies-act",
      img: "/services/secretarial.jpg",
      blurb: "Incorporation, ROC filings and governance support.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ---------------- Hero: Swiper like DPNC ---------------- */}
      <section className="relative h-[70vh] min-h-[520px] w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
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
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0F2742]/60" />
                <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl font-semibold text-white md:text-5xl">{s.title}</h1>
                    <p className="mt-4 text-base text-slate-100 md:text-lg">{s.subtitle}</p>
                    <div className="mt-6 flex gap-3">
                      <Link
                        href={s.cta.href}
                        className="rounded-full bg-[#1FA3A3] px-5 py-3 text-sm font-medium text-white shadow hover:brightness-95"
                      >
                        {s.cta.label}
                      </Link>
                      <Link
                        href="/contact"
                        className="rounded-full border border-white/60 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                      >
                        Book a consultation
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
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: partner swiper (2s interval) */}
          <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
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
          </div>

          {/* Right: firm intro */}
          <div>
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
          </div>
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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0F2742]">Our Mission</h3>
            <p className="mt-3 text-slate-700">
              To uphold the highest standards of commitment, confidentiality and competence while
              continually improving the quality of services through ongoing learning, training and
              strong internal controls.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0F2742]">Our Vision</h3>
            <p className="mt-3 text-slate-700">
              To be recognised as a trusted, quality‑first professional services firm with a meaningful
              presence across regions — cited for practical expertise and dependable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Services on teal gradient ---------------- */}
      <ServicesSection/>

      {/* ---------------- Final CTA ---------------- */}
      <section className="bg-[#0F2742] py-14 text-center text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Let’s discuss your requirements</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm/6 text-slate-200">
            From tax and regulatory to transactions and assurance — we’ll tailor a solution to your goals.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[#1FA3A3] px-5 py-3 text-sm font-medium text-white shadow hover:brightness-95">Contact us</Link>
            <Link href="/services" className="rounded-full border border-white/60 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">Our services</Link>
          </div>
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
        <div key={s.key} className="flex flex-col items-center text-center">
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
