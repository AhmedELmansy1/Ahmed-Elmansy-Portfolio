'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { educationData } from '@/data/education';
import { GraduationCap, Award, CheckCircle2, Sparkles, Smartphone, Lock } from 'lucide-react';

export function AboutSection() {
  const { t, language } = useTranslation();

  return (
    <section id="about" className="py-20 bg-[#05070D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Matrix"
          title={t.about.sectionTitle}
          subtitle={t.about.sectionSubtitle}
        />

        {/* 3 Pillar Cards: What Makes Ahmed Different? */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-3xl bg-[#0A1020] border border-slate-800 hover:border-[#3B82F6]/50 shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Flutter Application Development
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Engineering cross-platform Android and Windows desktop applications with BLoC state management and Clean Architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 rounded-3xl bg-[#0A1020] border border-slate-800 hover:border-[#F5C542]/50 shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#F5C542] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Integrating PyTorch, Gemini AI APIs, ResNet-50, and EfficientNet deep learning models into production workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-6 rounded-3xl bg-[#0A1020] border border-slate-800 hover:border-[#EF4444]/50 shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-[#EF4444] flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Cybersecurity &amp; Digital Forensics
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized academic background in information security, multimedia forgery analysis, ELA, and SHA-256 evidence cryptography.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-[#0A1020] border border-slate-800 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">
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
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
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
            className="lg:col-span-5 p-8 rounded-3xl bg-[#080B14] text-white border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-[#3B82F6] border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-widest block">
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
                  <p className="font-semibold text-[#3B82F6]">
                    {language === 'ar' ? educationData.specializationAr : educationData.specialization}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Overall Degree Grade</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 text-[#60A5FA] border border-blue-500/20 font-bold text-sm">
                    <Award className="w-4 h-4 text-[#3B82F6]" />
                    {language === 'ar' ? educationData.gradeAr : educationData.grade}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Graduation Project</span>
                <p className="text-sm font-bold text-[#F5C542]">
                  {language === 'ar' ? educationData.projectAr : educationData.project}
                </p>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-[#F5C542] border border-amber-500/20 shrink-0">
                <Sparkles className="w-3 h-3" />
                {language === 'ar' ? educationData.projectGradeAr : educationData.projectGrade}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
