import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero/>

      <div className="p-10 max-w-6xl mx-auto">
        <ProductList />
      </div>
    </div>
  );
}
