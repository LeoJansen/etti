import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initContactAnimation = () => {
   try {
      const contactSection = document.querySelector("#contact");

      if (!contactSection) {
         return null;
      }

      const select = gsap.utils.selector(contactSection);
      const hoverBindings = [];
      let starBlinkAnimation = null;

      // Adiciona classe para indicar que GSAP está carregado
      document.body.classList.add('gsap-ready');

      // Timeline principal para a seção
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            
            toggleActions: "play none none none",
         }
      });

      // Animação do background
      tl.fromTo(select(".bg-image"),
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

      // Animação do título principal
      tl.fromTo(select(".contact-title"),
         { 
            y: 100,
            opacity: 0,
            scale: 0.8
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out"
         }, 
         "-=1.2"
      );

      // Animação de piscar como estrelas no título após aparecer
      tl.add(() => {
         starBlinkAnimation = gsap.timeline({ repeat: -1 });
         
         // Cria múltiplas animações de brilho em intervalos aleatórios
         starBlinkAnimation
            .to(select(".contact-title"), {
               textShadow: "0 0 10px #ffffff9a, 0 0 20px #ffffff9a, 0 0 30px #ffffff9a",
               duration: 0.1,
               ease: "power2.out"
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 5px #ffffff9a",
               duration: 0.1,
               ease: "power2.out"
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 15px #ffffff9a, 0 0 25px #ffffff9a",
               duration: 0.05,
               ease: "power2.out",
               delay: gsap.utils.random(0.5, 2)
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 5px #ffffff9a",
               duration: 0.05,
               ease: "power2.out"
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 20px #ffffff9a, 0 0 25px #ffffff9a, 0 0 35px #ffffff9a",
               duration: 0.08,
               ease: "power2.out",
               delay: gsap.utils.random(1, 3)
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 5px #ffffff9a",
               duration: 0.12,
               ease: "power2.out"
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 12px #ffffff9a, 0 0 18px #ffffff9a",
               duration: 0.06,
               ease: "power2.out",
               delay: gsap.utils.random(0.8, 2.5)
            })
            .to(select(".contact-title"), {
               textShadow: "0 0 5px #ffffff9a",
               duration: 0.1,
               ease: "power2.out",
               delay: gsap.utils.random(2, 4)
            });
      }, "+=0.5");

      // Animação dos cards
      tl.fromTo(select(".contact-card"),
         { 
            y: 80,
            opacity: 0,
            scale: 0.9
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2
         }, 
         "-=0.8"
      );

      // Animação dos botões
      tl.fromTo(select(".contact-button"),
         { 
            y: 60,
            opacity: 0,
            scale: 0.9
         },
         { 
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15
         }, 
         "-=0.5"
      );

      // Animação do último div (barra de contactos)
      tl.fromTo(
         select(".contact-footer"),
         {
            y: 40,
            opacity: 0,
            filter: "blur(4px)"
         },
         {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out"
         },
         "-=0.3"
      );

      // Efeito sutil após aparecer: brilho de borda pulsante
      tl.to(
         select(".contact-footer"),
         {
            boxShadow: "0 -2px 16px rgba(255, 121, 25, 0.35)",
            duration: 0.6,
            ease: "sine.out",
         },
         "+=0.1"
      ).to(
         select(".contact-footer"),
         {
            boxShadow: "0 -2px 0 rgba(255, 121, 25, 0)",
            duration: 0.8,
            ease: "sine.inOut",
         }
      );

      const bindHover = (selector, properties, duration) => {
         gsap.utils.toArray(selector, contactSection).forEach((element) => {
            const hoverTween = gsap.to(element, {
               ...properties,
               duration,
               ease: "power2.out",
               paused: true,
               overwrite: "auto",
            });
            const handleMouseEnter = () => hoverTween.play();
            const handleMouseLeave = () => hoverTween.reverse();

            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
            hoverBindings.push({
               element,
               hoverTween,
               handleMouseEnter,
               handleMouseLeave,
            });
         });
      };

      // Efeito de hover nos cards e botões, isolado desta seção.
      bindHover(".contact-card", { scale: 1.05, y: -10 }, 0.3);
      bindHover(".contact-button", { scale: 1.05 }, 0.2);

      return {
         kill: () => {
            tl.scrollTrigger?.kill();
            tl.kill();
            starBlinkAnimation?.kill();

            hoverBindings.forEach(({
               element,
               hoverTween,
               handleMouseEnter,
               handleMouseLeave,
            }) => {
               element.removeEventListener("mouseenter", handleMouseEnter);
               element.removeEventListener("mouseleave", handleMouseLeave);
               hoverTween.kill();
            });
         },
      };

   } catch (error) {
      console.warn("GSAP animation failed, using fallback:", error);
      // Fallback: adiciona classe para animação CSS
      document.body.classList.add('contact-fallback');
      return null;
   }
};
