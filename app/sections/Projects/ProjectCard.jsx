// components/ProjectCard.js

import Image from 'next/image';

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative bg-[#F2F2F2] rounded-[2px] overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <div className='p-1'>

      
   
      <div>
         <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="rounded-t-[2px] object-cover"
        />
      </div>
       <div className="relative flex flex-col w-full p-6 z-40">
        <div className='flex items-center gap-4'>
          <h3 className="text-2xl font-medium text-[#777777] tracking-[-0.02em] mb-2">{title}</h3>
          <div className='h-[4px] w-full bg-[#EB9948]'/>

        </div>
        
        <p className="text-[#707070] text-justify">{description}</p>
      </div>
        
      </div>
     
     
      </div>
    </div>
  );
};

export default ProjectCard;