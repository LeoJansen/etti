"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const HIGHLIGHT_BORDER_COLOR = "#EB9948";
const BASE_EDGE_COLOR = "#EB994833";
const HIGHLIGHT_SHADOW = "0 0 18px rgba(235, 153, 72, 0.45)";
const RESET_SHADOW = "0 0 0 rgba(0, 0, 0, 0)";
const BASE_TITLE_COLOR = "#8a8a8a";
const HIGHLIGHT_TITLE_COLOR = "#EB9948";
const TITLE_RESET_SHADOW = "0 0 0 rgba(0,0,0,0)";
const TITLE_HIGHLIGHT_SHADOW = "0 0 12px rgba(235, 153, 72, 0.6)";
const BASE_ICON_FILTER = "drop-shadow(0 0 0 rgba(0,0,0,0))";
const HIGHLIGHT_ICON_FILTER = "drop-shadow(0 0 12px rgba(235, 153, 72, 0.6))";

export function useCircuitBorderAnimation(containerRef, {
  selector = ".automation-card",
  highlightDuration = 0.6,
  resetDuration = 0.6,
  intersectionThreshold = 0.35,
  intersectionRootMargin = "0px"
} = {}) {
  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const select = gsap.utils.selector(container);
    const cards = select(selector);
    if (!cards.length) return;

    const cardDetails = cards.map((card) => ({
      card,
      title: card.querySelector(".automation-card-title"),
      icon: card.querySelector(".automation-card-icon"),
      edges: {
        top: card.querySelector(".automation-card-edge--top"),
        right: card.querySelector(".automation-card-edge--right"),
        bottom: card.querySelector(".automation-card-edge--bottom"),
        left: card.querySelector(".automation-card-edge--left")
      }
    }));

    let activeTimeline = null;
    let hasPlayedWhileVisible = false;

    const killActiveTimeline = () => {
      if (activeTimeline) {
        activeTimeline.kill();
        activeTimeline = null;
      }
    };

    const resetCards = (duration = 0) => {
      const titles = cardDetails
        .map((detail) => detail.title)
        .filter(Boolean);
      const icons = cardDetails
        .map((detail) => detail.icon)
        .filter(Boolean);
      const edges = cardDetails.flatMap(({ edges }) =>
        Object.values(edges || {}).filter(Boolean)
      );

      gsap.killTweensOf(cards);
      if (titles.length) {
        gsap.killTweensOf(titles);
      }
      if (icons.length) {
        gsap.killTweensOf(icons);
      }
      if (edges.length) {
        gsap.killTweensOf(edges);
      }

      gsap.to(cards, {
        boxShadow: RESET_SHADOW,
        duration,
        ease: "sine.out",
        overwrite: true
      });

      if (titles.length) {
        gsap.to(titles, {
          color: BASE_TITLE_COLOR,
          textShadow: TITLE_RESET_SHADOW,
          duration,
          ease: "sine.out",
          overwrite: true
        });
      }

      if (icons.length) {
        gsap.to(icons, {
          filter: BASE_ICON_FILTER,
          opacity: 0,
          scale: 1,
          duration,
          ease: "sine.out",
          overwrite: true
        });
      }

      if (edges.length) {
        const horizontalEdges = edges.filter((edge) =>
          edge.classList.contains("automation-card-edge--top") ||
          edge.classList.contains("automation-card-edge--bottom")
        );
        const verticalEdges = edges.filter((edge) =>
          edge.classList.contains("automation-card-edge--right") ||
          edge.classList.contains("automation-card-edge--left")
        );

        if (horizontalEdges.length) {
          gsap.to(horizontalEdges, {
            scaleX: 0,
            opacity: 0,
            backgroundColor: BASE_EDGE_COLOR,
            duration,
            ease: "sine.out",
            overwrite: true
          });
        }

        if (verticalEdges.length) {
          gsap.to(verticalEdges, {
            scaleY: 0,
            opacity: 0,
            backgroundColor: BASE_EDGE_COLOR,
            duration,
            ease: "sine.out",
            overwrite: true
          });
        }
      }
    };

    const playSequence = () => {
      killActiveTimeline();
      resetCards(0);

      activeTimeline = gsap.timeline({
        defaults: {
          ease: "sine.inOut",
          duration: highlightDuration
        },
        onComplete: () => {
          activeTimeline = null;
        }
      });

      cardDetails.forEach(({ card, title, icon, edges }, index) => {
        const position = index === 0 ? 0 : ">";

        activeTimeline.to(card, {
          boxShadow: HIGHLIGHT_SHADOW
        }, position);
        if (icon) {
          activeTimeline.to(icon, {
            filter: HIGHLIGHT_ICON_FILTER,
            opacity: 1,
            scale: 1.01
          }, "<");
        }

        if (title) {
          activeTimeline.to(title, {
            color: HIGHLIGHT_TITLE_COLOR,
            textShadow: TITLE_HIGHLIGHT_SHADOW
          }, "<");
        }

        if (edges) {
          const { top, right, bottom, left } = edges;
          const edgeDuration = highlightDuration * 0.8;

          if (top) {
            activeTimeline.to(top, {
              scaleX: 1,
              opacity: 1,
              backgroundColor: HIGHLIGHT_BORDER_COLOR,
              duration: edgeDuration,
              ease: "power1.inOut"
            }, position);
          }

          if (right) {
            activeTimeline.to(right, {
              scaleY: 1,
              opacity: 1,
              backgroundColor: HIGHLIGHT_BORDER_COLOR,
              duration: edgeDuration,
              ease: "power1.inOut"
            }, ">" );
          }

          if (bottom) {
            activeTimeline.to(bottom, {
              scaleX: 1,
              opacity: 1,
              backgroundColor: HIGHLIGHT_BORDER_COLOR,
              duration: edgeDuration,
              ease: "power1.inOut"
            }, ">" );
          }

          if (left) {
            activeTimeline.to(left, {
              scaleY: 1,
              opacity: 1,
              backgroundColor: HIGHLIGHT_BORDER_COLOR,
              duration: edgeDuration,
              ease: "power1.inOut"
            }, ">" );
          }
        }
      });

      // ensure the card retains glow after the final side lights up
      activeTimeline.to(cardDetails.map(({ card }) => card), {
        boxShadow: "0 0 22px rgba(235, 153, 72, 0.4)",
        duration: highlightDuration * 0.6,
        ease: "sine.inOut"
      });
    };

    resetCards(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          if (!hasPlayedWhileVisible) {
            hasPlayedWhileVisible = true;
            playSequence();
          }
        } else {
          hasPlayedWhileVisible = false;
          killActiveTimeline();
          resetCards(resetDuration);
        }
      },
      {
        threshold: intersectionThreshold,
        rootMargin: intersectionRootMargin
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      killActiveTimeline();
      resetCards(0);
    };
  }, {
    scope: containerRef,
    dependencies: [selector, highlightDuration, resetDuration, intersectionThreshold, intersectionRootMargin]
  });
}
