import Image from "next/image";



const CertificationCard = ({ title, description, image, index }) => {
   return (
      <div id={`certification-card-${index}`} className="relative flex  h-full justify-start items-center xl:gap-4   rounded-[6px]">
    
         <div className={`flex w-fit p-10 justify-center items-center h-full  ${index % 2 == 0 ? "" : ""} rounded-l-[6px]  `}>
            <Image
               src={image}
               alt="Certification Icon"
               width={1024}
               height={1024}
               className="object-contain w-80 h-80 xl:w-100 xl:h-100  rounded-sm   z-10 "
            />

         </div>

         <div className="flex flex-col w-1/2 h-full justify-center items-center z-20 pr-10">
            <div className="flex w-full  justify-start items-start uppercase ">
               <h3 className="text-xl font-medium text-[#7e7e7e] text-center">{title}</h3>

            </div>
            <div className="flex w-full justify-start items-center ">
               <p className=" text-[#9e9e9e] tracking-tighter font-light text-2xl ">{description}</p>
            </div>


         </div>

      </div>
   );
};

export default CertificationCard;
