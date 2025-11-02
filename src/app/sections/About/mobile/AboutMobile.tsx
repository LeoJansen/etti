"use client";

import Image from "next/image";
import { useRef } from "react";

import { useDictionary } from "../../../../site/context/DictionaryContext";
import { useAboutAnimation } from "../useAboutAnimation";

const AboutMobile = () => {
  const { dictionary } = useDictionary();
  const { about } = dictionary;

  const sectionRef = useRef<HTMLElement | null>(null);

  useAboutAnimation(sectionRef, { stagger: 0.18, fromY: 48 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative flex min-h-screen w-full max-w-screen flex-col overflow-hidden bg-gray-50 p-6 pb-20 text-[#313131] md:hidden"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col w-fit">
          <div className="about-animate-item flex items-center gap-5">
            <div className="h-[5px] flex-1 rounded-[1.5px] bg-[#EBC197]" />
            <h3 className="about-subheading">{about.eyebrow}</h3>
          </div>
          <div className="about-animate-item">
            <h2 className="about-heading">{about.heading}</h2>
          </div>
        </div>
        <div className="about-animate-item overflow-hidden rounded-[6px]">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            quality={100}
            width={about.image.width}
            height={about.image.height}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 text-justify text-xl font-light tracking-tight text-[#9e9e9e]">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={`about-mobile-paragraph-${index}`}
              className="about-animate-item leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMobile;
