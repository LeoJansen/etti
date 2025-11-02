"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "../types";
import type { Locale } from "../../i18n/config";

interface DictionaryContextValue {
  locale: Locale;
  dictionary: Dictionary;
}

const DictionaryContext = createContext<DictionaryContextValue | undefined>(undefined);

interface DictionaryProviderProps {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}

export const DictionaryProvider = ({
  locale,
  dictionary,
  children,
}: DictionaryProviderProps) => {
  return (
    <DictionaryContext.Provider value={{ locale, dictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = (): DictionaryContextValue => {
  const context = useContext(DictionaryContext);

  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }

  return context;
};
