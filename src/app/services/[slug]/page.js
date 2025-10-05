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
      "TDS/TCS reviews, health checks and due diligence",
      "Transfer pricing coordination with specialists where required",
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
      "GST audits, departmental support and refunds processing",
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
      "Trust/NGO and special purpose audits",
      "Risk & controls evaluation; reporting improvements",
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
      "Monthly closes and management reports (MIS)",
      "AR/AP ageing, vendor management and controls",
      "CFO/controllership support as you scale",
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
      "Compounding applications & regularisations",
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
      "Company/LLP incorporation and conversions",
      "Director/KMP changes, share issues/transfers",
      "Annual returns, event-based ROC filings",
      "Board support — notices, minutes and registers",
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
      "Buy-side/sell-side due diligence",
      "Data room prep, Q&A and SPA support",
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
      "NRI taxation, DTAA positions and disclosures",
      "Banking/KYC, PAN/Aadhaar and FEMA touchpoints",
      "Repatriation planning and certifications",
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
      "Grant/benefit applications and certifications",
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
    <main className="">
      <section className="relative h-80 w-full">
        <Image
          src={s.src}
          alt="Industries Vishal N Shah & Co serves"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute  inset-0 flex items-center pl-10 bg-[#0F2742]/70">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold text-white">{s.title}</h1>
            <div className="flex gap-2">
              <Link href={"/"} className="text-white text-lg hover:text-teal-400">Home</Link>
              <h1 className="text-white text-sm pt-1">{">>"}</h1>
              <Link href={"/service"} className="text-white text-lg hover:text-teal-400">Service</Link>
              <h3 className="text-white pt-1 text-sm">{">>"}</h3>
              <h1 className="text-white text-lg">{s.title}</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="mx-auto max-w-6xl py-10">
        <section className="px-2 text-center">
          <h1 className="text-3xl font-bold">{s.title}</h1>
          <p className="mt-4">{s.intro}</p>
        </section>


        <section className="mt-10 bg-gradient-to-r from-[#0e2f5b] to-[#008080] rounded-2xl text-slate-300 p-6">
          <h2 className="mb-3 text-xl font-semibold">What we do</h2>
          <ul className="space-y-2 ">
            {s.whatWeDo.map((li, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How we engage */}
        <section className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">How we engage</h2>
          <ol className="list-decimal space-y-2 pl-6 ">
            {s.howWeEngage.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-2xl bg-black text-white p-6 backdrop-blur">
            <p className="">Need clarity on a position?</p>
            <a
              href="/contact"
              className="mt-4 inline-block rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white"
            >
              Book a consultation
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-semibold">FAQs</h2>
          <div className="space-y-3">
            {s.faqs.map((f, i) => (
              <details key={i} className="rounded-xl border border-black/55 p-4">
                <summary className="cursor-pointer">{f.q}</summary>
                <p className="mt-2 ">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
