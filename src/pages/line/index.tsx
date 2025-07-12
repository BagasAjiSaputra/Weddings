"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    title: "It all started with a cup of coffee",
    desc: "In a cozy café corner, two strangers crossed paths. A fleeting glance, a quiet smile, and fate quietly began its work.",
    img: "/hero1.jpg",
    top: "200px",
    align: "left",
  },
  {
    title: "Destiny sat us in the same classroom",
    desc: "As if scripted by the universe, we met again—in a lecture hall filled with unfamiliar faces, we found each other.",
    img: "/story1.webp",
    top: "700px",
    align: "right",
  },
  {
    title: "From strangers, to soulmates",
    desc: "We shared laughter, overcame doubts, and chose each other—again and again. Our story slowly unfolded.",
    img: "/story3.jpeg",
    top: "1200px",
    align: "left",
  },
  {
    title: "A promise, forever",
    desc: "Now, surrounded by those we love, we promise forever. This is not just a wedding. It’s the beginning of everything.",
    img: "/hero.jpg",
    top: "1700px",
    align: "right",
  },
];

export default function AnimatedSvgPath() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        duration: 10,
        scrollTrigger: {
          trigger: ".svg-container",
          start: "top 30%",
          end: "bottom 70%",
          scrub: 5,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="svg-container relative w-full h-[300vh] bg-white overflow-hidden">
      {/* SVG stays untouched */}
      <svg
        width="1250"
        height="100%"
        viewBox="0 0 894 2921"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2"
      >
        <path
          ref={pathRef}
          d="M421.5 0.5C421.5 0.5 444.962 123.052 421.5 195.5C366.366 365.743 47.4529 219.343 8.50011 394C-2.2959 442.407 -1.44547 472.411 8.50011 521C55.2925 749.605 600.5 602 600.5 602C600.5 602 828.034 631.084 867 742C885.963 795.978 878.847 832.528 867 888.5C818.897 1115.78 311 1100 311 1100C311 1100 64.1358 1076.18 77.0001 973C87.4062 889.541 174.5 872 255.5 852.5C336.5 833 658.993 884.361 799 1064C847.537 1126.28 897.45 1164.17 893 1243C885.316 1379.13 647.273 1270.7 574.5 1386C525.542 1463.57 575.476 1536.23 532 1617C452.068 1765.49 240.962 1674.47 148.5 1815.5C90.1433 1904.51 54.9578 1974.37 77.0001 2078.5C103.593 2204.13 228.484 2211.11 311 2309.5C370.632 2380.6 420.084 2414 451 2501.5C486.975 2603.31 451 2778 451 2778V2921"
          stroke="#2f3542"
          strokeWidth={10}
          fill="none"
        />
      </svg>

      {/* Floating Story Cards */}
      {storySteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`absolute w-[300px] p-4 bg-white rounded-2xl shadow-xl ${
            index === storySteps.length - 1
              ? "right-[20%] md:right-[25%]" // custom agak ke tengah di layar besar
              : step.align === "left"
              ? "left-[5%]"
              : "right-[5%]"
          }`}
          style={{ top: step.top }}
        >
          <img
            src={step.img}
            alt={step.title}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
