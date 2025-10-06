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
          <div className="flex flex-col gap-2 pl-4 sm:pl-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              Industries
            </h1>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <Link href={"/"} className="text-white text-base sm:text-lg hover:text-teal-400">
                Home
              </Link>
              <span className="text-white text-sm sm:text-base">{">>"}</span>
              <span className="text-white text-base sm:text-lg">Industries</span>
            </div>
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
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
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
