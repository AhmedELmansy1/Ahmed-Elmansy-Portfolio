'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Smartphone, Cpu, Server, Brain, ShieldAlert, Wrench, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  const { language } = useTranslation();

  const title = language === 'ar' ? category.titleAr : category.title;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-red-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-500" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-red-500/40 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shrink-0">
          {getCategoryIcon(category.iconName)}
        </div>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <Badge
            key={idx}
            variant={skill.highlight ? 'red' : 'slate'}
            size="md"
            icon={skill.highlight ? <Sparkles className="w-3 h-3 text-red-500" /> : undefined}
            className={skill.highlight ? 'font-bold border-red-500/40 shadow-sm' : 'hover:border-slate-400 transition-colors'}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
