"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem } from "@/redux/features/cartSlice";
import toast from "react-hot-toast";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <p className="text-center text-gray-500">Empty 🛒</p>;
  }

  return (
    <div className="space-y-3 max-h-60 overflow-y-auto">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b pb-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={item.image || "https://via.placeholder.com/40"}
              className="w-10 h-10 rounded"
            />
            <div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">৳ {item.price}</p>
            </div>
          </div>

          <button
            className="text-red-500 text-sm"
            onClick={() => {
              dispatch(removeItem(item.id));
              toast.success("Removed");
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
