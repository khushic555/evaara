"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const products = {
  "best sellers": [
    {
      id: 1,
      category: "LOVE POTION",
      title: "Rose Quartz Bracelet",
      price: "₹1199",
      image:
        "/rqb3.JPG"
    },
    {
      id: 2,
      category: "Protection in Purple",
      title: "Amethyst Bracelet",
      price: "₹999",
      image:
        "/amethyst_bracelet.JPG",
    },
    {
      id: 3,
      category: "THE MASTER HEALER",
      title: "Clear Quartz Bracelet",
      price: "₹1299",
      oldPrice: "₹1599",
      image:
        "/clear_quartz_bracelet.jpg",
    },
    {
      id: 4,
      category: "WISDOM WORN BEAUTIFULLY",
      title: "Emerald Necklace",
      price: "₹8999",
      image:
        "/emerald_bracelet.jpg",
    },
    {
      id: 5,
      category: "BALANCE YOU CAN WEAR",
      title: "7 Chakras bracelet",
      price: "₹1999",
      image:
        "/7chakras_bracelet.jpg",
    },
    {
      id: 6,
      category: "MAGNETIC WEALTH ENERGY",
      title: "Pyrite Bracelet",
      price: "₹999",
      image:
        "/pyrite_bracelet.jpg",
    },
  ],
};

export default function CollectionSection() {
  const [activeTab] = useState("best sellers");
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProducts = 4;
  const currentProducts = products[activeTab];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex + visibleProducts < currentProducts.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(currentProducts.length - visibleProducts);
    }
  };

  return (
    <motion.section
      initial={{ y: 180, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="
        relative 
        z-20
        w-full 
        bg-[#f7f3ef]
        pt-24 
        pb-20 
        px-6 
        md:px-10
        rounded-t-[60px]
        overflow-hidden
        shadow-[0_-20px_60px_rgba(0,0,0,0.08)]
      "
    >
      {/* Premium Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-white/40 blur-3xl rounded-full"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-14 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-light text-black capitalize tracking-[-2px]">
          Best Sellers
        </h2>

        <p className="text-gray-500 mt-4 text-sm tracking-[3px] uppercase">
          Luxury skincare essentials
        </p>
      </motion.div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="
            absolute 
            left-0 
            top-1/2 
            -translate-y-1/2 
            z-20
            bg-white/80
            backdrop-blur-md
            border border-white/40
            shadow-lg
            w-12 
            h-12 
            rounded-full 
            flex 
            items-center 
            justify-center
            hover:scale-110
            transition-all
            duration-300
          "
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="
            absolute 
            right-0 
            top-1/2 
            -translate-y-1/2 
            z-20
            bg-white/80
            backdrop-blur-md
            border border-white/40
            shadow-lg
            w-12 
            h-12 
            rounded-full 
            flex 
            items-center 
            justify-center
            hover:scale-110
            transition-all
            duration-300
          "
        >
          →
        </button>

        {/* Products */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * 25}%`,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  min-w-[25%]
                  bg-[#f7f3ef]
                  border border-[#e7dfd8]
                  min-h-[620px]
                  flex flex-col justify-between
                  group
                  relative
                  overflow-hidden
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Category */}
                <div className="p-6 relative z-10">
                  <p className="text-[11px] tracking-[3px] uppercase text-black/70">
                    {product.category}
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center px-6 py-8 relative z-10">
                  <motion.img
                    whileHover={{
                      scale: 1.08,
                      rotate: -2,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    src={product.image}
                    alt={product.title}
                    className="
                      h-[300px]
                      object-contain
                      drop-shadow-[0_25px_40px_rgba(0,0,0,0.12)]
                    "
                  />
                </div>

                {/* Product Info */}
                <div className="pb-10 text-center px-6 relative z-10">
                  <h3 className="text-[16px] text-black mb-3 tracking-wide">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-center gap-2 text-sm mb-6">
                    <span>{product.price}</span>

                    {product.oldPrice && (
                      <span className="line-through text-gray-400">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Add To Cart */}
                  <button
                    className="
                      border 
                      border-black
                      px-8
                      py-3
                      text-xs
                      uppercase
                      tracking-[3px]
                      hover:bg-black
                      hover:text-white
                      transition-all
                      duration-500
                      hover:px-10
                    "
                  >
                    Add To Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Premium Progress Bar */}
        <div className="flex justify-center mt-10">
          <div className="w-40 h-[2px] bg-gray-300 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-full bg-black"
              animate={{
                x: `${currentIndex * 100}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                width: `${100 / currentProducts.length}%`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}