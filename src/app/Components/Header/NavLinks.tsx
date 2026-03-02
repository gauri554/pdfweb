"use client"

import Link from "next/link"
import { useState } from "react"
import ConvertMegaMenu from "./ConvertMegaMenu"
import AllToolsMegaMenu from "./AllToolsMegaMenu"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const links = [
  { name: "Merge PDF", href: "/merge-pdf" },
  { name: "Split PDF", href: "/split-pdf" },
  { name: "Compress PDF", href: "/compress-pdf" },
  { name: "Convert PDF", href: "/convert-pdf", mega: "convert"},
  { name: "All PDF Tools", href: "/pdf-tools", mega: "alltools" },

]
export default function NavLinks() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <nav className="flex items-center gap-10 relative">
      {links.map((link) => {

        if (link.mega) {
          return (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.mega)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-sm font-bold uppercase hover:text-red-600 cursor-pointer flex">
                {link.name} <IoIosArrowDown size={18} className={`ml-1 transition-transform duration-200 ${openMenu===link.mega ? "rotate-180":"rotate-0"} `}/>
              </button>

              {link.mega === "convert" && openMenu === "convert" && (
                <ConvertMegaMenu />
              )}

              {link.mega === "alltools" && openMenu === "alltools" && (
                <AllToolsMegaMenu />
              )}
            </div>
          )
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-bold hover:text-red-600 transition uppercase cursor-pointer"
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}