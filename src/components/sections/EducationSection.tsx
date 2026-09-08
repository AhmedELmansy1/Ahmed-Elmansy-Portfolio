'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationData } from '@/data/education';
import { GraduationCap, Award, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

export function EducationSection() {
  const { t, language } = useTranslation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic"
          title={t.education.sectionTitle}
          subtitle={t.education.sectionSubtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-violet-600 p-0.5 shrink-0 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  {language === 'ar' ? educationData.universityAr : educationData.university}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {language === 'ar' ? educationData.degreeAr : educationData.degree}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-bold text-sm">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>{t.education.gradeLabel}: {language === 'ar' ? educationData.gradeAr : educationData.grade}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Specialization</span>
              </div>
              <p className="text-base font-bold text-slate-100">
                {language === 'ar' ? educationData.specializationAr : educationData.specialization}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>Graduation Project</span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Sparkles className="w-3 h-3" />
                  {language === 'ar' ? educationData.projectGradeAr : educationData.projectGrade}
                </span>
              </div>
              <p className="text-base font-bold text-amber-400">
                {language === 'ar' ? educationData.projectAr : educationData.project}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
