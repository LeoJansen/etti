"use client";

import Image from "next/image";
import { useRef } from "react";

import { useDictionary } from "../../../site/context/DictionaryContext";
import { useAboutAnimation } from "./useAboutAnimation";

const AboutDesktop = () => {
  const { dictionary } = useDictionary();
  const { about } = dictionary;

  const sectionRef = useRef<HTMLElement | null>(null);

  useAboutAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative hidden min-h-screen w-full max-w-screen overflow-hidden bg-gray-50 p-12 text-[#313131] md:block"
    >
      <div className="flex h-full w-full flex-col">
        <div className="mb-8 flex w-fit flex-col justify-start rounded-[4px]">
          <div className="about-animate-item flex items-center gap-8">
            <div className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
            <div className="flex">
              <h3 className="about-subheading">{about.eyebrow}</h3>
            </div>
          </div>
          <div className="about-animate-item flex w-fit">
            <h2 className="about-heading">{about.heading}</h2>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center gap-12 md:flex-row">
          <div className="about-animate-item mb-0 flex h-full w-full items-center overflow-hidden rounded-[3px] md:w-1/2">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              quality={100}
              width={about.image.width}
              height={about.image.height}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center text-2xl font-light tracking-tighter text-[#9e9e9e] md:w-1/2">
            {about.paragraphs.map((paragraph, index) => (
              <p
                className="about-animate-item mb-4 text-justify leading-relaxed"
                key={`about-paragraph-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesktop;
