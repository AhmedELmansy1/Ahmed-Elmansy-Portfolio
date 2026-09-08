'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('flex flex-col mb-12 sm:mb-16', alignClasses[align], className)}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-4 flex items-center gap-1">
        <div className="w-8 h-1 rounded-full bg-cyan-500" />
        <div className="w-2 h-1 rounded-full bg-violet-500" />
        <div className="w-1.5 h-1 rounded-full bg-red-500" />
      </div>
    </motion.div>
  );
}
