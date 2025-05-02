import { GithubSignIn } from "@/components/GithubSignIn";
import { GoogleSignIn } from "@/components/GoogleSignIn";
import { SignIn } from "@/components/SignIn";
import { auth } from "@/lib/auth";
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
                      <SignIn />
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
                        <GoogleSignIn />
                        <GithubSignIn />
                      </div>
                      <div className="text-center">
                        <button>
                          <Link href="/sign-up">
                            Don&apos;t have an account?{" "}
                            <span className="hover:text-[#ff4410] transition">
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
