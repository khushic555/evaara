"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/FooterSection";
import { motion } from "framer-motion";

export default function CrystalToolsPage() {
  const products = [
    {
      name: "Healing bowl",
      img: "/ct1.jpg",
      size: "large",
    },
    {
      name: "Selenite Charging Plate",
      img: "/ct2.jpg",
      size: "small",
    },
    {
      name: "Healing kit",
      img: "/ct3.jpg",
      size: "medium",
    },
    {
      name: "Self Love Kit",
      img: "/ct4.jpg",
      size: "small",
    },
    {
      name: "Crystal Tray",
      img: "/ct5.jpg",
      size: "large",
    },
  ];

  return (
    /* OFF-WHITE BASE COLOR */
    <div className="relative min-h-screen bg-[#F5F5F7] overflow-x-hidden">
      
      {/* 🟢 NAVBAR INTEGRATION */}
      <Navbar />

      {/* 🌈 AURA BACKGROUND LAYER */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* DARK TOP ZONE: For Glassmorphism Navbar Visibility */}
        <div className="absolute top-0 w-full h-[400px] bg-gradient-to-b from-black/90 via-purple-900/40 to-transparent z-0" />
        
        {/* MISTY AURA BLOOMS */}
        <div className="absolute w-[700px] h-[700px] bg-purple-400/20 blur-[140px] rounded-full -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-blue-400/15 blur-[130px] rounded-full bottom-20 -right-20" />
        <div className="absolute w-[500px] h-[500px] bg-pink-400/10 blur-[120px] rounded-full top-1/2 left-1/3" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-44 px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-md"
        >
          Crystal Tools
        </motion.h1>

        <p className="mt-8 text-white/80 max-w-xl mx-auto text-lg font-light leading-relaxed">
          Sacred tools crafted from natural crystals to amplify energy, healing,
          and intention.
        </p>
      </section>

      {/* 🪄 PRODUCT GRID */}
      <section className="relative mt-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10 pb-20">
        {products.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
              relative overflow-hidden rounded-3xl border border-white/40
              bg-white/40 backdrop-blur-md shadow-2xl
              transition-all duration-500
              ${p.size === "large" ? "md:col-span-2 h-[450px]" : "h-[450px]"}
            `}
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover transition duration-700 hover:scale-110"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <p className="text-2xl font-semibold tracking-tight">{p.name}</p>
              <p className="text-white/70 text-sm mt-1 uppercase tracking-widest">Sacred Tool</p>
              
              <button className="mt-6 w-fit px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
                Explore Tool
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* QUOTE SECTION */}
      <section className="relative py-24 px-6 text-center z-10">
        <div className="max-w-3xl mx-auto border-y border-black/10 py-12">
          <p className="italic text-2xl md:text-3xl text-black/60 leading-relaxed">
            “Crystals are not objects — they are frequencies you choose to align with.”
          </p>
        </div>
      </section>

      {/* 🟢 FOOTER INTEGRATION */}
      <Footer />
    </div>
  );
}