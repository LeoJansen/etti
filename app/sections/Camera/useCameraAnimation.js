import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useCameraAnimation = (sectionRef, isMobile = false) => {
  useGSAP(
    () => {
      if (!sectionRef?.current) return;

      const section = sectionRef.current;
      const ctx = gsap.context(() => {
      // Title animations
      gsap.set("[data-camera-heading]", { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      });
      gsap.set("[data-camera-subheading]", { 
        opacity: 0, 
        x: -30 
      });
      gsap.set("[data-camera-accent]", { 
        scaleX: 0, 
        transformOrigin: "left center" 
      });
      gsap.set("[data-camera-description]", { 
        opacity: 0, 
        y: 30 
      });

      // Card animations
      gsap.set(".camera-card", { 
        opacity: 0, 
        y: 60,
        scale: 0.8
      });
      gsap.set(".camera-card-image", { 
        opacity: 0, 
        scale: 1.2 
      });
      gsap.set(".camera-card-title", { 
        opacity: 0, 
        x: -20 
      });
      gsap.set(".camera-card-description", { 
        opacity: 0, 
        y: 20 
      });
      gsap.set(".camera-card-tech", { 
        opacity: 0, 
        y: 10 
      });
      gsap.set(".camera-card-edge", { 
        opacity: 0, 
        scale: 0 
      });

      // Header animation timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      });

      headerTl
        .to("[data-camera-heading]", { 
          duration: 0.8, 
          opacity: 1, 
          y: 0,
          scale: 1,
          ease: "power3.out" 
        })
        .to("[data-camera-accent]", { 
          duration: 0.6, 
          scaleX: 1, 
          ease: "power2.out" 
        }, "-=0.4")
        .to("[data-camera-subheading]", { 
          duration: 0.6, 
          opacity: 1, 
          x: 0, 
          ease: "power2.out" 
        }, "-=0.3")
        .to("[data-camera-description]", { 
          duration: 0.8, 
          opacity: 1, 
          y: 0, 
          ease: "power2.out" 
        }, "-=0.2");

      // Cards animation
      gsap.utils.toArray(".camera-card").forEach((card, index) => {
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        cardTl
          .to(card, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            delay: index * 0.1
          })
          .to(card.querySelector(".camera-card-image"), {
            duration: 1,
            opacity: 1,
            scale: 1,
            ease: "power2.out"
          }, "-=0.6")
          .to(card.querySelector(".camera-card-title"), {
            duration: 0.6,
            opacity: 1,
            x: 0,
            ease: "power2.out"
          }, "-=0.4")
          .to(card.querySelector(".camera-card-description"), {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: "power2.out"
          }, "-=0.3")
          .to(card.querySelector(".camera-card-tech"), {
            duration: 0.4,
            opacity: 1,
            y: 0,
            ease: "power2.out"
          }, "-=0.2");

        // Border animation on hover
        const edges = card.querySelectorAll(".camera-card-edge");
        
        card.addEventListener("mouseenter", () => {
          gsap.to(edges, {
            duration: 0.6,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            stagger: 0.1
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(edges, {
            duration: 0.4,
            opacity: 0,
            scale: 0,
            ease: "power2.out",
            stagger: 0.05
          });
        });
      });

      // Background elements animation (if any)
      const bgElements = section.querySelectorAll(".camera-bg-element");
      if (bgElements.length > 0) {
        gsap.set(bgElements, { opacity: 0, scale: 0.8 });
        gsap.to(bgElements, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1
          },
          opacity: 0.6,
          scale: 1,
          ease: "none",
          stagger: 0.2
        });
      }

      }, section);

      return () => ctx.revert();
    },
    {
      scope: sectionRef,
      dependencies: [sectionRef, isMobile],
    }
  );
};