'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Terminal } from 'lucide-react';

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
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Blue x Gold Ambient Glow */}
          <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg">

            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5C542] via-[#3B82F6] to-[#EF4444] p-0.5 shadow-xl shadow-[#F5C542]/20 mb-6"
            >
              <div className="w-full h-full bg-[#05070D] rounded-[14px] flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#F5C542]" />
              </div>
            </motion.div>

            {/* Name Reveal with Gold Accent */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden mb-3"
            >
              <h1 className="text-3xl sm:text-4xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F5C542] via-white to-[#3B82F6]">
                AHMED ELMANSY
              </h1>

              {/* Gold Scanning Beam Bar */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#F5C542] to-transparent opacity-80 pointer-events-none"
              />
            </motion.div>

            {/* Subtitle Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080B14] border border-[#F5C542]/30 text-[#F5C542] font-mono text-xs font-semibold mb-8"
            >
              <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Flutter Developer • Cybersecurity • AI</span>
            </motion.div>

            {/* Gold x Blue Progress Ticker */}
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[#F5C542] via-[#3B82F6] to-[#EF4444]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
