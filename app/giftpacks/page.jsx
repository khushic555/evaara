"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/FooterSection";
import { motion } from "framer-motion";

export default function GiftPacksPage() {
  const products = [
    {
      name: "Sagittarius Crystal Set",
      img: "gb1.jpg",
      size: "large",
    },
    {
      name: "Mini geodes set",
      img: "gb2.jpg",
      size: "small",
    },
    {
      name: "Zodiac Crystal Set",
      img: "gb3.jpg",
      size: "medium",
    },
    {
      name: "Birthday Hampers",
      img: "gb4.jpg",
      size: "small",
    },
    {
      name: "Healing Energy Kit",
      img: "gb5.jpg",
      size: "large",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F5F5F7] overflow-x-hidden">
      
      <Navbar />

      {/* 🌈 SPREAD AURA BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* DARK TOP FOR NAVBAR */}
        <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-black/95 via-teal-900/40 to-transparent z-0" />
        
        {/* DISTRIBUTED AURAS - These move down the page */}
        <div className="absolute w-[800px] h-[800px] bg-teal-400/20 blur-[160px] rounded-full -top-40 -left-60" />
        <div className="absolute w-[600px] h-[600px] bg-amber-400/20 blur-[140px] rounded-full top-[25%] -right-20" />
        <div className="absolute w-[700px] h-[700px] bg-rose-400/15 blur-[150px] rounded-full top-[50%] -left-40" />
        <div className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[140px] rounded-full top-[75%] right-0" />
        <div className="absolute w-[800px] h-[800px] bg-emerald-400/10 blur-[180px] rounded-full bottom-0 left-1/4" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-48 px-6 text-center z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-teal-300 uppercase tracking-[0.3em] text-sm font-medium"
        >
          Curated with Intent
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mt-4 drop-shadow-xl"
        >
          Gift Packs
        </motion.h1>
        <p className="mt-8 text-white/70 max-w-2xl mx-auto text-xl font-light">
          Beautifully packaged energy, ready to be shared with those you love.
        </p>
      </section>

      {/* 🪄 GIFT PACKS GRID */}
      <section className="relative mt-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10 pb-32">
        {products.map((pack, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15, scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`
              relative overflow-hidden rounded-[2.5rem] border border-white/50
              bg-white/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]
              ${pack.size === "large" ? "md:col-span-2 h-[500px]" : "h-[500px]"}
            `}
          >
            <img
              src={pack.img}
              alt={pack.name}
              className="w-full h-full object-cover transition duration-1000 hover:scale-105"
            />

            {/* Glass Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
              <h3 className="text-3xl font-semibold tracking-tight">{pack.name}</h3>
              <p className="text-white/60 mt-3 text-lg font-light leading-relaxed">
                {pack.desc || "A perfect blend of crystals and rituals for the soul."}
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <button className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-medium transition-all shadow-lg shadow-teal-500/20">
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full transition-all">
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FINAL CALL TO ACTION AURA */}
      <section className="relative py-32 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-3xl rounded-[3rem] p-16 border border-white/60 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900">Can't Decide?</h2>
          <p className="mt-4 text-gray-600 text-xl italic">
            "Gift the gift of choice with our digital essence cards."
          </p>
          <button className="mt-10 px-12 py-4 bg-black text-white rounded-full hover:bg-teal-600 transition-colors">
            Buy a Gift Card
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}