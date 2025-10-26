"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

export function useDocumentAnimation(sectionRef) {
	useIsomorphicLayoutEffect(() => {
		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select("[data-doc-heading]");
			const contentItems = select("[data-doc-content]");
			const cardItems = select("[data-doc-card]");
			const targets = [...headingItems, ...contentItems, ...cardItems];

			if (!targets.length) {
				return;
			}

			gsap.set(targets, { autoAlpha: 0, y: 40 });

			const prefersReducedMotion = (() => {
				if (typeof window === "undefined" || !window.matchMedia) {
					return false;
				}
				return window
					.matchMedia("(prefers-reduced-motion: reduce)")
					.matches;
			})();

			if (prefersReducedMotion) {
				gsap.set(targets, { autoAlpha: 1, y: 0 });
				return;
			}

			const timeline = gsap.timeline({
				defaults: { duration: 0.6, ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionElement,
					start: "top 75%",
					once: true,
				},
			});

			if (headingItems.length) {
				timeline.to(headingItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.15,
				});
			}

			if (contentItems.length) {
				timeline.to(contentItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.12,
				});
			}

			if (cardItems.length) {
				timeline.to(cardItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.2,
				});
			}
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef]);

	return undefined;
}
