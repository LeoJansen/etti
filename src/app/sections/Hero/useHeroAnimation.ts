"use client";

import { useLayoutEffect, useMemo, type RefObject } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export type HeroAnimationOptions = {
  color?: string;
  accentColor?: string;
  pulseColor?: string;
  glowIntensity?: number;
  flickerInterval?: [number, number];
  breatheScale?: number;
  sparklesEnabled?: boolean;
  textPulseEnabled?: boolean;
  textPulseChars?: string;
  textPulseInterval?: [number, number];
};

type HeroAnimationConfig = {
  color: string;
  accentColor: string;
  pulseColor: string;
  glowIntensity: number;
  flickerInterval: [number, number];
  breatheScale: number;
  textPulseEnabled: boolean;
  textPulseChars: string;
  textPulseInterval: [number, number];
};

const DEFAULT_COLOR = "#F1CFAD";

const createGlowShadow = (
  intensity: number,
  colors: Pick<HeroAnimationConfig, "color" | "accentColor" | "pulseColor">
) => {
  const format = (value: number) => `${value.toFixed(3)}rem`;

  return [
    `0 0 ${format(0.05 * intensity)} ${colors.color}`,
    `0 0 ${format(0.15 * intensity)} ${colors.accentColor}`,
    `0 0 ${format(0.28 * intensity)} ${colors.pulseColor}`,
  ].join(", ");
};

const createGlowFilter = (intensity: number, accentColor: string, pulseColor: string) =>
  `blur(${(0.45 * intensity).toFixed(2)}px) drop-shadow(0 0 ${(7 * intensity).toFixed(
    2
  )}px ${accentColor}) drop-shadow(0 0 ${(14 * intensity).toFixed(2)}px ${pulseColor})`;

const DEFAULT_TEXT_CHARSET = "ETTI0123456789<>/*-";

type LetterFlowParams = {
  letters: HTMLElement[];
  accentColor: string;
  strongShadow: string;
  flareShadow: string;
  textPulseChars: string;
  textPulseInterval: [number, number];
};

const resolveHeroAnimationConfig = (
  options?: string | HeroAnimationOptions
): HeroAnimationConfig => {
  const baseOptions: HeroAnimationOptions =
    typeof options === "string" || typeof options === "undefined"
      ? { color: options ?? DEFAULT_COLOR }
      : options;

  const textPulseEnabled =
    baseOptions.textPulseEnabled ?? baseOptions.sparklesEnabled ?? true;

  return {
    color: baseOptions.color ?? DEFAULT_COLOR,
    accentColor: baseOptions.accentColor ?? "#FFE2C7",
    pulseColor: baseOptions.pulseColor ?? "#FF9B4E",
    glowIntensity: baseOptions.glowIntensity ?? 1.2,
    flickerInterval: baseOptions.flickerInterval ?? [3, 7],
    breatheScale: baseOptions.breatheScale ?? 1.0125,
    textPulseEnabled,
    textPulseChars: baseOptions.textPulseChars ?? DEFAULT_TEXT_CHARSET,
    textPulseInterval: baseOptions.textPulseInterval ?? [2.2, 5.5],
  };
};

const createLetterFlowTimeline = ({
  letters,
  accentColor,
  strongShadow,
  flareShadow,
  textPulseChars,
  textPulseInterval,
}: LetterFlowParams) => {
  if (letters.length === 0) {
    return null;
  }

  const characterPool = textPulseChars.length > 0 ? textPulseChars : DEFAULT_TEXT_CHARSET;
  const randomChar = () =>
    characterPool.charAt(Math.floor(Math.random() * characterPool.length));

  letters.forEach((letter) => {
    if (!letter.dataset.heroOriginal) {
      letter.dataset.heroOriginal = letter.textContent ?? "";
    }
  });

  const flowTimeline = gsap.timeline({
    repeat: -1,
    defaults: { ease: "power2.inOut" },
  });

  const updateRepeatDelay = () => {
    flowTimeline.repeatDelay(
      gsap.utils.random(textPulseInterval[0], textPulseInterval[1])
    );
  };

  updateRepeatDelay();
  flowTimeline.eventCallback("onRepeat", updateRepeatDelay);

  const letterGap = 0.06;

  letters.forEach((letter) => {
    const originalValue = letter.dataset.heroOriginal ?? letter.textContent ?? "";

    flowTimeline.add(() => {
      gsap.set(letter, {
        text: { value: randomChar(), delimiter: "" },
        color: accentColor,
        textShadow: flareShadow,
        opacity: 1,
      });
    });

    flowTimeline.to(letter, {
      duration: 0.18,
      scale: 1.04,
      y: -1,
      ease: "power3.out",
    });

    flowTimeline.to(letter, {
      duration: 0.34,
      text: { value: originalValue, delimiter: "" },
      color: "",
      textShadow: strongShadow,
      opacity: 0.9,
      scale: 1,
      y: 0,
      ease: "power2.inOut",
    });

    flowTimeline.to({}, { duration: letterGap });
  });

  return flowTimeline;
};

