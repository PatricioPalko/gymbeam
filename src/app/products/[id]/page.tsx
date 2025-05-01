import { getProductDetail } from "@/app/helpers/fetch-data";
import Image from "next/image";

export default async function ProductDetail({
  params,
}: {
  params: { id: number };
}) {
  const productId = (await params).id;
  const productDetail = await getProductDetail(productId);
  return (
    <div className="bg-white">
      <div className="container max-w-screen-desktop mx-auto px-5 pb-20 2xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 py-24">
          <div className="col-span-1">
            <div className="flex w-full">
              <div
                data-test="pdp-product-image"
                className="relative flex flex-1 flex-col space-y-1"
              >
                <div
                  className="relative flex-1 flex w-full items-center"
                  role="navigation"
                  aria-label="Gallery Controls"
                >
                  <div className="flex flex-1 xl:h-full justify-end w-full">
                    <div className="h-auto md:h-auto">
                      <div className="overflow-hidden relative flex flex-1 justify-end">
                        <div
                          className="flex items-flex-end"
                          style={{
                            transition: "transform 0.3s ease-out",
                            display: "flex",
                            flex: "1 1 100%",
                            gap: "4px",
                            justifyContent: "flex-end",
                            padding: "0px",
                          }}
                        >
                          <div
                            className="w-full h-full shrink-0 flex"
                            style={{ width: "100%" }}
                          >
                            <Image
                              alt={productDetail.title}
                              role="button"
                              aria-label="Image 1"
                              data-test="visible-image-0"
                              fetchPriority="high"
                              width="300"
                              height="300"
                              decoding="async"
                              data-nimg="1"
                              className="shrink-0 w-full h-full bg-center bg-no-repeat bg-contain cursor-pointer object-contain"
                              src={productDetail.image}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl px-4 py-0 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:py-0 text-left">
            <h1 className="product-name block my-1 text-xl font-bold overflow-hidden">
              {productDetail.title}
            </h1>
            <div
              className="ml-[-5px] mt-0.5 flex w-fit border-transparent"
              data-test="rating-component"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div className="-mx-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                      className={`w-6 h-6 ${
                        productDetail.rating.rate > i
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
                  {Math.round((productDetail.rating.rate / 5) * 100)}&nbsp;%
                </span>
                <span className="hidden md:inline ml-1 font-bold text-black">
                  ({productDetail.rating.count})
                </span>
              </div>
            </div>
            <div
              data-test="pdp-product-description-short"
              className="my-3 w-full"
            >
              <span className="block text-justify">
                <p>
                  <span>{productDetail.description}</span>
                </p>
              </span>
            </div>
            <p className="mt-1 text-xl font-medium text-red-500">
              {productDetail.price}€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
