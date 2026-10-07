import products from "@/public/products";
import ProductCard from "../components/product";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query =  params.q || "";
  const normalizedQuery = query.trim().toLowerCase();
  const matchingProducts = normalizedQuery ? products.filter((product) =>
        `${product.title} ${product.category}`
          .toLowerCase()
          .includes(normalizedQuery),
      ):[];

  return (
    <main className="mx-auto mt-10 w-[90%]">
      <h1 className="mb-6 text-2xl font-bold text-black dark:text-white">
        {normalizedQuery ? `Search results for "${query}"` : "Search products"}
      </h1>
      {normalizedQuery ? (
        matchingProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {matchingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-black dark:text-white">
            No products found for {query}.
          </p>
        )
      ) : (
        <p className="text-black dark:text-white">
          Enter a search term to find products.
        </p>
      )}
    </main>
  );
}
