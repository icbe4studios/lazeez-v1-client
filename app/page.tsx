"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-purple-700 flex flex-col items-center justify-center text-white text-center px-4">
      <div className="mb-8">
        <Image
            src="/brand-logo.png"
            alt="Brand Logo"
            width={280}
            height={60}
            loading="eager"
          />
      </div>

      <h2 className="text-3xl md:text-5xl font-semibold tracking-widest mb-6">
        FRESH TASTE <span className="italic">COMING SOON</span>
      </h2>

      <p className="mb-6 text-lg opacity-80">order via</p>

      <div className="flex items-center gap-6 mb-10">
        <div className="bg-white rounded-xl p-4 w-20 h-20 flex items-center justify-center">
          <Image
            src="/pickme.png"
            alt="PickMe"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        <div className="bg-green-500 rounded-xl p-4 w-20 h-20 flex items-center justify-center">
          <Image
            src="/ubereats.png"
            alt="Uber Eats"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

      <div className="opacity-80">
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
