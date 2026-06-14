"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#191D2A]/96 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-[4.5rem]">

            <a href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-[#F36A21] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[0.65rem] tracking-[0.08em]">CE</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-white text-[0.78rem] font-bold tracking-[0.1em] uppercase">Complete Electrical</p>
                <p className="text-[#F36A21] text-[0.58rem] font-semibold tracking-[0.16em] uppercase mt-0.5">Service · Canberra</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#888580] hover:text-white text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white/80 border border-white/20 hover:border-[#F36A21]/50 hover:text-[#F36A21] px-5 py-2.5 transition-all duration-200 cursor-pointer"
              >
                Get a Quote
              </a>
              <a
                href="tel:0262515444"
                className="flex items-center gap-2 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-xs tracking-[0.08em] uppercase px-5 py-2.5 transition-colors duration-200 cursor-pointer"
              >
                <Phone size={12} strokeWidth={2.5} />
                02 6251 5444
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[min(20rem,100vw)] bg-[#191D2A] border-l border-white/8 flex flex-col">
            <div className="flex items-center justify-between px-6 h-[4.5rem] border-b border-white/8">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#F36A21] flex items-center justify-center">
                  <span className="text-white font-black text-[0.6rem] tracking-widest">CE</span>
                </div>
                <span className="text-white text-xs font-bold tracking-[0.12em] uppercase">Menu</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#888580] hover:text-white cursor-pointer p-1"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 border-b border-white/6 text-[#888580] hover:text-white text-sm font-medium tracking-wide transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="px-6 pb-10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center border border-white/20 text-white text-xs font-semibold tracking-[0.12em] uppercase py-4 cursor-pointer"
              >
                Get a Quote
              </a>
              <a
                href="tel:0262515444"
                className="flex items-center justify-center gap-2 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-sm py-4 cursor-pointer transition-colors"
              >
                <Phone size={15} strokeWidth={2.5} />
                Call 02 6251 5444
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
