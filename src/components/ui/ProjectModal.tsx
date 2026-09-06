'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { X, CheckCircle2, Github, ExternalLink, Shield, Info } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!project) return;

    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Handle Escape key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = language === 'ar' ? project.titleAr : project.title;
  const description = language === 'ar' ? project.descriptionAr : project.description;
  const category = language === 'ar' ? project.categoryAr : project.category;
  const features = language === 'ar' ? project.features.ar : project.features.en;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
      >
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
              {category}
            </span>
            <button
              onClick={onClose}
              aria-label={t.projects.closeModal}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Title */}
            <div>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Important Note Callout if available */}
            {project.importantNote && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-200 text-sm flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-1">
                    {t.projects.importantDetails}
                  </h4>
                  <p className="leading-relaxed">
                    {language === 'ar' ? project.importantNote.ar : project.importantNote.en}
                  </p>
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {t.projects.keyFeatures}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="red" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<Github className="w-4 h-4" />}
              >
                {t.projects.viewGithub}
              </Button>
            ) : (
              <span className="text-xs text-slate-500 italic">
                Source Code / Demo Access
              </span>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              {t.projects.closeModal}
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
