"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    name: "AMETHYST",
    textSize: "16vw",
    image: "/amethyst.png",
    bgImage: "/amethyst-bg.png",
    accent: "#5b21b6",
    textOpacity: 0.35,
    desc: "A calming crystal of intuition, clarity and higher energy.",
  },
  {
    name: "CITRINE",
    textSize: "16vw",
    image: "/citrine.png",
    bgImage: "/citrine-bg.jpg",
    accent: "#FEBE11",
    textOpacity: 0.99,
    desc: "The crystal of abundance, confidence and creative warmth.",
  },
  {
    name: "ROSE QUARTZ",
    textSize: "13vw",
    image: "/rose-quartz.png",
    bgImage: "/rose-quartz-bg.jpg",
    accent: "#be185d",
    textOpacity: 0.35,
    desc: "Soft feminine energy centered around love and healing.",
  },
];

export default function CrystalHero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
  key={index}
  className="relative flex h-screen min-w-full items-center justify-center overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-[0.90]"
    style={{
    backgroundImage: `url(${slide.bgImage})`,

}}
    
  />

  {/* Dark Overlay */}
  
            {/* TOP NAVBAR AURA */}
<div
  className="
    absolute
    -top-[280px]
    left-1/2
    h-[700px]
    w-[1200px]
    -translate-x-1/2
    rounded-full
    blur-[160px]
  "
  style={{
    background: slide.accent,
    opacity: 0.35,
  }}
/>

{/* SECOND TOP SPLASH */}
<div
  className="
    absolute
    top-[-120px]
    right-[-150px]
    h-[500px]
    w-[500px]
    rounded-full
    blur-[140px]
  "
  style={{
    background: slide.accent,
    opacity: 0.22,
  }}
/>

{/* LEFT COLOR SPLASH */}
<div
  className="
    absolute
    top-[120px]
    left-[-180px]
    h-[500px]
    w-[500px]
    rounded-full
    blur-[150px]
  "
  style={{
    background: slide.accent,
    opacity: 0.18,
  }}
/>

{/* MAIN CENTER AURA */}
<div
  className="
    absolute
    top-1/2
    left-1/2
    h-[800px]
    w-[800px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    blur-[170px]
  "
  style={{
    background: slide.accent,
    opacity: 0.18,
  }}
/>

{/* BOTTOM SPLASH */}
<div
  className="
    absolute
    bottom-[-180px]
    left-[20%]
    h-[450px]
    w-[450px]
    rounded-full
    blur-[150px]
  "
  style={{
    background: slide.accent,
    opacity: 0.14,
  }}
/>

            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Huge Background Text */}
            <h1
 className="absolute z-0 whitespace-nowrap font-black tracking-tight select-none"
style={{
  fontSize: slide.textSize,
  color: slide.accent,
  opacity: slide.textOpacity,
  textShadow: `0 0 40px ${slide.accent}`,
  }}
>
  {slide.name}
</h1>

            {/* Crystal Image */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={slide.image}
                alt={slide.name}
                className="
                  h-[72vh]
                  object-contain
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                "
              />
            </div>

            {/* Left Bottom Text */}
            <div className="absolute bottom-16 left-10 z-20 max-w-xs">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/40">
                Guided by Energy
              </p>

              <h2 className="mb-3 text-3xl font-semibold text-black/90">
                {slide.name}
              </h2>

              <p className="text-sm leading-relaxed text-black/60">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SHOP NOW BUTTON - BOTTOM RIGHT */}
    

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-10 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="
            rounded-full
            border border-white/20
            bg-white/10
            p-4
            backdrop-blur-2xl
            backdrop-saturate-150
            transition-all duration-300
            hover:bg-black
            hover:text-white
          "
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="
            rounded-full
            border border-white/20
            bg-white/10
            p-4
            backdrop-blur-2xl
            backdrop-saturate-150
            transition-all duration-300
            hover:bg-black
            hover:text-white
          "
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === index
                ? "w-10 bg-black/80"
                : "w-2 bg-black/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}