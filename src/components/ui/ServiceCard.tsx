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
        return <Smartphone className="w-6 h-6 text-[#3B82F6]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#F5C542]" />;
      case 'Network':
        return <Network className="w-6 h-6 text-[#60A5FA]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F5C542]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#EF4444]" />;
      case 'Bug':
      default:
        return <Bug className="w-6 h-6 text-[#3B82F6]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A1020] border border-slate-200 dark:border-slate-800 hover:border-[#3B82F6]/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div>
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#05070D] border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#3B82F6]/40 transition-all duration-300">
          {getServiceIcon(service.iconName)}
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#3B82F6] transition-colors mb-3">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <button
        onClick={onContactClick}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-colors group/link cursor-pointer pt-4 border-t border-slate-100 dark:border-slate-800/80"
      >
        <span>{t.services.getStarted}</span>
        <ArrowRight className={cn("w-4 h-4 transition-transform group-hover/link:translate-x-1", isRtl && "rotate-180 group-hover/link:-translate-x-1")} />
      </button>
    </motion.div>
  );
}
