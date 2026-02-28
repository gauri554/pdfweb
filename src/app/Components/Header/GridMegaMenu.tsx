"use client";

import Link from "next/link";
import { useState } from "react";

export default function DesktopAppsMegaMenu() {
  

  return (
 
        <div className="absolute right-6 top-full w-[900px] mt-6  bg-white rounded-2xl shadow-xl border z-50 p-10">

          <div className="grid grid-cols-3 gap-7">

            {/* LEFT COLUMN */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-gray-400 uppercase">
                Other Products
              </h3>

              <div className="space-y-4 text-sm">
                <Link href="#" className="block">
                  <p className="font-semibold">iLoveIMG</p>
                  <p className="text-gray-500 text-xs">
                    Effortless image editing
                  </p>
                </Link>

                <Link href="#" className="block">
                  <p className="font-semibold">iLoveSign</p>
                  <p className="text-gray-500 text-xs">
                    e-Signing made simple
                  </p>
                </Link>

                <Link href="#" className="block">
                  <p className="font-semibold">iLoveAPI</p>
                  <p className="text-gray-500 text-xs">
                    Document automation for developers
                  </p>
                </Link>
              </div>

              <div className="border rounded-lg p-4 text-sm">
                <p className="font-semibold">Integrations</p>
                <p className="text-gray-500 text-xs">
                  Zapier, Make, Wordpress...
                </p>
              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="space-y-8 border-x px-8">

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4">
                  Solutions
                </h3>

                <Link href="#" className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg"></div>
                  <div>
                    <p className="font-semibold text-sm">Business</p>
                    <p className="text-xs text-gray-500">
                      Streamlined PDF editing and workflows for business teams
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4">
                  Applications
                </h3>

                <div className="space-y-4 text-sm">
                  <Link href="#" className="block">
                    <p className="font-semibold">Desktop App</p>
                    <p className="text-xs text-gray-500">
                      Available for Mac and Windows
                    </p>
                  </Link>

                  <Link href="#" className="block">
                    <p className="font-semibold">Mobile App</p>
                    <p className="text-xs text-gray-500">
                      Available for iOS and Android
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 text-sm">

              <div className="space-y-4">
                <Link href="#" className="block font-medium">
                  Pricing
                </Link>
                <Link href="#" className="block font-medium">
                  Security
                </Link>
                <Link href="#" className="block font-medium">
                  Features
                </Link>
                <Link href="#" className="block font-medium">
                  About us
                </Link>
              </div>

              <hr />

              <div className="space-y-4">
                <Link href="#" className="block font-medium">
                  Help
                </Link>
                <Link href="#" className="block font-medium">
                  Language
                </Link>
              </div>

            </div>

          </div>
        </div>
   
  );
}