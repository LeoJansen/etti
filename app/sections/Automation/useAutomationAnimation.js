
"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

export function useAutomationAnimation(sectionRef, disabled = false) {
	useIsomorphicLayoutEffect(() => {
		if (disabled) {
			return undefined;
		}

		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return undefined;
		}

		const ctx = gsap.context(() => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select("[data-automation-heading]");
			const subheadingItems = select("[data-automation-subheading]");
			const accentItems = select("[data-automation-accent]");
			const descriptionItems = select("[data-automation-description]");
			const cardItems = select("[data-automation-card]");

			const animatedTargets = [
				...headingItems,
				...subheadingItems,
				...accentItems,
				...descriptionItems,
				...cardItems,
			];

			if (!animatedTargets.length) {
				return;
			}

			gsap.set(headingItems, { autoAlpha: 0, y: 40 });
			gsap.set(subheadingItems, { autoAlpha: 0, y: 40 });
			gsap.set(descriptionItems, { autoAlpha: 0, y: 40 });
			gsap.set(cardItems, { autoAlpha: 0, y: 40 });
			gsap.set(accentItems, {
				autoAlpha: 0,
				scaleX: 0,
				transformOrigin: "left center",
			});

			const prefersReducedMotion = (() => {
				if (typeof window === "undefined" || !window.matchMedia) {
					return false;
				}
				return window
					.matchMedia("(prefers-reduced-motion: reduce)")
					.matches;
			})();

			if (prefersReducedMotion) {
				gsap.set(animatedTargets, { autoAlpha: 1, y: 0 });
				gsap.set(accentItems, { autoAlpha: 1, scaleX: 1 });
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
					stagger: 0.12,
				});
			}

			if (accentItems.length) {
				timeline.to(
					accentItems,
					{
						autoAlpha: 1,
						scaleX: 1,
						duration: 0.4,
						ease: "power2.out",
					},
					"-=0.2"
				);
			}

			if (subheadingItems.length) {
				timeline.to(
					subheadingItems,
					{
						autoAlpha: 1,
						y: 0,
						stagger: 0.1,
					},
					accentItems.length ? "-=0.15" : undefined
				);
			}

			if (descriptionItems.length) {
				timeline.to(descriptionItems, {
					autoAlpha: 1,
					y: 0,
				});
			}

			if (cardItems.length) {
				timeline.to(cardItems, {
					autoAlpha: 1,
					y: 0,
					stagger: 0.18,
				});
			}
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef, disabled]);
}
