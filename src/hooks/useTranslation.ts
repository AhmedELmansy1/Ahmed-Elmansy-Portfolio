'use client';

import { useLanguage } from '@/providers/LanguageProvider';
import { translations } from '@/data/translations';

export function useTranslation() {
  const { language, isRtl, toggleLanguage, setLanguage } = useLanguage();
  const t = translations[language];

  return {
    t,
    language,
    isRtl,
    toggleLanguage,
    setLanguage,
  };
}
