"use client";

import { motion } from "motion/react";
import { Phone, FileText } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#c9a84c] py-24 md:py-32">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2
              className="serif text-[#050e1a] leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
            >
              Need a licensed
              <br />
              electrician?
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#050e1a]/70 text-base leading-relaxed">
              Available 24/7 for emergencies. Fast to respond for all scheduled work.
              Serving all ACT suburbs from Mitchell.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="tel:0262515444"
                className="flex items-center justify-center gap-2 bg-[#050e1a] hover:bg-[#0f2137] text-white font-bold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-colors duration-200 cursor-pointer"
              >
                <Phone size={15} strokeWidth={2.5} />
                Call 02 6251 5444
              </a>
              <a
                href="#quote"
                className="flex items-center justify-center gap-2 border-2 border-[#050e1a]/25 hover:border-[#050e1a] text-[#050e1a] font-semibold text-sm tracking-[0.06em] uppercase px-8 py-4 transition-all duration-200 cursor-pointer"
              >
                <FileText size={15} />
                Request a Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
