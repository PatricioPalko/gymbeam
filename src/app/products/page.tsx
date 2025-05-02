import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAllProducts } from "../helpers/fetch-data";

type ProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function Products() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  const allProducts = await getAllProducts();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold pb-12 text-center">Products</h1>
          {session ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
              {allProducts &&
                allProducts.map((product: ProductItem, index: number) => (
                  <Link
                    key={index}
                    href={`/products/${product.id}`}
                    className="product hover:text-[#ff4410]"
                  >
                    <div className="relative w-full">
                      <div className="relative aspect-square">
                        <Image
                          src={product.image}
                          loading="lazy"
                          width="115"
                          height="115"
                          alt={product.title}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                    <span className="product-name block my-1 text-sm font-bold overflow-hidden h-[2.5rem] hover:text-[#ff4410] mt-4">
                      {product.title}
                    </span>
                    <div
                      className="ml-[-5px] mt-0.5 flex w-fit border-transparent"
                      data-test="rating-component"
                    >
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div className="-mx-0.5" key={i}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 1024 1024"
                              className={`w-6 h-6 ${
                                product.rating.rate > i
                                  ? "fill-red-500"
                                  : "fill-secondary"
                              }`}
                            >
                              <path d="M804.645 444.599c-1.499-4.681-5.888-7.899-10.789-7.899h-206.958l-64.073-196.754c-1.536-4.645-5.888-7.826-10.825-7.826-4.901 0-9.289 3.182-10.825 7.863l-64.439 196.754h-206.592c-4.901 0-9.289 3.218-10.825 7.863-1.499 4.681 0.146 9.874 4.096 12.763l167.205 121.783-64.439 197.851c-1.536 4.681 0.146 9.838 4.133 12.727 3.95 2.889 9.399 2.889 13.349 0l168.338-122.185 167.936 122.149c2.011 1.463 4.315 2.231 6.693 2.231s4.681-0.768 6.693-2.231c4.023-2.889 5.669-8.009 4.133-12.727l-64.439-197.851 167.57-121.783c3.95-2.889 5.632-8.046 4.059-12.727z"></path>
                            </svg>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-grey-300 font-bold text-xs m-0 text-black">
                        <span className="font-bold">
                          {Math.round((product.rating.rate / 5) * 100)}&nbsp;%
                        </span>
                        <span className="hidden md:inline ml-1 font-bold text-black">
                          ({product.rating.count})
                        </span>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-red-500">
                      {product.price}€
                    </p>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="mt-1 text-lg font-medium text-black-500 text-center mb-5">
                You need to be logged in to see the products
              </p>
              <Link
                href={"/sign-in"}
                className="text-white bg-[#ff4410] hover:bg-[#ff4410] focus:ring-4 focus:outline-none transition focus:ring-red-300 font-bold text-sm w-full px-5 py-2.5 text-center dark:bg-[#ff4410] dark:hover:bg-red-600 dark:focus:ring-red-800"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
