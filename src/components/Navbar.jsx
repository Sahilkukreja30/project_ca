"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const services = [
  { href: "/services/direct-international-tax", title: "Direct & International Tax", blurb: "Planning, filings, assessments, appeals" },
  { href: "/services/gst-indirect-tax", title: "GST & Indirect Tax", blurb: "Registration, returns, audits, refunds" },
  { href: "/services/audit-assurance", title: "Audit & Assurance", blurb: "Statutory, internal, trust, special audits" },
  { href: "/services/accounting-payroll", title: "Accounting & Payroll", blurb: "Books, payroll, MIS, controllership" },
  { href: "/services/fema-rbi", title: "FEMA & RBI Compliance", blurb: "Investments, compounding, filings" },
  { href: "/services/companies-act", title: "Companies Act & Secretarial", blurb: "Incorporation, ROC, governance" },
  { href: "/services/valuation-transactions", title: "Valuation & Transactions", blurb: "Valuation, DD, M&A support" },
  { href: "/services/nri-foreign-desk", title: "NRI & Foreign Desk", blurb: "Setup, compliance, taxation" },
  { href: "/services/startups-msme", title: "Startups & MSME", blurb: "Entity setup, incentives, compliance" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // About dropdown (desktop) + About accordion (mobile)
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  const dropdownRef = useRef(null);
  const aboutRef = useRef(null);
  const pathname = usePathname();

  // Global listeners for escape/outside-click
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setAboutOpen(false);
        setAboutMobileOpen(false);
        setMenuOpen(false);
      }
    }
    function onClick(e) {
      if (dropdownRef.current && e.target instanceof Node && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (aboutRef.current && e.target instanceof Node && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setAboutOpen(false);
    setAboutMobileOpen(false);
  }, [pathname]);

  const isActive = useCallback(
    (href) => {
      if (!pathname) return false;
      return href === "/" ? pathname === "/" : pathname.startsWith(href);
    },
    [pathname]
  );

  const servicesMenuId = "services-desktop-menu";
  const aboutMenuId = "about-desktop-menu";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/25 backdrop-blur-sm">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md border border-[#0F2742]/15 bg-white text-xs font-bold text-[#0F2742] shadow-sm">
            V
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#0F2742]">
            Vishal N Shah &amp; Co
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          <NavItem href="/" active={isActive("/")}>Home</NavItem>

          {/* About dropdown (desktop) */}
          <div
            className="relative"
            ref={aboutRef}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen((prev) => !prev);
              }}
              className={`group inline-flex items-center rounded-full border px-4 py-2 text-sm transition
                ${pathname?.startsWith("/about")
                  ? "border-[#1FA3A3] text-[#0F2742]"
                  : "border-slate-300 text-slate-700 hover:border-[#1FA3A3] hover:text-[#0F2742]"}
              `}
              aria-haspopup="menu"
              aria-expanded={aboutOpen}
              aria-controls={aboutMenuId}
            >
              About
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pointer-events-none ml-2 h-[2px] w-0 bg-[#1FA3A3] transition-all group-hover:w-4" />
            </button>

            {aboutOpen && (
              <div
                id={aboutMenuId}
                className="absolute left-0 mt-2 w-48 rounded-md border border-slate-200 bg-white p-1 shadow-lg"
                role="menu"
                tabIndex={-1}
              >
                <Link
                  href="/about"
                  className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-teal-50"
                  role="menuitem"
                >
                  About Us
                </Link>
                <Link
                  href="/industry"
                  className="mt-0.5 block rounded px-3 py-2 text-sm text-slate-700 hover:bg-teal-50"
                  role="menuitem"
                >
                  Industry
                </Link>
              </div>
            )}
          </div>

          {/* Services dropdown (desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(v => !v)}
              className={`group inline-flex items-center rounded-full border px-4 py-2 text-sm transition
                ${pathname?.startsWith("/services")
                  ? "border-[#1FA3A3] text-[#0F2742]"
                  : "border-slate-300 text-slate-700 hover:border-[#1FA3A3] hover:text-[#0F2742]"}
              `}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls={servicesMenuId}
            >
              Services
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pointer-events-none ml-2 h-[2px] w-0 bg-[#1FA3A3] transition-all group-hover:w-4" />
            </button>

            {servicesOpen && (
              <div
                id={servicesMenuId}
                className="absolute right-0 mt-3 w-[720px] max-w-[90vw] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
                role="menu"
                tabIndex={-1}
              >
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group rounded-xl border border-slate-200 p-3 transition hover:border-[#1FA3A3] hover:bg-teal-50/40"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-[#0F2742]/15 bg-white text-xs font-semibold text-[#0F2742]">
                          {iconFromTitle(s.title)}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[#0F2742] group-hover:underline">
                            {s.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-600">{s.blurb}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
                  <span className="font-medium text-[#0F2742]">Need guidance?</span>{" "}
                  Book a quick call from the Contact page.
                </div>
              </div>
            )}
          </div>

          <NavItem href="/contact" active={isActive("/contact")}>Contact</NavItem>

          <Link
            href="/contact"
            className="ml-2 rounded-full bg-[#1FA3A3] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#1FA3A3]/40"
          >
            Book a consultation
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen(v => !v)}
          className="rounded-md p-2 text-[#0F2742] hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile panel */}
      {menuOpen && (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white md:hidden">
          <div className="px-4 py-3">
            <MobileLink href="/" active={isActive("/")} onNavigate={() => setMenuOpen(false)}>
              Home
            </MobileLink>

            {/* About accordion (mobile) */}
            <button
              type="button"
              onClick={() => setAboutMobileOpen((v) => !v)}
              className="mt-2 flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-left text-[#0F2742]"
              aria-expanded={aboutMobileOpen}
              aria-controls="mobile-about"
            >
              <span className="font-medium">About</span>
              <svg
                className={`h-4 w-4 text-slate-600 transition-transform ${aboutMobileOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {aboutMobileOpen && (
              <div id="mobile-about" className="mt-2 space-y-1">
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-teal-50"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutMobileOpen(false);
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/industry"
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-teal-50"
                  onClick={() => {
                    setMenuOpen(false);
                    setAboutMobileOpen(false);
                  }}
                >
                  Industry
                </Link>
              </div>
            )}

            {/* Services accordion (mobile) */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen(v => !v)}
              className="mt-2 flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-left text-[#0F2742]"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
            >
              <span className="font-medium">Services</span>
              <svg
                className={`h-4 w-4 text-slate-600 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services" className="mt-2 space-y-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-teal-50"
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            <MobileLink href="/contact" active={isActive("/contact")} onNavigate={() => setMenuOpen(false)}>
              Contact
            </MobileLink>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-full bg-[#1FA3A3] px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:brightness-95"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ----- Sub components ----- */

function NavItem({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center rounded-full border px-4 py-2 text-sm transition
        ${active ? "border-[#1FA3A3] text-[#0F2742]" : "border-slate-300 text-slate-700 hover:border-[#1FA3A3] hover:text-[#0F2742]"}
      `}
    >
      {children}
      <span className="pointer-events-none absolute -bottom-0.5 left-4 h-[2px] w-0 bg-[#1FA3A3] transition-all group-hover:w-6" />
    </Link>
  );
}

function MobileLink({ href, children, onNavigate, active }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`mt-2 block rounded-lg px-3 py-2 ${
        active ? "bg-teal-50 text-[#0F2742]" : "text-slate-800 hover:bg-slate-50 hover:text-[#0F2742]"
      }`}
    >
      {children}
    </Link>
  );
}

/** Returns a short code for an icon bubble, with better keyword handling */
function iconFromTitle(title) {
  const t = title.toLowerCase();

  // Order matters: check more specific terms before generic ones like "tax"
  if (t.includes("gst")) return "GST";
  if (t.includes("audit")) return "AU";
  if (t.includes("account")) return "AC";
  if (t.includes("fema") || t.includes("rbi")) return "FM";
  if (t.includes("companies") || t.includes("company") || t.includes("roc") || t.includes("secretarial")) return "CO";
  if (t.includes("valuation") || t.includes("transactions") || t.includes("m&a") || t.includes("dd")) return "VL";
  if (t.includes("nri") || t.includes("foreign")) return "NRI";
  if (t.includes("startup") || t.includes("msme")) return "SU";
  if (t.includes("tax")) return "TX";
  return "SV";
}
