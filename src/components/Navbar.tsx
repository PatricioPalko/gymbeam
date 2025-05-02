"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarItem = {
  label: string;
  href: string;
};

const navItems: NavbarItem[] = [
  { label: "Domov", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Login", href: "/sign-in" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="container max-w-screen-desktop min-h-[40px] md:min-h-[70px] flex flex-col items-center justify-between px-5 mx-auto pt-2.5 2xl:px-0">
      <div className="flex flex-wrap w-full">
        <nav className="flex max-w-desktop w-full">
          <ul
            data-test="top-menu"
            id="desktop-nav"
            className="relative hidden md:flex md:flex-wrap w-full"
          >
            {navItems.map((navbarItem: NavbarItem, index: number) => (
              <li className="group" key={index}>
                <Link
                  href={navbarItem.href}
                  className={`no-underline leading-[53px] h-full py-4 px-[15px] pl-0`}
                >
                  <span
                    className={`text-base font-bold text-left uppercase no-underline lg:text-lg hover:text-[#FF5733] ${
                      (
                        navbarItem.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(navbarItem.href)
                      )
                        ? "text-[#FF5733] transition"
                        : "text-black"
                    }`}
                  >
                    {navbarItem.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