export const useHeroAnimation = (
  ref: RefObject<HTMLElement | null>,
  options?: string | HeroAnimationOptions
) => {
  const resolvedConfig = useMemo(
    () => resolveHeroAnimationConfig(options),
    [options]
  );

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const {
      color,
      accentColor,
      pulseColor,
      glowIntensity,
      flickerInterval,
      breatheScale,
      textPulseEnabled,
      textPulseChars,
      textPulseInterval,
    } = resolvedConfig;

    const baseShadow = createGlowShadow(glowIntensity * 0.8, {
      color,
      accentColor,
      pulseColor,
    });
    const strongShadow = createGlowShadow(glowIntensity * 1.3, {
      color,
      accentColor,
      pulseColor,
    });
    const flareShadow = createGlowShadow(glowIntensity * 1.8, {
      color,
      accentColor,
      pulseColor,
    });

    const overlayLetters = Array.from(
      element.querySelectorAll<HTMLElement>(".hero-letter-overlay")
    );

    const context = gsap.context(() => {
      gsap.set(element, {
        textShadow: baseShadow,
        filter: createGlowFilter(glowIntensity, accentColor, pulseColor),
        opacity: 0.9,
        scale: 1,
        transformOrigin: "50% 50%",
        willChange: "filter, text-shadow, opacity, transform",
      });

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap
        .timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } })
        .to(element, {
          duration: 1.8,
          textShadow: strongShadow,
          filter: createGlowFilter(glowIntensity * 1.1, accentColor, pulseColor),
          opacity: 0.97,
        })
        .to(element, {
          duration: 1.8,
          textShadow: baseShadow,
          filter: createGlowFilter(glowIntensity * 0.95, accentColor, pulseColor),
          opacity: 0.9,
        });

      gsap
        .timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } })
        .to(element, {
          duration: 4.5,
          scale: breatheScale,
          skewX: 0.25,
          yPercent: -0.4,
        })
        .to(element, {
          duration: 4.5,
          scale: 1,
          skewX: -0.1,
          yPercent: 0,
        });

      const flare = () => {
        gsap
          .timeline()
          .to(element, {
            duration: 0.3,
            textShadow: flareShadow,
            filter: createGlowFilter(glowIntensity * 1.35, accentColor, pulseColor),
            ease: "power2.out",
          })
          .to(element, {
            duration: 0.65,
            textShadow: strongShadow,
            filter: createGlowFilter(glowIntensity * 1.05, accentColor, pulseColor),
            ease: "power2.inOut",
          });

        gsap.delayedCall(gsap.utils.random(4, 9), flare);
      };

      flare();

      const flicker = () => {
        const [minDelay, maxDelay] = flickerInterval;
        const iterations = gsap.utils.random(2, 3, 1);
        const flickerTimeline = gsap.timeline();

        for (let index = 0; index < iterations; index += 1) {
          flickerTimeline
            .to(element, {
              opacity: 0.78,
              duration: 0.02,
              textShadow: createGlowShadow(glowIntensity * 0.7, {
                color,
                accentColor,
                pulseColor,
              }),
              ease: "power1.in",
            })
            .to(element, {
              opacity: 0.96,
              duration: 0.04,
              textShadow: strongShadow,
              ease: "power1.out",
            });
        }

        gsap.delayedCall(gsap.utils.random(minDelay, maxDelay), flicker);
      };

      flicker();

      if (textPulseEnabled) {
        createLetterFlowTimeline({
          letters: overlayLetters,
          accentColor,
          strongShadow,
          flareShadow,
          textPulseChars,
          textPulseInterval,
        });
      }
    }, ref);

    return () => context.revert();
  }, [ref, resolvedConfig]);
};
