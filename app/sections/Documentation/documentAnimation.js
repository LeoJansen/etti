import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const DEFAULT_DIRECTIONS = ["left", "top", "right"];

const resolveOffsets = (direction, distance) => {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "top":
      return { x: 0, y: -distance };
    case "bottom":
      return { x: 0, y: distance };
    default:
      return { x: 0, y: -distance };
  }
};

export function useDocumentAnimation(
  containerRef,
  {
    selector = ".doc-card",
    directions = DEFAULT_DIRECTIONS,
    distance = 1248,
    backgroundSelector = ".doc-bg",
    backgroundBlurInitial = 0,
    backgroundBlurFocused = 4,
  } = {}
) {
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const section = container.closest("section") ?? container;

      const select = gsap.utils.selector(container);
      const cards = select(selector);
      if (!cards.length) return;

      const selectSection = gsap.utils.selector(section);
      const backgroundEls = backgroundSelector
        ? selectSection(backgroundSelector)
        : [];

      backgroundEls.forEach((bg) =>
        gsap.set(bg, { filter: `blur(${backgroundBlurInitial}px)` })
      );

      let isBackgroundBlurred = false;
      const toggleBackgroundBlur = (shouldBlur) => {
        if (!backgroundEls.length || isBackgroundBlurred === shouldBlur) return;
        isBackgroundBlurred = shouldBlur;
        backgroundEls.forEach((bg) => {
          gsap.to(bg, {
            filter: `blur(${
              shouldBlur ? backgroundBlurFocused : backgroundBlurInitial
            }px)`,
            duration: 0.8,
            opacity:0.4,
            ease: "power2.out",
          });
        });
      };

      const triggers = cards.map((card, index) => {
        const direction =
          directions[index] ?? directions[directions.length - 1] ?? "top";
        const { x, y } = resolveOffsets(direction, distance);

        gsap.set(card, { autoAlpha: 0, x, y });

        const showCard = () => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
          toggleBackgroundBlur(true);
        };

        const hideCard = () => {
          gsap.killTweensOf(card);
          gsap.to(card, {
            autoAlpha: 0,
            x,
            y,
            duration: 0.6,
            ease: "power2.in",
          });
          if (index === 0) {
            toggleBackgroundBlur(false);
          }
        };

        return ScrollTrigger.create({
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: showCard,
          onEnterBack: showCard,
          onLeaveBack: hideCard,
        });
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: containerRef,
      dependencies: [
        selector,
        directions,
        distance,
        backgroundSelector,
        backgroundBlurInitial,
        backgroundBlurFocused,
      ],
    }
  );
}
