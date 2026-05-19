"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ShopByCollection() {
  const collections = [
  {
    name: "Bracelets",
    link: "/bracelets",
  },
  {
    name: "Rings and Pendants",
    link: "/ringsnpendants",
  },
  {
    name: "Geodes and Showpieces",
    link: "/geodesnshowp",
  },
  {
    name: "Keychains and Others",
    link: "/keychains_n_others",
  },
];

  return (
    <motion.section
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="
        relative
        w-full
        h-[100vh]
        overflow-hidden
        rounded-t-[60px]
        -mt-10
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage:
            "url('/shopbycollectionbg3.png')",
}}
    
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Soft Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

      {/* Floating Blur */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-6
        "
      >
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            text-white
            text-6xl
            md:text-[120px]
            font-light
            tracking-[-5px]
            leading-none
            mb-8
          "
        >
          SHOP BY
          <br />
          COLLECTION
        </motion.h2>

        {/* Small Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p
            className="
              text-white/80
              uppercase
              tracking-[3px]
              text-[11px]
              md:text-xs
              leading-7
              mb-10
            "
          >
            Explore the essence of energy, intention, and timeless beauty through 
            Evaara’s curated crystal collections. From healing bracelets 
            and raw stones to elegant pendants and statement rings, 
            each piece is thoughtfully selected to align with different 
            energies, emotions, and lifestyles.
          </p>
        </motion.div>

        {/* Collection Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {collections.map((item, index) => (
  <Link key={index} href={item.link}>

    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        border
        border-white/50
        text-white
        px-8
        py-3
        uppercase
        tracking-[3px]
        text-xs
        backdrop-blur-md
        bg-white/5
        hover:bg-white
        hover:text-black
        transition-all
        duration-500
        rounded-full
      "
    >
      {item.name}
    </motion.button>

  </Link>
))}
        
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
          "
        >
          <div className="w-[1px] h-16 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}