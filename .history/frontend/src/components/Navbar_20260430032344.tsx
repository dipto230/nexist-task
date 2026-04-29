"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Shop</h1>

      <button
        onClick={() => router.push("/cart")}
        className="relative bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Cart 🛒

        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
}
