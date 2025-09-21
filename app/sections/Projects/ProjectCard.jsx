// components/ProjectCard.js

import Image from 'next/image';

const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#797979] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;