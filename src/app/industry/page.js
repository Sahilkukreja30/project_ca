"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const industries = [
  "Trade Centre",
  "Information Technology",
  "Textiles Mills",
  "Cold Storage Chains",
  "Manufacturing of Chemical",
  "Automobiles Dealers",
  "Builders & Developers",
  "Insurance Distributor",
  "Hospitality",
  "Investing & Financing Companies",
  "Trust & NGOs",
  "Media & Production Houses",
  "Jewellery",
  "Infrastructure Development",
];

/* ---------- Inline SVG icon components ---------- */
/* Each icon is a minimal thin-line SVG matching the style you requested. */

function IconRetail() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 7h18" />
      <path d="M5 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7" />
      <path d="M7 7v-2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
      <path d="M8 12h1v4H8zM11 12h1v4h-1zM14 12h1v4h-1z" />
    </svg>
  );
}

function IconIT() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20h8" />
      <path d="M12 8v.01" />
      <path d="M12 11v4" />
    </svg>
  );
}

function IconTextile() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 8l4-3 2 1 2-1 2 1 2-1 4 3v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" />
      <path d="M12 3v3" />
    </svg>
  );
}

function IconManufacturing() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 4v8l-8 4-8-4V7l8-4z" />
      <path d="M12 7v10" />
      <path d="M20 7l-8 4-8-4" />
    </svg>
  );
}

function IconPower() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function IconLogistics() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 6h13l4 4v7H1z" />
      <circle cx="6.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
      <path d="M18 10v3h3" />
    </svg>
  );
}

function IconInfrastructure() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21V10l9-6 9 6v11" />
      <path d="M9 21V12h6v9" />
      <path d="M7 9h.01M12 5v4M17 9h.01" />
    </svg>
  );
}

function IconHealth() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 7v10" />
      <path d="M7 12h10" />
      <path d="M19 17v1a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1" />
      <path d="M17 14a2 2 0 1 0-4 0v3" />
    </svg>
  );
}

function IconLeisure() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="8" width="6" height="10" rx="1" />
      <rect x="9" y="5" width="6" height="13" rx="1" />
      <rect x="15" y="11" width="6" height="7" rx="1" />
      <path d="M3 18h18" />
    </svg>
  );
}

function IconFinancial() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 21h18" />
      <rect x="4.5" y="11" width="3" height="8" rx="0.6" />
      <rect x="10.5" y="7" width="3" height="12" rx="0.6" />
      <rect x="16.5" y="3" width="3" height="16" rx="0.6" />
    </svg>
  );
}

function IconNGO() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.8 8.6a4.4 4.4 0 0 0-7.8-3.2L12 7.1l-1-1.7A4.4 4.4 0 1 0 3.2 9.4L12 19l8.8-9.4z" />
    </svg>
  );
}

function IconMedia() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <circle cx="8" cy="12" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="16" cy="12" r="1.4" />
      <path d="M2 9h20M2 15h20" />
    </svg>
  );
}

function IconJewellery() {
  // using manufacturing-style box as a temporary/neutral diamond placeholder
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 4v8l-8 4-8-4V7l8-4z" />
      <path d="M12 7v10" />
      <path d="M20 7l-8 4-8-4" />
    </svg>
  );
}

function IconEngineering() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 3l7 7-4 4-7-7" />
      <path d="M9 14l-3 3 1 3 3-1 7-7" />
      <path d="M5 19l3-3" />
    </svg>
  );
}

/* ---------- Map industries to icons (same order as industries array) ---------- */
const industryIcons = [
  IconRetail, // Trade Centre
  IconIT, // Information Technology
  IconTextile, // Textiles Mills
  IconManufacturing, // Cold Storage Chains (warehouse-like icon)
  IconPower, // Manufacturing of Chemical (closest fit)
  IconLogistics, // Automobiles Dealers
  IconInfrastructure, // Builders & Developers
  IconHealth, // Insurance Distributor (protection symbol)
  IconLeisure, // Hospitality
  IconFinancial, // Investing & Financing Companies
  IconNGO, // Trust & NGOs
  IconMedia, // Media & Production Houses
  IconJewellery, // Jewellery (placeholder)
  IconEngineering, // Infrastructure Development
];

export default function IndustryPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-56 sm:h-72 w-full">
        <Image
          src="/industry.png"
          alt="Industries Vishal N Shah & Co serves"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center bg-[#0F2742]/70">
          <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
            <h1 className="mx-auto max-w-7xl text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              Industries
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="text-center py-10 sm:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2742]">
          Our Clientele – Industry-wise
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          We are proud to have served clients across a wide range of industries.
        </p>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;
            const IconComp = industryIcons[index] || IconRetail;

            return (
              <div
                key={index}
                className={`
                  relative flex items-center justify-center h-24 sm:h-28 p-3 sm:p-4 
                  border cursor-pointer group border-[#1FA3A3] rounded-xl sm:rounded-2xl 
                  text-center text-base sm:text-lg font-medium shadow-none shadow-black/60 
                  overflow-hidden transition duration-500 ease-out hover:shadow-xl
                  before:content-[''] before:absolute before:inset-0 before:bg-[#1fa3a3]
                  before:origin-left before:scale-x-0 before:transition-transform before:duration-500
                  hover:before:scale-x-100
                  sm:bg-white sm:text-[#0F2742]
                  ${isEven ? "bg-[#1fa3a3] text-white" : "bg-white text-[#0F2742]"}
                 
                `}
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white inline-flex items-center justify-center gap-3">
                  <IconComp />
                  {industry}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
