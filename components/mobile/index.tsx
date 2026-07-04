"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaThreads } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function ComingSoonMobile() {
  return (
    <div className="lg:hidden relative min-h-screen bg-[#804097] flex flex-col items-center text-white text-center px-4">
      <motion.div
        className="mt-20 md:mt-0 md:mb-8"
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
        className="text-3xl md:text-5xl tracking-widest mt-14 mb-6 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <span className="text-shadow-soft">FRESH TASTE</span>{" "}
        <span className="block md:inline italic font-bold text-shadow-strong">
          COMING SOON
        </span>
      </motion.h2>

      <div className="flex flex-col items-center justify-center flex-1">
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
          <motion.div
            className="gradient-border"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: [0, -3, 3, -2, 2, 0],
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

          <motion.div
            className="gradient-border"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: [0, 3, -3, 2, -2, 0],
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
      </div>

      <motion.div
        className="flex items-center gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://www.instagram.com/lazeez.dxb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#804097] text-lg">
              <FaInstagram />
            </div>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/lazeez.dxb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#804097] text-lg">
              <FaFacebookF />
            </div>
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@lazeez_ae"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#804097] text-lg">
              <FaTiktok />
            </div>
          </motion.a>

          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#804097] text-lg">
              <FaYoutube />
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/company/lazeezae/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#804097] text-lg">
              <FaLinkedinIn />
            </div>
          </motion.a>

          <motion.a
            href="https://www.threads.com/@lazeez.dxb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-full"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#804097] text-lg">
              <FaThreads />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="mt-auto flex items-center justify-center gap-2 py-10 overflow-hidden">
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
