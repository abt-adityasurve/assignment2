
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-[10px] p-4">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p>${product.price}</p>

      <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition hover:bg-blue-700 cursor-pointer"
>Add to Cart</button>
    </div>
  );
}
