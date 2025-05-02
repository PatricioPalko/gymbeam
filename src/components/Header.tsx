"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { SignOut } from "./SignOut";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between w-full md:gap-x-10">
      <div
        className="flex h-[40px] md:h-[75px] lg:h-[70px] justify-center md:justify-start"
        data-test="header-gymbeam-logo"
      >
        <Link
          data-testid="link"
          className="h-full"
          title="GymBeam s.r.o."
          aria-label="store logo"
          href="/"
        >
          <Image
            alt="Logo"
            loading="lazy"
            width="265"
            height="75"
            decoding="async"
            data-nimg="1"
            className="h-7 w-auto sm:h-10 object-contain text-left md:h-full md:w-auto max-w-none"
            src="/media/GB_Logo_Energy_SK.webp"
            style={{ color: "transparent" }}
          />
        </Link>
      </div>
      <div className="flex items-center justify-end ml-4">
        <div className="flex items-center gap-x-3">
          <div className="relative">
            <div className="flex items-center justify-center">
              <Link
                href="/sign-in"
                data-test="login"
                className="cursor-pointer text-black h-full hover:bg-transparent flex justify-center items-center gap-x-2"
                aria-label="košík"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="-112.6 199.2 23 28"
                  className="h-6 w-6 hover:fill-[#ff4410]"
                >
                  <path d="M-91.5 213.4c-.8-1.3-1.8-2.5-3-3.5.5-1 .7-2 .7-3.2 0-2.1-.8-4-2.2-5.3-1.4-1.4-3.3-2.2-5.3-2.2s-4 .8-5.3 2.2c-1.4 1.4-2.2 3.3-2.2 5.3 0 1.1.3 2.2.7 3.2-1.2.9-2.3 2.1-3 3.5-.9 1.7-1.5 3.6-1.5 5.6v8.2h22.7V219c-.2-2-.7-3.9-1.6-5.6zm-13.7-10.4c1-1 2.3-1.6 3.8-1.6s2.8.6 3.8 1.6 1.6 2.3 1.6 3.8c0 1.1-.3 2.1-.8 2.9-.2.3-.4.5-.6.8-.4.4-.8.7-1.3 1-.8.4-1.7.7-2.6.7-1 0-1.8-.2-2.6-.7-.8-.4-1.4-1-1.9-1.8s-.8-1.8-.8-2.9c-.2-1.5.4-2.8 1.4-3.8zm13 22.1h-18.4V219c0-1.7.4-3.2 1.2-4.5.6-1 1.4-2 2.3-2.7.6.7 1.2 1.2 2 1.6 1.1.6 2.3 1 3.7 1 1.3 0 2.6-.3 3.7-1 .8-.4 1.4-1 2-1.6.9.7 1.7 1.7 2.3 2.7.8 1.3 1.2 2.9 1.2 4.5v6.1z"></path>
                </svg>
              </Link>
              {session?.user?.email && (
                <span className="font-medium ml-2 hidden md:block">
                  {session?.user?.email}
                </span>
              )}
            </div>
            {session?.user?.email && <SignOut />}
          </div>
        </div>
      </div>
    </div>
  );
}
