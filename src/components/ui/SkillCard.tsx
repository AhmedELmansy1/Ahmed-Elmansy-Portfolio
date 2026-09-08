'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Smartphone, Cpu, Server, Brain, ShieldAlert, Wrench, Sparkles, Terminal } from 'lucide-react';
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
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-2xl bg-white dark:bg-[#0B1020]/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-md hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shrink-0">
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
              variant={skill.highlight ? 'cyan' : 'slate'}
              size="md"
              icon={skill.highlight ? <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} /> : undefined}
              className={skill.highlight ? 'font-bold border-cyan-500/40 shadow-sm' : 'hover:border-slate-700 transition-colors'}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
