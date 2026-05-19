"use client";

import { motion } from "framer-motion";

const stones = [
  {
    id: 1,
    image: "/tagline1.png",
    className: "top-[12%] left-[12%] w-16 md:w-24",
  },
  {
    id: 2,
    image: "tagline2.png",
    className: "top-[20%] right-[18%] w-14 md:w-20",
  },
  {
    id: 3,
    image: "tagline3.png",
    className: "bottom-[18%] left-[30%] w-16 md:w-24",
  },
  {
    id: 4,
    image: "tagline4.png",
    className: "bottom-[12%] right-[22%] w-14 md:w-20",
  },
];

export default function TaglineSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f6f1ea]
        py-28
        px-6
        flex
        items-center
        justify-center
      "
    >
      {/* Warm Aura Background */}
      <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-[#e7bc8c]/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-140px] right-[-120px] w-[340px] h-[340px] bg-[#c6976d]/25 blur-[140px] rounded-full"></div>

      {/* Huge Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          text-center
          text-[#241915]
          uppercase
          font-light
          leading-[0.9]
          tracking-[-5px]
          text-[16vw]
          md:text-[10vw]
          max-w-[1400px]
        "
      >
        Crafted
        <br />
        For Energy
      </motion.h2>

      {/* Floating Gemstones */}
{stones.map((stone, index) => (
  <motion.img
    key={stone.id}
    src={stone.image}
    alt="gemstone"

    /* Initial hidden below */
    initial={{
      opacity: 0,
      y: 220,
      scale: 0.6,
      rotate: -8,
    }}

    /* Toast Pop Animation */
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
    }}

    transition={{
      delay: 3 + index * 0.25,
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    }}

    viewport={{ once: true }}

    /* Continuous Floating Hover */
    animate={{
      y: [0, -12, 0],
      rotate: [-1, 1, -1],
    }}

    style={{
      animationDelay: `${index * 0.4}s`,
    }}

    className={`
      absolute
      z-20
      drop-shadow-[0_25px_45px_rgba(0,0,0,0.22)]
      will-change-transform
      ${stone.className}
    `}
  />
))}
    </section>
  );
}