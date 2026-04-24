"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="inset-0 min-h-screen bg-purple-700 flex flex-col items-center justify-center text-white text-center">
      <div className="mb-8">
        <Image
          src="/brand-logo.png"
          alt="Brand Logo"
          width={180}
          height={60}
          loading="eager"
        />
      </div>

      <h2 className="text-3xl md:text-5xl tracking-widest mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        FRESH TASTE{" "}
        <span className="block md:inline italic font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          COMING SOON
        </span>
      </h2>

      <p className="mb-6 text-lg">order via</p>

      <div className="flex items-center gap-6">
        <div className="rounded-xl p-4 w-20 h-20 relative flex items-center justify-center">
          <Image
            src="/pickme.png"
            alt="PickMe"
            fill
            className="object-contain p-1"
          />
        </div>

        <div className="rounded-xl p-4 w-20 h-20 relative flex items-center justify-center">
          <Image
            src="/ubereats.png"
            alt="Uber Eats"
            fill
            className="object-contain p-1"
          />
        </div>
      </div>

      <div className="mt-10">
        <Image
          src="/mascot.png"
          alt="Mascot"
          width={480}
          height={60}
          loading="eager"
        />
      </div>
    </div>
  );
}
