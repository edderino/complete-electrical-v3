"use client";

import { motion } from "motion/react";
import { ThumbsUp, Clock, CalendarDays, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: ThumbsUp,
    stat: "✓",
    heading: "Trusted across Canberra",
    body: "We show up when we say we will, do the job properly, and leave your home or business tidy. No shortcuts, no surprises, just reliable electrical work you can count on.",
  },
  {
    icon: Clock,
    stat: "24/7",
    heading: "There when it matters",
    body: "Electrical emergencies don't keep business hours. Our team is on call around the clock. No waiting until Monday.",
  },
  {
    icon: CalendarDays,
    stat: "1970",
    heading: "Serving Canberra since 1970",
    body: "Over 50 years of electrical work across the ACT. That kind of history only builds up one way, by doing the job right, every time.",
  },
  {
    icon: ShieldCheck,
    stat: "×2",
    heading: "Licensed in ACT & NSW",
    body: "Fully licensed in both territories and comprehensively insured. Every job meets Australian Standards and local regulations, guaranteed.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#1A1A1D] py-24 md:py-32">
      <div className="wrap">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-5 h-px bg-[#F36A21]" />
              <span className="eyebrow">Why choose us</span>
            </div>
            <h2
              className="text-white section-heading mb-6"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)" }}
            >
              Built on
              <br />
              <span style={{ color: "#F36A21" }}>reputation.</span>
            </h2>
            <p className="text-[#888580] text-sm leading-relaxed max-w-xs">
              600+ reviews and 50+ years on the tools. The track record speaks for itself.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-xs tracking-[0.08em] uppercase px-7 py-3.5 transition-colors duration-200 cursor-pointer"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Right: value props */}
          <div className="flex flex-col divide-y divide-white/8">
            {props.map(({ icon: Icon, stat, heading, body }, i) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group flex items-start gap-6 py-8 first:pt-0 last:pb-0"
              >
                <div className="flex-shrink-0 w-12 h-12 border border-white/10 group-hover:border-[#F36A21]/40 flex items-center justify-center transition-colors duration-300">
                  <Icon size={18} className="text-[#F36A21]" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[#F36A21] font-black text-xl tracking-tight">{stat}</span>
                    <h3 className="text-white font-bold text-base">{heading}</h3>
                  </div>
                  <p className="text-[#888580] text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
