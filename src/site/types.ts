import type { Locale } from "../i18n/config";

export type CtaType = "internal" | "external" | "whatsapp";

export interface MetaDictionary {
	title: string;
	description: string;
	openGraph: {
		title: string;
		description: string;
	};
}

export interface LinkDictionary {
	label: string;
	href: string;
}

export interface LocaleToggleOption {
	locale: Locale;
	label: string;
	ariaLabel: string;
}

export interface NavigationDictionary {
	links: LinkDictionary[];
	contactCtaLabel: string;
	localeToggle: LocaleToggleOption[];
}

export interface CtaDictionary {
	label: string;
	href?: string;
	type?: CtaType;
	ariaLabel?: string;
}

export interface ImageAsset {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export type IconAsset = ImageAsset;

export interface HeroDictionary {
	headingLines: string[];
	mobileHeadingLines?: string[];
	primaryCta: CtaDictionary;
	secondaryCta: CtaDictionary;
	backgroundAlt: string;
	mobileBackgroundAlt: string;
}

export interface AboutDictionary {
	eyebrow: string;
	heading: string;
	paragraphs: string[];
	image: ImageAsset;
}

export interface ServicesCardDictionary {
	title: string[];
	description: string;
	icon: IconAsset;
}

export interface ServicesDictionary {
	eyebrow: string;
	heading: string;
	cards: ServicesCardDictionary[];
}

export interface ProjectsCardDictionary {
	title: string;
	description: string;
	image: ImageAsset;
}

export interface ProjectsDictionary {
	eyebrow: string;
	heading: string;
	description: string;
	cards: ProjectsCardDictionary[];
}

export interface DocumentationCardDictionary {
	title: string;
	description: string;
	icon: IconAsset;
}

export interface DocumentationDictionary {
	heading: string;
	subheading: string;
	description: string;
	cards: DocumentationCardDictionary[];
}

export interface AutomationCardDictionary {
	title: string;
	description: string;
	icon: IconAsset;
}

export interface AutomationDictionary {
	heading: string;
	subheading: string;
	description: string;
	cards: AutomationCardDictionary[];
	backgroundAlt: string;
}

export interface CameraCardDictionary {
	title: string;
	description: string;
	image: ImageAsset;
}

export interface CameraDictionary {
	eyebrow: string;
	heading: string;
	description: string;
	cards: CameraCardDictionary[];
	techBadge: string;
}

export interface CertificationCardDictionary {
	title: string;
	description: string;
	image: ImageAsset;
}

export interface CertificationDictionary {
	heading: string;
	subheading: string;
	description: string;
	cards: CertificationCardDictionary[];
}

export interface SystemsCardDictionary {
	title: string;
	description: string;
	image: ImageAsset;
}

export interface SystemsDictionary {
	eyebrow: string;
	heading: string;
	description: string;
	cards: SystemsCardDictionary[];
}

export interface WhyEttiCardDictionary {
	title: string;
	description: string;
}

export interface WhyEttiDictionary {
	eyebrow: string;
	heading: string;
	description: string;
	cards: WhyEttiCardDictionary[];
}

export interface SuperSectionLine {
	text: string;
	highlight?: boolean;
}

export interface SuperSectionDictionary {
	lines: SuperSectionLine[];
}

export interface ContactCardDictionary {
	title: string;
	description: string;
}

export type ContactButtonVariant = "primary" | "secondary";

export interface ContactButtonDictionary extends CtaDictionary {
	id: string;
	variant: ContactButtonVariant;
}

export interface ContactDetailDictionary {
	label: string;
	value: string;
	href: string;
	icon: IconAsset;
}

export interface ContactSocialDictionary {
	id: string;
	label: string;
	href: string;
	icon: IconAsset;
}

export interface ContactDictionary {
	headline: string;
	backgroundAlt: string;
	cards: ContactCardDictionary[];
	buttons: ContactButtonDictionary[];
	details: {
		phone: ContactDetailDictionary;
		email: ContactDetailDictionary;
	};
	social: ContactSocialDictionary[];
	legal: {
		copyright: string;
		developerAttribution: string;
		developerUrl: string;
		websiteLabel: string;
		websiteUrl: string;
	};
}

export interface Dictionary {
	meta: MetaDictionary;
	navigation: NavigationDictionary;
	hero: HeroDictionary;
	about: AboutDictionary;
	services: ServicesDictionary;
	projects: ProjectsDictionary;
	documentation: DocumentationDictionary;
	automation: AutomationDictionary;
	camera: CameraDictionary;
	certification: CertificationDictionary;
	systems: SystemsDictionary;
	whyEtti: WhyEttiDictionary;
	superSection: SuperSectionDictionary;
	contact: ContactDictionary;
}
