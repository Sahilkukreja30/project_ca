"use client";

import React from "react";
import Image from "next/image";

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

export default function IndustryPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-72 w-full">
        <Image
          src="/industry.png"
          alt="Industries Vishal N Shah & Co serves"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[#0F2742]/70">
          <h1 className="text-4xl font-semibold text-white">Industries</h1>
        </div>
      </section>

      {/* Intro */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-[#0F2742]">
          Our Clientele – Industry-wise
        </h2>
        <p className="text-slate-600 mt-2">
          We are proud to have served clients across a wide range of industries.
        </p>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`
                relative flex items-center justify-center h-28 p-4 border cursor-pointer group
                border-[#1FA3A3] rounded-2xl text-center text-lg font-medium bg-white text-[#0F2742]
                shadow-none shadow-black/60 overflow-hidden
                transition duration-500 ease-out
                hover:shadow-xl
                before:content-[''] before:absolute before:inset-0 before:bg-[#1fa3a3]
                before:origin-left before:scale-x-0 before:transition-transform before:duration-500
                hover:before:scale-x-100
              `}
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
