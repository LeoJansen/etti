"use client";

import Image from "next/image";
import React from "react";
import { useAboutAnimation } from "../useAboutAnimation";

const AboutMobile = () => {
	const sectionRef = React.useRef(null);

	useAboutAnimation(sectionRef, { stagger: 0.18, fromY: 48 });

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen w-full max-w-screen flex-col overflow-hidden bg-gray-50 p-6 text-[#313131] md:hidden"
			id="about"
		>
			<div className="flex flex-col gap-6">
				<div className="flex flex-col w-fit">
					<div className="about-animate-item flex items-center gap-5">
						<div className="h-[5px] flex-1 rounded-[1.5px] bg-[#EBC197]" />
						<h3 className="about-subheading">Sobre a Etti</h3>
					</div>
					<div className="about-animate-item">
						<h2 className="about-heading">Quem somos</h2>
					</div>
				</div>
				<div className="about-animate-item overflow-hidden rounded-[6px]">
					<Image
						src="/assets/about.png"
						alt="Equipe da Etti Project em reunião"
						quality={100}
						width={864}
						height={1184}
						className="h-auto w-full object-cover"
					/>
				</div>
				<div className="flex flex-col gap-4 text-justify text-xl font-light tracking-tight text-[#9e9e9e]">
					<p className="about-animate-item leading-relaxed">
						A Etti é uma empresa especializada em <strong className="font-medium text-[#EB9948]">soluções elétricas e automação</strong>. Nossa missão é transformar espaços através de tecnologia avançada e instalações seguras, oferecendo soluções inovadoras e sustentáveis que melhoram a qualidade de vida dos nossos clientes.
					</p>
					<p className="about-animate-item leading-relaxed">
						Com uma equipe experiente e certificada, oferecemos um serviço completo, desde o projeto inicial até a certificação final. Isso garante a qualidade e a conformidade em cada instalação que realizamos.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMobile;
