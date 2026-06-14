"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Gareth P.",
    stars: 5,
    text: "I was very happy with the service I received from Complete Electrical. They came at short notice, ran me through my options and quotes, and then performed the work with care and professionalism. Friendly and thorough, my electrical issues were sorted very quickly. Thanks to the team!",
  },
  {
    name: "Monica M.",
    stars: 5,
    text: "We had our evaporative cooling system serviced and were very happy with the whole process. The team were punctual, friendly, happy to answer questions and we are happy with the results. Would recommend.",
  },
  {
    name: "Ben T.",
    stars: 5,
    text: "Have used Complete Electrical a number of times now and have always had a great experience. Johanna is always great to deal with over the phone. Glenn and Isaac arrived when expected and were professional with the advice and installation. Would happily use again for future electrical needs.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#F36A21] text-[#F36A21]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#252B3D] py-24 md:py-32">
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-5 h-px bg-[#F36A21]" />
            <span className="eyebrow">What customers say</span>
          </div>
          <h2
            className="text-white section-heading"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Real reviews from
            <br />
            <span style={{ color: "#F36A21" }}>Canberra locals.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-[#252B3D] p-8 md:p-10 flex flex-col gap-5"
            >
              <Stars count={t.stars} />
              <p className="text-[#C8C5C0] text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/8">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-[#888580] text-xs mt-0.5">Google review</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
