import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 flex gap-6 py-4 px-6 rounded-b-xl shadow-md">
      <h1 className="mr-4"><span className="font-extrabold">My</span><i className="font-medium">SuperApp</i></h1>
      <Link className="text-white font-semibold capitalize hover:text-black transition" href="/products">
        products
      </Link>
      <Link className="text-white font-semibold capitalize hover:text-black transition" href="/todos">
        to-dos
      </Link>
      <h1 className="ml-180"><b>Domain Course 6 Midterm Project -</b> <span className=" font-normal">Efren Jacob Centillas</span></h1>
    </nav>
  );
}
