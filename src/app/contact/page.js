"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";

/* ---------- Inline SVG Icons & Badge ---------- */
function IconBadge({ children, color = "#1FA3A3", className = "" }) {
    return (
        <div
            className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${className}`}
            style={{ backgroundColor: color }}
            aria-hidden
        >
            {children}
        </div>
    );
}

function IconHome(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M3 10.5l9-7 9 7" />
            <path d="M5 10v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9" />
            <path d="M9 21V12h6v9" />
        </svg>
    );
}
function IconMail(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <path d="M22 7L12 13 2 7" />
        </svg>
    );
}
function IconPhone(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.1 2 2 0 0 1 4.11 2h2a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .65 2.81 2 2 0 0 1-.45 2.11L7 9a16 16 0 0 0 6 6l.36-.31a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.65A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

/* -------------------- Page -------------------- */
export default function Contact() {
    const [serverState, setServerState] = useState({ ok: false, msg: "" });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    const onSubmit = async (data) => {
        setServerState({ ok: false, msg: "" });
        try {
            // simple honeypot check (field added below)
            if (data._hp) return;

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setServerState({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
                reset();
            } else {
                const t = await res.text();
                setServerState({ ok: false, msg: t || "Failed to send. Please try again." });
            }
        } catch (err) {
            setServerState({ ok: false, msg: "Network error. Please try again." });
            console.error(err);
        }
    };

    return (
        <main className="bg-white">
            {/* HERO IMAGE with overlay */}
            <section className="relative h-96 w-full">
                <Image
                    src="/contact.png"
                    alt="Contact Vishal N Shah & Co"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center pl-6 bg-[#0F2742]/70">
                    <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
                        <h1 className="text-5xl font-semibold text-white">Contact Us</h1>
                    <div className="flex gap-2">
                        <Link href={"/"} className="text-white text-lg hover:text-teal-400">Home</Link>
                        <h1 className="text-white text-sm pt-1">{">>"}</h1>
                        <h1 className="text-white text-lg">Contact Us</h1>
                    </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="mx-auto max-w-6xl px-6 py-14">
                <h2 className="mb-12 text-center text-3xl font-semibold text-[#0F2742]">We Are Here!</h2>

                <div className="grid gap-4 text-center md:grid-cols-2">
                    {/* Addresses */}
                    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:border-[#1FA3A3]">
                        <IconBadge color="#1FA3A3">
                            <IconHome className="h-8 w-8 text-white" />
                        </IconBadge>
                        <h3 className="mt-5 text-xl font-semibold text-[#0F2742]">Our Addresses</h3>

                        <div className="mt-4 space-y-4 text-slate-600">
                            <div>
                                <p className="font-semibold text-[#0F2742]">Mumbai (Head Office)</p>
                                <p className="mt-1 text-sm">
                                    B-508, Neelkanth Business Park
                                    <br />
                                    Vidyavihar West, Mumbai 400086
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-[#0F2742]">Dubai</p>
                                <p className="mt-1 text-sm">
                                    Plot No 562, Office No FL4-33
                                    <br />
                                    Sony Building, Al Raffa, Dubai, UAE
                                </p>
                            </div>
                        </div>
                    </article>

                    {/* Email + Phone */}
                    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:border-[#1FA3A3]">
                        <IconBadge color="#1FA3A3">
                            <IconMail className="h-8 w-8 text-white" />
                        </IconBadge>
                        <h3 className="mt-5 text-xl font-semibold text-[#0F2742]">Email Address</h3>
                        <p className="mt-4 text-lg text-slate-600">
                            <a href="mailto:office@vnsco.in" className="font-medium text-[#1FA3A3] underline hover:text-[#0F2742]">
                                office@vnsco.in
                            </a>
                        </p>

                        <IconBadge color="#1FA3A3" className="mt-8">
                            <IconPhone className="h-8 w-8 text-white" />
                        </IconBadge>
                        <h3 className="mt-5 text-xl font-semibold text-[#0F2742]">Phone Number</h3>
                        <p className="mt-4 text-lg text-slate-600">
                            <span className="font-medium text-[#1FA3A3] underline hover:text-[#0F2742]">
                                +91-8956668555
                            </span>
                        </p>
                    </article>
                </div>
            </section>

            {/* Contact Form */}
            <section className="mx-auto mt-8 max-w-6xl px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-semibold text-[#0F2742]">
                            Get in Touch
                        </h2>
                        <p className="mt-2 text-slate-600">
                            Have questions? Fill out the form and our team will get back to you promptly.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    placeholder="Your Name*"
                                    className="w-full rounded-lg text-black border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1FA3A3]"
                                />
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                                    })}
                                    placeholder="Your Email*"
                                    className="w-full rounded-lg text-black border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1FA3A3]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="tel"
                                    {...register("phone", {
                                        required: "Phone is required",
                                        pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10-digit number" },
                                    })}
                                    placeholder="Phone Number*"
                                    className="w-full rounded-lg text-black border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1FA3A3]"
                                />
                                <input
                                    {...register("subject")}
                                    placeholder="Subject"
                                    className="w-full rounded-lg border text-black px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1FA3A3]"
                                />
                            </div>

                            <textarea
                                {...register("message", { required: "Message is required" })}
                                rows={6}
                                placeholder="Enter Your Message*"
                                className="w-full rounded-lg border text-black px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#1FA3A3]"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-lg bg-[#1FA3A3] px-4 py-3 text-sm font-medium text-white shadow hover:brightness-95 disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.418349985654!2d72.87796945541994!3d19.0811151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8817e9e7199%3A0x68b6748fa77f9306!2sNeelkanth%20Corporate%20IT%20Park!5e0!3m2!1sen!2sin!4v1758648908149!5m2!1sen!2sin"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </section>
        </main>
    );
}
