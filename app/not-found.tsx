"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#804097] text-center px-6 py-10">
      <div className="mt-10">
        <p className=" text-xl mb-2">404</p>
        <p className=" text-lg">page not found</p>
      </div>

      <div className="flex flex-col items-center">
        <h1 className=" text-5xl md:text-6xl font-bold mb-4">Oops...</h1>
        <p className=" text-lg md:text-xl max-w-sm">
          This page isn&apos;t here... <br /> but cravings are..
        </p>

        <Link
          href="/"
          className="mt-10 bg-purple-700 hover:bg-purple-800 text-white px-10 py-3 rounded-full text-lg transition"
        >
          click here
        </Link>
      </div>

      <div className="mb-6">
        <Image
          src="/brand-logo.png"
          alt="Brand Logo"
          width={180}
          height={60}
          loading="eager"
        />
      </div>
    </div>
  );
}
