
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { defaultLocale, locales, type Locale } from "../src/i18n/config";

const getPreferredLocale = (acceptLanguageHeader: string | null): Locale => {
  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const languageTokens = acceptLanguageHeader
    .split(",")
    .map((token) => token.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean) as string[];

  for (const token of languageTokens) {
    const matchedLocale = locales.find((locale) => {
      return token === locale || token.startsWith(`${locale}-`);
    });

    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return defaultLocale;
};

const Home = async () => {
  const headerList = await headers();
  const acceptLanguage = headerList.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);

  redirect(`/${locale}`);
};

export default Home;
