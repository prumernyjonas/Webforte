"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-8 md:py-6 bg-transparent relative overflow-hidden">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center relative z-10">
          <div className="relative flex items-center">
            <Image
              src="/logo.png"
              alt="WebForte"
              width={150}
              height={50}
              className="h-14 md:h-12 w-auto bg-transparent"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </Link>

        <div className="block min-[1025px]:hidden relative z-20">
          {/*  Hamburger Icon  */}
          <button
            className="text-gray-700 focus:outline-none h-10 w-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
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

        <nav
          className={`${
            isMenuOpen
              ? "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-xl"
              : "hidden"
          } min-[1025px]:relative min-[1025px]:flex min-[1025px]:items-center min-[1025px]:space-x-8 min-[1025px]:z-10`}
        >
          {isMenuOpen && (
            // Close button
            <button
              className="absolute top-6 right-6 text-gray-700 focus:outline-none h-10 w-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          <Link
            href="/"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            Domů
          </Link>
          <Link
            href="/sluzby"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            Služby
          </Link>
          <Link
            href="/automatizace"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            Automatizace
          </Link>
          <Link
            href="/marketing"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            Marketing
          </Link>
          <Link
            href="/pripadove-studie"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            Případové studie
          </Link>

          <Link
            href="/kontakt"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            Kontakt
          </Link>
        </nav>

        <Link
          href="/konzultace"
          className="hidden min-[1025px]:flex bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors items-center"
        >
          <span className="mr-2">Bezplatná konzultace</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1">
        <div className="h-full w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
      </div>
    </header>
  );
}
