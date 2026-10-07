
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./addTocartButton";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
export default function ProductCard({ product }: { product: Product }) {
  return (

    <Link href={`/product-details/${product.id}`} >
    <div className="border rounded-[10px] p-4 hover:border-blue-400 hover:border-[3px]">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p>${product.price}</p>

      <AddToCartButton />

   
    </div>
    </Link>
  );
}
