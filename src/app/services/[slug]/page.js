// app/services/[slug]/page.js
import Image from "next/image";
import Link from "next/link";

const services = {
  "direct-international-tax": {
    title: "Direct & International Tax",
    intro:
      "Our Direct and International Tax practice focuses on helping businesses and individuals navigate India’s complex and ever-changing tax landscape. We provide comprehensive tax planning, compliance, and advisory services aimed at minimizing risks and optimizing tax efficiency. Our services include income-tax return preparation, assessments, and representation before tax authorities and appellate bodies. For multinational clients, we specialize in cross-border tax structuring, transfer pricing documentation, and treaty analysis to ensure compliance with international standards. With years of experience in dealing with intricate taxation matters, we offer strategic insights to help clients achieve tax certainty while aligning with their long-term business goals.",
    whatWeDo: [
      "Tax planning for domestic and cross-border structures",
      "Return preparation & filings for companies, LLPs, firms and HNIs",
      "Assessments, representations and appellate support",
      "Advance Tax computation & planning; quarterly installments",
      "TDS/TCS compliance reviews, due dates tracking & return filing",
      "Notices: reply drafting, documentation, and representation before authorities",
      "Transfer Pricing coordination (Master/Local files, benchmarking) & litigation support",
      "DTAA interpretation, foreign tax credit & global income disclosures for NRIs",
    ],
    howWeEngage: [
      "Scoping call & document list",
      "Review & tax position note",
      "Compliance & filing",
      "Assessment/appeal representation (as applicable)",
    ],
    faqs: [
      { q: "Can you represent us before tax authorities?", a: "Yes, we assist with assessments, notices and appellate matters, preparing submissions and representation." },
      { q: "Do you handle HNI returns?", a: "Yes, including capital gains, ESOPs, foreign income and disclosure requirements." },
    ],
    src: "/service1.png"
  },

  "gst-indirect-tax": {
    title: "GST & Indirect Tax",
    intro:
      "The introduction of the Goods and Services Tax (GST) has transformed India’s indirect tax regime, creating both challenges and opportunities for businesses. Our GST & Indirect Tax division offers end-to-end support — from registration and classification to compliance, audits, and advisory. We assist clients in interpreting GST laws, optimizing input tax credits, and managing place-of-supply complexities for multi-state operations. Our specialists also provide in-depth guidance on refunds, reconciliations (2B/3B vs. books), and departmental representations. Whether you’re setting up operations, facing an audit, or dealing with cross-border supply chains, we help ensure that your indirect tax positions are compliant, efficient, and strategically sound.",
    whatWeDo: [
      "GST registration, migration and advisory on tax positions",
      "Monthly/quarterly returns and annual filings",
      "Reconciliations (GSTR-2B, 3B vs books) and input-credit optimisation",
      "GST audits (incl. 9/9C), departmental liaison and end-to-end refunds",
      "Notices & scrutiny: reply drafting, documentation and representation",
      "Indirect tax health checks and risk reviews",
    ],
    howWeEngage: ["Onboarding & data design", "Recurring compliances/MIS", "Year-end closures & audits", "Departmental liaison/refunds (as needed)"],
    faqs: [
      { q: "Can you manage monthly filings?", a: "Yes, we manage returns, payment challans and reconciliations end-to-end." },
      { q: "Do you assist with refunds?", a: "Yes, from documentation to application and follow-through." },
    ],
    src: "/service1.png"
  },

  "audit-assurance": {
    title: "Audit & Assurance",
    intro:
      "In a world where transparency and governance are paramount, our Audit & Assurance services help build stakeholder confidence through integrity and precision. We conduct statutory audits, internal audits, management audits, and special purpose reviews in line with professional standards and regulatory requirements. Our audit approach goes beyond compliance — we focus on identifying process improvements, strengthening internal controls, and enhancing operational efficiency. Over the years, we’ve worked with clients across sectors, including manufacturing, trading, financial services, and trusts, delivering reliable insights that support sustainable growth. Our commitment to quality assurance ensures that every audit engagement adds tangible value to your organization.",
    whatWeDo: [
      "Statutory audits under Companies Act and other statutes",
      "Internal audits and process reviews",
      "Tax Audit (Sec 44AB) and support with assessments",
      "GST Audit (as applicable) and compliance reviews",
      "Trust/NGO audits, concurrent/special purpose audits",
      "Stock & inventory verification, reporting and controls", +    "Forensic procedures & fraud reviews; risk-based audit planning",
      "IFC/ICFR testing and implementation",
    ],
    howWeEngage: ["Risk assessment & audit plan", "Fieldwork & walkthroughs", "Reporting & management responses", "Follow-up reviews"],
    faqs: [
      { q: "Do you do trust audits?", a: "Yes, including societies and section-8 entities." },
      { q: "Can you review controls (ICFR)?", a: "Yes, including design, testing and remediation plans." },
    ],
    src: "/service4.png"
  },

  "accounting-payroll": {
    title: "Accounting & Payroll",
    intro:
      "Accurate accounting is the foundation of informed decision-making. Our Accounting & Payroll team provides reliable bookkeeping, financial reporting, and payroll processing services to businesses of all sizes. We manage everything from day-to-day accounting entries and reconciliations to preparation of MIS reports, ensuring your financial data remains accurate, timely, and compliant with statutory requirements. Our payroll solutions cover salary computation, TDS, PF/ESI management, and payslip generation. We also design customized accounting systems and internal processes that scale as your business grows. With our support, clients gain greater visibility into performance metrics while freeing up time to focus on strategic business priorities.",
    whatWeDo: [
      "Day-to-day bookkeeping and reconciliations",
      "Payroll processing, TDS/ESI/EPF and payslips",
      "Monthly closes and management reports (MIS) with KPI dashboards",
      "AR/AP ageing, vendor management and controls",
      "Virtual CFO/controllership oversight: budgeting, cashflow & board packs",
    ],
    howWeEngage: ["Tooling & chart-of-accounts setup", "Steady-state books & payroll", "Monthly closes & MIS", "Audit & compliance hand-off"],
    faqs: [
      { q: "Can you work on our software?", a: "Yes, we work with common ERPs and accounting tools." },
      { q: "Do you provide on-site support?", a: "Remote-first with on-site visits where needed." },
    ],
    src: "/service2.png"
  },

  "fema-rbi": {
    title: "FEMA & RBI Compliance",
    intro:
      "Foreign investments, external borrowings, and cross-border transactions require careful navigation of the FEMA and RBI regulatory framework. Our dedicated FEMA & RBI Compliance team assists clients in managing inbound and outbound capital flows, ensuring every transaction complies with Indian exchange control laws. We handle filings such as FC-GPR, FC-TRS, FLA, and ECB returns, while also preparing compounding applications and liaising with regulators when needed. For clients expanding internationally or establishing liaison or branch offices in India, we provide full-cycle support — from advisory to documentation. Our goal is to help you achieve smooth regulatory approvals while maintaining total transparency and compliance.",
    whatWeDo: [
      "FEMA advisory for FDI, ODI and ECBs",
      "RBI filings (FC-GPR, FC-TRS, FLA and others)",
      "Setting up liaison/branch/project offices",
      "Compounding applications & regularisations; demand/refund coordination",
      "Repatriation planning with tax/DTAA alignment",
      "Share transfers, pricing and reporting",
    ],
    howWeEngage: ["Feasibility & route analysis", "Documentation & filings", "Regulatory liaison", "Post-approval compliance calendar"],
    faqs: [
      { q: "Can you help with LO/BO setup?", a: "Yes, from application to ongoing compliances." },
      { q: "Do you handle compounding?", a: "Yes, including preparation and submissions." },
    ],
    src: "/service3.png"
  },

  "companies-act": {
    title: "Companies Act & Secretarial",
    intro:
      "Compliance under the Companies Act, 2013 demands precision, timeliness, and expert understanding of corporate law. Our Secretarial team offers a complete suite of services — from company incorporation and LLP registration to routine filings, share transfers, and annual returns. We ensure proper documentation of board and shareholder meetings, maintain statutory registers, and assist in event-based compliance such as change of directors, capital restructuring, and closure proceedings. For growing organizations, we act as your outsourced Company Secretary function, helping you meet every ROC and MCA requirement with accuracy. Our proactive approach ensures governance standards are met without disrupting business continuity.",
    whatWeDo: [
      "Company/LLP incorporation and conversions; Partnership setup",
      "Section 8 (NGO) registration and governance support",
      "Director/KMP changes, share issues/transfers",
      "Annual returns, event-based ROC filings",
      "Board support — notices, minutes and registers",
      "IEC (Import-Export Code) registration and post-registration guidance",
      "CSR registration, 12A/80G assistance & NGO Darpan/FCRA coordination",
      "Dormant/strike-off processes",
    ],
    howWeEngage: ["Entity scoping & name checks", "Incorporation & PAN/TAN", "Compliance calendar setup", "Ongoing board/ROC support"],
    faqs: [
      { q: "Do you assist with ESOP filings?", a: "Yes, including board/shareholder actions and forms." },
      { q: "Can you be our compliance partner?", a: "Yes, we manage an annual compliance calendar." },
    ],
    src: "/service3.png"
  },

  "valuation-transactions": {
    title: "Valuation & Transactions",
    intro:
      "Sound valuation underpins every strategic business decision — whether for mergers, acquisitions, fundraising, or restructuring. Our Valuation & Transactions practice delivers independent, well-supported valuation reports tailored to each client’s regulatory and commercial needs. We perform business and equity valuations, financial modeling, and due diligence for both buy-side and sell-side mandates. By combining technical expertise with sectoral insight, we help clients quantify value, assess risk, and negotiate confidently. We also support transaction documentation, data room preparation, and post-deal integration. Our focus is to help you unlock true value from every business opportunity with a clear, data-backed perspective.",
    whatWeDo: [
      "Business & securities valuation for deals and regulatory needs",
      "Financial models and scenario planning",
      "Buy-side/sell-side due diligence & feasibility studies",
      "CMA data & Project Reports for banks/investors",
      "Data room prep, Q&A, SPA support; JV structuring",
      "Post-deal integration and reporting",
    ],
    howWeEngage: ["Scope & data request", "Analysis & modelling", "Review meetings", "Reports & hand-off"],
    faqs: [
      { q: "Can you coordinate with bankers/lawyers?", a: "Yes, we collaborate with the wider deal team." },
      { q: "Do you issue valuation reports?", a: "Yes, as per the applicable standards/regulations." },
    ],
    src: "/service4.png"
  },

  "nri-foreign-desk": {
    title: "NRI & Foreign Desk",
    intro:
      "Expanding across borders requires reliable local expertise. Our NRI & Foreign Desk offers specialized advisory for non-resident individuals and overseas businesses operating in or from India. We assist with entity setup, taxation, FEMA compliance, repatriation planning, and DTAA interpretations. From obtaining PAN, TAN, or GST registration to managing regular tax filings and certifications, we provide end-to-end execution with confidentiality and precision. Our team also coordinates with overseas advisors to align Indian compliances with global obligations. Whether you’re investing in India, managing foreign income, or seeking repatriation solutions, we ensure your cross-border journey is smooth and compliant.",
    whatWeDo: [
      "Entity setup and registrations",
      "NRI taxation, DTAA positions and global income disclosures",
      "Banking/KYC, PAN/Aadhaar and FEMA touchpoints",
      "Repatriation planning, certifications & FEMA compliance",
      "Coordination with overseas advisors",
    ],
    howWeEngage: ["Discovery & route selection", "Registrations & banking", "Tax & FEMA compliances", "Ongoing advisory"],
    faqs: [
      { q: "Do you advise on DTAA?", a: "Yes, including residency, PE and credit mechanisms." },
      { q: "Can you help with repatriation?", a: "Yes, with the certifications and filings required." },
    ],
    src: "/service4.png"
  },

  "startups-msme": {
    title: "Startups & MSME",
    intro:
      "Entrepreneurs need agility — and clarity. Our Startups & MSME vertical provides a one-stop solution for early-stage and growing businesses seeking robust financial, tax, and compliance support. We help with incorporation, accounting systems, and statutory registrations (DPIIT, MSME, GST, PF, ESIC, etc.), along with tax planning and due diligence for funding rounds. Our team also assists in preparing investor-ready financials, forecasts, and valuations. Beyond compliance, we offer strategic advice on incentive schemes, cash flow management, and regulatory submissions. With our hands-on support, founders can focus on scaling their vision while we handle the financial and compliance backbone.",
    whatWeDo: [
      "Entity setup and founder agreements coordination",
      "Accounting stack, payroll and dashboards",
      "Startup India, DPIIT and MSME registrations",
      "Grant/benefit applications and certifications; bank loan assistance",
      "Investor diligence readiness",
    ],
    howWeEngage: ["Kick-off & stack setup", "Monthly closes & compliances", "Quarterly reviews", "Round-readiness support"],
    faqs: [
      { q: "Do you help with DPIIT?", a: "Yes, including documentation and application." },
      { q: "What if we switch tools?", a: "We migrate data and keep the compliance calendar intact." },
    ],
    src: "/service4.png"
  },
};

