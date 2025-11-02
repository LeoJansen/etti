"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

import { useDictionary } from "../../../../site/context/DictionaryContext";
import { useHeroAnimation } from "../useHeroAnimation";
import { useHeroSectionAnimationMobile } from "./useHeroSectionAnimationMobile";
import { resolveHeroCta } from "../cta";

const NBSP = "\u00A0";

const HeroMobile = () => {
  const { dictionary } = useDictionary();
  const { hero } = dictionary;

  const glowRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const headingLines = useMemo(
    () => hero.mobileHeadingLines ?? hero.headingLines,
    [hero.mobileHeadingLines, hero.headingLines]
  );

  useHeroAnimation(glowRef, "#F38B23");
  useHeroSectionAnimationMobile(sectionRef);

  const primaryCta = resolveHeroCta(hero.primaryCta);
  const secondaryCta = resolveHeroCta(hero.secondaryCta);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex h-screen w-full items-center justify-start overflow-hidden text-white @container"
    >
      <div className="z-20 flex w-full justify-center px-4">
        <div
          data-hero-box
          className="w-full max-w-[700px] rounded-[3px] border-2 border-[#F38B23] p-4 opacity-0 backdrop-blur-[2px]"
        >
          <h2
            data-hero-heading
            className="relative text-[23px] font-medium leading-snug text-[#fd810441] @min-[385px]:text-[26px] @min-[400px]:text-[27px] @min-[430px]:text-[29px] @min-[460px]:text-[32px] @min-[500px]:text-[35px] @min-[600px]:text-[40px]"
          >
            <span className="relative z-10 block text-[#ffa64dc9]">
              {headingLines.map((line: string, lineIndex: number) => (
                <span key={`hero-mobile-line-${lineIndex}`} className="block">
                  {line.split("").map((char: string, charIndex: number) => (
                    <span
                      key={`hero-mobile-letter-${lineIndex}-${charIndex}`}
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
              className="pointer-events-none absolute inset-0 z-0 select-none text-[#fd810441]"
            >
              {headingLines.map((line: string, lineIndex: number) => (
                <span key={`hero-mobile-line-overlay-${lineIndex}`} className="block">
                  {line.split("").map((char: string, charIndex: number) => (
                    <span
                      key={`hero-mobile-letter-overlay-${lineIndex}-${charIndex}`}
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
      </div>

      <div
        data-hero-cta
        className="absolute left-1/2 top-3/4 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center opacity-0"
      >
        <div className="flex flex-col gap-4">
          <Link
            href={primaryCta.href}
            aria-label={primaryCta.ariaLabel}
            prefetch={false}
            target={primaryCta.target}
            rel={primaryCta.rel}
            className="rounded-[3px] bg-[#0D0D0D] px-8 py-3 text-center font-semibold text-[#e9e9e9] transition-colors duration-300 hover:bg-gray-200 hover:text-[#0D0D0D]"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            aria-label={secondaryCta.ariaLabel}
            prefetch={secondaryCta.href.startsWith("#") ? false : true}
            target={secondaryCta.target}
            rel={secondaryCta.rel}
            className="rounded-[3px] border-2 border-[#FF7919] px-8 py-3 text-center font-semibold text-[#FF7919] transition-colors duration-300 hover:bg-[#EB9948] hover:text-white"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>

      <div data-hero-bg className="pointer-events-none absolute inset-0 z-0 opacity-0">
        <Image
          src="/assets/heroMobile.png"
          alt={hero.mobileBackgroundAlt}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-[25%_100%]"
        />
      </div>
    </section>
  );
};

export default HeroMobile;
