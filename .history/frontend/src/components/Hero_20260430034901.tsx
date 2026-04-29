"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    // 🔥 Background zoom
    gsap.fromTo(
      ".hero-img",
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );

    // 🔥 Title stagger (letter feel)
    tl.fromTo(
      ".hero-title span",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power4.out",
      }
    )
      .fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".hero-btn",
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );

    // 🔥 Button pulse loop
    gsap.to(".hero-btn", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background */}
      <img
        src="/hero.png"
        className="hero-img absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-3xl">
        
        {/* 🔥 Split text manually */}
        <h1 className="hero-title text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          {"Shop Smarter".split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
          <br />
          <span className="text-blue-400">
            {"Buy Better".split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-sub text-lg mb-8 text-gray-200">
          Discover premium products with the best prices and a seamless shopping experience.
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: 700, behavior: "smooth" })
          }
          className="hero-btn bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 rounded-full text-lg shadow-xl hover:scale-110 transition"
        >
          Explore Products
        </button>
      </div>
    </div>
  );
}
