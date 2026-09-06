'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experienceData } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ExperienceSection() {
  const { t, language, isRtl } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Timeline"
          title={t.experience.sectionTitle}
          subtitle={t.experience.sectionSubtitle}
        />

        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 rtl:pl-0 rtl:pr-4 rtl:sm:pr-8">
          {/* Vertical Timeline Bar */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 rtl:left-auto rtl:right-4 rtl:sm:right-8 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8 relative">
            {experienceData.map((item, index) => {
              const role = language === 'ar' ? item.roleAr : item.role;
              const type = language === 'ar' ? item.typeAr : item.type;
              const period = language === 'ar' ? item.periodAr : item.period;
              const description = language === 'ar' ? item.descriptionAr : item.description;
              const highlights = language === 'ar' ? item.highlights.ar : item.highlights.en;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-8 sm:pl-12 rtl:pl-0 rtl:pr-8 rtl:sm:pr-12"
                >
                  {/* Timeline Dot Icon */}
                  <div className="absolute top-1.5 left-0 sm:left-4 rtl:left-auto rtl:right-0 rtl:sm:right-4 -translate-x-1/2 rtl:translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 text-red-500 border-2 border-red-500 flex items-center justify-center shadow-lg shadow-red-500/20 z-10">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Experience Card */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-red-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">
                        <Calendar className="w-3 h-3" />
                        {period}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        {type}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      {item.technologies.map((tech, i) => (
                        <Badge key={i} variant="slate" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
