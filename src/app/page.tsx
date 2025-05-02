import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-end justify-items-center gap-16 font-[family-name:var(--font-open-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12  lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          <div className="flex flex-col align-items-center justify-center">
            <h1 className="text-8xl font-bold uppercase">
              Push Beyond <strong className="text-[#ff4410]">Limits!</strong>
            </h1>
            <div className="text-xl pt-4 leading-8">
              We are a fitness e-commerce platform with sports nutrition,
              premium services, and fair prices. We offer a wide range of
              nutritional supplements and advanced foods.
            </div>
            <Link
              href="/products"
              className="inline-block w-auto self-start px-6 text-white bg-[#ff4410] hover:bg-[#ff4410] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-lg py-2.5 dark:bg-[#ff4410] dark:hover:bg-red-600 dark:focus:ring-red-800 mt-4 uppercase"
            >
              Show products
            </Link>
          </div>
          <div>
            <Image src="/media/man.png" alt="Logo" width={900} height={900} />
          </div>
        </div>
      </main>
    </div>
  );
}
