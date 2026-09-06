'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationData } from '@/data/education';
import { ShieldCheck, GraduationCap, Cpu, Lock, CheckCircle2, Award } from 'lucide-react';

export function AboutSection() {
  const { t, language } = useTranslation();

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title={t.about.sectionTitle}
          subtitle={t.about.sectionSubtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-white">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>

            {/* Core Highlights List */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Academic Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-red-400 uppercase tracking-wider block">
                    Academic Qualification
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {language === 'ar' ? educationData.universityAr : educationData.university}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Degree</span>
                  <p className="font-semibold text-slate-200">
                    {language === 'ar' ? educationData.degreeAr : educationData.degree}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Specialization</span>
                  <p className="font-semibold text-red-400">
                    {language === 'ar' ? educationData.specializationAr : educationData.specialization}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Graduation Grade</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-sm">
                    <Award className="w-4 h-4" />
                    {language === 'ar' ? educationData.gradeAr : educationData.grade}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Graduation Project</span>
              <p className="text-sm font-bold text-amber-400">
                {language === 'ar' ? educationData.projectAr : educationData.project}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
