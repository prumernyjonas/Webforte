"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 bg-transparent relative overflow-hidden">
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center relative z-10">
          <div className="relative flex items-center">
            <Image
              src="/logo.png"
              alt="WebForte"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto bg-transparent"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </Link>

        <div className="md:hidden relative z-20">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          } md:relative md:flex md:items-center md:space-x-8 md:z-10`}
        >
          {isMenuOpen && (
            <button
              className="absolute top-6 right-6 text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            href="/ai-reseni"
            className='text-gray-700 hover:text-primary after:content-[""] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full'
          >
            AI řešení
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
          className="hidden md:flex bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors items-center"
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
