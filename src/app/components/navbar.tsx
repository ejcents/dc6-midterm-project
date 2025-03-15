import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-amber-400 flex gap-6 py-4 px-6 rounded-b-lg shadow-md">
      <Link className="text-black font-semibold capitalize hover:text-white transition" href="/products">
        products
      </Link>
      <Link className="text-black font-semibold capitalize hover:text-white transition" href="/todos">
        to-dos
      </Link>
    </nav>
  );
}
