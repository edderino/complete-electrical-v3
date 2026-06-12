"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Receipt, Sparkles, Timer, Users } from "lucide-react";

const trustPills = [
  { icon: Receipt,  label: "Upfront quotes, no surprises" },
  { icon: Sparkles, label: "Tidy, respectful work" },
  { icon: Timer,    label: "Same-day response" },
  { icon: Users,    label: "One trusted team" },
];

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="trust" className="bg-[#232328] py-10 md:py-12 border-b border-white/6">
      <div className="wrap">
        <div className="flex flex-wrap justify-center gap-2.5">
          {trustPills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5"
            >
              <Icon size={13} className="text-[#F36A21] flex-shrink-0" />
              <span className="text-[#C8C5C0] text-xs font-medium tracking-wide">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
