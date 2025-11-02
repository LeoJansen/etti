import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DictionaryProvider } from "@/src/site/context/DictionaryContext";
import LocaleAttribute from "@/src/site/components/LocaleAttribute";
import { getDictionary } from "@/src/i18n/getDictionary";
import { isLocale, locales, type Locale } from "@/src/i18n/config";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const generateStaticParams = () => {
  return locales.map((locale) => ({ locale }));
};

const buildAlternates = () => {
  return locales.reduce<Record<string, string>>((accumulator, locale) => {
    accumulator[locale] = `/${locale}`;
    return accumulator;
  }, {});
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const locale = resolvedParams.locale as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    openGraph: {
      title: dictionary.meta.openGraph.title,
      description: dictionary.meta.openGraph.description,
    },
    alternates: {
      languages: buildAlternates(),
    },
  } satisfies Metadata;
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const locale = resolvedParams.locale as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <DictionaryProvider locale={locale} dictionary={dictionary}>
      <LocaleAttribute locale={locale} />
      {children}
    </DictionaryProvider>
  );
};

export default LocaleLayout;
