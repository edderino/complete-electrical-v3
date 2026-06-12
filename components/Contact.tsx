"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Send } from "lucide-react";

const services = [
  "Residential Electrical",
  "Commercial Electrical",
  "Emergency / Fault",
  "Switchboard Upgrade",
  "Lighting & Fans",
  "EV Charger",
  "Solar & Battery",
  "Data Cabling",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <section id="contact" className="bg-[#F5F4F2] py-24 md:py-32">
      <div className="wrap">

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-5 h-px bg-[#F36A21]" />
              <span className="eyebrow">Get in touch</span>
            </div>
            <h2
              className="text-[#1A1A1D] section-heading mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
            >
              Let&apos;s talk
              <br />
              <span style={{ color: "#F36A21" }}>about your job.</span>
            </h2>
            <p className="text-[#6A6764] text-base leading-relaxed mb-10 max-w-sm">
              Fill in the form and we&apos;ll get back to you fast. For urgent work, call us directly and we&apos;ll respond quickly.
            </p>

            {/* Click-to-call */}
            <a
              href="tel:0262515444"
              className="group flex items-center gap-4 bg-[#1A1A1D] hover:bg-[#232328] text-white px-6 py-5 mb-10 transition-colors duration-200 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#F36A21] flex items-center justify-center flex-shrink-0">
                <Phone size={17} strokeWidth={2.5} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold tracking-tight text-lg leading-tight">02 6251 5444</p>
                <p className="text-[#888580] text-xs mt-0.5">Call us. Mon to Fri 7am to 5pm · 24/7 emergency</p>
              </div>
            </a>

            {/* Address + hours */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#F36A21] mt-0.5 flex-shrink-0" />
                <div className="text-[#6A6764] text-sm leading-relaxed">
                  Unit 4/16 Grimwade St<br />Mitchell ACT 2911
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-[#F36A21] mt-0.5 flex-shrink-0" />
                <div className="text-[#6A6764] text-sm leading-relaxed">
                  Mon to Fri 7am to 5pm<br />
                  <span className="text-[#F36A21] font-medium">24/7 emergency callout available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center gap-4 py-12">
                <div className="w-12 h-12 bg-[#F36A21] flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </div>
                <h3 className="text-[#1A1A1D] font-bold text-2xl">Message sent.</h3>
                <p className="text-[#6A6764] text-sm leading-relaxed max-w-sm">
                  We&apos;ve received your enquiry and will be in touch shortly. For urgent work, call us directly on{" "}
                  <a href="tel:0262515444" className="text-[#F36A21] font-semibold cursor-pointer">02 6251 5444</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[#1A1A1D] text-xs font-semibold tracking-[0.08em] uppercase">
                      Name <span className="text-[#F36A21]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="bg-white border border-[#E8E5E0] focus:border-[#F36A21] text-[#1A1A1D] text-sm px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-[#B8B5B0]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[#1A1A1D] text-xs font-semibold tracking-[0.08em] uppercase">
                      Phone <span className="text-[#F36A21]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="bg-white border border-[#E8E5E0] focus:border-[#F36A21] text-[#1A1A1D] text-sm px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-[#B8B5B0]"
                      placeholder="04xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[#1A1A1D] text-xs font-semibold tracking-[0.08em] uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="bg-white border border-[#E8E5E0] focus:border-[#F36A21] text-[#1A1A1D] text-sm px-4 py-3.5 outline-none transition-colors duration-200 placeholder:text-[#B8B5B0]"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[#1A1A1D] text-xs font-semibold tracking-[0.08em] uppercase">
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="bg-white border border-[#E8E5E0] focus:border-[#F36A21] text-[#1A1A1D] text-sm px-4 py-3.5 outline-none transition-colors duration-200 cursor-pointer appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[#1A1A1D] text-xs font-semibold tracking-[0.08em] uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-white border border-[#E8E5E0] focus:border-[#F36A21] text-[#1A1A1D] text-sm px-4 py-3.5 outline-none transition-colors duration-200 resize-none placeholder:text-[#B8B5B0]"
                    placeholder="Describe your job or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2.5 bg-[#F36A21] hover:bg-[#D45B1A] disabled:opacity-60 text-white font-bold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200 cursor-pointer"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={14} strokeWidth={2.5} />
                  )}
                  {loading ? "Sending…" : "Send Enquiry"}
                </button>

                <p className="text-[#888580] text-xs mt-1">
                  We respond fast, usually within a few hours during business hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
