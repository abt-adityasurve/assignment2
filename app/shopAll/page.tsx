import products from "@/public/products";
import ProductCard from "../components/product";

export default function AllProducts() {
  const allProducts = products.filter((product) => product);

  return (
    <main className="mx-auto mt-10 w-[90%]">
      <h1 className="mb-6 text-2xl font-bold text-black dark:text-white">All products</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
