import Image from "next/image";



const CertificationCard = ({ title, description, image }) => {
   return (
      <div className="flex  h-full justify-start items-center gap-4  shadow-[0_2px_10px_rgba(0,0,0,0.3)] rounded-[6px]    backdrop-blur-sm">
         <div className="flex w-fit p-10 justify-center items-center  h-full  bg-[#000000] bg-gradient-to-br from-[#EB9948] to-[hsl(30,80%,50%)] rounded-l-[6px]  ">
         <Image
            src={image}
            alt="Certification Icon"
            width={1024}
            height={1024}
            className="object-contain w-100 h-100"
         />

         </div>
         
         <div className="flex flex-col w-1/2 ">
            <h3 className="text-2xl font-medium text-[#888888] text-center">{title}</h3>
            <p className="text-base text-[#d3d3d3] text-center">{description}</p>

         </div>

      </div>
   );
};

export default CertificationCard;
