"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem } from "@/redux/features/cartSlice";
import toast from "react-hot-toast";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image || "https://via.placeholder.com/80"}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-500">৳ {item.price}</p>
                </div>
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => {
                  dispatch(removeItem(item.id));
                  toast.success("Item removed");
                }}
              >
                Remove
              </button>
            </div>
          ))}

          
          <div className="bg-white p-4 rounded-xl shadow flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>৳ {total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
