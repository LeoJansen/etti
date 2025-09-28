// components/ProjectCard.js

import Image from 'next/image';

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className='p-1'>

      
   
      <div>
         <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="rounded-t-[9px] object-cover"
        />
      </div>
       <div className="relative p-6 z-40">
        <h3 className="text-2xl font-medium text-[#9b9b9b] mb-2">{title}</h3>
        <p className="text-[#d4d4d4] text-justify">{description}</p>
      </div>
        
      </div>
     
     
      </div>
    </div>
  );
};

export default ProjectCard;