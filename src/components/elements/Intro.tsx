import { useEffect, useState } from "react";
import SplitText from "./SplitText";
import Image from "next/image";
export default function FullscreenIntro() {
  const [showText, setShowText] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Durasi total animasi masuk div = 1.75s (50% dari 3.5s)
    const showTextTimer = setTimeout(() => {
      setShowText(true);
    }, 1750); // setelah div selesai turun penuh layar, teks muncul (fade in)

    // Delay teks tampil selama 1.5s, lalu mulai animasi keluar
    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 1500 + 1750);

    return () => {
      clearTimeout(showTextTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Hellp text
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      {!hide && (
        <div
          className="z-50 fixed top-0 left-0 w-full h-full bg-[#191919] flex items-center justify-center"
          style={{
            animationName: "slideDownIn",
            animationDuration: "1.3s",
            animationFillMode: "forwards",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            width={250}
            height={250}
            className="object-contain"
          />
          <SplitText
            text=""
            className={`text-3xl text-[#2f3542] text-center delay-200 ${
              showText ? "opacity-100" : "opacity-100"
            }`}
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.5}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      )}

      {hide && (
        <div
          className="z-50 fixed top-0 left-0 w-full h-full bg-[#191919]"
          style={{
            animationName: "slideDownOut",
            animationDuration: "1.3s",
            animationFillMode: "forwards",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        ></div>
      )}

      <style jsx>{`
        @keyframes slideDownIn {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes slideDownOut {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(150%);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
