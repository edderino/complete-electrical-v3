"use client";

import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const improvements = [
  {
    title: "Easier quote requests",
    desc: "A clear 3-step booking flow replaces a buried contact form — visitors know exactly what to do.",
  },
  {
    title: "Clearer service pathways",
    desc: "Each service has its own card and page placeholder — no more hunting through walls of text.",
  },
  {
    title: "Stronger mobile experience",
    desc: "Designed mobile-first. Sticky call button, fast load, thumb-friendly layout throughout.",
  },
  {
    title: "Better use of real job photos",
    desc: "Placeholder prompts show exactly where client photography should go — room for authentic content.",
  },
  {
    title: "No duplicated content",
    desc: "Trust signals appear once, cleanly. Suburb pages get a proper SEO-structured template.",
  },
  {
    title: "Stronger local SEO structure",
    desc: "Service pages, suburb pages, and schema markup ready to be built on the same component base.",
  },
];

export default function ImprovementConcept() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#f5a623] text-sm font-semibold tracking-widest uppercase mb-3">
            What this redesign fixes
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f2137] mb-4">
            Built for modern Canberra Region homeowners
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            This demo shows how the existing site&apos;s strengths — trust, depth, local authority —
            can be presented in a way that converts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {improvements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-slate-200 rounded-sm p-6"
            >
              <CheckCircle size={20} className="text-[#f5a623] mb-3" />
              <h3 className="font-bold text-[#0f2137] text-base mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
