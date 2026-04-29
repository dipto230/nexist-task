import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="w-full max-w-6xl flex gap-10">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
