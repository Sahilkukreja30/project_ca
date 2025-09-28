"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y,Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ---- Slides (update image paths to your /public assets) ----
const slides = [
  {
    image: "/slide1.png",
    title: "Strong Foundations, Brighter Horizons",
    sub: "Structured growth for modern businesses.",
    ctas: [{ label: "Book a consultation", href: "/contact", primary: true },
      { label: "Explore services", href: "/services" }],
    showGraph: false,
  },
  {
    image: "/slide2.png",
    title: "Built on Collaboration,Driven By Expertise",
    sub: "Together,we create solutions that last.",
    ctas: [
      { label: "Book a consultation", href: "/contact", primary: true },
      { label: "Explore services", href: "/services" },
    ],
    showGraph: false,
  },
  {
    image: "/slide3.png",
    title: "Unlocking New Possibilities",
    sub: "From challenges to opportunities.",
    ctas: [
      { label: "Book a consultation", href: "/contact", primary: true },
      { label: "Explore services", href: "/services" },
    ],
    showGraph: false,
  },
];

export default function HeroCarouselFull() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full h-[100svh]"> {/* full safe viewport */}
      {/* Custom nav arrows */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 backdrop-blur px-2 py-2 shadow hover:bg-white md:left-4"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        ref={nextRef}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 backdrop-blur px-2 py-2 shadow hover:bg-white md:right-4"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <Swiper
        modules={[Autoplay, Navigation, A11y, Keyboard]}
        slidesPerView={1}
        loop
        speed={700}
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          // hook custom buttons
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        className="h-full"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover"
              />
              {/* Left-to-right gradient so text pops, like your screenshot */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
            </div>

            

            {/* Text + CTAs */}
            <div className="relative z-10 flex h-[100svh] items-center">
              <div className="mx-auto w-full max-w-6xl px-16">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-sm md:text-5xl">
                    {s.title}
                  </h1>
                  {s.sub ? (
                    <p className="mt-4 text-lg text-white/90">{s.sub}</p>
                  ) : null}
                  {s.ctas?.length ? (
                    <div className="mt-7 flex flex-wrap gap-4">
                      {s.ctas.map((c, i) => (
                        <Link
                          key={i}
                          href={c.href}
                          className={
                            c.primary
                              ? "rounded-xl bg-teal-500 px-5 py-3 text-sm font-medium text-white shadow hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                              : "rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
                          }
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
