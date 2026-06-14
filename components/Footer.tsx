import { Phone, MapPin, Clock } from "lucide-react";

const coreLinks = [
  { label: "Residential Electrical", href: "#services" },
  { label: "Commercial Electrical", href: "#services" },
  { label: "Emergency & Repairs", href: "#services" },
  { label: "Solar, Data & More", href: "#services" },
];

const quickLinks = [
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Customer Reviews", href: "#reviews" },
  { label: "Get a Quote", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141416] border-t border-white/6">
      <div className="wrap py-14 md:py-18">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-[#F36A21] flex items-center justify-center">
                <span className="text-white font-black text-[0.65rem] tracking-widest">CE</span>
              </div>
              <div>
                <p className="text-white text-xs font-bold tracking-[0.1em] uppercase leading-tight">Complete Electrical</p>
                <p className="text-[#F36A21] text-[0.58rem] font-semibold tracking-[0.16em] uppercase mt-0.5">Service · Canberra · Est. 1970</p>
              </div>
            </div>
            <p className="text-[#555250] text-sm leading-relaxed mb-5">
              Canberra&apos;s trusted electrical contractor.
              Licensed, insured, and always local.
            </p>
            <div className="flex gap-2">
              {/* Replace href with real social URLs */}
              <a
                href="https://www.facebook.com/share/1bzi8ptZU9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 border border-white/10 hover:border-[#F36A21]/50 flex items-center justify-center text-[#555250] hover:text-[#F36A21] transition-all duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/completeelectricalservice.act?igsh=Zms1c3ExdGc1emQ3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-white/10 hover:border-[#F36A21]/50 flex items-center justify-center text-[#555250] hover:text-[#F36A21] transition-all duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/30 text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              {coreLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[#555250] hover:text-[#F36A21] text-sm transition-colors duration-200 cursor-pointer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-white/30 text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-4">Quick Links</p>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[#555250] hover:text-[#F36A21] text-sm transition-colors duration-200 cursor-pointer">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone size={13} className="text-[#F36A21] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:0262515444"
                  className="text-[#888580] hover:text-white text-sm transition-colors cursor-pointer"
                >
                  02 6251 5444
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-[#F36A21] mt-0.5 flex-shrink-0" />
                <p className="text-[#555250] text-sm leading-relaxed">
                  Unit 4/16 Grimwade St<br />Mitchell ACT 2911
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={13} className="text-[#F36A21] mt-0.5 flex-shrink-0" />
                <div className="text-[#555250] text-sm leading-relaxed">
                  Mon to Fri 7am to 5pm
                  <br />
                  <span className="text-[#F36A21]/80">24/7 emergency callout</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service area + licences */}
          <div>
            <p className="text-white/30 text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-4">Service Area</p>
            <p className="text-[#555250] text-sm leading-relaxed mb-6">
              Servicing Canberra, ACT &amp; surrounding regions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F36A21] hover:bg-[#D45B1A] text-white font-bold text-xs tracking-[0.08em] uppercase px-5 py-3 transition-colors duration-200 cursor-pointer mb-8"
            >
              Get a Quote
            </a>
            <div>
              <p className="text-white/30 text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-3">Licences</p>
              <p className="text-[#555250] text-xs leading-relaxed">
                ACT Licence 20231100<br />
                NSW Licence 78757C
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-7 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-[#3A3835] text-xs leading-relaxed">
            © {new Date().getFullYear()}{" "}Complete Electrical Service &nbsp;·&nbsp;
            ABN 60&nbsp;169&nbsp;748&nbsp;592 &nbsp;·&nbsp;
            ACT Lic 20231100 &nbsp;·&nbsp;
            NSW Lic 78757C
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms"].map((l) => (
              <a key={l} href="#" className="text-[#3A3835] hover:text-[#888580] text-xs transition-colors cursor-pointer">
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
