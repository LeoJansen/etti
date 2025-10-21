import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initContactMobileAnimation = () => {
   try {
      // Adiciona classe para indicar que GSAP está carregado
      document.body.classList.add('gsap-ready');

      // Timeline principal para a versão mobile
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
         }
      });

      // Animação do background
      tl.fromTo("#contact .bg-image-mobile", 
         { 
            scale: 1.1,
            opacity: 0
         },
         { 
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
         }
      );

      // Animação do título mobile
      tl.fromTo(".contact-title-mobile", 
         { 
            y: 50,
            opacity: 0,
            scale: 0.9
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out"
         }, 
         "-=1.2"
      );

      // Animação de piscar como estrelas no título mobile após aparecer
      tl.add(() => {
         const starBlinkAnimation = gsap.timeline({ repeat: -1 });
         
         // Versão mobile agora usando a mesma cor do desktop
         starBlinkAnimation
            .to(".contact-title-mobile", {
               textShadow: "0 0 8px hsl(0, 0%, 70%), 0 0 16px hsl(0, 0%, 70%), 0 0 24px hsl(0, 0%, 70%)",
               duration: 0.1,
               ease: "power2.out"
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 4px hsl(0, 0%, 70%)",
               duration: 0.1,
               ease: "power2.out"
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 12px hsl(0, 0%, 70%), 0 0 20px hsl(0, 0%, 70%)",
               duration: 0.05,
               ease: "power2.out",
               delay: gsap.utils.random(0.8, 2.2)
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 4px hsl(0, 0%, 70%)",
               duration: 0.05,
               ease: "power2.out"
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 16px hsl(0, 0%, 70%), 0 0 28px hsl(0, 0%, 70%), 0 0 36px hsl(0, 0%, 70%)",
               duration: 0.08,
               ease: "power2.out",
               delay: gsap.utils.random(1.2, 3.5)
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 4px hsl(0, 0%, 70%)",
               duration: 0.12,
               ease: "power2.out"
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 10px hsl(0, 0%, 70%), 0 0 15px hsl(0, 0%, 70%)",
               duration: 0.06,
               ease: "power2.out",
               delay: gsap.utils.random(1, 2.8)
            })
            .to(".contact-title-mobile", {
               textShadow: "0 0 4px hsl(0, 0%, 70%)",
               duration: 0.1,
               ease: "power2.out",
               delay: gsap.utils.random(2.5, 4.5)
            });
      }, "+=0.5");

      // Animação dos cards mobile
      tl.fromTo(".contact-card-mobile", 
         { 
            y: 60,
            opacity: 0,
            scale: 0.95
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2
         }, 
         "-=0.6"
      );

      // Animação dos botões mobile
      tl.fromTo(".contact-button-mobile", 
         { 
            y: 40,
            opacity: 0,
            scale: 0.95
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            stagger: 0.1
         }, 
         "-=0.4"
      );

      // Animação do último div (barra de contactos) no mobile
      tl.fromTo(
         ".contact-footer",
         {
            y: 30,
            opacity: 0,
            filter: "blur(4px)"
         },
         {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out"
         },
         "-=0.2"
      );

      // Efeito sutil após aparecer: brilho de borda pulsante (mobile)
      tl.to(
         ".contact-footer",
         {
            boxShadow: "0 -2px 14px rgba(255, 121, 25, 0.28)",
            duration: 0.5,
            ease: "sine.out",
         },
         "+=0.05"
      ).to(
         ".contact-footer",
         {
            boxShadow: "0 -2px 0 rgba(255, 121, 25, 0)",
            duration: 0.7,
            ease: "sine.inOut",
         }
      );

      // Efeito de tap nos cards (mobile touch)
      gsap.utils.toArray(".contact-card-mobile").forEach(card => {
         const tapTl = gsap.timeline({ paused: true });
         
         tapTl.to(card, {
            scale: 0.98,
            duration: 0.1,
            ease: "power2.out"
         }).to(card, {
            scale: 1.02,
            duration: 0.15,
            ease: "power2.out"
         }).to(card, {
            scale: 1,
            duration: 0.1,
            ease: "power2.out"
         });

         card.addEventListener("touchstart", () => tapTl.restart());
      });

      // Efeito de tap nos botões mobile
      gsap.utils.toArray(".contact-button-mobile").forEach(button => {
         const tapTl = gsap.timeline({ paused: true });
         
         tapTl.to(button, {
            scale: 0.95,
            duration: 0.1,
            ease: "power2.out"
         }).to(button, {
            scale: 1,
            duration: 0.1,
            ease: "power2.out"
         });

         button.addEventListener("touchstart", () => tapTl.restart());
      });

      return tl;

   } catch (error) {
      console.warn("GSAP mobile animation failed, using fallback:", error);
      // Fallback: adiciona classe para animação CSS
      document.body.classList.add('contact-fallback');
      return null;
   }
};