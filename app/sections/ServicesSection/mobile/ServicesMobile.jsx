"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { useDictionary } from "@/src/site/context/DictionaryContext";

import ServiceCardCarouselMobile from "./ServiceCardCarouselMobile";
import useServiceAnimation from "../useServiceAnimation";

const ServicesMobile = () => {
  const { dictionary } = useDictionary();
  const servicesContent = dictionary.services;
  const cards = useMemo(() => {
    return servicesContent.cards.map((card) => ({
      title: card.title,
      description: card.description,
      icon: {
        path: card.icon.src,
        title: card.icon.alt,
        iconWidth: card.icon.width,
        iconHeight: card.icon.height,
      },
    }));
  }, [servicesContent]);

  const carouselLabels = servicesContent.carousel ?? {};
  const previousAriaLabel = carouselLabels.previousAriaLabel ?? "Previous service card";
  const nextAriaLabel = carouselLabels.nextAriaLabel ?? "Next service card";
  const resolveIndicatorLabel = (index) => {
    const baseLabel = carouselLabels.indicatorAriaLabel ?? "Go to service card {{index}}";
    return baseLabel.replace("{{index}}", String(index + 1));
  };

  const cardsLength = cards.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sectionRef = useRef(null);

  useServiceAnimation(sectionRef);

  useEffect(() => {
    if (activeIndex >= cardsLength && cardsLength > 0) {
      setActiveIndex(0);
    }
  }, [activeIndex, cardsLength]);

  useEffect(() => {
    if (cardsLength <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((previous) => (previous === cardsLength - 1 ? 0 : previous + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsLength]);

  const handlePrevious = () => {
    setActiveIndex((previous) => (previous === 0 ? cardsLength - 1 : previous - 1));
  };

  const handleNext = () => {
    setActiveIndex((previous) => (previous === cardsLength - 1 ? 0 : previous + 1));
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) <= swipeThreshold) {
      return;
    }

    if (swipeDistance > 0) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  if (cardsLength === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="flex md:hidden relative w-full min-h-screen h-screen max-w-screen overflow-hidden"
    >
      <Image
        src="/assets/servicesBgMobile3.png"
        alt="Background Gradient"
        fill
        style={{ objectFit: "cover", objectPosition: "left center" }}
        quality={100}
        sizes="100vw"
        className="-z-10"
      />

      <div className="flex flex-col w-full h-full">
        <div id="services-header" data-service-item className="flex w-full h-1/5 min-h-[200px] justify-end items-start p-6">
          <div className="flex flex-col justify-end items-end bg-[#00000091] backdrop-blur-[40px] shadow-[0_2px_2px_2px_rgba(20,20,20,0.4)] p-4 px-8 rounded-[2px]">
            <div className="flex flex-col justify-end w-fit">
              <div className="flex w-full justify-end gap-4 items-center">
                <h3 className="services-subheading">{servicesContent.eyebrow}</h3>
                <div className="h-[6px] w-full rounded-[1.5px] bg-[#EBC197]" />
              </div>
              <div className="flex w-fit">
                <h2 className="services-heading">{servicesContent.heading}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-4/5 flex flex-col justify-center items-center relative px-4 py-4" data-service-item>
          <div
            ref={carouselRef}
            className="flex items-center justify-center w-full max-w-md relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex justify-center">
              <ServiceCardCarouselMobile
                title={cards[activeIndex].title}
                description={cards[activeIndex].description}
                icon={cards[activeIndex].icon}
                iconWidth={cards[activeIndex].icon.iconWidth}
                iconHeight={cards[activeIndex].icon.iconHeight}
                pulseOffset={activeIndex}
                isActive
                onClick={() => {}}
              />
            </div>

            {cardsLength > 1 && (
              <>
                <div
                  className="absolute left-0 opacity-30 scale-75 -translate-x-6 z-0"
                  onClick={handlePrevious}
                >
                  <ServiceCardCarouselMobile
                    title={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].title}
                    description=""
                    icon={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].icon}
                    iconWidth={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].icon.iconWidth}
                    iconHeight={cards[activeIndex === 0 ? cardsLength - 1 : activeIndex - 1].icon.iconHeight}
                    pulseOffset={0}
                    isActive={false}
                    onClick={handlePrevious}
                  />
                </div>

                <div
                  className="absolute right-0 opacity-30 scale-75 translate-x-6 z-0"
                  onClick={handleNext}
                >
                  <ServiceCardCarouselMobile
                    title={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].title}
                    description=""
                    icon={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].icon}
                    iconWidth={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].icon.iconWidth}
                    iconHeight={cards[activeIndex === cardsLength - 1 ? 0 : activeIndex + 1].icon.iconHeight}
                    pulseOffset={0}
                    isActive={false}
                    onClick={handleNext}
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex justify-between items-center w-full max-w-md mt-8" data-service-item>
            <button
              onClick={handlePrevious}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00000080] backdrop-blur-md border border-[#eb994850] text-[#eb9948] hover:bg-[#eb994820] transition-all duration-300"
              aria-label={previousAriaLabel}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00000080] backdrop-blur-md border border-[#eb994850] text-[#eb9948] hover:bg-[#eb994820] transition-all duration-300"
              aria-label={nextAriaLabel}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          <div className="flex gap-2 mt-6" data-service-item>
            {cards.map((_, index) => (
              <button
                key={`services-indicator-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "scale-110 bg-[#EB9948]" : "bg-white/30"
                }`}
                aria-label={resolveIndicatorLabel(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMobile;
