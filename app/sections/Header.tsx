"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Admin",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className=" bg-teal-600/50 py-4 px-4 shadow-lg">
        <div className="flex justify-between items-center">
          <Link
            href="https://github.com/IamSim0419"
            className="text-xl font-bold shadow-neutral-900"
          >
            <span className="text-blue-600">S</span>imreich
          </Link>

          <nav>
            <div className="flex items-center gap-x-2">
              {navLinks.map((link, i) => (
                <Link
                  href={link.href}
                  key={i}
                  className={twMerge(
                    "px-3 py-1 rounded-lg shadow-lg",
                    pathname === link.href
                      ? "bg-teal-500 text-white"
                      : "bg-slate-200"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
