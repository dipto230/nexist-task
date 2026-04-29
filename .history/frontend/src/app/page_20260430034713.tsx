import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <

      <div className="p-10 max-w-6xl mx-auto">
        <ProductList />
      </div>
    </div>
  );
}
