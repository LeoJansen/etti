"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import type { ServicesCardDictionary } from "../../../../site/types";

gsap.registerPlugin(useGSAP);

interface ServiceCardCarouselMobileProps {
  card: ServicesCardDictionary;
  pulseOffset?: number;
  isActive?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const ServiceCardCarouselMobile = ({
  card,
  pulseOffset = 0,
  isActive = false,
  onClick,
}: ServiceCardCarouselMobileProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const iconWrapperRef = useRef<HTMLImageElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !circleRef.current || !iconWrapperRef.current) {
        return;
      }

      gsap.killTweensOf([circleRef.current, iconWrapperRef.current, dividerRef.current]);

      if (isActive && dividerRef.current) {
        const parsedOffset = Number(pulseOffset) || 0;
        const offsetDelay = parsedOffset * 0.4;

        const timeline = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: offsetDelay,
          defaults: {
            ease: "sine.inOut",
            duration: 2,
          },
        });

        gsap.set(circleRef.current, {
          boxShadow: "0 0 4px rgba(235, 153, 72, 0.4)",
          borderColor: "hsl(30,50%,70%)",
        });

        gsap.set(iconWrapperRef.current, {
          filter: "drop-shadow(0 0 3px rgba(235, 153, 72, 0.3))",
          scale: 1,
        });

        gsap.set(dividerRef.current, {
          boxShadow: "0 0 4px rgba(235, 153, 72, 0.4)",
          backgroundColor: "hsl(30,80%,80%)",
        });

        timeline
          .to(circleRef.current, {
            boxShadow:
              "0 0 8px rgba(235, 153, 72, 0.6), 0 0 4px rgba(235, 125, 73, 0.5)",
            borderColor: "#D6CDC3",
          })
          .to(
            iconWrapperRef.current,
            {
              filter:
                "drop-shadow(0 0 12px rgba(235, 153, 72, 0.4)) drop-shadow(1px 4px 4px rgba(255,233,152,0.4))",
              scale: 1.02,
            },
            "<"
          )
          .to(
            dividerRef.current,
            {
              boxShadow: "0 0 8px rgba(235, 223, 172, 0.6)",
              backgroundColor: "#D6CDC3",
            },
            "<"
          );

        return () => {
          timeline.kill();
        };
      }

      gsap.set([circleRef.current, iconWrapperRef.current], { clearProps: "all" });
      if (dividerRef.current) {
        gsap.set(dividerRef.current, { clearProps: "all" });
      }

      return undefined;
    },
    { scope: cardRef, dependencies: [isActive, pulseOffset] }
  );

  const iconWidth = card.icon.width ?? 50;
  const iconHeight = card.icon.height ?? 50;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`service-card-carousel-mobile flex flex-col items-center rounded-[3px] bg-[#00000095] backdrop-blur-[4px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)] transition-all duration-500 ease-in-out active:scale-95 ${
        isActive
          ? "h-[400px] w-[240px] scale-100 opacity-100 z-20"
          : "h-[280px] w-[180px] scale-90 opacity-50 z-10"
      }`}
    >
      <div
        className={`flex w-full flex-col items-center justify-center gap-4 transition-all duration-300 ${
          isActive ? "py-5" : "py-3"
        }`}
      >
        <div
          ref={circleRef}
          className={`flex items-center justify-center rounded-full border-2 border-[hsl(30,50%,70%)] transition-all duration-300 ${
            isActive ? "h-16 w-16" : "h-12 w-12"
          }`}
        >
          <Image
            src={card.icon.src}
            alt={card.icon.alt}
            width={isActive ? iconWidth * 0.7 : iconWidth * 0.5}
            height={isActive ? iconHeight * 0.7 : iconHeight * 0.5}
            className="object-contain transition-all duration-300"
            ref={iconWrapperRef}
          />
        </div>
        <div
          ref={dividerRef}
          className="h-[5px] w-3/4 rounded-full bg-[hsl(30,80%,80%)] transition-all duration-300"
        />
      </div>

      <div
        className={`flex w-full flex-col items-center justify-center text-center font-medium text-[#eb9948] leading-5 transition-all duration-300 ${
          isActive ? "px-3 text-base" : "px-2 text-sm"
        }`}
      >
        {card.title.map((line, index) => (
          <h3 key={`service-mobile-title-${index}`}>{line}</h3>
        ))}
      </div>

      {isActive && (
        <div className="mt-5 flex h-full w-full flex-col items-center justify-center gap-4 px-3 pb-4">
          <div className="flex h-full w-full text-sm tracking-tight">
            <p className="text-center text-lg text-[#9e9e9e] leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCardCarouselMobile;
