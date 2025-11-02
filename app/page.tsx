
import App from "./App";
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

export default async function Home() {
  const headerList = await headers();
  const acceptLanguage = headerList.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);

  // Redirect root to localized path
  redirect(`/${locale}`);

  // Fallback UI (shouldn't be rendered after redirect)
  return (
    <div id="page1" className="relative w-full min-h-screen overflow-visible pointer-events-none">
      {/* Reabilita eventos no conteúdo real */}
      <div className="pointer-events-auto @container">
        <App />
      </div>
    </div>
  );
}
