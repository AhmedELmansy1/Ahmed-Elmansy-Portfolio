'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/socials';
import { Button } from '@/components/ui/Button';
import { Shield, ArrowRight, Download, Terminal, Code2, Lock, Cpu, Mail, User, ShieldCheck, Activity } from 'lucide-react';
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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid dark:bg-cyber-grid opacity-30 dark:opacity-20 pointer-events-none" />

      {/* Radial Glow Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-radial from-blue-600/15 via-[#F5C542]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#07111F]/90 text-slate-200 border border-slate-800 shadow-md mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-400">{t.hero.availableStatus}</span>
            </motion.div>

            {/* Greeting & Name in Gold x White Hierarchy */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-sm sm:text-base font-semibold text-[#3B82F6] font-mono block mb-1">
                {t.hero.greeting}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                <span className="text-[#F5C542]">Ahmed</span> <span className="text-slate-900 dark:text-white">Elmansy</span>
              </h1>
            </motion.div>

            {/* Sub-identity Badge with Gold/Blue Accents */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F5C542]/10 via-[#3B82F6]/10 to-[#EF4444]/10 border border-[#F5C542]/30 text-[#F5C542] font-mono text-xs sm:text-sm md:text-base font-bold mb-6">
              <Terminal className="w-4 h-4 shrink-0 text-[#3B82F6]" />
              <span>{shortIdentity}</span>
            </motion.div>

            {/* Headline */}
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 leading-snug mb-6 max-w-2xl">
              {headline}
            </motion.p>

            {/* Secondary Supporting Text */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
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

          {/* Right Profile & Cybersecurity Identity Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Rotating Blue/Gold Outer Marker Ring */}
              <div className="absolute -inset-4 rounded-full border border-dashed border-[#F5C542]/30 animate-spin-slow pointer-events-none" />

              {/* Gold x Blue Ambient Glow Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#F5C542] via-[#3B82F6] to-[#EF4444] opacity-60 blur-md animate-pulse" />

              {/* Main Card Frame */}
              <div className="relative w-full h-full rounded-3xl bg-[#030712] border border-[#D4AF37]/40 p-2 overflow-hidden shadow-2xl flex flex-col justify-between">

                {/* Profile Image Presentation */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-6 text-center group">
                  {!imgError ? (
                    <img
                      src="/images/profile/ahmed.jpg"
                      alt={personalInfo.name}
                      onError={() => setImgError(true)}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  {/* Laser Scan Line Effect */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F5C542] to-transparent animate-scan-line opacity-70 pointer-events-none" />

                  {/* Fallback Developer Profile Visual */}
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

                      <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xs text-left">
                        <p className="text-emerald-400">$ whoami</p>
                        <p className="text-slate-300">Ahmed Elmansy</p>
                        <p className="text-[#3B82F6] mt-1">$ cat stack.txt</p>
                        <p className="text-[#F5C542]">Flutter, Python, Security, AI</p>
                      </div>
                    </div>
                  )}

                  {/* Corner Identity Markers */}
                  <div className="absolute top-3 left-3 p-2 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-[#3B82F6] shadow-lg">
                    <Code2 className="w-4 h-4" />
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-[#EF4444] shadow-lg">
                    <Lock className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-[#F5C542] shadow-lg">
                    <Cpu className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-[#030712]/90 backdrop-blur-md border border-slate-800 text-emerald-400 shadow-lg">
                    <ShieldCheck className="w-4 h-4" />
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
