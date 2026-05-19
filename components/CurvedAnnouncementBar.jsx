"use client";

export default function CurvedAnnouncementBar() {
  return (
    <div className="relative h-[140px] -mt-16 -mb-16 z-50 overflow-visible">
      {/* Ribbon */}
      <svg
        viewBox="0 0 1440 220"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,120
            C240,220 420,40 720,120
            C1020,200 1200,60 1440,140
            L1440,190
            C1200,120 1020,260 720,190
            C420,120 240,260 0,190
            Z
          "
          fill="#b89d7a"
        />
      </svg>

      {/* Text ON Ribbon */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          z-10
          pointer-events-none
        "
      >
        <div
          className="
            flex
            items-center
            gap-16
            text-white
            uppercase
            tracking-[4px]
            text-sm
            md:text-base
            font-light
            whitespace-nowrap
            -rotate-2
          "
        >
          <span>20% Off Sitewide</span>
          <span>Luxury Skincare</span>
          <span>Free Shipping</span>
          <span>Glow Essentials</span>
        </div>
      </div>
    </div>
  );
}