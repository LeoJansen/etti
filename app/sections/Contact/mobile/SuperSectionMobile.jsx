"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textLines = [
  { id: "todo", text: "Todo" },
  { id: "grande", text: "grande projeto", className: "text-[#EB9948]" },
  { id: "começa", text: "começa com" },
  { id: "conversa", text: "uma conversa." },
];

const SuperSectionMobile = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const heading = textRef.current;
    if (!heading) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".super-section-letter-mobile");
      if (!letters.length) {
        return;
      }

      gsap.set(letters, { opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        })
        .to(letters, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.04,
        });
    }, heading);

    return () => ctx.revert();
  }, []);

  return (
    <div className="super-section-mobile w-full flex flex-col justify-start items-start gap-12 p-6 pb-12">
      <h2
        ref={textRef}
        className="text-[50px] leading-[55px] font-extralight text-[hsl(0,0%,70%)] tracking-[-0.06em]"
      >
        {textLines.map(({ id, text, className = "" }) => (
          <span key={id} className={`block ${className}`}>
            {text.split("").map((char, index) => (
              <span
                key={`${id}-${index}`}
                className="super-section-letter-mobile inline-block opacity-0"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  )
}

export default SuperSectionMobile