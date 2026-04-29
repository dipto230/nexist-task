"use client";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import toast from "react-hot-toast";
import gsap from "gsap";
import Image from "next/image";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      gsap.fromTo(
        ".card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [products]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {products.map((p) => {
          const exists = cartItems.find(
            (item) => item.productId === p.id
          );

          return (
            <div
              key={p.id}
              className="card bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* ✅ Next Image */}
              <div className="relative w-full h-40 mb-3">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h4 className="text-lg font-semibold">{p.name}</h4>
              <p className="text-gray-500 mb-3">৳ {p.price}</p>

              <button
                className={`w-full py-2 rounded-lg text-white font-medium transition ${
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
                      image: p.image,
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
