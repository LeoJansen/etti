import Image from 'next/image';

const ProjectCardMobile = ({ title, description, imageSrc }) => {
	return (
		<article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
			<div className="relative h-52 w-full">
				<Image
					src={imageSrc}
					alt={title}
					fill
					sizes="100vw"
					className="object-cover"
					loading="lazy"
				/>
			</div>

			<div className="flex flex-col gap-3 px-5 py-6">
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-semibold text-white tracking-tight">{title}</h3>
					<div className="h-[3px] w-14 rounded-full bg-[#EB9948]" />
				</div>
				<p className="text-sm leading-relaxed text-gray-300">{description}</p>
			</div>
		</article>
	);
};

export default ProjectCardMobile;
