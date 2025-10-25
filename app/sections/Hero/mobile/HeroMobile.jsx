"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef } from 'react';
import { useHeroAnimantion } from '../useHeroAnimation';
import { useHeroSectionAnimationMobile } from './useHeroSectionAnimationMobile';
import { whatsAppLink } from '@/app/constants';

const HERO_HEADING_TEXT = 'O futuro do seu espaço\ncomeça com um\nprojeto inteligente.';
const NBSP = '\u00A0';

export default function HeroMobile() {
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  const headingLines = useMemo(() => HERO_HEADING_TEXT.split('\n'), []);

  // Reutiliza os mesmos hooks de animação da versão desktop
  useHeroAnimantion(glowRef, '#F38B23');
  useHeroSectionAnimationMobile(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen text-white flex items-center justify-start overflow-hidden"
    >
      {/* Heading/Box */}
      <div className="w-full flex justify-center px-4 z-20">
        <div
          data-hero-box
          className="border-2 border-[#F38B23] p-4 w-full max-w-[700px] backdrop-blur-[2px] rounded-[3px] opacity-0"
        >
          <h2
            data-hero-heading
            className="relative text-3xl sm:text-4xl text-[#fd810441] font-medium leading-snug"
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
            href={whatsAppLink}
            className="bg-[#0D0D0D] text-[#e9e9e9] font-semibold py-3 px-8 rounded-[3px] hover:bg-gray-200 hover:text-[#0D0D0D] transition-colors duration-300 text-center"
          >
            Solicitar Orçamento
          </Link>
          <Link
            href="#services"
            className="bg-transparent backdrop-blur-[4px] text-[#FF7919] border-2 border-[#FF7919] font-semibold py-3 px-8 rounded-[3px] hover:bg-[#EB9948] hover:text-white transition-colors duration-300 text-center"
          >
            Conhecer Serviços
          </Link>
        </div>
      </div>

      {/* Background Image para Mobile (animável) */}
      <div data-hero-bg className="absolute inset-0 z-0 pointer-events-none opacity-0">
        <Image
          src="/assets/heroMobile.png"
          alt="Hero Image"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-[25%_100%]"
        />
      </div>
    </section>
  );
}
