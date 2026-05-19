"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Aarohi",
    stars: 5,
    review:
      "My skin has genuinely never looked this radiant before.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Mira",
    stars: 4,
    review:
      "The texture and glow make the experience feel incredibly premium.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ira",
    stars: 5,
    review:
      "My nighttime skincare routine finally feels calming and luxurious.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Kiara",
    stars: 5,
    review:
      "Elegant products that actually work beautifully on my skin.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Saanvi",
    stars: 4,
    review:
      "Beautifully minimal skincare that feels incredibly luxurious.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT SIDE - ABOUT EVAARA */}
        <div className="bg-[#161311] text-white px-8 md:px-16 py-24 flex flex-col justify-center relative overflow-hidden">

          {/* Aura Blur */}
          <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#c18f62]/20 blur-[120px] rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="uppercase tracking-[4px] text-sm text-white/40 mb-5">
              About Evaara
            </p>

            <h2 className="text-5xl md:text-7xl leading-[0.95] tracking-[-4px] font-light mb-10">
              Elevate Your Energy, Embrace Your Aura.
            </h2>

            <p className="text-white/60 leading-8 text-lg max-w-xl">
              Evaara is a modern crystal and gemstone brand blending 
              spirituality with timeless aesthetics. From healing 
              crystals to wearable energy pieces, every creation is 
              curated to bring intention, balance, and beauty into your 
              everyday life.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE - TESTIMONIALS */}
        <div className="relative overflow-hidden">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('/testimonialsbg.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* Warm Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c18f62]/20 via-transparent to-[#f0d8a8]/10"></div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-12 py-24">

            {/* Heading */}
            <div className="mb-12">
              <p className="uppercase tracking-[4px] text-sm text-white/50 mb-4">
                Reviews
              </p>

              <h3 className="text-5xl md:text-6xl font-light text-white tracking-[-3px]">
                Client
                <br />
                Testimonials
              </h3>
            </div>

            {/* Moving Cards */}
            <div className="overflow-hidden">

              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-6 w-max"
              >
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={index}
                    className="
                      min-w-[320px]
                      max-w-[320px]
                      h-[420px]
                      rounded-[32px]
                      p-8
                      backdrop-blur-xl
                      bg-white/10
                      border
                      border-white/20
                      shadow-[0_8px_40px_rgba(0,0,0,0.25)]
                      text-white
                      flex
                      flex-col
                      justify-between
                    "
                  >
                    <div>
                      {/* Photo */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-20
                          h-20
                          rounded-full
                          object-cover
                          mb-5
                          border
                          border-white/30
                        "
                      />

                      {/* Name */}
                      <p className="uppercase tracking-[3px] text-xs text-white/60 mb-6">
                        {item.name}
                      </p>

                      {/* Review */}
                      <h4 className="text-2xl leading-[1.5] tracking-[-1px] font-light">
                        “{item.review}”
                      </h4>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 text-lg text-[#f0d8a8]">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}

                      {Array.from({ length: 5 - item.stars }).map((_, i) => (
                        <span key={i} className="text-white/20">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
