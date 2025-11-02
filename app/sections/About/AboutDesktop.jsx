"use client";

import Image from "next/image";
import React from "react";
import { useAboutAnimation } from "./useAboutAnimation";
import { useDictionary } from "@/src/site/context/DictionaryContext";

const AboutDesktop = () => {
  const sectionRef = React.useRef(null);
  const { dictionary } = useDictionary();
  const { about } = dictionary;

  useAboutAnimation(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative hidden min-h-screen w-full max-w-screen overflow-hidden bg-gray-50 p-12 text-[#313131] md:block"
      id="about"
    >
      <div className="flex h-full w-full flex-col">
        <div className="mb-8 flex w-fit flex-col justify-start rounded-[4px]">
          <div
            id="etti-header"
            className="about-animate-item flex items-center gap-8"
          >
            <div className="h-[5px] w-full rounded-[1.5px] bg-[#EBC197]" />
            <div className="flex">
              <h3 className="about-subheading">{about.eyebrow}</h3>
            </div>
          </div>
          <div id="etti-subheader" className="about-animate-item flex w-fit">
            <h2 className="about-heading">{about.heading}</h2>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center md:flex-row md:space-x-12">
          <div className="about-animate-item mb-0 flex h-full w-full items-center overflow-hidden rounded-[3px] md:w-1/2">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              quality={100}
              width={about.image.width}
              height={about.image.height}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center  font-light tracking-tighter text-[#9e9e9e] md:w-1/2 text-2xl">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={`about-paragraph-${index}`}
                className={`about-animate-item text-justify leading-relaxed${index === 0 ? " mb-4" : ""}`}
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
