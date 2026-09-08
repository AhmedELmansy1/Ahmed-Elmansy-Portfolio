'use client';

import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const savedSound = localStorage.getItem('sound_enabled');
    if (savedSound === 'true') {
      setSoundEnabled(true);
    }
  }, []);

  const playFuturisticChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime); // C5 soft chime
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5 chime

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // AudioContext not allowed or supported
    }
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    localStorage.setItem('sound_enabled', String(nextState));

    if (nextState) {
      playFuturisticChime();
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleSound}
      aria-label="Toggle audio feedback"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 border border-slate-300 dark:border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      {soundEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-semibold hidden md:inline">Audio On</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-xs font-semibold hidden md:inline">Muted</span>
        </>
      )}
    </motion.button>
  );
}
