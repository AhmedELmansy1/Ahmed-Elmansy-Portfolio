'use client';

import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Deep Navy / Midnight Base */}
      <div className="absolute inset-0 bg-[#030712] dark:bg-[#030712]" />

      {/* Cyber Technical Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Glow Light Sources (60% Navy, 25% Blue, 10% Gold, 5% Red) */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-blue-600/12 via-blue-500/4 to-transparent blur-3xl rounded-full" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-gradient-radial from-[#F5C542]/8 via-amber-500/2 to-transparent blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-gradient-radial from-red-600/6 via-red-500/2 to-transparent blur-3xl rounded-full" />

      {/* Slow Laser Scanning Beam */}
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent animate-scan-line opacity-50" />
    </div>
  );
}
