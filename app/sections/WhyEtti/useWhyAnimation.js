
"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerPlugin(ScrollTrigger);

const useWhyAnimation = (sectionRef) => {
	useIsomorphicLayoutEffect(() => {
		const sectionElement = sectionRef?.current;
		if (!sectionElement) {
			return;
		}

		if (typeof window === "undefined") {
			return;
		}

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

			if (prefersReducedMotion) {
				const select = gsap.utils.selector(sectionElement);

				gsap.set(sectionElement, { autoAlpha: 1, y: 0 });
				gsap.set(select("[data-why-heading], [data-why-card]"), {
					autoAlpha: 1,
					y: 0,
				});

				return;
			}

		const ctx = gsap.context((context) => {
			const select = gsap.utils.selector(sectionElement);
			const headingItems = select("[data-why-heading]");
			const cards = select("[data-why-card]");

			const timeline = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionElement,
					start: "top 70%",
					end: "bottom 10%",
					once: true,
				},
			});

			timeline.from(sectionElement, {
				y: 64,
				duration: 0.8,
				immediateRender: false,
			});

			if (headingItems.length) {
				timeline.from(
					headingItems,
					{
						autoAlpha: 0,
						y: 32,
						duration: 0.6,
						stagger: 0.15,
						immediateRender: false,
					},
					"-=0.45"
				);
			}

			if (cards.length) {
				timeline.from(
					cards,
					{
						autoAlpha: 0,
						y: 48,
						duration: 0.7,
						stagger: 0.2,
						immediateRender: false,
					},
					"-=0.2"
				);
			}

			if (ScrollTrigger.isInViewport(sectionElement)) {
				timeline.play(0);
			}

			context.add(() => {
				timeline.scrollTrigger?.kill();
				timeline.kill();
			});
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef]);
};

export default useWhyAnimation;
