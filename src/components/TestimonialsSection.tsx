"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export default function TestimonialsSection() {
  const [counts, setCounts] = useState({
    clients: 0,
    success: 0,
    improvement: 0,
    support: 0,
  });

  const animateCounts = useCallback(() => {
    const targetCounts = {
      clients: 150,
      success: 95,
      improvement: 60,
      support: 24,
    };

    Object.keys(targetCounts).forEach((key) => {
      const target = targetCounts[key as keyof typeof targetCounts];
      let current = 0;
      const increment = target / 25; // Reduced from 50 to 25 steps
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 50); // Increased from 30ms to 50ms
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for better performance
            requestAnimationFrame(() => {
              animateCounts();
            });
          }
        });
      },
      { threshold: 0.3 } // Reduced threshold for earlier trigger
    );

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [animateCounts]);

  return (
    <section className="py-16 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_50%,rgba(59,130,246,0.05)_0%,rgba(59,130,246,0.02)_40%,rgba(59,130,246,0)_100%)]" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="rotate-badge bg-accent text-primary px-4 py-2 rounded-full inline-block font-medium mb-4 transition-all duration-300 ease-out cursor-pointer">
            Reference klientů
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Naše výsledky <span className="gradient-text">mluví za nás</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Podívejte se na úspěchy našich klientů, kteří transformovali své
            podnikání pomocí AI řešení a automatizace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Testimonial Card 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all duration-500 ease-out hover:-translate-y-1 flex flex-col cursor-pointer will-change-transform">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300 ease-out">
                <Image
                  src="/clients/ecommerce-avatar.webp"
                  alt="Petra Dvořáková"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors duration-300 ease-out">
                  Petra Dvořáková
                </h3>
                <p className="text-sm text-gray-600">Majitelka e-shopu</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300 ease-out"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-700 leading-relaxed mb-6 relative flex-grow group-hover:text-gray-800 transition-colors duration-300 ease-out">
              <p className="relative z-10">
                Po optimalizaci od WebForte se náš web dostal na{" "}
                <strong>první stránku Google</strong> a návštěvnost vzrostla
                dvojnásobně. AI nástroje nám pomohly automatizovat marketing a
                zvýšit konverze o 40%.
              </p>
            </blockquote>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-4">
                <div className="text-center group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="text-2xl font-bold text-green-600">+40%</div>
                  <div className="text-xs text-gray-500">Konverze</div>
                </div>
                <div className="text-center group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="text-2xl font-bold text-blue-600">2x</div>
                  <div className="text-xs text-gray-500">Návštěvnost</div>
                </div>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ease-out">
                <svg
                  className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300 ease-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all duration-500 ease-out hover:-translate-y-1 flex flex-col cursor-pointer will-change-transform">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300 ease-out">
                <Image
                  src="/clients/finance-avatar.webp"
                  alt="Martin Novák"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors duration-300 ease-out">
                  Martin Novák
                </h3>
                <p className="text-sm text-gray-600">Finanční poradce</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300 ease-out"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-700 leading-relaxed mb-6 relative flex-grow group-hover:text-gray-800 transition-colors duration-300 ease-out">
              <p className="relative z-10">
                Automatizace klientů a AI analýza trhu nám ušetřila 15 hodin
                týdně. Nyní se můžeme soustředit na strategické rozhodování
                místo rutinních úkolů.
              </p>
            </blockquote>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-4">
                <div className="text-center group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="text-2xl font-bold text-green-600">15h</div>
                  <div className="text-xs text-gray-500">Úspora/týden</div>
                </div>
                <div className="text-center group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="text-2xl font-bold text-blue-600">+25%</div>
                  <div className="text-xs text-gray-500">Klientů</div>
                </div>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ease-out">
                <svg
                  className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300 ease-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all duration-500 ease-out hover:-translate-y-1 flex flex-col cursor-pointer will-change-transform">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300 ease-out">
                <Image
                  src="/clients/manufacturing-avatar.webp"
                  alt="Jana Svobodová"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors duration-300 ease-out">
                  Jana Svobodová
                </h3>
                <p className="text-sm text-gray-600">Výrobní manažerka</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300 ease-out"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-700 leading-relaxed mb-6 relative flex-grow group-hover:text-gray-800 transition-colors duration-300 ease-out">
              <p className="relative z-10">
                Prediktivní údržba a AI monitoring výrobních linek snížily
                prostoje o 60%. Investice se nám vrátila už za 6 měsíců.
              </p>
            </blockquote>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-4">
                <div className="text-center group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="text-2xl font-bold text-green-600">-60%</div>
                  <div className="text-xs text-gray-500">Prostoje</div>
                </div>
                <div className="text-center group-hover:scale-105 transition-transform duration-300 ease-out">
                  <div className="text-2xl font-bold text-blue-600">6m</div>
                  <div className="text-xs text-gray-500">ROI</div>
                </div>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ease-out">
                <svg
                  className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300 ease-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card mb-12 stats-section hover:shadow-[0_15px_30px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-105 transition-transform duration-300 ease-out">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {counts.clients}+
              </div>
              <div className="text-gray-600">Spokojených klientů</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 ease-out">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {counts.success}%
              </div>
              <div className="text-gray-600">Úspěšnost projektů</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 ease-out">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                40-{counts.improvement}%
              </div>
              <div className="text-gray-600">Průměrné zlepšení</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300 ease-out">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {counts.support}/7
              </div>
              <div className="text-gray-600">Technická podpora</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/konzultace"
            className="btn-primary group inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out"
          >
            Chcete také výsledky?
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300 ease-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