export function generateMetadata({ params }) {
  const s = services[params.slug];
  if (!s) return { title: "Service" };
  return { title: `${s.title} | Services` };
}

export default function ServiceDetailPage({ params }) {
  const s = services[params.slug];
  if (!s) {
    return <div className="mx-auto max-w-3xl px-6 py-16">Service not found.</div>;
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-56 sm:h-64 lg:h-80 w-full">
        <Image
          src={s.src}
          alt={`${s.title} banner`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center bg-[#0F2742]/70">
          <div className="flex flex-col gap-3 sm:gap-4 pl-4 sm:pl-8 lg:pl-12">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white">
              {s.title}
            </h1>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <Link href="/" className="text-white text-sm sm:text-base hover:text-teal-400">Home</Link>
              <span className="text-white text-xs sm:text-sm">{">>"}</span>
              <Link href="/service" className="text-white text-sm sm:text-base hover:text-teal-400">Service</Link>
              <span className="text-white text-xs sm:text-sm">{">>"}</span>
              <span className="text-white text-sm sm:text-base">{s.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{s.title}</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
            {s.intro}
          </p>
        </section>

        {/* What we do */}
        <section className="mt-8 sm:mt-10 bg-gradient-to-r from-[#0e2f5b] to-[#008080] rounded-2xl text-slate-200 p-5 sm:p-6 lg:p-8">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">What we do</h2>
          {/* 1 col on mobile -> 2 cols md+ */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {s.whatWeDo.map((li, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <span className="text-sm sm:text-base">{li}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How we engage */}
        {/* How we engage */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-[#0F2742]">How we engage</h2>

          <div className="relative">
            {/* vertical line on mobile; hidden on md where we switch to grid */}
            <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-slate-200 md:hidden" />

            <ol
              className="
        grid grid-cols-1 gap-4
        md:grid-cols-2 md:gap-6
      "
            >
              {s.howWeEngage.map((step, i) => (
                <li
                  key={i}
                  className="
            relative flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4
            shadow-sm hover:shadow-md transition
          "
                >
                  {/* mobile timeline dot */}
                  <span
                    className="
              md:hidden relative z-10 mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center
              rounded-full bg-teal-600 text-white text-sm font-semibold
              ring-4 ring-white
            "
                    aria-hidden
                  >
                    {i + 1}
                  </span>

                  {/* desktop number pill */}
                  <span
                    className="
              hidden md:inline-flex h-8 w-8 shrink-0 items-center justify-center
              rounded-full bg-teal-600 text-white text-sm font-semibold
            "
                    aria-hidden
                  >
                    {i + 1}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#0F2742]">
                      {step}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {[
                        "We align scope, timelines, and data needs to avoid surprises.",
                        "Clear positions, assumptions, and deliverables before we execute.",
                        "Hands-on execution with checkpoints and transparent updates.",
                        "Representation and closure with a tidy hand-off of artefacts.",
                      ][i] || "Structured, transparent, and outcome-focused."}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>


        {/* CTA */}
        {/* CTA */}
        <section className="mt-10">
          <div
            className="
      relative overflow-hidden rounded-2xl
      bg-gradient-to-r from-[#0e2f5b] to-[#008080]
      text-white
      p-6 sm:p-8
      shadow-lg
    "
          >
            {/* subtle pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Need clarity on a position?
                </h3>
                <p className="mt-2 text-sm sm:text-base text-teal-50/90">
                  Get a quick, actionable view on your tax or compliance question.
                  We’ll review your facts and respond with a practical path forward.
                </p>

                {/* value bullets */}
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-teal-300" />
                    30-min discovery call
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-teal-300" />
                    Clear next steps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-teal-300" />
                    Confidential & precise
                  </li>
                </ul>
              </div>

              {/* actions */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:items-center">
                <a
                  href="/contact"
                  className="
            inline-flex items-center justify-center rounded-full
            bg-white text-[#0F2742]
            px-5 py-2.5 text-sm sm:text-base font-semibold
            hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/60
          "
                  aria-label="Book a consultation"
                >
                  Book a consultation
                </a>

                <a
                  href="mailto:office@vnsca.in"
                  className="
            inline-flex items-center justify-center rounded-full
            bg-white/10 backdrop-blur px-5 py-2.5 text-sm sm:text-base font-semibold
            ring-1 ring-white/30 hover:bg-white/15
            focus:outline-none focus:ring-2 focus:ring-white/60
          "
                  aria-label="Email us"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* FAQs */}
        <section className="mt-8 sm:mt-10">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">FAQs</h2>
          <div className="space-y-2 sm:space-y-3">
            {s.faqs.map((f, i) => (
              <details
                key={i}
                className="rounded-xl border border-black/20 p-4 sm:p-5"
              >
                <summary className="cursor-pointer text-sm sm:text-base font-medium">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm sm:text-base text-slate-700">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
