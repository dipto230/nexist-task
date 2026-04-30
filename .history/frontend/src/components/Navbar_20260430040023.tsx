"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm"
    >
   
      <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        MyShop
      </h1>

   
      <button
        onClick={() => router.push("/cart")}
        className="relative flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition"
      >
       Cart

        
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full shadow">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
}
