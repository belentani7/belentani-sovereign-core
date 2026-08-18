// Dirección BELENTANI: Archivo Soberano. El idioma se comporta como una puerta del portal, no como un ajuste decorativo.
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { locales, localeOrder, type Locale } from "@/data/content";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof locales)[Locale];
  localeOrder: Locale[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("belentani-locale") as Locale | null;
  if (stored && localeOrder.includes(stored)) return stored;
  const browser = window.navigator.language.toLowerCase();
  if (browser.startsWith("pt")) return "pt";
  if (browser.startsWith("en")) return "en";
  if (browser.startsWith("ca")) return "ca";
  if (browser.startsWith("fr")) return "fr";
  if (browser.startsWith("it")) return "it";
  if (browser.startsWith("zh")) return "zh";
  if (browser.startsWith("hi")) return "hi";
  if (browser.startsWith("th")) return "th";
  if (browser.startsWith("fi")) return "fi";
  return "es";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("belentani-locale", nextLocale);
    document.documentElement.lang = nextLocale === "zh" ? "zh-CN" : nextLocale === "hi" ? "hi-IN" : nextLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale === "hi" ? "hi-IN" : locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, copy: locales[locale], localeOrder }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale debe utilizarse dentro de LocaleProvider");
  return context;
}
