'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Badge } from '@/components/ui/Badge';
import { Shield, Smartphone, Monitor, Github, Info, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language, t, isRtl } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const title = language === 'ar' ? project.titleAr : project.title;
  const description = language === 'ar' ? project.descriptionAr : project.description;
  const category = language === 'ar' ? project.categoryAr : project.category;

  const getCategoryIcon = () => {
    if (project.id === 'ai-forensics') return <Shield className="w-4 h-4 text-red-500" />;
    if (project.id === 'mansy-store') return <Monitor className="w-4 h-4 text-amber-500" />;
    if (project.id === 'iti-flutter-project') return <Sparkles className="w-4 h-4 text-blue-500" />;
    return <Smartphone className="w-4 h-4 text-blue-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 hover:border-red-500/50 dark:hover:border-red-500/50 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 overflow-hidden backdrop-blur-sm",
        project.featured && "ring-2 ring-red-500/30 dark:ring-red-500/20"
      )}
    >
      {/* Featured Pill */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-500/30">
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
            {t.projects.featuredBadge}
          </span>
        </div>
      )}

      {/* Project Image Banner / Dynamic Placeholder */}
      <Link href={`/projects/${project.id}`} className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        {!imageError ? (
          <img
            src={project.image}
            alt={title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : null}

        {/* Dynamic Fallback Visual when image error occurs */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-red-500">
                {getCategoryIcon()}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                {project.id}
              </span>
            </div>

            <div>
              <div className="text-lg font-bold text-slate-100 font-sans group-hover:text-red-400 transition-colors">
                {title}
              </div>
              <div className="text-xs text-slate-400 mt-1 line-clamp-1">
                {category}
              </div>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-80" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-red-600 dark:text-red-400">
          {getCategoryIcon()}
          <span>{category}</span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-2">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed flex-1">
          {description}
        </p>

        {/* Important Note Callout if available */}
        {project.importantNote && (
          <div className="mb-4 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-300 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
            <p className="line-clamp-2">
              {language === 'ar' ? project.importantNote.ar : project.importantNote.en}
            </p>
          </div>
        )}

        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <Badge key={idx} variant="slate" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline" size="sm">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800/80 mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors cursor-pointer group/btn"
          >
            <span>{t.projects.viewDetails}</span>
            <ChevronRight className={cn("w-4 h-4 transition-transform group-hover/btn:translate-x-1", isRtl && "rotate-180 group-hover/btn:-translate-x-1")} />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={t.projects.viewGithub}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
