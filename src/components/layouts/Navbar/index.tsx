"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Squeeze as Hamburger } from "hamburger-react";
import { TbMapSearch } from "react-icons/tb";

export default function KatsuNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="px-4 px-6 md:px-8 py-6 fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/60 border border-neutral-300 flex items-center justify-between h-[3rem]">
        {/* Logo */}
        {/* <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain h-auto w-auto"
          />
        </Link> */}

        {/* Desktop Nav */}
        <nav className="hidden w-full md:flex justify-between gap-2 p-2 rounded-xl items-center gap-6 text-md font-medium text-gray">
          <div className="flex gap-6">
          <Link
            href="/"
            className="hover:text-[#ff4757] hover:underline transition"
          >
            Our Story
          </Link>
          <Link
            href="/date"
            className="hover:text-[#ff4757] hover:underline transition"
          >
            Date
          </Link>
          </div>
          <div className="flex gap-6">
          <Link
            href="/locations"
            className="hover:text-[#ff4757] hover:underline transition"
          >
            Locations
          </Link>
          <Link href="/present" className="hover:text-[#ff4757] transition">
            Presents
          </Link>
          </div>
        </nav>

        {/* Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={sidebarOpen} toggle={setSidebarOpen} size={20} />
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-25 right-0 w-1/2 max-w-xs bg-white border border-gray-300 rounded-md shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 text-[#2f3542]">
            <TbMapSearch size={20} /> Navigate
          </h3>
          <nav className="flex flex-col gap-4 text-[#2f3542] font-medium">
            <Link href="/" className="hover:text-[#ff4757] transition">
              Our Story
            </Link>
            {/* <Link href="/services" className="hover:text-[#ff4757] transition">
              services
            </Link> */}
            <Link href="/date" className="hover:text-[#ff4757] transition">
              Date
            </Link>
            <Link href="/locations" className="hover:text-[#ff4757] transition">
              Locations
            </Link>
            <Link href="/present" className="hover:text-[#ff4757] transition">
              Present
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
