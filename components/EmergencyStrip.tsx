"use client";

import { Phone } from "lucide-react";

export default function EmergencyStrip() {
  return (
    <div className="bg-[#c9a84c] py-4">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#050e1a] animate-pulse" />
          <p className="text-[#050e1a] font-semibold text-sm tracking-wide">
            Need an electrician urgently?{" "}
            <span className="font-normal opacity-70">
              Rapid response across all Canberra suburbs — any time, day or night.
            </span>
          </p>
        </div>
        <a
          href="tel:0262515444"
          className="flex-shrink-0 flex items-center gap-2 bg-[#050e1a] hover:bg-[#0f2137] text-white font-bold text-xs tracking-[0.1em] uppercase px-6 py-3 transition-colors duration-200 cursor-pointer"
        >
          <Phone size={12} strokeWidth={2.5} />
          Call Now
        </a>
      </div>
    </div>
  );
}
