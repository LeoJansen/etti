"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

export function useDocAnimationMobile(sectionRef) {
	useIsomorphicLayoutEffect(() => {
		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select("[data-doc-mobile-heading]");
			const highlightItems = select("[data-doc-mobile-highlight]");
			const paragraphItems = select("[data-doc-mobile-paragraph]");
			const cardItems = select("[data-doc-mobile-card]");

			const allTargets = [
				...headingItems,
				...highlightItems,
				...paragraphItems,
				...cardItems,
			];

			if (!allTargets.length) {
				return;
			}

			const prefersReducedMotion = (() => {
				if (typeof window === "undefined" || !window.matchMedia) {
					return false;
				}
				return window.matchMedia("(prefers-reduced-motion: reduce)")
					.matches;
			})();

			if (prefersReducedMotion) {
				gsap.set(allTargets, { autoAlpha: 1, y: 0, scale: 1 });
				return;
			}

			gsap.set(headingItems, { autoAlpha: 0, y: 28 });
			gsap.set(paragraphItems, { autoAlpha: 0, y: 24 });
			gsap.set(cardItems, { autoAlpha: 0, y: 32 });
			gsap.set(highlightItems, {
				autoAlpha: 0,
				scaleX: 0,
				transformOrigin: "left center",
			});

			const timeline = gsap.timeline({
				defaults: { duration: 0.6, ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionElement,
					start: "top 80%",
					once: true,
				},
			});

			if (headingItems.length) {
				timeline.to(headingItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.18,
				});
			}

			if (highlightItems.length) {
				timeline.to(
					highlightItems,
					{
						autoAlpha: 1,
						scaleX: 1,
						duration: 0.5,
					},
					"<0.05"
				);
			}

			if (paragraphItems.length) {
				timeline.to(paragraphItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.15,
				}, "-=0.2");
			}

			if (cardItems.length) {
				timeline.to(cardItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.18,
				}, "-=0.15");
			}
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef]);

	return undefined;
}


