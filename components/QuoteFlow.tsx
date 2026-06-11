"use client";

import { motion } from "motion/react";

const steps = [
  { n: "01", title: "Tell us what you need", desc: "Fill in the form — job details, location, and preferred timeframe." },
  { n: "02", title: "We confirm the details", desc: "Our team contacts you promptly to confirm scope and pricing." },
  { n: "03", title: "A licensed electrician attends", desc: "Arrives on time. Completes the work cleanly. Leaves the site tidy." },
];

const services = [
  "Emergency Electrical", "Switchboards & Power Points", "Lighting & Fans",
  "Appliance Installation", "EV Charger", "Data Cabling",
  "Smoke Alarms", "Heating & Cooling", "Solar Battery Storage",
  "House Rewiring", "Other",
];

const timeframes = [
  "As soon as possible", "Within 24–48 hours",
  "This week", "This month", "Just getting a quote",
];

export default function QuoteFlow() {
  return (
    <section id="quote" className="bg-[#0b1929] py-28 md:py-36 border-t border-white/5">
      <div className="wrap">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="rule-gold" />
            <span className="label">Get a quote</span>
          </div>
          <h2
            className="serif text-white leading-[0.95] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Book in{" "}
            <span className="text-[#c9a84c] italic">three steps.</span>
          </h2>
        </motion.div>

        {/* 3 steps */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0b1929] p-10"
            >
              <p className="serif text-[#c9a84c]/25 text-7xl leading-none mb-8">{s.n}</p>
              <p className="text-white font-semibold text-base mb-3">{s.title}</p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-white/8 p-8 md:p-12 max-w-3xl"
        >
          <h3 className="text-white font-semibold text-lg mb-8 tracking-wide">Send an Enquiry</h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { label: "Name", type: "text", placeholder: "Your full name", span: false },
              { label: "Phone", type: "tel", placeholder: "04XX XXX XXX", span: false },
              { label: "Email", type: "email", placeholder: "your@email.com", span: false },
              { label: "Suburb", type: "text", placeholder: "e.g. Braddon", span: false },
            ].map((f) => (
              <div key={f.label}>
                <label className="label block mb-2 text-[#94a3b8]">{f.label}</label>
                <input
                  type={f.type}
                  disabled
                  placeholder={f.placeholder}
                  className="w-full bg-transparent border border-white/12 text-white/40 placeholder:text-white/20 text-sm px-4 py-3.5 focus:outline-none cursor-not-allowed"
                />
              </div>
            ))}

            <div>
              <label className="label block mb-2 text-[#94a3b8]">Service Required</label>
              <select disabled className="w-full bg-transparent border border-white/12 text-white/30 text-sm px-4 py-3.5 focus:outline-none cursor-not-allowed appearance-none">
                <option>Select a service…</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="label block mb-2 text-[#94a3b8]">Preferred Timeframe</label>
              <select disabled className="w-full bg-transparent border border-white/12 text-white/30 text-sm px-4 py-3.5 focus:outline-none cursor-not-allowed appearance-none">
                <option>Select timeframe…</option>
                {timeframes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="label block mb-2 text-[#94a3b8]">Message</label>
              <textarea
                disabled
                rows={4}
                placeholder="Briefly describe the work required…"
                className="w-full bg-transparent border border-white/12 text-white/40 placeholder:text-white/20 text-sm px-4 py-3.5 focus:outline-none resize-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              disabled
              className="bg-[#c9a84c] text-[#050e1a] font-bold text-xs tracking-[0.12em] uppercase px-10 py-4 opacity-60 cursor-not-allowed"
            >
              Send Enquiry
            </button>
            <p className="text-white/20 text-xs">
              Demo — wire to your preferred form backend for production.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
