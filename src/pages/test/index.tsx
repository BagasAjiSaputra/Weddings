"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SmartContainerLogistics() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden grid place-items-center">
        {/* Background Image */}
        <Image
          src="/main.jpg"
          alt="Container Logistics"
          layout="fill"
          objectFit="cover"
          className="brightness-80 rounded-2xl"
          priority
        />

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 md:px-12 flex flex-col justify-between h-full py-6">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">

            {/* Overlay Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-[90%] sm:max-w-xs text-white text-sm md:text-base mt-[3rem]"
            >
              <p>
                At CargoWays, we pride ourselves on delivering top-notch
                logistics services for seamless cargo transportation.
              </p>
            </motion.div>

            {/* Bubble Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:space-y-2 space-y-1 text-md sm:flex-row sm:gap-2 md:flex-col mt-[3rem]"
            >
              <div className="bg-white px-3 py-1 rounded-full shadow whitespace-nowrap">
                01 / Ground
              </div>
              <div className="bg-white px-3 py-1 rounded-full shadow whitespace-nowrap">
                02 / Sea
              </div>
            </motion.div>
          </div>

          {/* Middle Section - Card & Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-auto gap-6">
            {/* Mini Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex bg-white/90 gap-3 backdrop-blur-md p-4 rounded-xl shadow-lg w-full md:w-auto md:max-w-xs"
            >
              <Image
                src="/port.png"
                alt="Preview"
                width={100}
                height={50}
                className="rounded-lg w-full h-[50%] object-cover"
              />
              <Link href={"/container"} className="text-md mt-2 font-medium transition-transform duration-300 hover:translate-x-2 hover:text-[#ff7f50]">
                Unlocking seamless global logistics →
              </Link>
            </motion.div>

            {/* Title (floating for aesthetic only) */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              SMART CONTAINER <br className="hidden sm:block" />
              LOGISTICS
            </motion.h1>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end mt-6">
            {/* Contact bubble (floating component - allowed) */}
            <Link href={"/contact"}>  
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm"
            >
              <span className="font-medium">Contacts</span>
              <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                0
              </span>
            </motion.div>
            </Link>

            {/* Description bubble (floating) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden md:block text-white text-xs sm:text-sm bg-black/70 px-3 py-2 rounded-lg max-w-[80%] sm:max-w-xs text-right"
            >
              Seamless logistics solutions for efficient cargo transportation
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
