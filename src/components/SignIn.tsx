"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      console.error("Invalid form submission");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("Invalid credentials");
      console.log("Invalid credentials");
    } else {
      console.log("Successfully signed in");
      router.push("/");
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
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
        className="text-white bg-[#ff4410] hover:bg-[#ff4410] focus:ring-4 focus:outline-none transition focus:ring-red-300 font-bold text-sm w-full px-5 py-2.5 text-center dark:bg-[#ff4410] dark:hover:bg-red-600 dark:focus:ring-red-800 uppercase"
      >
        Sign in
      </button>
    </form>
  );
};

export { SignIn };
