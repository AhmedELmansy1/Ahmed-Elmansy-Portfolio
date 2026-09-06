'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/socials';
import { Button } from '@/components/ui/Button';
import { Shield, ArrowRight, Download, Terminal, Code2, Lock, Cpu, Mail, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { t, language, isRtl } = useTranslation();
  const [imgError, setImgError] = useState(false);

  const headline = language === 'ar' ? personalInfo.taglineAr : personalInfo.tagline;
  const shortIdentity = language === 'ar' ? personalInfo.heroShortIdentityAr : personalInfo.heroShortIdentity;
  const name = language === 'ar' ? personalInfo.nameAr : personalInfo.name;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid dark:bg-cyber-grid opacity-30 dark:opacity-20 pointer-events-none" />

      {/* Radial Glow Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-red-500/15 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 dark:bg-slate-900/90 text-slate-200 border border-slate-700/80 shadow-md mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono">{t.hero.availableStatus}</span>
            </div>

            {/* Greeting & Name */}
            <div className="mb-4">
              <span className="text-sm sm:text-base font-semibold text-red-600 dark:text-red-400 font-mono block mb-1">
                {t.hero.greeting}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {name}
              </h1>
            </div>

            {/* Sub-identity Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-blue-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-mono text-sm sm:text-base font-bold mb-6">
              <Terminal className="w-4 h-4 shrink-0" />
              <span>{shortIdentity}</span>
            </div>

            {/* Headline */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-snug mb-6 max-w-2xl">
              {headline}
            </p>

            {/* Secondary Supporting Text */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              {language === 'ar' ? personalInfo.supportingLineAr : personalInfo.supportingLine}
            </p>

            {/* Action Buttons (Hierarchy: 1. View My Work, 2. Let's Work Together, 3. Download CV) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
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
                icon={<Mail className="w-4 h-4" />}
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
            </div>
          </motion.div>

          {/* Right Profile & Tech Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Animated Gradient Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-red-600 via-amber-500 to-blue-600 opacity-75 blur-md animate-pulse" />

              {/* Main Card Wrapper */}
              <div className="relative w-full h-full rounded-3xl bg-slate-950 border border-slate-800 p-2 overflow-hidden shadow-2xl flex flex-col justify-between">

                {/* Profile Image or Stylized Developer Avatar Placeholder */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-6 text-center group">
                  {!imgError ? (
                    <img
                      src="/images/profile/ahmed.jpg"
                      alt={name}
                      onError={() => setImgError(true)}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  {/* Fallback Developer Profile Visual */}
                  {imgError && (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 p-1 shadow-lg shadow-red-500/30">
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                          <User className="w-12 h-12 text-slate-200" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {name}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-1">
                          Flutter Developer & Security
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-xs text-left">
                        <p className="text-emerald-400">$ whoami</p>
                        <p className="text-slate-300">Ahmed Elmansy</p>
                        <p className="text-red-400 mt-1">$ cat stack.txt</p>
                        <p className="text-slate-300">Flutter, Python, Security, AI</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay Badges floating on card corners */}
                  <div className="absolute top-3 left-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-red-500 shadow-lg">
                    <Code2 className="w-4 h-4" />
                  </div>

                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-amber-500 shadow-lg">
                    <Lock className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-blue-500 shadow-lg">
                    <Cpu className="w-4 h-4" />
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
