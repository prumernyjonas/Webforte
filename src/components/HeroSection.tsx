"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Robot from "../../public/hero/robot.json";

export default function HeroSection() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isAnimating, setIsAnimating] = useState(true); // autoplay on load
  const [isLocked, setIsLocked] = useState(true); // disable clicks until complete

  const idleTimeout = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    lottieRef.current?.setSpeed(0.8);
  }, []);
  useEffect(() => {
    if (!isAnimating && !isLocked) {
      idleTimeout.current = setTimeout(() => {
        setIsAnimating(true);
        setIsLocked(true);
        lottieRef.current?.goToAndPlay(0, true);
      }, 10000); // 10s idle auto-play
    }
    return () => {
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, [isAnimating, isLocked]);

  return (
    <section className="pt-12 pb-32 relative overflow-hidden">
      {/* Curved ribbon path element */}
      <div className="ribbon-path">
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
            strokeWidth="10"
            className="path"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 space-y-8">
              <div className="rotate-badge bg-accent text-primary px-4 py-2 rounded-full inline-block font-medium">
                Inovace pro vaše podnikání
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transformujte své procesy pomocí{" "}
                <span className="leading-snug bg-gradient-to-r from-blue-900 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient ">
                  umělé inteligence
                </span>
              </h1>
              <p className="text-gray-700 text-lg md:text-xl">
                Naše řešení na míru kombinují <strong>automatizaci</strong> a{" "}
                <strong>umělou inteligenci</strong> pro optimalizaci workflow,
                analýzu dat a zvýšení efektivity vašeho podnikání.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/konzultace" className="btn-primary group ">
                  Bezplatná konzultace
                  <svg
                    className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                <Link href="/sluzby" className="btn-outline">
                  Prozkoumat řešení
                </Link>
                <p className="mt-2 text-sm text-slate-500">
                  Reagujeme do 24 h • Nezávazně
                </p>
              </div>
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
                    automatizace • strojové učení • neuronové sítě • umělá
                    inteligence • data science • prediktivní analýza •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="lg:w-1/2 order-2 lg:order-2 ">
            <div className="relative">
              {/* Main hero image */}
              <div className="relative">
                <div className="relative flex items-center justify-center">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-10 pointer-events-none"></div>{" "}
                  <div
                    onClick={() => {
                      if (isLocked) return;
                      setIsAnimating(true);
                      setIsLocked(true);
                      lottieRef.current?.goToAndPlay(0, true);
                    }}
                    className={`hidden md:block w-full h-auto xl:ml-8 cursor-pointer ${
                      !isAnimating ? "animate-float" : ""
                    } drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]`}
                  >
                    <Lottie
                      animationData={Robot}
                      loop={false}
                      autoplay={true}
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
