"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoonMobile() {
  return (
    <div className="lg:hidden relative min-h-screen bg-[#804097] flex flex-col items-center text-white text-center px-4">
      <motion.div
        className="mt-12 md:mt-0 md:mb-8"
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

      <div className="flex flex-col items-center justify-center flex-1">
        <motion.h2
          className="text-3xl md:text-5xl tracking-widest mb-6 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-shadow-soft">FRESH TASTE</span>{" "}
          <span className="block md:inline italic font-bold text-shadow-strong">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
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
        </motion.div>
      </div>

      <div className="mt-auto flex items-center justify-center gap-2 pb-6 md:pb-0 overflow-hidden">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Image
            src="/mascot-part-1.png"
            alt="Mascot part 1"
            width={80}
            height={60}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Image
            src="/mascot-part-2.png"
            alt="Mascot part 2"
            width={80}
            height={100}
          />
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Image
            src="/mascot-part-3.png"
            alt="Mascot part 3"
            width={80}
            height={60}
          />
        </motion.div>
      </div>
    </div>
  );
}
