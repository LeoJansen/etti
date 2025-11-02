"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

import { useHeroAnimation } from "./useHeroAnimation";
import { useHeroSectionAnimation } from "./useHeroSectionAnimation";
import { useDictionary } from "../../../site/context/DictionaryContext";
import HeroMobile from "./mobile/HeroMobile";
import { resolveHeroCta } from "./cta";

const NBSP = "\u00A0";

const Hero = () => {
  const { dictionary } = useDictionary();
  const { hero } = dictionary;

  const glowRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const headingLines = useMemo(() => hero.headingLines, [hero.headingLines]);

  useHeroAnimation(glowRef, "#F38B23");
  useHeroSectionAnimation(sectionRef);

  const primaryCta = resolveHeroCta(hero.primaryCta);
  const secondaryCta = resolveHeroCta(hero.secondaryCta);

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        className="relative hidden h-screen w-full items-center justify-start overflow-hidden bg-black text-white md:flex"
      >
        <div className="z-10 flex h-full w-full flex-col items-center justify-around">
          <div
            data-hero-box
            className="z-20 ml-[50%] flex w-1/2 items-center justify-center rounded-[3px] border-2 border-[#F38B23] bg-[rgba(0,0,0,0.12)] p-8 tracking-tight backdrop-blur-[2px] opacity-0"
          >
            <h2
              data-hero-heading
              className="relative inline-block text-right text-[#fd810441] font-medium leading-[40px] opacity-0 md:text-[38px] @min-[850px]:text-[43px] @min-[950px]:text-[50px] @min-[1024px]:text-[55px] @min-[1280px]:text-[70px] @min-[1536px]:text-[72px] @min-[850px]:leading-[43px] @min-[950px]:leading-[50px] @min-[1024px]:leading-[55px] @min-[1280px]:leading-[70px] @min-[1536px]:leading-[72px]"
            >
              <span className="relative z-10">
                {headingLines.map((line, lineIndex) => (
                  <span key={`hero-line-${lineIndex}`} className="block">
                    {line.split("").map((char, charIndex) => (
                      <span
                        key={`hero-letter-${lineIndex}-${charIndex}`}
                        className="hero-letter inline-block opacity-0"
                      >
                        {char === " " ? NBSP : char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
              <span
                aria-hidden="true"
                ref={glowRef}
                className="pointer-events-none absolute inset-0 select-none text-[#ffffff59]"
              >
                {headingLines.map((line, lineIndex) => (
                  <span key={`hero-line-overlay-${lineIndex}`} className="block">
                    {line.split("").map((char, charIndex) => (
                      <span
                        key={`hero-letter-overlay-${lineIndex}-${charIndex}`}
                        className="hero-letter-overlay inline-block opacity-0"
                      >
                        {char === " " ? NBSP : char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          <div
            data-hero-cta
            className="relative z-50 flex flex-row justify-center gap-4 opacity-0"
          >
            <Link
              href={primaryCta.href}
              aria-label={primaryCta.ariaLabel}
              prefetch={false}
              target={primaryCta.target}
              rel={primaryCta.rel}
              className="cursor-pointer rounded-[3px] bg-[#0D0D0D] px-8 py-3 text-center font-semibold text-[#e9e9e9] transition-colors duration-300 hover:bg-gray-200 hover:text-[#0D0D0D]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              aria-label={secondaryCta.ariaLabel}
              prefetch={secondaryCta.href.startsWith("#") ? false : true}
              target={secondaryCta.target}
              rel={secondaryCta.rel}
              className="cursor-pointer rounded-[3px] border-2 border-[#FF7919] bg-transparent px-8 py-3 text-center font-semibold text-[#FF7919] transition-colors duration-300 hover:bg-[#FF7919] hover:text-white"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div data-hero-bg className="pointer-events-none absolute inset-0 opacity-0">
          <Image
            src="/assets/hero-bg4.png"
            alt={hero.backgroundAlt}
            quality={100}
            fill
            sizes="100vw"
            className="pointer-events-none object-cover object-[25%_100%] md:object-center lg:object-bottom"
          />
        </div>
      </section>

      <div className="md:hidden">
        <HeroMobile />
      </div>
    </>
  );
};

export default Hero;
