"use client";
import Marquee from "react-fast-marquee";

const logos = [
  {
    name: "Calderon",
    src: "/partners/calderon.webp",
    href: "https://www.calderon.cz/",
  },
  {
    name: "Fotoprim",
    src: "/partners/fotoprim.webp",
    href: "https://fotoprim.cz/",
  },
  {
    name: "Nikotin Sáčky",
    src: "/partners/nikotin_sacky.webp",
    href: "https://www.nikotinsacky.cz/",
  },
  {
    name: "V Kurzu",
    src: "/partners/v_kurzu.webp",
    href: "https://www.vkurzu.cz/",
  },
  {
    name: "Victorka",
    src: "/partners/victorka.webp",
    href: "https://www.victoriagarden.cz/",
  },
];

type Props = {
  logoHeight?: number;

  imgClassName?: string;
};

export default function LogoCarousel({ logoHeight = 50, imgClassName }: Props) {
  return (
    <div className="bg-white -mt-1 pb-5 sm:mt-0 sm:pb-9">
      <div className="text-center mt-0 sm:mt-4">
        <span
          className="hidden md:inline-block text-sm md:text-base font-medium tracking-wide
    text-brand/80 border border-brand/20 rounded-full px-4 py-1.5 bg-white/70 backdrop-blur"
        >
          Firmy které nám důvěřují
        </span>
      </div>

      <div
        className=" md:mt-8 mx-auto w-full max-w-305 px-4 overflow-hidden relative"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 100px, black calc(100% - 48px), transparent)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to right, transparent, black 100px, black calc(100% - 48px), transparent)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <Marquee autoFill pauseOnHover gradient={false} speed={60}>
          {logos.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-10 inline-flex items-center"
            >
              {/* klidně Next <Image>, ale <img> je tu nejjednodušší */}
              <img
                src={l.src}
                alt={l.name}
                className={
                  imgClassName ?? "w-auto opacity-90 hover:opacity-100"
                }
                style={imgClassName ? undefined : { height: logoHeight }}
                loading="lazy"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
