import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

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
    intersectionThreshold = 0.2,
    directions = DEFAULT_DIRECTIONS,
    distance = 48,
  } = {}
) {
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const select = gsap.utils.selector(container);
      const cards = select(selector);
      if (!cards.length) return;

      cards.forEach((card, index) => {
        const direction =
          directions[index] ?? directions[directions.length - 1] ?? "top";
        const { x, y } = resolveOffsets(direction, distance);
        gsap.set(card, { autoAlpha: 0, x, y });
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const card = entry.target;
            observer.unobserve(card);

            gsap.to(card, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              overwrite: "auto",
            });
          });
        },
        { threshold: intersectionThreshold }
      );

      cards.forEach((card) => observer.observe(card));

      return () => {
        observer.disconnect();
        gsap.killTweensOf(cards);
      };
    },
    {
      scope: containerRef,
      dependencies: [selector, intersectionThreshold, directions, distance],
    }
  );
}
