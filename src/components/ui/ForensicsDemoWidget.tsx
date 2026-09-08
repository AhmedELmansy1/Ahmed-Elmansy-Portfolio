'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Shield, Sparkles, Activity, Lock, CheckCircle2, Eye, FileText, Cpu, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ForensicsDemoWidget() {
  const { language } = useTranslation();
  const [selectedSample, setSelectedSample] = useState<'image' | 'audio' | 'video'>('image');
  const [analyzing, setAnalyzing] = useState(false);
  const [scanned, setScanned] = useState(true);

  const samples = {
    image: {
      title: language === 'ar' ? 'فحص تزوير صورة (Image ELA)' : 'Image Forgery Scan (ELA)',
      model: 'ResNet-50 + EfficientNet',
      heatmap: 'Grad-CAM Heatmap Active',
      hash: 'SHA256: 8f4e2a1b90c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9',
      score: '98.6%',
      status: language === 'ar' ? 'تم كشف تلاعب بالصورة' : 'Manipulation Detected (Forged)',
      statusColor: 'text-[#EF4444]',
      details: language === 'ar'
        ? 'تم اكتشاف تباين في مستوى الخطأ (ELA) ونسب الضوضاء الرقمية في الجزء الأيمن علوي من الصورة.'
        : 'Error Level Analysis (ELA) detected pixel noise compression variance in top-right quadrant.'
    },
    audio: {
      title: language === 'ar' ? 'فحص تزييف صوتي (Audio Deepfake)' : 'Audio Deepfake Analysis',
      model: 'AASIST + XLS-R Spectrogram',
      heatmap: 'Spectral Frequency Feature Map',
      hash: 'SHA256: 3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2',
      score: '96.2%',
      status: language === 'ar' ? 'صوت مصنع بالذكاء الاصطناعي (Deepfake)' : 'Synthetic AI Voice Detected',
      statusColor: 'text-[#EF4444]',
      details: language === 'ar'
        ? 'تحليل الطيف الصوتي (MFCC) يوضح انقطاع القمم الصوتية الطبيعية ومؤشرات صوت اصطناعي.'
        : 'MFCC spectral representation identified unnatural voice harmonics and synthetic neural vocoder artifacts.'
    },
    video: {
      title: language === 'ar' ? 'فحص إطارات الفيديو (Video Frame Audit)' : 'Video Frame Integrity Audit',
      model: '3D-CNN + FFmpeg Frame Extractor',
      heatmap: 'Temporal Frame Inconsistency Map',
      hash: 'SHA256: 7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1d0c9b8a7f6',
      score: '99.1%',
      status: language === 'ar' ? 'تم كشف استبدال الوجه (Deepface Swap)' : 'Facial Swap (Deepface) Detected',
      statusColor: 'text-[#EF4444]',
      details: language === 'ar'
        ? 'تم اكتشاف بعد زمني غير متناسق وتشويه ضوئي في حواف الإطارات رقم 120 إلى 240.'
        : '3D-CNN temporal continuity scanner identified boundary blur artifacts on frames 120-240.'
    }
  };

  const handleSelectSample = (type: 'image' | 'audio' | 'video') => {
    setSelectedSample(type);
    setAnalyzing(true);
    setScanned(false);

    setTimeout(() => {
      setAnalyzing(false);
      setScanned(true);
    }, 600);
  };

  const sample = samples[selectedSample];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#030712] border border-[#F5C542]/40 shadow-2xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-white">
              {language === 'ar' ? 'المحاكي التفاعلي للأدلة الجنائية (Live Forensics Simulator)' : 'Interactive Forensics Live Simulator'}
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              {language === 'ar' ? 'اختبر نماذج الفحص الجنائي الحية' : 'Test live evidence analysis neural models'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>MODEL ONLINE</span>
        </span>
      </div>

      {/* Sample Selector Tabs */}
      <div className="grid grid-cols-3 gap-2">
        {(['image', 'audio', 'video'] as const).map((type) => (
          <button
            key={type}
            onClick={() => handleSelectSample(type)}
            className={cn(
              "py-2.5 px-3 rounded-2xl text-xs font-bold font-mono transition-all cursor-pointer border text-center capitalize",
              selectedSample === type
                ? "bg-gradient-to-r from-[#F5C542] via-[#3B82F6] to-[#EF4444] text-white border-transparent shadow-lg"
                : "bg-[#080B14] text-slate-400 border-slate-800 hover:text-white"
            )}
          >
            {type === 'image' && '📷 Image ELA'}
            {type === 'audio' && '🎙️ Audio Spectral'}
            {type === 'video' && '🎬 Video Audit'}
          </button>
        ))}
      </div>

      {/* Dynamic Simulation Box */}
      <div className="p-5 rounded-2xl bg-[#080B14] border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-[#F5C542] font-bold">{sample.title}</span>
          <span className="text-[#3B82F6]">{sample.model}</span>
        </div>

        {analyzing ? (
          <div className="py-8 flex flex-col items-center justify-center space-y-2 text-xs font-mono text-cyan-400">
            <Sparkles className="w-6 h-6 animate-spin text-[#F5C542]" />
            <span>Analyzing evidence tensor layers...</span>
          </div>
        ) : (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#05070D] border border-slate-800/80 flex items-center justify-between">
              <span className="text-slate-400">AI Confidence Rating</span>
              <span className="text-emerald-400 font-bold">{sample.score} Score</span>
            </div>

            <div className="p-3 rounded-xl bg-[#05070D] border border-slate-800/80 flex items-center justify-between">
              <span className="text-slate-400">Status Assessment</span>
              <span className={cn("font-bold flex items-center gap-1.5", sample.statusColor)}>
                <AlertTriangle className="w-3.5 h-3.5" />
                {sample.status}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#05070D] border border-slate-800/80 text-slate-300 leading-relaxed text-[11px]">
              {sample.details}
            </div>

            <div className="p-3 rounded-xl bg-[#05070D] border border-slate-800/80 text-[10px] text-slate-400 break-all">
              <span className="text-[#F5C542] block font-bold mb-0.5">CRYPTOGRAPHIC EVIDENCE INTEGRITY:</span>
              <span>{sample.hash}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
