"use client"

import { useState } from "react"
import Link from "next/link"

interface MobileMenuProps {
  closeMenu: () => void
}

const links = [
  { name: "Merge PDF", href: "/merge-pdf" },
  { name: "Split PDF", href: "/split-pdf" },
  { name: "Compress PDF", href: "/compress-pdf" },
]

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
  const [openConvert, setOpenConvert] = useState(false)

  const convertTo = [
    "JPG to PDF",
    "WORD to PDF",
    "POWERPOINT to PDF",
    "EXCEL to PDF",
    "HTML to PDF",
  ]

  const convertFrom = [
    "PDF to JPG",
    "PDF to WORD",
    "PDF to POWERPOINT",
    "PDF to EXCEL",
    "PDF to PDF/A",
  ]

  return (
    <div className="lg:hidden bg-white border-t">
      <div className="px-4 py-6 flex flex-col gap-5">

        {/* Normal Links */}
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            className="text-sm font-semibold uppercase"
          >
            {link.name}
          </Link>
        ))}

        {/* Convert PDF Accordion */}
        <div>
          <button
            onClick={() => setOpenConvert(!openConvert)}
            className="w-full text-left text-sm font-semibold uppercase flex justify-between items-center"
          >
            Convert PDF
            <span className="text-lg">
              {openConvert ? "−" : "+"}
            </span>
          </button>

          {openConvert && (
            <div className="mt-4 ml-4 flex flex-col gap-4">

              {/* Convert To */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">
                  Convert to PDF
                </p>
                {convertTo.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={closeMenu}
                    className="block text-sm text-gray-700 hover:text-red-600 py-1"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Convert From */}
              <div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase">
                  Convert from PDF
                </p>
                {convertFrom.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    onClick={closeMenu}
                    className="block text-sm text-gray-700 hover:text-red-600 py-1"
                  >
                    {item}
                  </Link>
                ))}
              </div>

            </div>
          )}
        </div>

        <hr />

        {/* Auth Links */}
        <Link
          href="/login"
          onClick={closeMenu}
          className="text-sm font-medium"
        >
          Login
        </Link>

        <Link
          href="/signup"
          onClick={closeMenu}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm text-center"
        >
          Sign up
        </Link>

      </div>
    </div>
  )
}