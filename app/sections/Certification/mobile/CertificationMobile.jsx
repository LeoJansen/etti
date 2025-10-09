import CertificationCardMobile from "./CertificationCardMobile";
import { certificationCards } from "../CertificationContent";

const CertificationMobile = () => {
	return (
		<section className="relative w-full md:hidden py-16 px-6 bg-gradient-to-r from-[hsl(0,0%,98%)] to-[hsl(0,0%,97.5%)]" id="certification">
			<div className="relative z-10 flex flex-col gap-10">
				<div className="flex flex-col items-center text-center gap-4">
					<div className="bg-[#EB9948] px-4 py-2 rounded-md shadow-md">
						<h2 className="font-extralight tracking-[-0.02em] text-white text-4xl leading-[1.05]">Certificação</h2>
					</div>
					<h2 className="font-extralight tracking-[-0.03em] text-4xl leading-tight text-[#EB9948]">e Vistoria</h2>
					<p className="text-base text-gray-600">
						Garantimos a qualidade e a conformidade das suas instalações elétricas com serviços de certificação e vistoria.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					{certificationCards.map((card) => (
						<CertificationCardMobile key={card.title} title={card.title} description={card.description} image={card.image} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CertificationMobile;
