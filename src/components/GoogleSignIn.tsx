"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleSignIn = () => {
  const handleSignIn = () => {
    signIn("google");
  };

  return (
    <button
      type="button"
      onClick={handleSignIn}
      className="group h-12 px-6 border-2 border-gray-300 transition duration-300 hover:border-[#ff4410] focus:bg-blue-50 active:bg-blue-100 my-4"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <Image src="/media/google.svg" alt="Google" width={30} height={30} />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-[#ff4410] sm:text-base">
          Continue with Google
        </span>
      </div>
    </button>
  );
};

export { GoogleSignIn };
