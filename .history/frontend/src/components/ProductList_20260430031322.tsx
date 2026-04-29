"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import toast from "react-hot-toast";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="w-1/2">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-2 gap-6">
        {products.map((p) => {
          const exists = cartItems.find(
            (item) => item.productId === p.id
          );

          return (
            <div
              key={p.id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-lg font-semibold">{p.name}</h4>
              <p className="text-gray-500 mb-3">৳ {p.price}</p>

              <button
                className={`w-full py-2 rounded-lg text-white font-medium ${
                  exists
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                onClick={() => {
                  if (exists) {
                    toast.error("Already added ❌");
                    return;
                  }

                  dispatch(
                    addItem({
                      id: Date.now().toString(),
                      productId: p.id,
                      name: p.name,
                      price: p.price,
                    })
                  );

                  toast.success("Added to cart ✅");
                }}
              >
                {exists ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
