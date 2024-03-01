"use client";

import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <h1 className="font-maruBuri self-center whitespace-nowrap text-xl font-bold">
        Cut/
        <span className="ml-1 font-bold text-red-500 text-2xl">Block</span>
      </h1>
    </Link>
  );
}

export default Logo;
