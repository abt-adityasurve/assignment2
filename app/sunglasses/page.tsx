import products from "@/public/products";
import ProductCard from "../components/product";

export default function Sunglasses() {
  const sunglasses = products.filter((product) => product.category === "sunglasses");

  return (
    <main className="mx-auto mt-10 w-[90%]">
      <h1 className="mb-6 text-2xl font-bold text-black dark:text-white">Sunglasses</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {sunglasses.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
