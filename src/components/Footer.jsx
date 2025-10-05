"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

// Plain JavaScript version of the Footer component.
// Same structure as before: Pre-footer CTA band + 4-column footer + bottom bar.

const FOOTER_DATA = {
  brand: {
    name: "Vishal N Shah & Co",
    blurb:
      "Chartered Accountants based in Mumbai with an international office in Dubai. Delivering direct tax, audit, advisory & compliance services since 2013.",
    // optional: path to your logo (uncomment to show)
    // logoSrc: "/logo.svg",
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Direct & International Tax", href: "/services/direct-international-tax" },
    { label: "Regulatory & FEMA/FDI", href: "/services/regulatory-fema-fdi" },
    { label: "Transaction Advisory", href: "/services/transaction-advisory" },
    { label: "Audit & Assurance", href: "/services/audit-assurance" },
  ],
  contact: {
    offices: [
      {
        city: "Mumbai (Head Office)",
        address: [
          "B-508, Neelkanth Business Park",
          "VidyaVihar West, Mumbai 400086",
          "India",
        ],
      },
      {
        city: "Dubai",
        address: [
          "Room No. 502, Office No. 5-L3-3",
          "Sony Building, Al Raffa, Dubai",
          "UAE",
        ],
      },
    ],
    email: "office@vnsca.in",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { brand, quickLinks, services, contact } = FOOTER_DATA;

  return (
    <footer className="bg-white border-t">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand blurb */}
          <div>
            <div className="flex items-center gap-3">
              {/* Optional logo */}
              {/* {brand.logoSrc && (
                <Image src={brand.logoSrc} alt={brand.name} width={36} height={36} />
              )} */}
              <span className="text-lg font-semibold text-slate-900">
                {brand.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{brand.blurb}</p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-teal-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-sm text-slate-600 hover:text-teal-500"
                  >
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <div className="mt-4 space-y-5 text-sm text-slate-600">
              {contact.offices.map((ofc, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 font-medium text-slate-800">
                    <MapPin className="h-4 w-4" aria-hidden />
                    <span>{ofc.city}</span>
                  </div>
                  <address className="not-italic">
                    {ofc.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </address>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-teal-500"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 py-6 text-sm text-slate-500 md:flex-row md:items-center">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-teal-500">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-teal-500">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
