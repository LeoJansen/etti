"use client";

import Image from "next/image";
import DocCardMobile from "./DocCardMobile";

const DocumentationMobile = ({ cards }) => {
   return (
      <div className="px-6 flex flex-col gap-12 pb-12">
         <div className="">
            <Image
               alt="background"
               src="/assets/doc-bg-mobile.png"
               quality={100}
               fill
               sizes="100vw"
               style={{ objectFit: "cover", objectPosition: "bottom center" }}
               className=" rounded-[6px]"
            />



         </div>
         <div className="flex flex-col gap-4 z-10">
            <div>
               <h2 className="text-[40px] tracking-[-0.05em] font-light text-[#5c5c5c]">Documentação</h2>
               <h2 className="text-[40px] tracking-[-0.05em] font-light text-[#5c5c5c] leading-10">Técnica</h2>
            </div>
            <div className="flex gap-4 items-center">
               <div className="h-[7px] w-[125px] rounded-[1.5px] bg-[#4991EB]" />
               <h3 className="text-[30px] tracking-[-0.03em] font-semibold uppercase text-[#EB9948]">Completa</h3>
            </div>
            <p className="text-md leading-snug text-justify text-[#5c5c5c]">
               A <strong className="text-[#EB9948]">Etti Engenharia</strong> oferece uma documentação técnica completa para garantir que cada projeto esteja em total conformidade com as normas regulamentares. Nossos documentos detalhados e técnicos são essenciais para licenciamentos e garantem a segurança e a qualidade das instalações elétricas.
            </p>
         </div>

         <div className="grid grid-cols-1 gap-9">
            {cards.map((card, index) => (
               <DocCardMobile
                  key={index}
                  title={card.title}
                  description={card.description}
                  className={card.className}
                  titleClassName={card.titleClassName}
                  icon={card.icon}
                  iconSize={card.iconSize}
               />
            ))}
         </div>
      </div>
   );
};

export default DocumentationMobile;