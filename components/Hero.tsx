"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Phone, FileText } from "lucide-react";

const stats = [
  { val: "600+", label: "Google Reviews" },
  { val: "4.8★", label: "Average Rating" },
  { val: "24/7", label: "Emergency Callout" },
  { val: "1970", label: "Est. Canberra" },
];

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
      className="relative overflow-hidden md:min-h-screen md:flex md:flex-col"
      style={{ backgroundColor: "#191D2A" }}
    >
      {/* ===================== DESKTOP (md and up) ===================== */}
      {/* Full-bleed fleet photo with subtle parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0 will-change-transform hidden md:block"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 scale-[1.08] bg-cover [background-position:center_center]"
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

      {/* Bottom fade into TrustBar — desktop only */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none hidden md:block"
        style={{ background: "linear-gradient(to top, #252B3D 0%, transparent 100%)" }}
      />

      {/* Desktop text content — centred over photo */}
      <div className="hidden md:flex relative wrap flex-1 flex-col justify-center pt-28 pb-4">
        <div className="max-w-lg">
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[#F36A21]" />
            <span className="eyebrow">Canberra, ACT · Licensed &amp; Insured</span>
          </div>

          <h1
            className="text-white font-black leading-[0.91] tracking-[-0.035em] mb-7"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Electrical done
            <br />
            <span style={{ color: "#F36A21" }}>right.</span>
            <br />
            Every time.
          </h1>

          <p className="text-[#B8B5B0] text-lg leading-relaxed max-w-sm mb-9">
            Residential and commercial electricians trusted by Canberra for over 50 years.
            600+ reviews, 4.8 stars, and the experience to get it done right the first time.
          </p>

          <div className="flex flex-wrap gap-3">
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
          </div>
        </div>
      </div>

      {/* Desktop stat bar — anchored to bottom */}
      <div className="hidden md:block relative wrap pt-8 pb-8 mt-4">
        <div className="border-t border-white/12 pt-8 grid grid-cols-4 gap-6 divide-x divide-white/10">
          {stats.map(({ val, label }) => (
            <div key={label} className="px-8 first:pl-0 last:pr-0">
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
      </div>

      {/* ===================== MOBILE (below md) ===================== */}
      <div className="md:hidden">
        {/* 1. Fleet photo leads, with eyebrow + headline overlaid */}
        <div className="relative w-full h-[72vh] overflow-hidden">
          <Image
            src="/bg-1280x853-1.webp"
            alt="Complete Electrical service van fleet"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(25,29,42,0.35) 0%, rgba(25,29,42,0.55) 50%, rgba(25,29,42,0.88) 100%)" }}
          />
          <div className="absolute inset-0 wrap flex flex-col justify-end pb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-[#F36A21]" />
              <span className="eyebrow">Canberra, ACT · Licensed &amp; Insured</span>
            </div>
            <h1
              className="text-white font-black leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: "clamp(2.4rem, 9vw, 3.2rem)" }}
            >
              Electrical done <span style={{ color: "#F36A21" }}>right.</span>
              <br />
              Every time.
            </h1>
            <p className="text-[#E4E1DC] text-base leading-relaxed mt-5 max-w-md">
              Residential and commercial electricians trusted by Canberra for over 50 years.
              600+ reviews, 4.8 stars, and the experience to get it done right the first time.
            </p>
          </div>
        </div>

        {/* 2. Below the photo, on solid navy: buttons, stats */}
        <div className="wrap pt-8 pb-10">
          <div className="flex flex-col gap-3 mb-9">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2.5 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200 cursor-pointer"
            >
              <FileText size={14} strokeWidth={2.5} />
              Get a Quote
            </a>
            <a
              href="tel:0262515444"
              className="flex items-center justify-center gap-2.5 border border-white/25 hover:border-white/50 text-white font-semibold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-all duration-200 cursor-pointer"
            >
              <Phone size={14} strokeWidth={2.5} />
              Call 02&nbsp;6251&nbsp;5444
            </a>
          </div>

          <div className="border-t border-white/12 pt-7 grid grid-cols-2 gap-6">
            {stats.map(({ val, label }) => (
              <div key={label}>
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
        </div>
      </div>
    </section>
  );
}
