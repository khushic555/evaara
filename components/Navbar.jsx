"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "../context/CartContext";

import {
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showCollections, setShowCollections] = useState(false);

  const { setIsCartOpen } = useCart();
  const { isSignedIn } = useUser();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // COLLECTION LINKS
  const collections = [
    { name: "Rings & Pendants", link: "/ringsnpendants" },
    { name: "Keychains & Others", link: "/keychains_n_others" },
    { name: "Geodes & Home Decor", link: "/geodesnshowp" },
    { name: "Bracelets", link: "/bracelets" },
  ];

 return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.35 }}
        className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2"
      >
        <div
          className="
            relative flex items-center justify-between
            px-8 py-4 rounded-2xl
            border border-white/20
            bg-white/10 backdrop-blur-2xl
            shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
          "
        >
          {/* LEFT - BRAND */}
          <Link
            href="/"
            className="text-white text-3xl font-semibold tracking-wide"
          >
            EVAARA
          </Link>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-10 text-white ml-auto">

            {/* HOME */}
            <Link
              href="/"
              className="hover:text-white/70 transition"
            >
              Home
            </Link>

            {/* COLLECTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setShowCollections(true)}
              onMouseLeave={() => setShowCollections(false)}
            >
              <span className="cursor-pointer hover:text-white/70 transition">
                Collections
              </span>

              {showCollections && (
                <div
                  className="
                    absolute top-full left-0 pt-3
                    w-60
                    bg-black/60 backdrop-blur-xl
                    border border-white/20
                    rounded-xl
                    shadow-lg
                    py-2
                  "
                >
                  {collections.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="
                        block px-4 py-2 text-white
                        hover:bg-white/10 transition
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CRYSTAL TOOLS */}
            <Link
              href="/crystal_tools"
              className="hover:text-white/70 transition"
            >
              Crystal Tools
            </Link>

            {/* GIFT PACKS */}
            <Link
              href="/giftpacks"
              className="hover:text-white/70 transition"
            >
              Gift Packs
            </Link>

            {/* CART */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="
                hover:text-white/70 transition
                flex items-center gap-2
              "
            >
              <span className="text-xl">🛒</span>
              <span className="text-sm font-medium">
                Cart
              </span>
            </button>

            {/* AUTH */}
            <div className="flex items-center border-l border-white/20 pl-5">
              {!isSignedIn ? (
                <SignInButton mode="modal">
                  <button
                    className="
                      hover:text-white/70 transition
                      flex items-center gap-2 text-white
                    "
                  >
                    <span className="text-xl">👤</span>
                    <span className="text-sm font-medium">
                      Login
                    </span>
                  </button>
                </SignInButton>
              ) : (
                <div className="cursor-pointer">
                  <UserButton
                    userProfileMode="navigation"
                    userProfileUrl="/profile"
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8 border border-white/20"
                      }
                    }}
                  />
                </div>
              )}
            </div> {/* 🟢 FIXED: Closed Auth container div */}

          </div> {/* 🟢 FIXED: Closed Right Side Desktop Menu div */}

          {/* MOBILE MENU */}
          <div className="md:hidden text-white text-3xl cursor-pointer">
            ☰
          </div>

        </div>
      </motion.nav>
    </>
  );
}