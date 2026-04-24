"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ComingSoonMobile() {
  const [showMascot, setShowMascot] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMascot(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:hidden relative min-h-screen bg-[#804097] flex flex-col items-center text-white text-center px-4">
      {/* Logo */}
      <div className="mt-6 md:mt-0 md:mb-8">
        <Image
          src="/brand-logo.png"
          alt="Brand Logo"
          width={180}
          height={60}
          loading="eager"
        />
      </div>

      {/* Center */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-3xl md:text-5xl tracking-widest mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          FRESH TASTE{" "}
          <span className="block md:inline italic font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            COMING SOON
          </span>
        </h2>

        <p className="mb-6 text-lg">order via</p>

        <div className="flex items-center gap-6">
          <div className="gradient-border">
            <div className="inner-box">
              <Image
                src="/pickme.png"
                alt="PickMe"
                fill
                className="object-contain p-1 rounded-2xl"
              />
            </div>
          </div>

          <div className="gradient-border">
            <div className="inner-box">
              <Image
                src="/ubereats.png"
                alt="Uber Eats"
                fill
                className="object-contain p-1 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mascot */}
      <div className="mt-auto flex items-center justify-center gap-2 pb-6 md:pb-0 overflow-hidden">
        {/* Left enters from left */}
        <div
          className={`transition-all duration-700 ease-out ${
            showMascot
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <Image
            src="/mascot-part-1.png"
            alt="Mascot part 1"
            width={80}
            height={60}
          />
        </div>

        {/* Center (no animation) */}
        <div className="opacity-100">
          <Image
            src="/mascot-part-2.png"
            alt="Mascot part 2"
            width={80}
            height={100}
          />
        </div>

        {/* Right enters from right */}
        <div
          className={`transition-all duration-700 ease-out ${
            showMascot
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <Image
            src="/mascot-part-3.png"
            alt="Mascot part 3"
            width={80}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
