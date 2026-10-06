
import products from "../public/products";
import ProductCard from "./components/product";

export default function Home() {
  return (
    <>


      <main className="mx-auto mt-10 w-[90%]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
