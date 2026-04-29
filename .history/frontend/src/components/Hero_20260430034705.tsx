"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.3"
      );
  }, []);

  return (
    <div className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* ✅ Local Image */}
      <img
        src="/hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* ✅ Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="hero-title text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Shop Smarter <br />
          <span className="text-blue-400">Buy Better</span>
        </h1>

        <p className="hero-sub text-lg mb-8 max-w-xl mx-auto text-gray-200">
          Discover premium products with the best prices and a seamless shopping experience.
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: 700, behavior: "smooth" })
          }
          className="hero-btn bg-blue-500 px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition shadow-lg"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
