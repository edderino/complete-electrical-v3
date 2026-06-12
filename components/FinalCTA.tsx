"use client";

import { motion } from "motion/react";
import { Phone, FileText } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#1A1A1D] py-24 md:py-32 border-t border-white/6">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-5 h-px bg-[#F36A21]" />
              <span className="eyebrow">Ready to get started?</span>
            </div>
            <h2
              className="text-white font-black leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
            >
              Let&apos;s get it
              <br />
              <span style={{ color: "#F36A21" }}>sorted.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#888580] text-base leading-relaxed">
              Join 600+ Canberra locals who trust Complete Electrical. Over 50 years
              keeping homes and businesses powered across Canberra, ACT &amp; surrounding regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="tel:0262515444"
                className="flex items-center justify-center gap-2 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200 cursor-pointer"
              >
                <Phone size={15} strokeWidth={2.5} />
                Call 02 6251 5444
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-all duration-200 cursor-pointer"
              >
                <FileText size={15} />
                Get a Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
