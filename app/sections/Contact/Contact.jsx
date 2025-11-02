"use client";
// components/ContactSection.js
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";

import { useDictionary } from "@/src/site/context/DictionaryContext";

import { initContactAnimation } from "./contactAnimation";
import "./contact.css";
import { whatsAppLink } from "@/app/constants";

const ContactMobile = dynamic(() => import("./mobile/ContactMobile"), {
   ssr: false,
});

function useIsMobile() {
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
   }, []);
   return isMobile;
}


const Contact = () => {
   const isMobile = useIsMobile();
   const animationRef = useRef(null);
   const { dictionary } = useDictionary();
   const contactContent = dictionary.contact;
   const cards = contactContent.cards ?? [];
   const buttons = contactContent.buttons ?? [];
   const details = contactContent.details ?? {};
   const socialLinks = contactContent.social ?? [];
   const legal = contactContent.legal ?? {};

   const resolvedDetails = useMemo(() => {
      return Object.entries(details).map(([id, detail = {}]) => ({
         id,
         ...detail,
         label: detail.label ?? detail.value ?? id,
         value: detail.value ?? detail.label ?? "",
      }));
   }, [details]);

   const resolveButtonHref = (button) => {
      if (button.type === "whatsapp") {
         return whatsAppLink;
      }
      return button.href ?? "#";
   };

   const resolveButtonTarget = (button) => {
      if (button.type === "external" || button.type === "whatsapp") {
         return "_blank";
      }
      return undefined;
   };

   const resolveButtonRel = (button) => {
      const target = resolveButtonTarget(button);
      if (target === "_blank") {
         return "noreferrer noopener";
      }
      return undefined;
   };

   const getButtonClasses = (variant = "primary") => {
      if (variant === "secondary") {
         return "contact-button bg-[rgb(5,11,5)] w-70  text-white font-bold py-3  rounded-[3px] shadow-lg hover:bg-transparent hover:text-[#ff7919]  transition duration-300 ";
      }
      return "contact-button border-4 border-[#ff7919] w-70 text-white font-bold py-3 rounded-[3px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300";
   };

   useEffect(() => {
      if (!isMobile) {
         animationRef.current = initContactAnimation();
      }

      return () => {
         if (animationRef.current) {
            animationRef.current.kill();
         }
      };
   }, [isMobile]);

   if (isMobile) {
      return <ContactMobile />;
   }

   return (
      <section className="relative bg-[#000F1E]  w-full h-full " id="contact">
         <Image
            src="/assets/contact/footer-bg6.png"
            alt={contactContent.backgroundAlt ?? ""}
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className=" bg-image" />
         <div className="absolute z-20 top-[-50px] h-[190px] w-full flex justify-center items-end backdrop-blur-[6px] ">
            <h2 className="contact-title text-[#ffffff63] text-[110px] leading-[100px] font-thin  tracking-[-0.04em] mt-5">{contactContent.headline}</h2>
         </div>


         <div className="flex flex-col h-full gap-12 justify-center items-center   text-center">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 h-full mt-90 px-6">
               {cards.map((card) => (
                  <div key={card.title} className="contact-card flex flex-col gap-8 backdrop-blur-md p-8 rounded-[3px] shadow-md h-fit ">
                     <h3 className="text-2xl  text-[#ff7919] mb-2">
                        {card.title}
                     </h3>
                     <p className="text-lg text-gray-400">
                        {card.description}
                     </p>
                  </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-12 mb-12">
               {buttons.map((button) => {
                  const href = resolveButtonHref(button);
                  const target = resolveButtonTarget(button);
                  const rel = resolveButtonRel(button);
                  return (
                     <a
                        key={button.id ?? button.label}
                        href={href}
                        target={target}
                        rel={rel}
                        className={getButtonClasses(button.variant)}
                        aria-label={button.ariaLabel ?? button.label}
                     >
                        {button.label}
                     </a>
                  );
               })}
            </div>
            <div className="contact-footer flex flex-col  gap-2 w-full  justify-between items-between   bg-[#000F1E] p-4 ">
               <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-4 ml-6 mt-2">
                     {resolvedDetails.map((detail) => {
                        const usesHttp = detail.href?.startsWith("http");
                        const isLink = Boolean(detail.href);
                        const Tag = isLink ? "a" : "div";
                        return (
                           <Tag
                              key={detail.id ?? detail.label}
                              className="flex  gap-4  items-center"
                              aria-label={detail.label}
                              {...(isLink ? {
                                 href: detail.href,
                                 target: usesHttp ? "_blank" : undefined,
                                 rel: usesHttp ? "noreferrer noopener" : undefined,
                              } : {})}
                           >
                              {detail.icon?.src && (
                                 <Image
                                    src={detail.icon.src}
                                    alt={detail.icon.alt ?? detail.label}
                                    width={detail.icon.width ?? 24}
                                    height={detail.icon.height ?? 24}
                                 />
                              )}
                              <p className="text-[#aaaaaa] text-xl font-light">{detail.value}</p>
                           </Tag>
                        );
                     })}

                  </div>
                  <div>
                     <p className="text-[#797979] text-lg font-light">{legal.copyright}</p>
                  </div>
                  <div className="flex gap-6">
                     {socialLinks.map((item) => (
                        <a
                           key={item.id ?? item.label}
                           href={item.href}
                           target="_blank"
                           rel="noreferrer noopener"
                           aria-label={item.label}
                           className="flex"
                        >
                           {item.icon?.src && (
                              <Image
                                 src={item.icon.src}
                                 alt={item.icon.alt ?? item.label}
                                 width={item.icon.width ?? 30}
                                 height={item.icon.height ?? 30}
                              />
                           )}
                        </a>
                     ))}
                  </div>
               </div>
               <div className="flex flex-col w-full items-end">
                  {legal.developerAttribution && (
                     <p className="text-[#636363]">
                        {legal.developerAttribution}
                        {legal.developerUrl && legal.developerLinkLabel && (
                           <>
                              {' '}
                              <a
                                 href={legal.developerUrl}
                                 className="text-[#949494]"
                                 target="_blank"
                                 rel="noreferrer noopener"
                              >
                                 {legal.developerLinkLabel}
                              </a>
                           </>
                        )}
                        {!legal.developerUrl && legal.developerLinkLabel && ` ${legal.developerLinkLabel}`}
                     </p>
                  )}
                  {legal.websiteUrl && (
                     <a
                        href={legal.websiteUrl}
                        className="text-[#636363]"
                        target="_blank"
                        rel="noreferrer noopener"
                     >
                        {legal.websiteLabel ?? legal.websiteUrl}
                     </a>
                  )}

               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;