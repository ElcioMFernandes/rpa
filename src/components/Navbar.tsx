"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-stone-50 shadow-stone-300 shadow-lg">
      <ul className="flex flex-row justify-center gap-10 text-xs py-3">
        <li>
          <Link
            href="/"
            className={`cursor-pointer hover:text-stone-900 ${
              pathname === "/" ? "text-stone-900" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/jobs"
            className={`cursor-pointer hover:text-stone-900 ${
              pathname === "/jobs" ? "text-stone-900" : ""
            }`}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            href="/queue"
            className={`cursor-pointer hover:text-stone-900 ${
              pathname === "/queue" ? "text-stone-900" : ""
            }`}
          >
            Queue
          </Link>
        </li>
        <li>
          <Link
            href="/graph"
            className={`cursor-pointer hover:text-stone-900 ${
              pathname === "/graph" ? "text-stone-900" : ""
            }`}
          >
            Graph
          </Link>
        </li>
      </ul>
    </nav>
  );
};
