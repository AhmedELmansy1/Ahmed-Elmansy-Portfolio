'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'gold' | 'blue' | 'cyan' | 'violet' | 'slate' | 'outline' | 'green';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = 'slate',
  size = 'sm',
  className,
  icon,
}: BadgeProps) {
  const variants = {
    red: 'bg-red-500/10 text-red-500 border-red-500/20 dark:bg-red-500/15 dark:text-red-400 dark:border-red-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:bg-cyan-500/15 dark:text-cyan-400 dark:border-cyan-500/30',
    violet: 'bg-violet-500/10 text-violet-600 border-violet-500/20 dark:bg-violet-500/15 dark:text-violet-400 dark:border-violet-500/30',
    gold: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30',
    blue: 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30',
    green: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30',
    slate: 'bg-slate-200/70 text-slate-800 border-slate-300 dark:bg-slate-900/80 dark:text-slate-300 dark:border-slate-800',
    outline: 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-800',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs font-medium',
    md: 'px-3 py-1 text-sm font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border backdrop-blur-sm transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
