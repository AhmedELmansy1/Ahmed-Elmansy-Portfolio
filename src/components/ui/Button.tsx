'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  href?: string;
  download?: boolean | string;
  target?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  className,
  href,
  download,
  target,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-cyan-500 hover:from-cyan-500 hover:to-indigo-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30 focus:ring-cyan-500',
    secondary: 'bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700/80 shadow-md focus:ring-slate-500',
    outline: 'bg-transparent text-slate-800 dark:text-slate-200 border-2 border-slate-300 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 focus:ring-cyan-500',
    ghost: 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white focus:ring-slate-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}
