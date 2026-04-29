"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Cart from "./Cart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Shop</h1>

      {/* Cart Button */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="relative bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Cart 🛒

          {/* Badge */}
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </button>

        {/* Dropdown Cart */}
        {open && (
          <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-xl p-4 z-50">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
}
