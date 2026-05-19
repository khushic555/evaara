"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/FooterSection";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- HERO SLIDES ---------------- */
const slides = [
  {
    title: "ABUNDANCE, CREATIVITY, SUCCESS",
    desc: "Soft energy of love and emotional healing wrapped in crystal form.",
    image: "/4bg.jpg", 
  },
  {
    title: "The purple energy",
    desc: "Calm your mind, elevate intuition, and align your inner clarity.",
    image: "/41.jpg",
  },
  {
    title: "The crystal kind",
    desc: "Manifest abundance, confidence, and radiant personal power.",
    image: "/43.jpg",
  },
];

const floatingItems = [
  "/fl.1.png",
  "/fl.2.png",
  "/fl.3.png",
  "/fl.4.png",
];

const products = [
  { name: "Mixed Bracelet", price: "₹999", image: "4.1.jpg" },
  { name: "Pyrite Bracelet + Citrine bracelet", price: "₹10299", image: "4.4.jpg" },
  { name: "Citrine Bracelet", price: "₹7900", image: "4.3.JPG" },
  { name: "Tigers Eye Bracelet", price: "₹1499", image: "4.2.jpg" },
  { name: "Selenite Bracelet", price: "₹999", image: "4.5.jpg" },
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
    /* We use a subtle repeatable grain pattern to mimic paper */
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
            <img src={slides[index].image} className="w-full h-full object-cover" />
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
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight"> Bracelets </h1>
        </div>
      </div>

      {/* ================= THE BINDER HINGES ================= */}
      {/* This creates the visual bridge between the Hero and the Content */}
      <div className="relative z-50 -mt-8 flex justify-around px-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-6 h-16 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 rounded-full shadow-lg border border-gray-300" />
        ))}
      </div>

      {/* ================= CONTENT PAGE (INSIDE THE NOTEBOOK) ================= */}
      <div className="relative z-10 pt-20">
        
        {/* QUOTE SECTION */}
        <div className="py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-800 max-w-3xl mx-auto border-b border-gray-300 pb-10">
            “Energy flows where intention grows”
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
            />
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="px-6 md:px-16 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform border border-gray-200"
              >
                <div className="h-80 overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>
                <div className="pt-6 font-serif">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="text-gray-500 italic mt-1">{item.price}</p>
                  
                  {/* Connected click event handler directly to global context */}
                  <button 
                    onClick={() => addToCart(item)} 
                    className="mt-4 w-full py-2 border border-black hover:bg-black hover:text-white transition uppercase text-sm tracking-widest"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}