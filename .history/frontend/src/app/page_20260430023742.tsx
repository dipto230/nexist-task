import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <ProductList />
      <Cart />
    </div>
  );
}
