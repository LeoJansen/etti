import Image from 'next/image';

const ProjectCard = ({
  title,
  description,
  image,
  imageSrc,
  imageAlt,
  className = '',
  style,
  ...props
}) => {
  const baseClassName = 'relative  rounded-[3px] overflow-hidden bg-[#FAFAFA]';
  const combinedClassName = [baseClassName, className].filter(Boolean).join(' ');
  const baseStyle = { boxShadow: '0px 1px 2px 2px rgba(0,0,0,0.1) ' };
  const mergedStyle = style ? { ...baseStyle, ...style } : baseStyle;
  const imageSource = image?.src ?? imageSrc;
  const altText = image?.alt ?? imageAlt ?? title;
  const imageWidth = image?.width;
  const imageHeight = image?.height;
  const imageProps = {

  };

  if (imageWidth && imageHeight) {
    imageProps.width = imageWidth;
    imageProps.height = imageHeight;
  } else {
    imageProps.fill = true;
  }

  return (
    <div {...props} className={combinedClassName} style={mergedStyle}>
      <div className='p-1'>
        <div>
          <div className="relative h-80 w-full">
            <Image src={imageSource}
              alt={altText}
              fill


              className='rounded-t-[2px] object-cover'
              sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw' />
          </div>
          <div className="relative flex flex-col w-full p-6 z-40">
            <div className='flex items-center gap-4'>
              <h3 className="text-2xl font-medium text-[#777777] tracking-[-0.02em] mb-2">{title}</h3>
              <div className='h-[4px] w-full bg-[#EB9948]' />
            </div>
            <p className="text-[#707070] text-lg font-light text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;