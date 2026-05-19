"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/FooterSection";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext"; 
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ---------------- HERO SLIDES ---------------- */
const slides = [
  {
    title: "Protection & Grounding",
    desc: "Soft energy of love and emotional healing wrapped in crystal form.",
    image: "/kno1.png", 
  },
  {
    title: "Carry your energy with you",
    desc: "Calm your mind, elevate intuition, and align your inner clarity.",
    image: "/kno2.png",
  },
  {
    title: "Wrapped with energies",
    desc: "Manifest abundance, confidence, and radiant personal power.",
    image: "/kno3.png",
  },
];

const floatingItems = [
  "/fl.1.png",
  "/fl.2.png",
  "/fl.3.png",
  "/fl.4.png",
];

const products = [
  {
    id: "door-charm",
    name: "Crystal door charm",
    price: "₹899",
    image: "2.1.jpg",
  },
  {
    id: "green-aventurine-keychain",
    name: "Green aventurine keychain",
    price: "₹1299",
    image: "2.2.jpg",
  },
  {
    id: "hex-keychain",
    name: "hex keychain",
    price: "₹799",
    image: "2.3.JPG",
  },
  {
    id: "tigers-eye-pocket-stone",
    name: "Pocket stone - Tiger's eye",
    price: "₹1499",
    image: "2.4.jpg",
  },
  {
    id: "stone-scent",
    name: "Stone Scent",
    price: "₹999",
    image: "2.5.jpg",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [showFloat, setShowFloat] = useState(false);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowFloat(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    /* PAPER TEXTURE BACKGROUND */
    <div className="relative min-h-screen bg-[#fcfaf7] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
      
      <Navbar />

      {/* ================= HERO SLIDER (THE COVER) ================= */}
      <div className="relative h-screen overflow-hidden shadow-2xl z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={slides[index].image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* HERO TEXT CONTENT */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-xl z-30">
          <motion.h2 key={slides[index].title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-semibold">
            {slides[index].title}
          </motion.h2>
          <motion.p key={slides[index].desc} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-white/90 italic">
            {slides[index].desc}
          </motion.p>
        </div>

        <div className="absolute bottom-10 left-10 text-white z-30">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Keychains & Others</h1>
        </div>
      </div>

      {/* ================= THE BINDER HINGES ================= */}
      <div className="relative z-50 -mt-8 flex justify-around px-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-6 h-16 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 rounded-full shadow-lg border border-gray-300" />
        ))}
      </div>

      {/* ================= CONTENT PAGE (INSIDE THE NOTEBOOK) ================= */}
      <div className="relative z-10 pt-20">
        
        {/* QUOTE SECTION */}
        <div className="py-20 px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800 max-w-3xl mx-auto border-b border-gray-300 pb-10">
            “We bring the sparkle, You make it shine!”
          </h2>

          {/* FLOATING ITEMS */}
          {showFloat && floatingItems.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-24 h-24 object-cover rounded-xl shadow-xl absolute border-4 border-white"
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -10 : 10 }}
              animate={{ opacity: 1, y: [0, -15, 0] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              style={{
                top: `${10 + i * 15}%`,
                left: i % 2 === 0 ? "5%" : "85%",
              }}
              alt=""
            />
          ))}
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <div className="px-6 md:px-16 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-4 shadow-xl transform rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 border border-gray-200"
              >
                <Link href={`/products/${item.id}`} className="block cursor-pointer group">
                  <div className="h-80 overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  <div className="pt-6 font-serif">
                    <h3 className="text-xl group-hover:underline">{item.name}</h3>
                    <p className="text-gray-500 italic mt-1">{item.price}</p>
                  </div>
                </Link>

                <button 
                  onClick={() => addToCart(item)} 
                  className="mt-4 w-full py-2 border border-black hover:bg-black hover:text-white transition uppercase text-sm tracking-widest relative z-10"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}