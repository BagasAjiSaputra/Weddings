"use client";
import Footer from "../Footer";
import ClickSpark from "@/components/elements/Click";
import KatsuNavbar from "../Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FullscreenIntro from "@/components/elements/Intro";
import SplashCursor from '@/components/elements/SplashCursor';

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const { pathname } = useRouter();

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setShowIntro(true);
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <SplashCursor />
      <ClickSpark
        sparkColor="#2f3542"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {showIntro && <FullscreenIntro />}
        {!showIntro && (
          <main className="p-4">
            <KatsuNavbar />
            {children}
            <Footer />
          </main>
        )}
      </ClickSpark>
    </>
  );
}
