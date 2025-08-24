"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Robot from "../../public/hero/robot.json";

export default function HeroSection() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isAnimating, setIsAnimating] = useState(false); // start paused; play only when visible
  const [isLocked, setIsLocked] = useState(false); // locked only while the animation runs

  const ctaRowRef = useRef<HTMLDivElement>(null);
  const [ctaWidth, setCtaWidth] = useState<number | null>(null);
  const lottieWrapRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const startAnim = () => {
    setIsAnimating(true);
    setIsLocked(true);
    lottieRef.current?.goToAndPlay(0, true);
  };

  const idleTimeout = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    lottieRef.current?.setSpeed(0.8);
  }, []);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);
  useEffect(() => {
    if (!isAnimating && !isLocked && isInView && !reduceMotion) {
      idleTimeout.current = setTimeout(() => {
        startAnim();
      }, 10000); // 10s idle auto-play (only when visible)
    }
    return () => {
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
        idleTimeout.current = null;
      }
    };
  }, [isAnimating, isLocked, isInView, reduceMotion]);

  useEffect(() => {
    if (!lottieWrapRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        setIsInView(visible);
      },
      { threshold: [0, 0.25, 0.5, 1], rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(lottieWrapRef.current);
    return () => io.disconnect();
  }, []);

  // React to visibility changes
  useEffect(() => {
    if (reduceMotion) {
      lottieRef.current?.stop();
      setIsAnimating(false);
      setIsLocked(false);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
        idleTimeout.current = null;
      }
      return;
    }
    if (isInView) {
      if (!isAnimating && !isLocked) {
        startAnim();
      }
    } else {
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
        idleTimeout.current = null;
      }
      lottieRef.current?.stop();
      setIsAnimating(false);
      setIsLocked(false);
    }
  }, [isInView, reduceMotion]);

  // Pause when tab is not visible
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        lottieRef.current?.stop();
        if (idleTimeout.current) {
          clearTimeout(idleTimeout.current);
          idleTimeout.current = null;
        }
        setIsAnimating(false);
        setIsLocked(false);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const update = () => {
      if (ctaRowRef.current) {
        const rect = ctaRowRef.current.getBoundingClientRect();
        setCtaWidth(rect.width);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="pt-12 sm:pt-10 md:pt-12 md:pb-9 relative overflow-hidden pb-[env(safe-area-inset-bottom)]">
      {/* Curved ribbon path element */}
      <div className="ribbon-path hidden sm:block">
        <svg
          viewBox="0 0 1440 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
            stroke="#3935A1"
            strokeOpacity="0.5"
            strokeWidth="12"
            className="path"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="rotate-badge bg-accent text-primary rounded-full inline-block font-medium px-3 py-1.5 text-xs sm:text-sm cursor-pointer">
                Inovace pro vaše podnikání
              </div>
              <h1 className="max-w-[24ch] sm:max-w-none text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Transformujte své procesy pomocí{" "}
                <span className="leading-snug bg-gradient-to-r from-blue-900 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient ">
                  umělé inteligence
                </span>
              </h1>
              <p className="text-gray-700 text-lg sm:text-lg md:text-xl max-w-[32ch] sm:max-w-none leading-relaxed">
                Naše řešení na míru kombinují <strong>automatizaci</strong> a{" "}
                <strong>umělou inteligenci</strong> pro optimalizaci workflow,
                analýzu dat a zvýšení efektivity vašeho podnikání.
              </p>

              <div className="pt-4">
                {/* CTA buttons (measured) */}
                <div
                  ref={ctaRowRef}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-fit"
                >
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
                <p></p>
              </div>

              {/* Decorative curved text path */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                <svg
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="curve"
                    d="M20,20 Q170,10 310,120 T350,310"
                    stroke="none"
                    fill="none"
                  />
                  <text className="text-xs font-medium text-primary opacity-50">
                    <textPath xlinkHref="#curve" startOffset="10%">
                      automatizace • marketing • AI • webovky • SEO • správa
                      e-shopů •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-2 lg:order-2 ">
            <div className="relative">
              {/* Main hero image */}
              <div className="relative">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-10 pointer-events-none"></div>{" "}
                  <div
                    ref={lottieWrapRef}
                    onClick={() => {
                      if (isLocked || reduceMotion) return;
                      startAnim();
                    }}
                    className={`hidden md:block w-full h-auto xl:ml-8 cursor-pointer ${
                      !isAnimating ? "animate-float" : ""
                    } drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]`}
                  >
                    <Lottie
                      animationData={Robot}
                      loop={false}
                      autoplay={false}
                      lottieRef={lottieRef}
                      onComplete={() => {
                        setIsAnimating(false);
                        setIsLocked(false);
                      }}
                      className="w-[500px] h-[500px]" // pevná velikost
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
