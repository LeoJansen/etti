import Image from "next/image";



const CertificationCard = ({ title, description, image, index }) => {
   return (
      <div id={`certification-card-${index}`} className="relative flex w-full h-full justify-center items-center  rounded-[3px] p-10  gap-8 xl:gap-12" style={{ boxShadow: "0 0 60px 3px rgba(23, 15, 7, 0.07)" }}>
         <div className="flex w-fit justify-center items-center h-full rounded-l-[6px] ">
            <div className="relative w-[18rem] h-[18rem] xl:w-[26rem] xl:h-[26rem]">
               <Image
                  src={image}
                  alt="Certification Icon"
                  fill
                  sizes="(min-width: 1280px) 36rem, 28rem"
                  className="object-contain rounded-[3px] z-10"
               />
            </div>
         </div>

         <div className="flex flex-col  h-full justify-start items-center z-20 py-[5%] gap-6">
            <div className="flex w-full justify-center items-start uppercase">
               <h3 className="text-xl font-medium text-[#EB9948] text-center">{title}</h3>
            </div>
            <div className="flex w-full justify-start items-center">
               <p className="text-[#9e9e9e] tracking-tighter font-light text-2xl">{description}</p>
            </div>
         </div>
      </div>
   );
};

export default CertificationCard;
