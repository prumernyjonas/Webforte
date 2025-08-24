"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import aiAnimation from "../../public/hero/ai.json";

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Jemné ztmavení pozadí */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Odstraněny bílé kruhy v rozích */}

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Levá strana: CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-6 py-2 bg-white/20 text-white rounded-full mb-6 font-medium backdrop-blur-sm">
              🚀 Připraveni na automatizaci?
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Získejte <span className="text-accent">konkurenční výhodu</span>
              <br />s automatizací na míru
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl md:max-w-md leading-relaxed mx-auto md:mx-0">
              Neztrácejte čas. Začněte s bezplatnou konzultací ještě dnes a
              zjistěte, jak můžeme automatizovat vaše procesy a zvýšit
              efektivitu o 40-60%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Link
                href="/konzultace"
                className="btn-primary group relative w-full sm:w-auto justify-center text-center whitespace-nowrap !h-14 !px-4 !text-[16px] sm:!h-14 sm:!px-6 sm:!text-[18px] max-sm:pr-10"
              >
                <span className="mx-auto flex items-center">
                  <span>Bezplatná konzultace</span>
                  {/* desktop/tablet inline icon with hover motion */}
                  <svg
                    className="hidden sm:inline-block ml-3 w-5 h-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {/* mobile-only absolute icon on the far right */}
                <span className="pointer-events-none absolute right-4 inset-y-0 grid place-content-center sm:hidden">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/sluzby"
                className="btn-outline group relative w-full sm:w-auto justify-center text-center whitespace-nowrap !h-14 !px-4 !text-[16px] sm:!h-14 sm:!px-6 sm:!text-[18px] max-sm:pr-10"
              >
                <span className="mx-auto flex items-center">
                  <span>Prozkoumat řešení</span>
                  {/* desktop/tablet inline magnifier */}
                  <svg
                    className="hidden sm:inline-block ml-4 w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
                {/* mobile-only absolute magnifier on the far right */}
                <span className="pointer-events-none absolute right-4 inset-y-0 grid place-content-center sm:hidden">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="mt-8 text-white/80 text-sm flex flex-col sm:flex-row gap-2 justify-center md:justify-start items-center">
              <span>✅ Bez závazků</span>
              <span className="hidden sm:inline">•</span>
              <span>✅ 60 minut zdarma</span>
              <span className="hidden sm:inline">•</span>
              <span>✅ Okamžitá zpětná vazba</span>
            </div>
          </div>

          {/* Pravá strana: animovaný obrázek */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
              <Lottie
                animationData={aiAnimation}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
