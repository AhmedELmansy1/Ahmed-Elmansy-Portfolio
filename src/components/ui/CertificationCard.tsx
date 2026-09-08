'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Award, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { language } = useTranslation();

  const title = language === 'ar' ? certification.titleAr : certification.title;
  const date = language === 'ar' ? certification.dateAr : certification.date;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-3xl bg-white dark:bg-[#0A1020] border border-slate-200 dark:border-slate-800 hover:border-[#F5C542]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-4"
    >
      <div className="p-3 rounded-2xl bg-amber-500/10 text-[#F5C542] border border-amber-500/20 shrink-0">
        <Award className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <Badge variant="gold" size="sm">
            {certification.issuer}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
            <Calendar className="w-3 h-3 text-[#3B82F6]" />
            {date}
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 mt-1">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
