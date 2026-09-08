'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Terminal } from 'lucide-react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if splash was already shown in this session
    const splashShown = sessionStorage.getItem('splash_shown');

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (splashShown || prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('splash_shown', 'true');
      onComplete?.();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070D] text-white overflow-hidden select-none"
        >
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg">

            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-red-600 p-0.5 shadow-xl shadow-cyan-500/20 mb-6"
            >
              <div className="w-full h-full bg-[#05070D] rounded-[14px] flex items-center justify-center">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
            </motion.div>

            {/* Name Reveal */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden mb-3"
            >
              <h1 className="text-3xl sm:text-4xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-slate-400">
                AHMED ELMANSY
              </h1>

              {/* Scanning Beam Bar */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 pointer-events-none"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-8"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Flutter Developer • Cybersecurity • AI</span>
            </motion.div>

            {/* Progress Bar Ticker */}
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-red-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
