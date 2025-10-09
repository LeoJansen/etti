import Image from "next/image";

const CertificationCardMobile = ({ title, description, image }) => {
	return (
   <div className="flex flex-col items-center gap-4">
      <div className="flex rounded-sm w-70 h-70 overflow-hidden">
         <Image
      src={image}
      alt={title}
      width={80}
      height={80}
      
      className="mb-4 w-70 h-70 object-contain "
      />

      </div>
      

   
		<div className="flex flex-col gap-3 rounded-lg  p-5 ">
			<h3 className="text-lg font-semibold text-[#EB9948] text-center">{title}</h3>
			<p className="text-sm text-[#4b4b4b] text-center">{description}</p>
		</div>
      </div>
	);
};

export default CertificationCardMobile;
