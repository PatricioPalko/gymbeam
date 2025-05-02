import { signUp } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold pb-12 text-center">
          Create an account
        </h1>
        <div className="grid grid-cols-1">
          <div className="columns">
            <div className="column main">
              <div className="login-container">
                <div className="block block-customer-login">
                  <div
                    className="block-content"
                    aria-labelledby="block-customer-login-heading"
                  >
                    <form
                      className="max-w-sm mx-auto"
                      action={async (formData) => {
                        "use server";
                        const res = await signUp(formData);
                        if (res.success) {
                          redirect("/sign-in");
                        }
                      }}
                    >
                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-white-500 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-black-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-black-500"
                          placeholder="name@gymbeam.com"
                          required
                          autoComplete="email"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Your password
                        </label>
                        <input
                          name="password"
                          type="password"
                          id="password"
                          className="bg-white-500 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-black-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-black-500"
                          required
                          autoComplete="current-password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="text-white bg-[#ff4410] hover:bg-[#ff4410] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-[#ff4410] dark:hover:bg-red-600 dark:focus:ring-red-800 cursor-pointer"
                      >
                        Sign up
                      </button>
                    </form>

                    <div className="text-center mt-4">
                      <button>
                        <Link href="/sign-in">
                          Already have an account?{" "}
                          <span className="hover:text-[#ff4410]">Sign in</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
