// components/Section2.tsx
"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import "aos/dist/aos.css";
import AnimatedSvgPath from "@/pages/line";

export default function Section2() {

  return (
    <>
    <section className="bg-ivory text-gray-800">

      <div className="max-w-3xl mx-auto py-0 px-6 text-center h-[50vh]">
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-serif text-gray-800 mb-2"
      >
        <span className="inline-flex items-center gap-2">
          Ethan <FaHeart size={20} color="#a4b0be" /> Isabella
        </span>
      </motion.h2>

      <p className="text-sm mt-3 italic text-gray-500">
        &quot;A love story as timeless as the vows they’ll take&quot;
      </p>
    </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base md:text-lg leading-relaxed text-gray-600 mt-5"
        >
          In a quiet corner of the city, amidst the hum of conversations and the scent of freshly brewed coffee, our eyes met for the very first time. No script, no perfect timing—just two strangers, brought together by fate in the most unexpected way. A fleeting glance turned into a silent spark. Little did we know, that moment was the beginning of everything.
        </motion.p>
      </div>
    </section>
    <h1 className="text-center text-4xl mt-2 mb-10">StoryTell</h1>
    <AnimatedSvgPath />

    <p className="text-center text-4xl mt-2 mb-10">The End</p>
    </>
  );
}
