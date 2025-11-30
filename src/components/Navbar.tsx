"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="EnshitifAi Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-xl font-bold text-transparent">
              EnshitifAi
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/partners"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Partners
            </Link>
            <Link
              href="/services"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
            >
              Extract Value
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/partners"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Extract Value
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
