"use client";

import Link from "next/link";

const services = [
  { code: "TX",  title: "Direct & International Tax",   slug: "direct-international-tax", sub: "Planning, filings, assessments, appeals" },
  { code: "GST", title: "GST & Indirect Tax",           slug: "gst-indirect-tax",         sub: "Registration, returns, audits, refunds" },
  { code: "AU",  title: "Audit & Assurance",            slug: "audit-assurance",          sub: "Statutory, internal, trust, special audits" },
  { code: "AC",  title: "Accounting & Payroll",         slug: "accounting-payroll",       sub: "Books, payroll, MIS, controllership" },
  { code: "FM",  title: "FEMA & RBI Compliance",        slug: "fema-rbi-compliance",      sub: "Investments, compounding, filings" },
  { code: "CO",  title: "Companies Act & Secretarial",  slug: "companies-act-secretarial",sub: "Incorporation, ROC, governance" },
  { code: "VL",  title: "Valuation & Transactions",     slug: "valuation-transactions",   sub: "Valuation, DD, M&A support" },
  { code: "NRI", title: "NRI & Foreign Desk",           slug: "nri-foreign-desk",         sub: "Setup, compliance, taxation" },
  { code: "SU",  title: "Startups & MSME",              slug: "startups-msme",            sub: "Entity setup, incentives, compliance" },
];

export default function ServicesIndexPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-6">
        <p className="text-sm font-medium tracking-wide text-slate-500">Services</p>
        <h1 className="mt-1 text-3xl font-bold text-[#0F2742]">What we do</h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[11px] font-bold text-[#0F2742]">
                {s.code}
              </span>
              <h3 className="text-lg font-semibold text-[#0F2742] group-hover:underline">
                {s.title}
              </h3>
            </div>
            <p className="text-sm text-slate-600">{s.sub}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
        Need guidance? Book a quick call from the <a href="/contact" className="font-semibold underline">Contact</a> page.
      </div>
    </section>
  );
}
