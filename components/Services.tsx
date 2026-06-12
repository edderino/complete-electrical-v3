"use client";

import { motion } from "motion/react";
import { Home, Building2, Zap, MoreHorizontal, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    desc: "Switchboards, power points, lighting, smoke alarms, EV charging and data cabling. Everything your home needs, done to code.",
    cta: "Get a Home Quote",
  },
  {
    icon: Building2,
    title: "Commercial",
    desc: "Office fit-outs, three-phase power, switchboard upgrades, and ongoing maintenance for businesses across the ACT.",
    cta: "Get a Commercial Quote",
  },
  {
    icon: Zap,
    title: "Emergency & Repairs",
    desc: "Power out? Fault tripped? We respond fast, around the clock. No waiting until Monday.",
    cta: "Call Now, 24/7",
    href: "tel:0262515444",
    highlight: true,
  },
  {
    icon: MoreHorizontal,
    title: "All Your Electrical Needs",
    desc: "Solar & battery, air conditioning, data cabling, and more. If it runs on current, we handle it.",
    cta: "Ask Us Anything",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F4F2] py-24 md:py-32">
      <div className="wrap">

        {/* Header, left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-5 h-px bg-[#F36A21]" />
            <span className="eyebrow">What we do</span>
          </div>
          <h2
            className="text-[#1A1A1D] section-heading mb-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Electrical work,
            <br />
            done properly.
          </h2>
          <p className="text-[#6A6764] text-base leading-relaxed">
            Residential and commercial electrical across Canberra. Switchboards, lighting, EV chargers, and more. Planned or urgent, we get it done.
          </p>
        </motion.div>

        {/* Service cards, 2x2 grid on desktop, stacked on mobile */}
        <div className="grid sm:grid-cols-2 gap-px bg-[#E8E5E0]">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`group relative p-10 md:p-12 flex flex-col justify-between min-h-[280px] cursor-pointer transition-colors duration-300 ${
                  svc.highlight
                    ? "bg-[#1A1A1D] hover:bg-[#232328]"
                    : "bg-white hover:bg-[#F9F8F6]"
                }`}
              >
                {/* Orange left-border accent on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
                  style={{ backgroundColor: "#F36A21" }}
                />

                <div>
                  <div
                    className={`w-11 h-11 flex items-center justify-center mb-6 ${
                      svc.highlight ? "bg-[#F36A21]" : "bg-[#F5F4F2] group-hover:bg-[#F36A21]/10"
                    } transition-colors duration-300`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className={svc.highlight ? "text-white" : "text-[#F36A21]"}
                    />
                  </div>

                  <h3
                    className={`font-bold text-xl mb-3 leading-tight ${
                      svc.highlight ? "text-white" : "text-[#1A1A1D]"
                    }`}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      svc.highlight ? "text-[#888580]" : "text-[#6A6764]"
                    }`}
                  >
                    {svc.desc}
                  </p>
                </div>

                <a
                  href={svc.href ?? "#contact"}
                  className={`mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-200 cursor-pointer group-hover:gap-3 ${
                    svc.highlight
                      ? "text-[#F36A21] hover:text-white"
                      : "text-[#1A1A1D] hover:text-[#F36A21]"
                  }`}
                >
                  {svc.cta}
                  <ArrowRight size={13} />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
