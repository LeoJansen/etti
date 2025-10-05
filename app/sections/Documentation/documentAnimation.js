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
    intersectionThreshold = 0.2,
    directions = DEFAULT_DIRECTIONS,
    distance = 1248,
  } = {}
) {
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const select = gsap.utils.selector(container);
      const cards = select(selector);
      if (!cards.length) return;

      const timelines = [];

      cards.forEach((card, index) => {
        const direction =
          directions[index] ?? directions[directions.length - 1] ?? "top";
        const { x, y } = resolveOffsets(direction, distance);

        gsap.set(card, {  x, y });

        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "-500px 80%",
              end: "center 20%",
              scrub: true,
              invalidateOnRefresh: true,
              markers: true
            },
          })
          .to(card, {
      
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          })
          .to(card, {
            autoAlpha: 0,
            x,
            y,
            duration: 0.6,
            ease: "power2.in",
          });

        timelines.push(tl);
      });

      ScrollTrigger.refresh();

      return () => {
        timelines.forEach((tl) => {
          tl.scrollTrigger?.kill();
          tl.kill();
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [selector, intersectionThreshold, directions, distance],
    }
  );
}
