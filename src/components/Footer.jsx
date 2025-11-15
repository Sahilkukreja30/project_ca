"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook } from "lucide-react";

const FOOTER_DATA = {
  brand: {
    name: "Vishal N Shah & Co",
    blurb:
      "Chartered Accountants based in Mumbai with an international office in Dubai. Delivering direct tax, audit, advisory & compliance services since 2013.",
  },
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sectors", href: "/industry" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Direct & International Tax", href: "/services/direct-international-tax" },
    { label: "Regulatory & FEMA/FDI", href: "/services/regulatory-fema-fdi" },
    { label: "Transaction Advisory", href: "/services/transaction-advisory" },
    { label: "Audit & Assurance", href: "/services/audit-assurance" },
  ],
  contact: {
    phones: ["+91 22 XXXXXXXX"],
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
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { brand, quickLinks, services, contact } = FOOTER_DATA;

  return (
    <footer className="mt-16">
      {/* MAIN FOOTER */}
      <div className="bg-gradient-to-r from-[#00070d] to-[#03232c] text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[1.5rem] font-semibold">{brand.name}</span>
              </div>
              <p className="mt-3 text-[0.95rem] text-white/75 max-w-sm">{brand.blurb}</p>

              
            </div>

            {/* Quick Links */}
            <nav>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav>
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="mt-4 space-y-2">
                {services.map((svc) => (
                  <li key={svc.href}>
                    <Link href={svc.href} className="text-sm text-white/75 hover:text-white">
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold">Our Offices</h4>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-2 text-white/90">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <div>
                    {contact.offices.map((ofc, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="font-medium">{ofc.city}</div>
                        <address className="not-italic text-white/70 text-sm leading-relaxed">
                          {ofc.address.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </address>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/90">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/10" />

          {/* Bottom bar */}
          <div className="mt-6 text-center">
            <p className="text-sm text-white/60">
              © {year} {brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
