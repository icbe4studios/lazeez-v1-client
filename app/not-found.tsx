import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#E5E1E6] text-center px-6 py-10">
      <div className="mt-10 flex items-center justify-center gap-6">
        <Image
          src="/404-part-2.png"
          alt="Left illustration"
          width={120}
          height={120}
          className="object-contain"
        />

        <div className="text-center">
          <p className="text-[#804097] text-xl mb-2">404</p>
          <p className="text-[#804097] text-lg">page not found</p>
        </div>

        <Image
          src="/404-part-1.png"
          alt="Right illustration"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[#804097] text-5xl md:text-6xl font-bold mb-4">
          Oops...
        </h1>
        <p className="text-[#804097] text-lg md:text-xl max-w-sm">
          This page isn&apos;t here... <br /> but cravings are..
        </p>

        <Link
          href="/"
          className="mt-10 bg-[#804097] hover:bg-[#804097]/80 text-white px-10 py-3 rounded-full text-lg transition"
        >
          click here
        </Link>
      </div>

      <div className="my-6">
        <Image
          src="/brand-logo-not-found.png"
          alt="Brand Logo"
          width={120}
          height={40}
          loading="eager"
        />
      </div>
    </div>
  );
}
