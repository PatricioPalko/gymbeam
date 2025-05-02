import { auth } from "@/lib/auth";

import { GithubSignIn } from "@/components/github-sign-in";
import { signIn } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";
import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold pb-12 text-center">Sign in</h1>
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
                          await executeAction({
                            actionFn: async () => {
                              await signIn("credentials", formData);
                            },
                          });
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
                          className="text-white bg-[#ff4410] hover:bg-[#ff4410] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm w-full sm:w-100 px-5 py-2.5 text-center dark:bg-[#ff4410] dark:hover:bg-red-600 dark:focus:ring-red-800"
                        >
                          Sign in
                        </button>
                      </form>

                      <div className="relative mt-8">
                        <div className="absolute inset-0 flex items-center max-w-sm mx-auto">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                          </span>
                        </div>
                      </div>
                      <div className="max-w-sm mx-auto text-center">
                        <GithubSignIn />
                      </div>
                      <div className="text-center">
                        <button>
                          <Link href="/sign-up">
                            Don&apos;t have an account?{" "}
                            <span className="hover:text-[#ff4410]">
                              Sign up
                            </span>
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
    </>
  );
};

export default Page;
