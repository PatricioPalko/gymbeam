"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarItem = {
  label: string;
  href: string;
};

const navItems: NavbarItem[] = [
  { label: "Domov", href: "/" },
  { label: "Produkty", href: "/products" },
  { label: "Prihlásiť sa", href: "/login" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-wrap w-full">
        <nav className="flex max-w-desktop w-full">
          <ul
            data-test="top-menu"
            id="desktop-nav"
            className="relative hidden md:flex md:flex-wrap w-full mt-3"
          >
            {navItems.map((navbarItem: NavbarItem, index: number) => (
              <li className="group" key={index}>
                <Link
                  href={navbarItem.href}
                  className={`no-underline leading-[53px] h-full py-4 px-[15px] pl-0`}
                >
                  <span
                    className={`text-base font-bold text-left uppercase no-underline lg:text-lg hover:text-[#FF5733] ${
                      pathname === navbarItem.href
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
    </>
  );
};

export default Navbar;
