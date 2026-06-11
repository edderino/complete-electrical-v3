"use client";

import { motion } from "motion/react";

const regions = [
  { region: "Inner North", suburbs: ["Braddon", "Dickson", "Ainslie", "Campbell", "Turner", "O'Connor"] },
  { region: "Inner South", suburbs: ["Griffith", "Deakin", "Red Hill", "Kingston", "Narrabundah"] },
  { region: "Belconnen", suburbs: ["Bruce", "Belconnen", "Macquarie", "Hawker", "Charnwood"] },
  { region: "Gungahlin", suburbs: ["Gungahlin", "Ngunnawal", "Casey", "Harrison", "Forde"] },
  { region: "Tuggeranong", suburbs: ["Tuggeranong", "Greenway", "Wanniassa", "Chisholm", "Gowrie"] },
  { region: "Woden Valley", suburbs: ["Woden", "Philip", "Hughes", "Garran", "Curtin"] },
];

export default function AreasServiced() {
  return (
    <section id="areas" className="bg-[#050e1a] py-28 md:py-36 border-t border-white/5">
      <div className="wrap">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="rule-gold" />
              <span className="label">Where we work</span>
            </div>
            <h2
              className="serif text-white leading-[0.95] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              All of Canberra.
              <br />
              <span className="text-[#c9a84c] italic">Every suburb.</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-sm">
              Based in Mitchell, we cover all ACT suburbs and surrounding NSW
              regions. If you&apos;re in the Canberra area — we&apos;ve got you.
            </p>
            <div className="border-l-2 border-[#c9a84c]/30 pl-5">
              <p className="text-white/50 text-xs font-medium uppercase tracking-widest mb-1">Base location</p>
              <p className="text-[#94a3b8] text-sm">Unit 4/16 Grimwade St, Mitchell ACT 2911</p>
            </div>
          </motion.div>

          {/* Right — region grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-px bg-white/5"
          >
            {regions.map((r) => (
              <div key={r.region} className="bg-[#050e1a] p-6">
                <p className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                  {r.region}
                </p>
                <p className="text-[#94a3b8]/70 text-xs leading-relaxed">
                  {r.suburbs.join(" · ")}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
