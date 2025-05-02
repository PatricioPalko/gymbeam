"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-end text-gray-400">
      <button onClick={handleSignOut} className="hover:text-red-400 uppercase">
        Sign Out
      </button>
    </div>
  );
};

export { SignOut };
