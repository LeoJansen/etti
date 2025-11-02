import { isLocale, defaultLocale, type Locale } from "./config";
import type { Dictionary } from "../site/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
	pt: () => import("./messages/pt.json").then((module) => module.default as Dictionary),
	en: () => import("./messages/en.json").then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
	const normalizedLocale = isLocale(locale) ? locale : defaultLocale;
	const loadDictionary = dictionaries[normalizedLocale];

	if (!loadDictionary) {
		throw new Error(`Dictionary for locale "${locale}" is not available.`);
	}

	return loadDictionary();
};

export type { Dictionary };
