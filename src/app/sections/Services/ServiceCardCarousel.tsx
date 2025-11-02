"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import type { ServicesCardDictionary } from "../../../site/types";

gsap.registerPlugin(useGSAP);

interface ServiceCardCarouselProps {
  card: ServicesCardDictionary;
  pulseOffset?: number;
  isActive?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const ServiceCardCarousel = ({
  card,
  pulseOffset = 0,
  isActive = false,
  onClick,
}: ServiceCardCarouselProps) => {
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
        const offsetDelay = parsedOffset * 0.35;

        const timeline = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: offsetDelay,
          defaults: {
            ease: "sine.inOut",
            duration: 1.6,
          },
        });

        gsap.set(circleRef.current, {
          boxShadow: "0 0 6px rgba(235, 153, 72, 0.45)",
          borderColor: "hsl(30,50%,70%)",
        });

        gsap.set(iconWrapperRef.current, {
          filter: "drop-shadow(0 0 4px rgba(235, 153, 72, 0.35))",
          scale: 1,
        });

        if (dividerRef.current) {
          gsap.set(dividerRef.current, {
            boxShadow: "0 0 6px rgba(235, 153, 72, 0.45)",
            backgroundColor: "hsl(30,80%,80%)",
          });
        }

        timeline
          .to(circleRef.current, {
            boxShadow:
              "0 0 6px rgba(235, 153, 72, 0.7), 0 0 6px rgba(235, 125, 73, 0.65)",
            borderColor: "#D6CDC3",
          })
          .to(
            iconWrapperRef.current,
            {
              filter:
                "drop-shadow(0 0 16px rgba(235, 153, 72, 0.45)) drop-shadow(2px 6px 6px rgba(255,233,152,0.50))",
              scale: 1.05,
            },
            "<"
          )
          .to(
            dividerRef.current,
            {
              boxShadow: "0 0 10px rgba(235, 223, 172, 0.75)",
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

  const iconWidth = card.icon.width ?? 60;
  const iconHeight = card.icon.height ?? 60;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`service-card-carousel flex flex-col items-center rounded-[3px] bg-[#00000095] backdrop-blur-[40px] shadow-[0_2px_4px_2px_rgba(20,20,20,0.5)] transition-all duration-500 ease-in-out hover:scale-95 hover:opacity-80 ${
        isActive
          ? "h-[300px] w-[500px] scale-100 opacity-100 z-20"
          : "h-[300px] w-[200px] scale-90 opacity-60 z-10"
      }`}
    >
      <div
        className={`flex w-full items-center justify-between transition-all duration-300 ${
          isActive ? "p-4" : "p-1"
        }`}
      >
        <div
          ref={circleRef}
          className={`flex items-center justify-center rounded-full border-2 border-[hsl(30,50%,70%)] transition-all duration-300 ${
            isActive ? "h-20 w-20" : "h-16 w-16"
          }`}
        >
          <Image
            src={card.icon.src}
            alt={card.icon.alt}
            width={isActive ? iconWidth : iconWidth * 0.7}
            height={isActive ? iconHeight : iconHeight * 0.7}
            className="object-contain transition-all duration-300"
            ref={iconWrapperRef}
          />
        </div>
        <div
          ref={dividerRef}
          className={`bg-[hsl(30,80%,80%)] transition-all duration-300 ${
            isActive ? "mr-[-15px] h-[5px] w-[370px]" : "mr-[-3px] h-[5px] w-[100px]"
          }`}
        />
      </div>

      <div
        className={`flex w-full flex-col items-center justify-center text-center font-medium leading-6 text-[#eb9948] transition-all duration-300 ${
          isActive ? "px-4 text-[22px]" : "px-2 text-[16px]"
        }`}
      >
        {card.title.map((line, index) => (
          <h3 key={`service-card-title-${index}`}>{line}</h3>
        ))}
      </div>

      {isActive && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 pb-6">
          <div className="flex h-full w-full items-center text-xl tracking-tight">
            <p className="text-center text-[#a7a7a7] leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCardCarousel;
