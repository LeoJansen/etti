"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";

import { whatsAppLink } from "@/src/site/constants/contact";
import { useDictionary } from "@/src/site/context/DictionaryContext";

import HeroMobile from "./mobile/HeroMobile";
import { useHeroAnimantion } from "./useHeroAnimation";
import { useHeroSectionAnimation } from "./useHeroSectionAnimation";

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

export default function Hero() {
  const { dictionary } = useDictionary();
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  const headingLines = useMemo(
    () => dictionary.hero.headingLines,
    [dictionary.hero.headingLines]
  );
  const primaryCta = dictionary.hero.primaryCta;
  const secondaryCta = dictionary.hero.secondaryCta;
  const primaryHref = resolveCtaHref(primaryCta);
  const secondaryHref = resolveCtaHref(secondaryCta);
  useHeroAnimantion(glowRef, '#F38B23');
  useHeroSectionAnimation(sectionRef);
  return (
    <>
      {/* Versão Desktop - visível apenas em md e acima */}
    <section ref={sectionRef} className="relative w-full h-screen bg-black text-white hidden md:flex items-center justify-start overflow-hidden isolate">
        
  <div className='w-full h-full flex flex-col justify-around items-center z-10'>

          <div data-hero-box className='ml-[50%] border-2 border-[#F38B23] rounded-[3px] p-8 w-1/2 flex justify-center items-center z-20 tracking-tight backdrop-blur-[2px] bg-[rgba(0,0,0,0.12)] opacity-0'>
            <h2 data-hero-heading className='relative inline-block md:text-[38px] @min-[850px]:text-[43px] @min-[950px]:text-[50px] @min-[1024px]:text-[55px] @min-[1280px]:text-[70px] @min-[1536px]:text-[72px] text-[#fd810441] font-medium  z-30 text-right leading-[40px] @min-[850px]:leading-[43px] @min-[950px]:leading-[50px]  @min-[1024px]:leading-[55px] @min-[1280px]:leading-[70px]  @min-[1536px]:leading-[72px]'>
              <span className='relative z-10'>
                {headingLines.map((line, lineIndex) => (
                  <span key={`hero-line-${lineIndex}`} className='block'>
                    {line.split('').map((char, charIndex) => (
                      <span
                        key={`hero-letter-${lineIndex}-${charIndex}`}
                        className='hero-letter inline-block opacity-0'
                      >
                        {char === ' ' ? NBSP : char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
              {/* Neon glow overlay behind the text */}
              <span
                aria-hidden='true'
                ref={glowRef}
                className='pointer-events-none select-none absolute inset-0 z-0 text-[#ffffff59]'
              >
                {headingLines.map((line, lineIndex) => (
                  <span key={`hero-line-overlay-${lineIndex}`} className='block'>
                    {line.split('').map((char, charIndex) => (
                      <span
                        key={`hero-letter-overlay-${lineIndex}-${charIndex}`}
                        className='hero-letter-overlay inline-block opacity-0'
                      >
                        {char === ' ' ? NBSP : char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </h2>
          </div>
          {/* Botões de Ação */}
          <div data-hero-cta className="relative flex flex-row justify-center gap-4 z-50 pointer-events-auto opacity-0">
            <Link
              href={primaryHref}
              {...resolveCtaTarget(primaryCta)}
              aria-label={primaryCta?.ariaLabel}
              className="bg-[#0D0D0D] text-[#e9e9e9] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 hover:text-[#0D0D0D] transition-colors duration-300 text-center cursor-pointer"
            >
              {primaryCta?.label}
            </Link>
            <Link
              href={secondaryHref}
              {...resolveCtaTarget(secondaryCta)}
              aria-label={secondaryCta?.ariaLabel}
              className="bg-transparent backdrop-blur-sm text-[#FF7919] border-2 border-[#FF7919] font-semibold py-3 px-8 rounded-[3px] hover:bg-[#FF7919] hover:text-white transition-colors duration-300 text-center cursor-pointer"
            >
              {secondaryCta?.label}
            </Link>
          </div>
        </div>
        
        {/* Background Image para Desktop (inicia invisível; aparece com a animação) */}
  <div data-hero-bg className='absolute inset-0 z-0 pointer-events-none opacity-0'>
          <Image
            src="/assets/hero-bg4.png"
            alt={dictionary.hero.backgroundAlt}
            quality={100}
            fill
            sizes="100vw"
            className="object-cover object-[25%_100%] md:object-center lg:object-bottom pointer-events-none "
          />
        </div>

      </section>

      {/* Versão Mobile - visível apenas em telas menores que md */}
      <div className="md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}