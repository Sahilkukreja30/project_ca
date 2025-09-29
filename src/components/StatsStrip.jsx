"use client";

/* ==== Inline outline icons (teal stroke, thin) ==== */
function IconFlagPerson(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <path d="M5 3v18" />{/* pole */}
      <path d="M5 5h6.5a2 2 0 0 1 1.6.8l.25.35c.3.42.78.67 1.29.67H21v6h-5.35a2 2 0 0 0-1.6.8l-.25.35a2 2 0 0 1-1.6.8H5" />{/* flag */}
      <circle cx="9.5" cy="12.25" r="1.6" />{/* head (subtle person ref) */}
      <path d="M8.5 16h2" />
    </svg>
  );
}
function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 3.6 2.7 13.4 0 18" />
      <path d="M12 3c-2.7 3.6-2.7 13.4 0 18" />
    </svg>
  );
}
function IconBoard(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="11" rx="2" />
      <path d="M12 16v5M8 21h8" />
      <path d="M7 9h6m-3 3h5" />
    </svg>
  );
}
function IconPeople(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0f6fb2" strokeWidth="1.6" {...props}>
      <circle cx="8" cy="8" r="3" />
      <path d="M2 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M14.5 20a5 5 0 0 1 7 0" />
    </svg>
  );
}

/* ==== Stats strip (matches your first screenshot) ==== */
export default function StatsStrip() {
  const stats = [
    { key: "years", label: "Years of experience", value: 29, icon: IconFlagPerson },
    { key: "services", label: "Services We Offers", value: 100, icon: IconGlobe },         // keep text as in your screenshot
    { key: "countries", label: "Countries Operations", value: 5, icon: IconBoard },
    { key: "clients", label: "Happy Clients", value: 1500, icon: IconPeople },
  ];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.key} className="flex flex-col items-center text-center">
              {/* ICON */}
              <s.icon className="h-10 w-10" />

              {/* NUMBER + PLUS */}
              <div className="mt-3 text-3xl font-semibold tracking-tight text-[#0f6fb2]">
                {s.value.toLocaleString()}
                <sup className="ml-0.5 text-2xl align-super">+</sup>
              </div>

              {/* LABEL */}
              <div className="mt-1 text-[13px] text-slate-700">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
