"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#f6f1ea] text-[#241915] pt-24 pb-10 px-6 md:px-12">

      {/* Aura Background */}
      <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-[#d9b18c]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[340px] h-[340px] bg-[#c79c73]/20 blur-[140px] rounded-full"></div>

      {/* TOP */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-[#d8c8bb] pb-16">

        {/* BRAND */}
        <div>
          <h2 className="text-5xl md:text-6xl tracking-[-3px] font-light mb-3">
            EVAARA
          </h2>

          <p className="uppercase tracking-[4px] text-xs text-[#6f5847] mb-8">
            Gemstones & Crystals
          </p>

          <p className="text-[#5c4738] leading-7 max-w-sm">
            Curated crystal collections crafted to bring elegance,
            energy, balance, and timeless beauty into everyday rituals.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="uppercase tracking-[3px] text-sm mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-[#5c4738]">
            <li className="hover:text-black transition-all duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-black transition-all duration-300 cursor-pointer">
              Shop
            </li>

            <li className="hover:text-black transition-all duration-300 cursor-pointer">
              Collections
            </li>

            <li className="hover:text-black transition-all duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-black transition-all duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="uppercase tracking-[3px] text-sm mb-6">
            Contact
          </h3>

          <div className="space-y-5 text-[#5c4738]">

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1" />

              <p className="break-all">
                evaaragems@gmail.com
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1" />

              <p>
                +91 935610000
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />

              <p>
                Viman Nagar,
                <br />
                Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="uppercase tracking-[3px] text-sm mb-6">
            Follow Us
          </h3>

          <div className="flex flex-wrap gap-4 mb-8">

            <a
              href="#"
              className="
                border border-[#ccb7a7]
                px-5 py-2
                rounded-full
                text-sm
                hover:bg-[#241915]
                hover:text-white
                transition-all duration-500
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                border border-[#ccb7a7]
                px-5 py-2
                rounded-full
                text-sm
                hover:bg-[#241915]
                hover:text-white
                transition-all duration-500
              "
            >
              Pinterest
            </a>

            <a
              href="#"
              className="
                border border-[#ccb7a7]
                px-5 py-2
                rounded-full
                text-sm
                hover:bg-[#241915]
                hover:text-white
                transition-all duration-500
              "
            >
              X / Twitter
            </a>

          </div>

          <p className="text-[#6f5847] leading-7">
            Follow Evaara for crystal inspiration,
            mindful living, and luxury gemstone rituals.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-[#7a6554] text-sm">

        <p>
          © 2026 EVAARA. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-6 uppercase tracking-[2px] text-[11px]">

          <span className="cursor-pointer hover:text-black transition-all duration-300">
            Privacy Policy
          </span>

          <span className="cursor-pointer hover:text-black transition-all duration-300">
            Terms & Conditions
          </span>

          <span className="cursor-pointer hover:text-black transition-all duration-300">
            Shipping Policy
          </span>

          <span className="cursor-pointer hover:text-black transition-all duration-300">
            Refund Policy
          </span>
        </div>
      </div>
    </footer>
  );
}