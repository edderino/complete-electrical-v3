"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, FileText } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[88vh] md:min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#191D2A" }}
    >
      {/* Full-bleed fleet photo with subtle parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 scale-[1.08] bg-cover [background-position:60%_center] md:[background-position:center_center]"
          style={{
            backgroundImage: "url('/bg-1280x853-1.webp')",
            backgroundColor: "#191D2A",
          }}
        />
      </motion.div>

      {/* Gradient overlay: desktop, opaque charcoal left to transparent right */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block"
        style={{
          background: [
            "linear-gradient(to right, rgba(25,29,42,0.88) 0%, rgba(25,29,42,0.80) 45%, rgba(25,29,42,0.22) 100%)",
            "linear-gradient(to bottom, rgba(25,29,42,0.3) 0%, transparent 30%)",
          ].join(", "),
        }}
      />
      {/* Gradient overlay: mobile, uniform semi-dark so vans read through */}
      <div
        aria-hidden
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(25,29,42,0.82) 0%, rgba(25,29,42,0.72) 45%, rgba(25,29,42,0.92) 100%)",
        }}
      />

      {/* Bottom fade into TrustBar */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #252B3D 0%, transparent 100%)" }}
      />

      {/* Text content, sits left, well clear of the stat bar */}
      <div className="relative wrap flex-1 flex flex-col justify-center pt-24 pb-4 md:pt-28">
        <div className="max-w-lg">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="block w-5 h-px bg-[#F36A21]" />
            <span className="eyebrow">Canberra, ACT · Licensed &amp; Insured</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-white font-black leading-[0.91] tracking-[-0.035em] mb-7"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Electrical done
            <br />
            <span style={{ color: "#F36A21" }}>right.</span>
            <br />
            Every time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="text-[#D8D5D0] md:text-[#B8B5B0] text-lg leading-relaxed max-w-sm mb-9"
          >
            Residential and commercial electricians trusted by Canberra for over 50 years.
            600+ reviews, 4.8 stars, and the experience to get it done right the first time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="flex items-center gap-2.5 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200 cursor-pointer"
            >
              <FileText size={14} strokeWidth={2.5} />
              Get a Quote
            </a>
            <a
              href="tel:0262515444"
              className="flex items-center gap-2.5 border border-white/25 hover:border-white/50 text-white font-semibold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-all duration-200 cursor-pointer"
            >
              <Phone size={14} strokeWidth={2.5} />
              Call 02&nbsp;6251&nbsp;5444
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stat bar, anchored to bottom, separated from content by flex gap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative wrap pt-8 pb-8 mt-4"
      >
        <div className="border-t border-white/12 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-white/10">
          {[
            { val: "600+", label: "Google Reviews" },
            { val: "4.8★", label: "Average Rating" },
            { val: "24/7", label: "Emergency Callout" },
            { val: "1970", label: "Est. Canberra" },
          ].map(({ val, label }) => (
            <div key={label} className="md:px-8 first:pl-0 last:pr-0">
              <p
                className="text-white font-extrabold leading-none tracking-tight mb-1"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                {val}
              </p>
              <p className="text-[#888580] text-xs tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
