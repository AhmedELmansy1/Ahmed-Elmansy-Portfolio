'use client';

import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:text-red-500 dark:hover:text-red-400 border border-slate-300 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <Languages className="w-3.5 h-3.5 text-red-500" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </motion.button>
  );
}
