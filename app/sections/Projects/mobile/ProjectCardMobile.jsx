import Image from 'next/image';

const ProjectCardMobile = ({
   title,
   description,
   imageSrc,
   className = '',
   style,
   ...props
}) => {
   const baseClassName =
      'flex flex-col overflow-hidden rounded-[3px] border border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.45)]';
   const combinedClassName = [baseClassName, className].filter(Boolean).join(' ');

   return (
      <article {...props} className={combinedClassName} style={style}>
	<div className='p-[5px] '>
		
         <div className="relative h-52 w-full">
            <Image
               src={imageSrc}
               alt={title}
               fill
               sizes="100vw"
               className="object-cover rounded-t-[2px]"
               loading="lazy"
            />
         </div>

         <div className="flex flex-col gap-3 px-5 py-6">
            <div className="flex flex-col gap-2">
               <h3 className="text-2xl font-medium text-[#777777] tracking-[-0.02em] mb-2">{title}</h3>
               <div className="h-[3px] w-14 rounded-full bg-[#EB9948]" />
            </div>
            <p className="text-[#888888] text-lg  text-justify">{description}</p>
         </div>

	</div>
      </article>
   );
};

export default ProjectCardMobile;
