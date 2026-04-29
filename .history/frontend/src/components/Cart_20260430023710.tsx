"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem } from "@/redux/features/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h3>Cart is empty 🛒</h3>;
  }

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.price}</p>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
