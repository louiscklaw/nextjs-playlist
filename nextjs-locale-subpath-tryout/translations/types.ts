export function isLocale(tested: string): tested is Locale {
  return locales.some(locale => locale === tested)
}
