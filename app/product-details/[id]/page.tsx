import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/public/products";
import AddToCartButton from "@/app/components/addTocartButton";

type ProductDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = await params;
const productId = Number(id);

  if (!Number.isInteger(productId)) {
    notFound();
  }

 const product = products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }



  return (
    <main className="mx-auto w-[90%] py-10">
      <Link
        href="/shopAll"
        className="mb-6 inline-block text-sm text-gray-600 underline underline-offset-4 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        Back to all products
      </Link>

      <section className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
           
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="py-2">
         
          <h1 className="text-3xl font-bold text-white">
            {product.title}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-white">
            ${product.price}USD
          </p>
          <hr className="h-px bg-gray-700 border-0 my-[5px]"/>


          <p className="mt-[10px]">SIZE</p>


        <div className="my-[10px] gap-4"><>
  <button className="bg-gray-800 text-white rounded-[30%] border border-transparent p-[2px] px-[8px] cursor-pointer hover:border-blue-500 ">XS</button>
  <button className="bg-gray-800 text-white rounded-[30%] border border-transparent p-[2px] px-[8px] cursor-pointer hover:border-blue-500 ml-[10px]">S</button>
  <button className="bg-gray-800 text-white rounded-[30%] border border-transparent p-[2px] px-[8px] cursor-pointer hover:border-blue-500 ml-[10px]">L</button>
  <button className="bg-gray-800 text-white rounded-[30%] border border-transparent p-[2px] px-[8px] cursor-pointer hover:border-blue-500 ml-[10px]">M</button>
  <button className="bg-gray-800 text-white rounded-[30%] border border-transparent p-[2px] px-[8px] cursor-pointer hover:border-blue-500 ml-[10px]">XL</button>
</>


          </div>



          <p className="mt-[10px] ">COLOR</p>
           <button className="bg-gray-800 text-white rounded-[20%] border border-transparent p-[2px] px-[8px] cursor-pointer hover:border-blue-500 my-[10px] ">White</button>



           <p className="text-gray-400">Congrats, you have found your next favorite {product.title}! Made from a soft cotton blend, these joggers feature a vibrant print that will not fade, so they can stay in your wardrobe for a long time.</p>

           <br /><br />

           <p className="text-gray-400">
            • 100% California fleece cotton <br />
• Hooded with matching finished polyester drawcord <br />
• Raglan sleeves <br />
• Front pouch pocket <br />
           </p>

        <div className="mt-[10px]">
          <AddToCartButton  />
        </div>




        </div>
      </section>

      <p className="mt-[20px] text-[20px]">Releted Products</p>

      

    </main>
  );
}
