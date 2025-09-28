"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      tag: "Direct",
      title: "Direct & International Tax",
      blurb:
        "Corporate tax, cross-border structuring, transfer pricing and litigation support.",
      href: "/services/direct-international-tax",
      img: "/services/service_1.jpg",
    },
    {
      tag: "Regulatory",
      title: "Regulatory & FEMA/FDI",
      blurb:
        "Company law, FEMA/FDI advisory, registrations and ongoing compliance.",
      href: "/services/regulatory-fema-fdi",
      img: "/services/service_2.jpg",
    },
    {
      tag: "Transactions",
      title: "Transaction Advisory",
      blurb:
        "Valuation, financial modelling, M&A support, due diligence.",
      href: "/services/transaction-advisory",
      img: "/services/service_3.jpg",
    },
    {
      tag: "Audit",
      title: "Audit & Assurance",
      blurb:
        "Statutory, internal and special audits; risk advisory.",
      href: "/services/audit-assurance",
      img: "/services/service_4.jpg",
    },
  ];

  return (
    <section className="bg-[#0e2f5b] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-sky-200/80">
              What we do
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Services
            </h2>
            <p className="mt-1 text-sm text-sky-100/70">
              Specialised practice areas delivered by senior-led teams.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-sky-200 hover:text-white underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.href}
              className="group rounded-2xl border border-white/10 bg-[#0c2a51] p-3 shadow-[0_6px_18px_rgba(0,0,0,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(0,0,0,.35)]"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                {/* Tag */}
                <span className="absolute left-2 top-2 inline-flex items-center rounded-lg bg-white/85 px-2 py-1 text-[11px] font-semibold text-[#0e2f5b] shadow-sm">
                  {s.tag}
                </span>
              </div>

              {/* Text */}
              <div className="px-2 pb-1 pt-3">
                <Link
                  href={s.href}
                  className="text-base font-semibold text-white underline-offset-4 hover:underline"
                >
                  {s.title}
                </Link>
                <p className="mt-1 line-clamp-2 text-sm text-sky-100/80">
                  {s.blurb}
                </p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-200 hover:text-white"
                >
                  Explore <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
