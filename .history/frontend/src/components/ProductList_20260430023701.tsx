"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";

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
    <div>
      <h2>Products</h2>

      {products.map((p) => {
        const exists = cartItems.find((item) => item.productId === p.id);

        return (
          <div key={p.id}>
            <h4>{p.name}</h4>
            <p>{p.price}</p>

            <button
              disabled={!!exists}
              onClick={() =>
                dispatch(
                  addItem({
                    id: Date.now().toString(),
                    productId: p.id,
                    name: p.name,
                    price: p.price,
                  })
                )
              }
            >
              {exists ? "Already Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
