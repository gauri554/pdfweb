"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LayoutGrid } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import GridMegaMenu from "./GridMegaMenu";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
const [openGrid, setOpenGrid] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
     <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

  {/* LEFT - Logo */}
  <div className="flex items-center">
    <Link href="/" className="text-2xl font-bold text-red-600">
    <Image src="/images/desklogo.svg" alt="logo" width={100} height={100}/>
    </Link>
  </div>

  {/* CENTER - NavLinks (Desktop Only) */}
  <div className="hidden lg:flex items-center gap-12">
    <NavLinks />
  </div>

  {/* RIGHT - Actions */}
  <div className="hidden lg:flex items-center gap-4">

    <Link
      href="/login"
      className="text-sm font-bold hover:text-red-600"
    >
      Login
    </Link>

    <Link
      href="/signup"
      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition"
    >
      Sign up
    </Link>

    <button onClick={()=>setOpenGrid(!openGrid)} className="hover:text-red-600">
      <LayoutGrid size={20} />
    </button>
  </div>

  {/* MOBILE BUTTON */}
  <button
    onClick={toggleMenu}
    className="lg:hidden"
    aria-label="Toggle Menu"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
  {openGrid && <GridMegaMenu/>}
</div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} />}
    </header>
  );
}