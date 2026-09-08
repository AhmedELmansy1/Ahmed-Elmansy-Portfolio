'use client';

import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Dark Base Gradient */}
      <div className="absolute inset-0 bg-[#05070D] dark:bg-[#05070D]" />

      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Glow Lights */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-violet-600/10 via-blue-600/5 to-transparent blur-3xl rounded-full" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-gradient-radial from-red-600/5 via-amber-500/3 to-transparent blur-3xl rounded-full" />

      {/* Slow Scanning Laser Line */}
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-scan-line opacity-40" />
    </div>
  );
}
