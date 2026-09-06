'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Smartphone, Layout, Network, Sparkles, ShieldCheck, Bug, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  onContactClick: () => void;
}

export function ServiceCard({ service, onContactClick }: ServiceCardProps) {
  const { language, t, isRtl } = useTranslation();

  const title = language === 'ar' ? service.titleAr : service.title;
  const description = language === 'ar' ? service.descriptionAr : service.description;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-red-500" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-amber-500" />;
      case 'Network':
        return <Network className="w-6 h-6 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 'Bug':
      default:
        return <Bug className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-red-500/50 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300"
    >
      <div>
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-red-500/30 transition-all duration-300">
          {getServiceIcon(service.iconName)}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-3">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <button
        onClick={onContactClick}
        className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors group/link cursor-pointer pt-4 border-t border-slate-100 dark:border-slate-800/60"
      >
        <span>{t.services.getStarted}</span>
        <ArrowRight className={cn("w-4 h-4 transition-transform group-hover/link:translate-x-1", isRtl && "rotate-180 group-hover/link:-translate-x-1")} />
      </button>
    </motion.div>
  );
}
