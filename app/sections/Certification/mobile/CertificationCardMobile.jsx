import Image from "next/image";

const CertificationCardMobile = ({ title, description, image, index }) => {
	const imageSource = typeof image === "string" ? image : image?.src;
	const imageAlt = (typeof image === "object" && image?.alt) ? image.alt : title;
	const imageWidth = typeof image === "object" && image?.width ? image.width : 320;
	const imageHeight = typeof image === "object" && image?.height ? image.height : 320;
	return (
		<div className="flex flex-col items-center gap-4" data-cert-mobile-card data-cert-mobile-card-index={index}>
			<div className="flex rounded-[3px] w-80 h-80 overflow-hidden">
				{imageSource && (
					<Image
						src={imageSource}
						alt={imageAlt}
						width={imageWidth}
						height={imageHeight}
						className="mb-4 w-80 h-80 object-contain "
					/>
				)}
			</div>



			<div className="flex flex-col gap-3 rounded-lg  p-5 ">
				<h3 className="text-lg font-semibold text-[#EB9948] text-center">{title}</h3>
				<p className="text-xl font-extralight text-[#4b4b4b] text-justify">{description}</p>
			</div>
		</div>
	);
};

export default CertificationCardMobile;
