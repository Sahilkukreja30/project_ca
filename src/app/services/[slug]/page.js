// app/services/[slug]/page.js
import Image from "next/image";
import Link from "next/link";

const services = {
  "direct-international-tax": {
    title: "Direct & International Tax",
    intro:
      "Our Direct & International Tax practice helps businesses, individuals, and cross-border entities navigate India’s evolving tax environment with clarity and precision. We assist clients in planning structures that are compliant, commercially sound, and tax-efficient. From routine income-tax filings to complex international arrangements, we provide end-to-end support across documentation, assessments, audits, investigations, and appellate matters. Our team ensures accurate tax computations, robust compliance systems, and seamless coordination with revenue authorities. For global and NRI clients, we advise on residency, foreign income disclosures, treaty relief, transfer pricing, and cross-border reporting. With a blend of technical expertise and practical judgement, we help clients manage risk, optimise tax outcomes, and achieve long-term financial certainty.",
    whatWeDo: [
      "Tax planning for domestic, cross-border, corporate, and individual structures",
      "Return filing for companies, LLPs, firms, trusts, NRIs, and HNIs",
      "Drafting responses, documentation, and representation for assessments and investigations",
      "Transfer Pricing documentation, benchmarking and litigation support",
      "Advance Tax and TDS review, optimisation, and compliance monitoring",
      "Handling departmental notices, inquiries, reassessments, and audits",
      "DTAA interpretation, treaty relief, and foreign tax credit advisory",
      "NRI tax planning, global income disclosures, and capital gains support",
      "Tax diagnostic reviews and compliance health checks"
    ],
    howWeEngage: [
      "Scoping discussion & information request",
      "Tax position review & planning memo",
      "Execution of filings, documentation & advisory",
      "Representation, closure & compliance handover"
    ],
    faqs: [
      { q: "Do you represent clients before tax authorities?", a: "Yes. We assist with assessments, audits, notices, reassessments, and appellate matters with full documentation and representation." },
      { q: "Do you manage NRI taxation?", a: "Yes. We handle NRI filings, foreign income disclosures, capital gains, DTAA relief, and repatriation-related tax requirements." },
      { q: "Can you guide on cross-border tax structures?", a: "Yes, we advise on inbound/outbound investment, treaty interpretation, and compliance requirements." }
    ],
    src: "/service1.png"
  },

  "gst-indirect-tax": {
    title: "GST & Indirect Tax",
    intro:
      "Our GST & Indirect Tax practice supports businesses in managing India’s dynamic indirect tax framework with accuracy and confidence. We provide end-to-end assistance covering registration, classification, advisory, filings, reconciliations, audits, and departmental queries. Our team ensures correct interpretation of GST laws, maximisation of input credit, and timely preparation of monthly, quarterly, and annual returns. We assist clients in handling scrutiny notices, refund applications, export-related benefits, and multi-state compliance. With deep experience across industries, we help organisations build efficient tax processes, reduce exposure, and maintain ongoing compliance. Our goal is to simplify indirect taxation while enabling operational continuity and financial discipline.",
    whatWeDo: [
      "GST registration, classification analysis, and advisory on tax positions",
      "Monthly, quarterly and annual return filings (GSTR-1, 3B, 9/9C)",
      "Input tax credit review, optimisation, and 2B/3B vs. books reconciliations",
      "GST audits, departmental liaison, and representation",
      "Reply drafting for notices, scrutiny, and inquiries",
      "Refund applications for exports, inverted duty, and excess balances",
      "Indirect tax health checks and risk reviews",
      "Place of supply advisory for multi-state and cross-border operations",
      "Support for e-invoicing, e-way bill and compliance automation"
    ],
    howWeEngage: [
      "Understanding business model & compliance needs",
      "Structuring tax positions & compliance calendar",
      "Execution of monthly/annual filings & reconciliations",
      "Departmental representation & ongoing advisory"
    ],
    faqs: [
      { q: "Do you handle monthly GST filings?", a: "Yes. We prepare and file all periodic GST returns with timely reconciliations and payment support." },
      { q: "Can you assist with GST refunds?", a: "Yes. We manage end-to-end refund documentation, filing, and department follow-ups." }
    ],
    src: "/service1.png"
  },

  "audit-assurance": {
    title: "Audit & Assurance",
    intro:
      "Our Audit & Assurance practice delivers high-quality, objective, and value-focused audits that enhance stakeholder confidence. We conduct statutory audits, internal audits, tax audits, management reviews, trust and NGO audits, and special purpose examinations. Our approach goes beyond compliance — we assess internal controls, financial reporting accuracy, process efficiency, and risk areas impacting performance. We combine strong technical standards with practical insights, helping organisations improve governance, strengthen systems, and maintain transparency. With experience across industries, we tailor each audit to the client’s size, complexity, and regulatory requirements, ensuring a thorough yet efficient engagement.",
    whatWeDo: [
      "Statutory audits under the Companies Act and other laws",
      "Internal audits, process audits, and operational reviews",
      "Tax Audit under Section 44AB with documentation review",
      "Trust, NGO, society, and Section 8 company audits",
      "GST audit support and compliance reviews",
      "Inventory verification and stock audit procedures",
      "Internal control evaluation, IFC/ICFR testing and implementation support",
      "Special audits, forensic procedures and fraud risk reviews",
      "Management reporting and improvement recommendations"
    ],
    howWeEngage: [
      "Risk assessment & audit planning",
      "Fieldwork, walkthroughs & evidence gathering",
      "Drafting reports & discussing observations",
      "Finalisation, submission & post-audit support"
    ],
    faqs: [
      { q: "Do you conduct audits for NGOs and trusts?", a: "Yes. We audit trusts, societies, Section 8 entities, and charitable institutions." },
      { q: "Can you review internal controls?", a: "Yes, including design evaluation, implementation, testing, and improvement recommendations." }
    ],
    src: "/service4.png"
  },

  "accounting-payroll": {
    title: "Accounting & Payroll",
    intro:
      "Our Accounting & Payroll practice provides reliable, structured, and technology-driven financial management support for businesses of all sizes. We manage day-to-day bookkeeping, reconciliations, MIS reporting, payroll processing, statutory deductions, and month-end closures. Our team creates accounting systems aligned with your operational needs and ensures accurate, compliant financial data for decision-making. We also act as virtual CFOs, offering budgeting, forecasting, and financial oversight to help growing organisations maintain strong controls. With clear processes and timely deliverables, we help businesses focus on growth while we handle their financial backbone.",
    whatWeDo: [
      "Daily accounting, bookkeeping, and ledger maintenance",
      "Bank, vendor, and customer reconciliations",
      "Monthly management reports, MIS dashboards, and KPIs",
      "Payroll processing with TDS, PF, ESI and statutory compliance",
      "Accounts receivable and payable management",
      "Budgeting, forecasting and cash flow planning",
      "Setting up accounting systems, COA, and SOPs",
      "Controllership and virtual CFO oversight",
      "Audit support and year-end closure"
    ],
    howWeEngage: [
      "Understanding systems, tools & reporting needs",
      "Setting up accounting framework & workflows",
      "Monthly steady-state bookkeeping & payroll",
      "MIS delivery, reviews & audit coordination"
    ],
    faqs: [
      { q: "Can you work with our existing accounting software?", a: "Yes. We work with major ERPs and cloud-based accounting platforms." },
      { q: "Do you provide on-site support?", a: "Yes. While we operate primarily remote, onsite visits can be arranged when required." }
    ],
    src: "/service2.png"
  },

  "fema-rbi": {
    title: "FEMA & RBI Compliance",
    intro:
      "Our FEMA & RBI Compliance practice assists clients with inbound and outbound investments, foreign exchange regulations, cross-border transactions, and regulatory filings. We support businesses and individuals in understanding permissible routes for investment, pricing guidelines, reporting requirements, repatriation rules, and capital account transactions. Our team assists in filings such as FC-GPR, FC-TRS, FLA, ECB returns, compounding applications, and liaison/branch office approvals. With careful interpretation of FEMA provisions and coordination with banks and regulators, we ensure compliance while enabling smooth capital flows and cross-border structuring.",
    whatWeDo: [
      "Advisory on FDI, ODI, ECBs, share transfers and capital account transactions",
      "Preparation and filing of FC-GPR, FC-TRS, FLA, and other RBI returns",
      "Setting up liaison, branch and project offices",
      "Compounding applications, regularisation of past non-compliance",
      "Entity restructuring, pricing, valuation and reporting",
      "Repatriation planning aligned with tax and DTAA",
      "Bank coordination for filings, remittances and approvals",
      "FEMA due-diligence and transaction reviews",
      "Documentation for cross-border investments"
    ],
    howWeEngage: [
      "Route feasibility & regulatory assessment",
      "Documentation, pricing and structuring",
      "Filing submissions & regulator/bank coordination",
      "Compliance calendar & ongoing advisory"
    ],
    faqs: [
      { q: "Do you help with compounding cases?", a: "Yes. We prepare applications, documentation, and liaise with the RBI during the process." },
      { q: "Can you assist with setting up a liaison or branch office?", a: "Yes. We handle approvals, filings, documentation, and ongoing compliance." }
    ],
    src: "/service3.png"
  },

  "companies-act": {
    title: "Companies Act & Secretarial",
    intro:
      "Our Companies Act & Secretarial practice ensures businesses remain compliant with all statutory, procedural, and governance requirements under the Companies Act, 2013. We assist with company/LLP incorporation, share allotments, annual filings, board documentation, statutory registers, director changes, and event-based compliances. Our team ensures accuracy and timeliness in all ROC/MCA submissions and helps organisations implement strong corporate governance practices. We also support NGO/Section 8 registrations, CSR filings, and other specialised corporate processes. With structured documentation and proactive compliance tracking, we help businesses focus on growth while we manage their secretarial responsibilities.",
    whatWeDo: [
      "Company/LLP incorporation, conversion and restructuring",
      "Annual filings, ROC returns and event-based compliances",
      "Director and shareholder changes, share allotment & transfers",
      "Board meeting notices, minutes and statutory registers",
      "CSR registration, 12A/80G and NGO Darpan/FCRA support",
      "Partnership and Section 8 entity setup",
      "IEC registration and post-registration compliance",
      "Strike-off, dormant status applications and closures",
      "Secretarial audits and corporate governance reviews"
    ],
    howWeEngage: [
      "Understanding structure & compliance requirements",
      "Preparing documentation & drafting resolutions",
      "Filing with MCA/ROC & maintaining registers",
      "Providing ongoing corporate advisory"
    ],
    faqs: [
      { q: "Do you handle annual ROC filings?", a: "Yes. We manage all annual, event-based and compliance-related MCA filings." },
      { q: "Can you support non-profit and Section 8 registrations?", a: "Yes. We assist with setup, compliance, 12A/80G and CSR registrations." }
    ],
    src: "/service3.png"
  },

  "valuation-transactions": {
    title: "Valuation & Transactions",
    intro:
      "Our Valuation & Transactions practice supports clients in making informed decisions during fundraising, restructuring, mergers, acquisitions, and strategic business moves. We provide independent and defensible valuation reports in line with regulatory requirements and global best practices. Our team conducts financial modelling, scenario analysis, feasibility studies, and buy-side/sell-side due diligence. We also assist in preparing CMA data, project reports, data rooms, transaction documentation, and post-deal integration. With strong analytical expertise and industry understanding, we bring clarity and confidence to complex business decisions.",
    whatWeDo: [
      "Business, equity, and securities valuation for regulatory and deal purposes",
      "Financial modelling, projections, and scenario planning",
      "Buy-side and sell-side due diligence",
      "CMA data preparation and project reports for banks/investors",
      "Transaction structuring and feasibility studies",
      "Data room organisation, Q&A support and SPA assistance",
      "Valuation compliance and documentation for regulators",
      "JV structuring, negotiation support & term sheet reviews",
      "Post-deal integration support"
    ],
    howWeEngage: [
      "Scope alignment & data request",
      "Analysis, modelling & review meetings",
      "Draft & final report issuance",
      "Deal support & documentation handover"
    ],
    faqs: [
      { q: "Do you issue valuation reports as per regulatory standards?", a: "Yes. We issue valuation reports compliant with applicable regulations and standards." },
      { q: "Do you help with deal documentation?", a: "Yes. We assist with data room preparation, Q&A and SPA-related support." }
    ],
    src: "/service4.png"
  },

  "nri-foreign-desk": {
    title: "NRI & Foreign Desk",
    intro:
      "Our NRI & Foreign Desk provides specialised support for non-resident individuals and foreign entities dealing with Indian tax, regulatory, and compliance matters. We assist with entity setup, registrations, PAN/Aadhaar, FEMA compliance, repatriation, DTAA interpretation, and cross-border taxation. Our team ensures accurate filings, foreign income disclosures, investment compliance, and coordination with banks and authorities. Whether you are investing in India, earning overseas income, or seeking clarity on residency, we offer structured guidance and reliable execution.",
    whatWeDo: [
      "NRI taxation, residency analysis and global income disclosures",
      "Advisory on investments, capital gains and DTAA interpretation",
      "PAN, Aadhaar, TAN, GST and entity registration support",
      "FEMA compliance, repatriation planning and certifications",
      "Bank coordination for KYC, remittances and filings",
      "Support for foreign companies setting up in India",
      "Cross-border compliance reviews",
      "Documentation for investment and regulatory filings"
    ],
    howWeEngage: [
      "Understanding residency, income & asset profile",
      "Structuring positions & documentation planning",
      "Execution of filings, certifications & compliance",
      "Ongoing advisory & regulatory coordination"
    ],
    faqs: [
      { q: "Do you assist with DTAA interpretation?", a: "Yes. We guide on residency, PE, tax credit mechanisms and treaty benefits." },
      { q: "Can you help with repatriation?", a: "Yes. We advise on repatriation rules and handle required certifications and filings." }
    ],
    src: "/service4.png"
  },

  "startups-msme": {
    title: "Startups & MSME",
    intro:
      "Our Startups & MSME practice is designed to help early-stage and growing businesses build a strong financial, regulatory, and operational foundation. We support founders with incorporation, registrations, tax planning, accounting systems, payroll, investor-ready financials, and compliance management. From DPIIT/MSME registrations to fundraising due diligence, our team ensures that young companies are structured correctly and compliant from day one. We also assist in preparing projections, valuations, and reports required during funding rounds or bank interactions. With hands-on support and founder-friendly execution, we enable startups to focus on scaling while we handle the financial and compliance backbone.",
    whatWeDo: [
      "Company/LLP incorporation and founders’ agreement coordination",
      "Startup India/DPIIT and MSME registration assistance",
      "Accounting stack setup, payroll and dashboards",
      "Monthly closes, statutory filings and compliance calendar",
      "Investor-ready financials, forecasts and projections",
      "Support for funding documentation and investor diligence",
      "Advisory on tax incentives, schemes and grants",
      "Loan application support, CMA data and bank submissions",
      "Compliance migration and system re-alignment"
    ],
    howWeEngage: [
      "Kick-off meeting & compliance roadmap",
      "Stack setup, onboarding & registrations",
      "Monthly accounting, payroll & reviews",
      "Diligence support & growth advisory"
    ],
    faqs: [
      { q: "Do you help with DPIIT recognition?", a: "Yes. We manage eligibility checks, documentation and application filing." },
      { q: "Do you prepare investor-ready reports?", a: "Yes. We prepare financials, projections, pitch data and assist with diligence queries." }
    ],
    src: "/service4.png"
  }
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
      <section className="relative">
        <div className="h-[480px] w-full">
          <Image
            src={s.src}
            alt={`${s.title} banner`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center bg-[#0F2742]/70">
            <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
              <h1 className="mx-auto max-w-7xl text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                {s.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
        {/* Intro */}
        <section className="mx-auto max-w-7xl ">
          <h1 className="text-2xl sm:text-3xl text-center lg:text-4xl font-bold">{s.title}</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-justify text-slate-700">
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
              </div>

              {/* actions */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:items-center">
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
