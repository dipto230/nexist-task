import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div className="flex gap-12 p-6">
      <ProductList />
      <Cart />
    </div>
  );
}
