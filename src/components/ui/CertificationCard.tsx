'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Award, Calendar, CheckCircle, Shield } from 'lucide-react';
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
      className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex items-start gap-4"
    >
      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
        <Award className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <Badge variant="gold" size="sm">
            {certification.issuer}
          </Badge>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Calendar className="w-3 h-3" />
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
