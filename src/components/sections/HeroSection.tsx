'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/socials';
import { Button } from '@/components/ui/Button';
import { Shield, ArrowRight, Download, Terminal, Code2, Lock, Cpu, Mail, User, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { t, language, isRtl } = useTranslation();
  const [imgError, setImgError] = useState(false);

  const headline = language === 'ar' ? personalInfo.taglineAr : personalInfo.tagline;
  const shortIdentity = language === 'ar' ? personalInfo.heroShortIdentityAr : personalInfo.heroShortIdentity;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-cyber-grid dark:bg-cyber-grid opacity-30 dark:opacity-20 pointer-events-none" />

      {/* Atmospheric Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#3B82F6]/15 via-[#F5C542]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Hero Composition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-medium bg-[#0A1020] text-slate-200 border border-slate-800 shadow-xl mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400">{t.hero.availableStatus}</span>
            </motion.div>

            {/* Greeting & Name in Gold x White Typography */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#3B82F6] font-mono block mb-2">
                {t.hero.greeting}
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
                <span className="text-[#F5C542]">Ahmed</span> <span className="text-white">Elmansy</span>
              </h1>
            </motion.div>

            {/* Identity Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#F5C542]/10 via-[#3B82F6]/10 to-[#EF4444]/10 border border-[#F5C542]/30 text-[#F5C542] font-mono text-xs sm:text-sm md:text-base font-bold mb-6 shadow-lg shadow-[#F5C542]/5">
              <Terminal className="w-4 h-4 shrink-0 text-[#3B82F6]" />
              <span>{shortIdentity}</span>
            </motion.div>

            {/* Headline Statement */}
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100 leading-snug mb-6 max-w-2xl">
              Building Modern Applications, Intelligent Solutions &amp; Secure Digital Experiences.
            </motion.p>

            {/* Supporting Copy */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8">
              {language === 'ar' ? personalInfo.supportingLineAr : personalInfo.supportingLine}
            </motion.p>

            {/* Action Buttons (Hierarchy: 1. View My Work, 2. Let's Work Together, 3. Download CV) */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className={cn("w-4 h-4", isRtl && "rotate-180")} />}
                iconPosition="right"
              >
                {t.hero.viewWork}
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-4 h-4 text-[#F5C542]" />}
              >
                {t.hero.cta}
              </Button>

              <Button
                href={personalInfo.cvPath}
                download="Ahmed-Elmansy-CV.pdf"
                variant="outline"
                size="lg"
                icon={<Download className="w-4 h-4" />}
              >
                {t.hero.downloadCv}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Profile & Cybersecurity Identity Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
              {/* Rotating Dashed Technical Ring */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-[#F5C542]/30 animate-spin-slow pointer-events-none" />

              {/* Ambient Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#F5C542] via-[#3B82F6] to-[#EF4444] opacity-50 blur-xl animate-pulse" />

              {/* Identity Frame Card */}
              <div className="relative w-full h-full rounded-3xl bg-[#030712] border-2 border-[#D4AF37]/50 p-2.5 overflow-hidden shadow-2xl flex flex-col justify-between">

                {/* Profile Portrait */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-6 text-center group">
                  {!imgError ? (
                    <img
                      src="/images/profile/ahmed.jpg"
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}

                  {/* Scanning Laser Line */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F5C542] to-transparent animate-scan-line opacity-80 pointer-events-none" />

                  {/* Fallback Graphic */}
                  {imgError && (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#F5C542] to-[#3B82F6] p-1 shadow-lg shadow-[#F5C542]/30">
                        <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center">
                          <User className="w-12 h-12 text-[#F5C542]" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          Ahmed Elmansy
                        </h3>
                        <p className="text-xs font-mono text-[#F5C542] mt-1">
                          Flutter Developer &amp; Security
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Floating Metadata System Markers */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-[#3B82F6] font-mono text-[10px] font-bold shadow-lg flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>FLUTTER</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-[#EF4444] font-mono text-[10px] font-bold shadow-lg flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>SECURITY</span>
                  </div>

                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-[#F5C542] font-mono text-[10px] font-bold shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI / ML</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-emerald-400 font-mono text-[10px] font-bold shadow-lg flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
