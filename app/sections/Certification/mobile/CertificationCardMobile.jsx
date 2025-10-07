const CertificationCardMobile = ({ title, description }) => {
	return (
		<div className="flex flex-col gap-3 rounded-lg border border-[#d8dee3] bg-[#e7ebee] p-5 shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
			<h3 className="text-lg font-semibold text-[#EB9948] text-center">{title}</h3>
			<p className="text-sm text-[#4b4b4b] text-center">{description}</p>
		</div>
	);
};

export default CertificationCardMobile;
