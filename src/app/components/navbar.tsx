import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 flex gap-6 py-4 px-6 rounded-b-xl shadow-md">
      <Link className="text-white font-semibold capitalize hover:text-black transition" href="/products">
        products
      </Link>
      <Link className="text-white font-semibold capitalize hover:text-black transition" href="/todos">
        to-dos
      </Link>
    </nav>
  );
}
