
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

				gsap.set(sectionElement, { autoAlpha: 1 });
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

			gsap.set(sectionElement, { autoAlpha: 0, y: 64 });
			if (headingItems.length) {
				gsap.set(headingItems, { autoAlpha: 0, y: 32 });
			}
			if (cards.length) {
				gsap.set(cards, { autoAlpha: 0, y: 48 });
			}

			const timeline = gsap.timeline({
				defaults: { ease: "power3.out" },
				paused: true,
			});

			timeline.to(sectionElement, {
				autoAlpha: 1,
				y: 0,
				duration: 0.8,
			});

			if (headingItems.length) {
				timeline.to(
					headingItems,
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.6,
						stagger: 0.15,
						clearProps: "transform,opacity",
					},
					"-=0.45"
				);
			}

			if (cards.length) {
				timeline.to(
					cards,
					{
						autoAlpha: 1,
						y: 0,
						duration: 0.7,
						stagger: 0.2,
						clearProps: "transform,opacity",
					},
					"-=0.2"
				);
			}

			const trigger = ScrollTrigger.create({
				trigger: sectionElement,
				start: "top 70%",
				end: "bottom 10%",
				onEnter: () => timeline.play(),
				onEnterBack: () => timeline.play(),
			});

			timeline.eventCallback("onComplete", () => {
				trigger.kill();
			});

			if (ScrollTrigger.isInViewport(sectionElement)) {
				timeline.play();
			}

			context.add(() => trigger.kill());
		}, sectionElement);

		return () => ctx.revert();
	}, [sectionRef]);
};

export default useWhyAnimation;
