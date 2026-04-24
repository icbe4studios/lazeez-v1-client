"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoonDesktop() {
  return (
    <div className="hidden lg:flex inset-0 min-h-screen bg-[#804097] flex-col items-center justify-center text-white text-center">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/brand-logo.png"
          alt="Brand Logo"
          width={180}
          height={60}
          loading="eager"
        />
      </motion.div>

      <motion.h2
        className="text-3xl md:text-5xl tracking-widest mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        FRESH TASTE{" "}
        <span className="italic font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
          COMING SOON
        </span>
      </motion.h2>

      <motion.p
        className="mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        order via
      </motion.p>

      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* PickMe */}
        <motion.div
          className="gradient-border"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: [0, -3, 3, -2, 2, 0], // vibration
          }}
          transition={{
            scale: { duration: 0.5, ease: "easeOut", delay: 0.3 },
            x: { delay: 0.9, duration: 0.4 },
          }}
        >
          <div className="inner-box">
            <Image
              src="/pickme.png"
              alt="PickMe"
              fill
              className="object-contain p-1 rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Uber Eats */}
        <motion.div
          className="gradient-border"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: [0, 3, -3, 2, -2, 0], // vibration opposite
          }}
          transition={{
            scale: { duration: 0.5, ease: "easeOut", delay: 0.4 },
            x: { delay: 1.0, duration: 0.4 },
          }}
        >
          <div className="inner-box">
            <Image
              src="/ubereats.png"
              alt="Uber Eats"
              fill
              className="object-contain p-1 rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-10 flex items-center justify-center gap-2 overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/mascot-part-1.png"
            alt="Mascot part 1"
            width={160}
            height={60}
            loading="eager"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Image
            src="/mascot-part-2.png"
            alt="Mascot part 2"
            width={160}
            height={60}
            loading="eager"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/mascot-part-3.png"
            alt="Mascot part 3"
            width={160}
            height={60}
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
}
