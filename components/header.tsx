"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center mb-8">
      <Link href={"/"}>
        <p
          className={`${
            pathname === "/candidates"
              ? "text-red-700 text-18-bold  hover:text-red-400"
              : "text-18-bold "
          }`}
        >
          Home
        </p>
      </Link>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          <Link
            href="/candidates"
            className={`text-18-bold ${
              pathname === "/candidates"
                ? " text-18-bold"
                : "hover:text-red-400 text-red-700 "
            }`}
          >
            <li>Candidates</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
