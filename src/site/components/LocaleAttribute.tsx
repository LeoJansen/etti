"use client";

import { useEffect } from "react";
import type { Locale } from "../../i18n/config";

interface LocaleAttributeProps {
	locale: Locale;
}

const LocaleAttribute = ({ locale }: LocaleAttributeProps) => {
	useEffect(() => {
		if (typeof document !== "undefined") {
			document.documentElement.lang = locale;
			document.documentElement.dir = "ltr";
		}
	}, [locale]);

	return null;
};

export default LocaleAttribute;
