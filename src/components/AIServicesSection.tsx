import Link from "next/link";

export default function AIServicesSection() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden curved-section bg-[#f8fafc]">
      {/* Top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-28 bg-[radial-gradient(120%_70%_at_50%_0%,#ffffff_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Objevte sílu <span className="gradient-text">automatizace</span> na
            míru
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Naše pokročilé technologie kombinují automatizaci, marketing a AI
            pro vytvoření řešení, která výrazně zvyšují produktivitu a
            efektivitu vašeho podnikání.
          </p>
        </div>

        {/* Decorative blob + centered image behind cards */}
        <div
          className="select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%] z-[5]"
          aria-hidden="true"
        ></div>

        <div className="relative mt-20 md:mt-24 mb-16 md:mb-24">
          {/* Central image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
            <div className="circular-image-container w-full h-full shadow-lg rounded-full overflow-hidden">
              <div
                className="w-full h-full animate-gradient bg-[linear-gradient(90deg,#1c1a66,#262389,#5b59c8,#262389,#1c1a66)]"
                style={{
                  backgroundSize: "220% 220%",
                  opacity: 0.85,
                }}
              />
            </div>
          </div>

          {/* Service cards – unified light design */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-20">
            {/* Card 1 - Automatizace */}
            <li>
              <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-card hover:shadow-[0_12px_30px_rgba(38,35,137,0.08)] transition-shadow">
                <header className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Správa dat v reálném čase
                  </h3>
                </header>
                <p className="mt-3 text-gray-600">
                  Naše AI algoritmy analyzují a zpracovávají velké objemy dat v
                  reálném čase, což vám umožňuje činit informovaná rozhodnutí
                  okamžitě.
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href="/sluzby"
                    className="text-primary font-medium inline-flex items-center group/link underline-offset-4 hover:underline focus:underline"
                  >
                    Více informací
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </li>

            {/* Card 2 - Marketing */}
            <li>
              <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-card hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-shadow">
                <header className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Automatizace workflow
                  </h3>
                </header>
                <p className="mt-3 text-gray-600">
                  Eliminujte manuální procesy a soustřeďte se na to, co je
                  důležité. Naše nástroje přebírají opakující se úkoly a šetří
                  váš drahocenný čas.
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href="/automatizace"
                    className="text-primary font-medium inline-flex items-center group/link underline-offset-4 hover:underline focus:underline"
                  >
                    Více informací
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </li>

            {/* Card 3 */}
            <li>
              <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-card hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-shadow">
                <header className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/15">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Inteligentní predikce
                  </h3>
                </header>
                <p className="mt-3 text-gray-600">
                  Naše prediktivní modely analyzují historická data a
                  identifikují vzorce, které vám pomohou předvídat budoucí
                  trendy a potřeby vašich zákazníků.
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href="/ai-reseni"
                    className="text-primary font-medium inline-flex items-center group/link underline-offset-4 hover:underline focus:underline"
                  >
                    Více informací
                    <svg
                      className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </li>
          </ul>
        </div>

        {/* Process / Timeline (design only change, text zachován) */}
        <div className="mt-24 md:mt-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="rotate-badge bg-accent text-primary px-4 py-2 rounded-full inline-block font-medium mb-4 cursor-pointer">
                Náš proces
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Jak probíhá spolupráce s{" "}
                <span className="gradient-text">WebForte AI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Naším cílem je vytvořit řešení, které přesně odpovídá vašim
                potřebám a přináší měřitelné výsledky. Spolupráce s námi je
                transparentní, efektivní a zaměřená na vaše cíle.
              </p>
              <Link href="/konzultace" className="btn-primary">
                Zjistit více o našem procesu
              </Link>
            </div>

            <div>
              <ol className="relative border-s border-slate-200 pl-12 md:pl-14 space-y-7">
                <li className="relative">
                  <span className="pointer-events-none absolute left-[-25px] -translate-x-1/2 top-0 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-b from-[#262389] to-[#5b59c8] text-white text-[12px] md:text-[13px] font-semibold shadow ring-2 ring-white/70">
                    1
                  </span>
                  <div className="ml-1">
                    <h3 className="text-xl font-semibold mb-2 pt-1">
                      Analýza a konzultace
                    </h3>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Začínáme důkladnou analýzou vašich potřeb a procesů. Naši
                      specialisté identifikují oblasti, kde můžete nejvíce těžit
                      z implementace automatizace a marketingových řešení.
                    </p>
                  </div>
                </li>
                <li className="relative">
                  <span className="pointer-events-none absolute left-[-25px] -translate-x-1/2 top-0 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-b from-[#262389] to-[#5b59c8] text-white text-[12px] md:text-[13px] font-semibold shadow ring-2 ring-white/70">
                    2
                  </span>
                  <div className="ml-1">
                    <h3 className="text-xl font-semibold mb-2 pt-1">
                      Vývoj na míru
                    </h3>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Vytváříme řešení přesně podle vašich potřeb. Naše systémy
                      se přizpůsobí vašim existujícím procesům a integrují se s
                      vašimi stávajícími technologiemi.
                    </p>
                  </div>
                </li>
                <li className="relative">
                  <span className="pointer-events-none absolute left-[-25px] -translate-x-1/2 top-0 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-b from-[#262389] to-[#5b59c8] text-white text-[12px] md:text-[13px] font-semibold shadow ring-2 ring-white/70">
                    3
                  </span>
                  <div className="ml-1">
                    <h3 className="text-xl font-semibold mb-2 pt-1">
                      Implementace a podpora
                    </h3>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Zajistíme hladké nasazení a následnou podporu. Náš tým vám
                      poskytne školení a bude s vámi pracovat na optimalizaci
                      výsledků.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom fade from section bg to transparent */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 bg-[radial-gradient(120%_70%_at_50%_100%,#ffffff_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true"
      />
    </section>
  );
}
