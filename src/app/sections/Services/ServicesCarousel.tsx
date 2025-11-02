"use client";

import { useEffect, useRef, useState } from "react";

import type { ServicesCardDictionary } from "../../../site/types";
import ServiceCardCarousel from "./ServiceCardCarousel";

interface ServicesCarouselProps {
  cards: ServicesCardDictionary[];
}

const ServicesCarousel = ({ cards }: ServicesCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handlePrevious = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === 0 ? cards.length - 1 : previousIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((previousIndex) =>
      previousIndex === cards.length - 1 ? 0 : previousIndex + 1
    );
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!cards.length) {
      return;
    }

    const interval = window.setInterval(() => {
      handleNext();
    }, 5000);

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, cards.length]);

  if (!cards.length) {
    return null;
  }

  const previousIndex = activeIndex === 0 ? cards.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === cards.length - 1 ? 0 : activeIndex + 1;

  return (
    <div
      ref={carouselRef}
      className="relative flex h-2/3 w-full items-center justify-center px-4"
      data-service-item
    >
      <button
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handlePrevious();
        }}
        className="absolute left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#eb994850] bg-[#00000080] text-[#eb9948] transition-all duration-300 hover:scale-110 hover:border-[#eb9948] hover:bg-[#eb994820] active:scale-95"
        aria-label="Previous service"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>

      <div className="flex w-full max-w-6xl items-center justify-center gap-6">
        {cards.length > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              card={cards[previousIndex]}
              pulseOffset={0}
              isActive={false}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                handleCardClick(previousIndex);
              }}
            />
          </div>
        )}

        <div className="flex-shrink-0">
          <ServiceCardCarousel
            card={cards[activeIndex]}
            pulseOffset={activeIndex}
            isActive
          />
        </div>

        {cards.length > 1 && (
          <div className="flex-shrink-0">
            <ServiceCardCarousel
              card={cards[nextIndex]}
              pulseOffset={0}
              isActive={false}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                handleCardClick(nextIndex);
              }}
            />
          </div>
        )}
      </div>

      <button
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleNext();
        }}
        className="absolute right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#eb994850] bg-[#00000080] text-[#eb9948] transition-all duration-300 hover:scale-110 hover:border-[#eb9948] hover:bg-[#eb994820] active:scale-95"
        aria-label="Next service"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>

      <div className="absolute bottom-4 z-50 flex gap-2">
        {cards.map((_, index) => (
          <button
            key={`services-indicator-${index}`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              handleCardClick(index);
            }}
            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 bg-[#eb9948]"
                : "w-2 bg-[#eb994850] hover:w-4 hover:bg-[#eb994880]"
            }`}
            aria-label={`Go to service ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
