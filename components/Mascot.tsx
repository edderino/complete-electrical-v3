"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Mascot() {
  return (
    <section className="bg-[#F5F4F2] py-20 md:py-24 border-t border-[#E8E5E0]">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg"
          >
            <Image
              src="/completemascot.jpg"
              alt="Complete Electrical's littlest team member on the job van"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-[center_70%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-5 h-px bg-[#F36A21]" />
              <span className="eyebrow">Our Mascot</span>
            </div>
            <h2
              className="text-[#1A1A1D] font-black leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our biggest
              <br />
              <span style={{ color: "#F36A21" }}>supporter.</span>
            </h2>
            <p className="text-[#6A6764] text-base leading-relaxed max-w-md">
              He&apos;s no sparky, but he&apos;s at the workshop most days keeping the team honest.
              We&apos;re an animal friendly crew, so your pets are in good hands too.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
