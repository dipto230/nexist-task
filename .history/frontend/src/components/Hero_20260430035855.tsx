"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    // 🔥 Image animation (right side)
    gsap.fromTo(
      ".hero-img",
      { x: 100, opacity: 0, scale: 1.1 },
      { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // 🔥 Text animation (left side)
    tl.fromTo(
      ".hero-title span",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.04,
        ease: "power4.out",
      }
    )
      .fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        ".hero-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
        "-=0.2"
      );

    // 🔥 Button pulse
    gsap.to(".hero-btn", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center bg-gray-900 text-white px-10">
      
      {/* LEFT TEXT */}
      <div className="w-1/2 space-y-6">
        <h1 className="hero-title text-5xl md:text-6xl font-extrabold leading-tight">
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

        <p className="hero-sub text-lg text-gray-300 max-w-md">
          Discover premium products with the best prices and a seamless shopping experience.
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: 800, behavior: "smooth" })
          }
          className="hero-btn bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 rounded-full text-lg shadow-xl hover:scale-110 transition"
        >
          Explore Products
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/hero.png"
          alt="hero"
          className="hero-img w-[90%] max-w-lg rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}
