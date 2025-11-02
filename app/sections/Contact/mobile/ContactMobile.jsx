"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { initContactMobileAnimation } from "./contactMobileAnimation";
import "../contact.css";
import { whatsAppLink } from "@/app/constants";
import { useDictionary } from "@/src/site/context/DictionaryContext";

const ContactMobile = () => {
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

   useEffect(() => {
      animationRef.current = initContactMobileAnimation();

      return () => {
         if (animationRef.current) {
            animationRef.current.kill();
         }
      };
   }, []);

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
         return "contact-button-mobile bg-[rgb(5,11,5)] text-white font-bold py-3 px-2 rounded-[6px] shadow-lg hover:bg-transparent hover:text-[#ff7919] backdrop-blur-md transition duration-300 text-sm w-50";
      }
      return "contact-button-mobile border-2 border-[#ff7919] text-white backdrop-blur-md font-bold py-3 px-2 rounded-[6px] shadow-lg bg-[#ff7919] hover:text-white transition duration-300 text-sm w-50";
   };

   return (
      <section className="relative w-full flex bg-[#001524] z-20" id="contact">
         <Image
            src="/assets/contact/footer-bg-mobile2.png"
            alt={contactContent.backgroundAlt ?? ""}
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="bg-image-mobile"
         />

         <div id="contact-info" className="flex flex-col h-full  gap-12 justify-end items-center  text-center z-40">
            {/* Mobile Title */}
            <div className="flex px-[5%]">
               <h2 className="contact-title-mobile text-[#ffffff63] text-[55px] leading-[50px] font-thin tracking-[-0.04em] text-left">{contactContent.headline}</h2>
            </div>

            {/* Mobile Cards */}
            <div className="flex flex-col gap-4 w-full max-w-sm " >
               {cards.map((card) => (
                  <div key={card.title} className="contact-card-mobile flex flex-col gap-2 backdrop-blur-[4px] p-4 rounded-lg shadow-md">
                     <h3 className="text-xl text-[#ff7919] ">{card.title}</h3>
                     <p className="text-gray-400 text-lg leading-relaxed">{card.description}</p>
                  </div>
               ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-xs pb-8">
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
            <div className="contact-footer flex-col  gap-2 w-full  justify-center items-between   bg-[#000F1E] ">
               <div className="flex flex-col justify-between items-center p-4 py-8 gap-6">
                  <div className="flex w-full justify-between">
                     <div className="flex flex-col gap-4">
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

                  <div>
                     <p className="text-[#797979] text-lg font-light">{legal.copyright}</p>
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
         </div>
      </section>
   );
};

export default ContactMobile;