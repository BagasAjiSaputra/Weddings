import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSvg() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    const container = containerRef.current;

    if (!path || !container) return;

    const pathLength = path.getTotalLength();
    console.log("Path length:", pathLength);

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        markers: true,
      },
    });
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, height: "300vh" }}>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <svg
          width="1250"
          height="3000"
          viewBox="0 0 894 2921"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "100%" }}
        >
          <path
            ref={pathRef}
            d="M421.5 0.5C421.5 0.5 444.962 123.052 421.5 195.5C366.366 365.743 47.4529 219.343 8.50011 394C-2.2959 442.407 -1.44547 472.411 8.50011 521C55.2925 749.605 600.5 602 600.5 602C600.5 602 828.034 631.084 867 742C885.963 795.978 878.847 832.528 867 888.5C818.897 1115.78 311 1100 311 1100C311 1100 64.1358 1076.18 77.0001 973C87.4062 889.541 174.5 872 255.5 852.5C336.5 833 658.993 884.361 799 1064C847.537 1126.28 897.45 1164.17 893 1243C885.316 1379.13 647.273 1270.7 574.5 1386C525.542 1463.57 575.476 1536.23 532 1617C452.068 1765.49 240.962 1674.47 148.5 1815.5C90.1433 1904.51 54.9578 1974.37 77.0001 2078.5C103.593 2204.13 228.484 2211.11 311 2309.5C370.632 2380.6 420.084 2414 451 2501.5C486.975 2603.31 451 2778 451 2778V2921"
            stroke="black"
            strokeWidth="10"
          />
        </svg>
      </div>
    </div>
  );
}
