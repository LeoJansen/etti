"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { defaultLocale, locales, type Locale } from "@/src/i18n/config";
import { useDictionary } from "@/src/site/context/DictionaryContext";

const PLACEHOLDER_LABELS: Record<Locale, string> = {
  pt: "English Version",
  en: "Versão em português",
};

interface LanguageSwitcherProps {
  className?: string;
  buttonClassName?: string;
  optionClassName?: string;
  placeholder?: string | Partial<Record<Locale, string>>;
}

const LanguageSwitcher = ({
  className = "",
  buttonClassName = "",
  optionClassName = "",
  placeholder = PLACEHOLDER_LABELS,
}: LanguageSwitcherProps) => {
  const { locale } = useDictionary();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const optionRefs = useRef<Record<Locale, HTMLButtonElement | null>>({} as Record<Locale, HTMLButtonElement | null>);

  const restPath = useMemo(() => {
    if (!pathname) {
      return "";
    }

    const segments = pathname.split("/").filter(Boolean);
    const [, ...rest] = segments;
    return rest.join("/");
  }, [pathname]);

  const placeholderLabel = useMemo(() => {
    if (typeof placeholder === "string") {
      return placeholder;
    }

    return (
      placeholder?.[locale] ??
      PLACEHOLDER_LABELS[locale] ??
      PLACEHOLDER_LABELS[defaultLocale]
    );
  }, [locale, placeholder]);

  const buildHref = useCallback(
    (targetLocale: Locale) => {
      const basePath = restPath ? `/${targetLocale}/${restPath}` : `/${targetLocale}`;
      const queryString = searchParams.toString();
      return queryString ? `${basePath}?${queryString}` : basePath;
    },
    [restPath, searchParams],
  );

  const handleSwitch = useCallback(
    (targetLocale: Locale) => {
      setIsOpen(false);

      if (targetLocale === locale) {
        return;
      }

      const nextUrl = buildHref(targetLocale);
      router.push(nextUrl, { scroll: false });
    },
    [buildHref, locale, router],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const activeRef = optionRefs.current[locale];
    activeRef?.focus();
  }, [isOpen, locale]);

  const handleButtonKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((previous) => !previous);
    }
  };

  const handleOptionKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = locales[(index + 1) % locales.length];
      optionRefs.current[next]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const previous = locales[(index - 1 + locales.length) % locales.length];
      optionRefs.current[previous]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      optionRefs.current[locales[0]]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      optionRefs.current[locales[locales.length - 1]]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSwitch(locales[index]);
    }
  };

  return (
    <div ref={containerRef} className={`relative text-xs md:text-sm ${className}`}>
      <button
        type="button"
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={isOpen ? "true" : "false"}
        id={buttonId}
        onClick={() => setIsOpen((previous) => !previous)}
        onKeyDown={handleButtonKeyDown}
        className={`flex items-center gap-2 rounded border px-4 py-2 uppercase tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-0 bg-black/40 text-white/80 border-white/20 hover:bg-[#FF7919]/90 hover:text-black hover:border-[#FF7919] ${buttonClassName}`.trim()}
      >
        <span>{placeholderLabel}</span>
        <span aria-hidden="true" className="text-[#FF7919]">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-activedescendant={`language-${locale}`}
          aria-labelledby={buttonId}
          className="absolute right-0 mt-2 w-full min-w-[120px] overflow-hidden rounded border border-[#FF7919]/60 bg-black/90 text-white shadow-lg backdrop-blur-md"
        >
          {locales.map((option, index) => {
            const isActive = option === locale;
            return (
              <li key={option} role="presentation">
                <button
                  id={`language-${option}`}
                  type="button"
                  role="option"
                  aria-selected={isActive ? "true" : "false"}
                  ref={(element) => {
                    optionRefs.current[option] = element;
                  }}
                  onClick={() => handleSwitch(option)}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left transition-colors duration-150 ${
                    isActive
                      ? "bg-[#FF7919] text-black"
                      : "bg-transparent text-white hover:bg-white/15"
                  } ${optionClassName}`.trim()}
                >
                  <span>{option.toUpperCase()}</span>
                  {isActive ? <span className="text-black">•</span> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageSwitcher;
