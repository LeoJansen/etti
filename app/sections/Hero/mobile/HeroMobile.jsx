"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

import { whatsAppLink } from "@/src/site/constants/contact";
import { useDictionary } from "@/src/site/context/DictionaryContext";

import { useHeroAnimantion } from "../useHeroAnimation";
import { useHeroSectionAnimationMobile } from "./useHeroSectionAnimationMobile";

const NBSP = "\u00A0";

const resolveCtaHref = (cta) => {
  if (!cta) {
    return "#";
  }

  if (cta.type === "whatsapp") {
    return whatsAppLink;
  }

  return cta.href ?? "#";
};

const resolveCtaTarget = (cta) => {
  if (!cta || cta.type !== "external") {
    return {};
  }

  return { target: "_blank", rel: "noreferrer" };
};

export default function HeroMobile() {
  const { dictionary } = useDictionary();
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  const headingLines = useMemo(
    () => dictionary.hero.mobileHeadingLines,
    [dictionary.hero.mobileHeadingLines]
  );
  const primaryCta = dictionary.hero.primaryCta;
  const secondaryCta = dictionary.hero.secondaryCta;
  const primaryHref = resolveCtaHref(primaryCta);
  const secondaryHref = resolveCtaHref(secondaryCta);

  // Reutiliza os mesmos hooks de animação da versão desktop
  useHeroAnimantion(glowRef, '#F38B23');
  useHeroSectionAnimationMobile(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen text-white flex items-center justify-start overflow-hidden @container"
    >
      {/* Heading/Box */}
      <div className="w-full flex justify-center px-4 z-20">
        <div
          data-hero-box
          className="border-2 border-[#F38B23] p-4 w-full max-w-[700px] backdrop-blur-[2px] rounded-[3px] opacity-0 "
        >
          <h2
            data-hero-heading
            className="relative text-[23px] @min-[385px]:text-[26px] @min-[400px]:text-[27px] @min-[430px]:text-[29px] @min-[460px]:text-[32px] @min-[500px]:text-[35px] @min-[600px]:text-[40px]  text-[#fd810441] font-medium leading-snug"
          >
            <span className="relative z-10 block text-[#ffa64dc9]">
              {headingLines.map((line, lineIndex) => (
                <span key={`hero-mobile-line-${lineIndex}`} className="block">
                  {line.split('').map((char, charIndex) => (
                    <span
                      key={`hero-mobile-letter-${lineIndex}-${charIndex}`}
                      className="hero-letter inline-block opacity-0"
                    >
                      {char === ' ' ? NBSP : char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
            {/* Neon glow overlay behind the text */}
            <span
              aria-hidden="true"
              ref={glowRef}
              className="pointer-events-none select-none absolute inset-0 z-0 text-[#fd810441]"
            >
              {headingLines.map((line, lineIndex) => (
                <span key={`hero-mobile-line-overlay-${lineIndex}`} className="block">
                  {line.split('').map((char, charIndex) => (
                    <span
                      key={`hero-mobile-letter-overlay-${lineIndex}-${charIndex}`}
                      className="hero-letter-overlay inline-block opacity-0"
                    >
                      {char === ' ' ? NBSP : char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h2>
        </div>
      </div>

      {/* Botões de Ação */}
      <div
        data-hero-cta
        className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30 pointer-events-auto opacity-0"
      >
        <div className="flex flex-col justify-center gap-4">
          <Link
            href={primaryHref}
            {...resolveCtaTarget(primaryCta)}
            aria-label={primaryCta?.ariaLabel}
            className="bg-[#0D0D0D] text-[#e9e9e9] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 hover:text-[#0D0D0D] transition-colors duration-300 text-center"
          >
            {primaryCta?.label}
          </Link>
          <Link
            href={secondaryHref}
            {...resolveCtaTarget(secondaryCta)}
            aria-label={secondaryCta?.ariaLabel}
            className="bg-transparent backdrop-blur-[4px] text-[#FF7919] border-2 border-[#FF7919] font-semibold py-3 px-8 rounded-[3px] hover:bg-[#EB9948] hover:text-white transition-colors duration-300 text-center"
          >
            {secondaryCta?.label}
          </Link>
        </div>
      </div>

      {/* Background Image para Mobile (animável) */}
      <div data-hero-bg className="absolute inset-0 z-0 pointer-events-none opacity-0">
        <Image
          src="/assets/heroMobile.png"
          alt={dictionary.hero.mobileBackgroundAlt}
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-[25%_100%]"
        />
      </div>
    </section>
  );
}
