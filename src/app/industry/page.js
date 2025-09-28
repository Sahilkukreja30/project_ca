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
        <div className="container">
            <section className="relative h-72 w-full">
                <Image
                    src="/industry.png"
                    alt="Contact Vishal N Shah & Co"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#0F2742]/70">
                    <h1 className="text-4xl font-semibold text-white">Industries</h1>
                </div>
            </section>
            {/* Hero Section */}
            <div className="text-center py-24 mb-10">
                <h2 className="text-3xl font-bold text-[#0F2742]">
                    Our Clientele – Industry-wise
                </h2>
                <p className="text-slate-600 mt-2">
                    We are proud to have served clients across a wide range of industries.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-[#1FA3A3]">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center h-28 p-4 border border-[#1FA3A3] text-center text-lg font-medium transition duration-300 hover:scale-105 hover:shadow-lg 
              ${index % 2 === 0 ? "bg-white text-[#0F2742]" : "bg-[#1FA3A3] text-white"}
            `}
                    >
                        {industry}
                    </div>
                ))}
            </div>
        </div>
    );
}