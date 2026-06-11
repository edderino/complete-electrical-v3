"use client";

import { motion } from "motion/react";

/*
  PHOTO PLACEHOLDERS — reviewer portraits
  Replace initials circles with real customer photos if available, or leave as-is.
*/

const reviews = [
  {
    initials: "SM",
    name: "Sarah M.",
    suburb: "Braddon",
    service: "Emergency Electrical",
    text: "Called at 7am for an urgent power fault — electrician arrived within the hour. Professional, sorted it quickly, left everything tidy. Couldn't ask for more.",
  },
  {
    initials: "JT",
    name: "James T.",
    suburb: "Belconnen",
    service: "Switchboard Upgrade",
    text: "Fair quote upfront, no surprises on the bill. The team was respectful throughout. Switchboard looks excellent — clean, professional work.",
  },
  {
    initials: "LK",
    name: "Linda K.",
    suburb: "Gungahlin",
    service: "Lighting & Fans",
    text: "All our lights replaced with LED downlights and a new ceiling fan installed. Spotless job — it looks fantastic. Will use again without hesitation.",
  },
  {
    initials: "MB",
    name: "Michael B.",
    suburb: "Deakin",
    service: "EV Charger",
    text: "EV charger installed professionally. Explained everything clearly and the price matched the quote exactly. Highly recommend for any electrical work.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#c9a84c">
          <path d="M6 1l1.4 2.9 3.1.45-2.25 2.19.53 3.1L6 8.1l-2.78 1.54.53-3.1L1.5 4.35l3.1-.45L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#f7f4ee] py-28 md:py-36">
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-[#c9a84c]" />
              <span className="label text-[#c9a84c]">Customer reviews</span>
            </div>
            <h2
              className="serif text-[#050e1a] leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              Trusted by
              <br />
              <span className="italic text-[#c9a84c]">600+ locals.</span>
            </h2>
          </div>

          {/* Google rating block */}
          <div className="flex items-center gap-5 border border-[#e8e4dc] bg-white px-7 py-5 self-start lg:self-auto">
            <div>
              <p className="serif text-[#050e1a] text-5xl leading-none">4.8</p>
              <Stars />
            </div>
            <div className="border-l border-[#e8e4dc] pl-5">
              <p className="font-bold text-[#050e1a] text-sm">Google Reviews</p>
              <p className="text-[#475569] text-xs mt-0.5">593 verified reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-[#e8e4dc] p-8 flex flex-col"
            >
              {/* Big quote mark */}
              <span className="serif text-[#c9a84c]/20 text-7xl leading-none select-none -mt-2 mb-2">&ldquo;</span>

              <Stars />

              <p className="text-[#334155] text-sm leading-relaxed mt-4 flex-1">
                {r.text}
              </p>

              <div className="mt-7 pt-5 border-t border-[#f0ece4] flex items-center gap-3">
                {/* Initials avatar — replace with photo if available */}
                <div className="w-9 h-9 bg-[#050e1a] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c9a84c] text-xs font-bold">{r.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#050e1a] text-sm leading-none">{r.name}</p>
                  <p className="text-[#94a3b8] text-xs mt-1">{r.suburb} · {r.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-[#94a3b8] text-xs mt-6 text-center">
          Sample reviews based on themes from verified Google customer feedback.
        </p>
      </div>
    </section>
  );
}
