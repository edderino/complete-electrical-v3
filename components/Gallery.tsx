"use client";

import { motion } from "motion/react";
import Image from "next/image";

const photos = [
  { src: "/Shop_Lighting.jpg",        caption: "Commercial lighting" },
  { src: "/Upgraded_Meter_Board.jpg", caption: "Switchboard upgrade" },
  { src: "/after_ceiling_fan.jpg",    caption: "Ceiling fan install" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#F5F4F2] py-24 md:py-32">
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-5 h-px bg-[#F36A21]" />
            <span className="eyebrow">Our work</span>
          </div>
          <h2
            className="text-[#1A1A1D] section-heading mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Recent jobs around
            <br />
            <span style={{ color: "#F36A21" }}>Canberra.</span>
          </h2>
          <p className="text-[#6A6764] text-sm leading-relaxed">
            A snapshot of recent work. We&apos;ll keep this updated as new jobs roll in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map(({ src, caption }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden bg-[#E8E5E0] aspect-[4/3]"
            >
              <Image
                src={src}
                alt={caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold tracking-wide">{caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
