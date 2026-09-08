'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/socials';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Github,
  ExternalLink,
  Shield,
  Info,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { language, t, isRtl } = useTranslation();
  const galleryImages = project.images && project.images.length > 0 ? project.images : [project.image];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageErrorMap, setImageErrorMap] = useState<{ [key: number]: boolean }>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const title = language === 'ar' ? project.titleAr : project.title;
  const description = language === 'ar' ? project.descriptionAr : project.description;
  const category = language === 'ar' ? project.categoryAr : project.category;
  const features = language === 'ar' ? project.features.ar : project.features.en;

  const handleImageError = (index: number) => {
    setImageErrorMap((prev) => ({ ...prev, [index]: true }));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Back Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft className={cn("w-4 h-4 transition-transform group-hover:-translate-x-1", isRtl && "rotate-180 group-hover:translate-x-1")} />
              <span>{language === 'ar' ? 'العودة للمشاريع' : 'Back to Projects'}</span>
            </Link>

            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              {category}
            </span>
          </div>

          {/* Title Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  {t.projects.featuredBadge}
                </span>
              )}
              <Badge variant="red" size="sm" icon={<Shield className="w-3 h-3" />}>
                {category}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* MAIN SCREENSHOT GALLERY CAROUSEL */}
          <div className="mb-12 rounded-3xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden">

            {/* Active Image Showcase Box */}
            <div className="relative w-full h-[320px] sm:h-[480px] md:h-[560px] rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center group">
              {!imageErrorMap[activeImageIndex] ? (
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${title} screenshot ${activeImageIndex + 1}`}
                  onError={() => handleImageError(activeImageIndex)}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              ) : (
                /* Fallback Image Box when file isn't uploaded yet */
                <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-800 text-red-500 border border-slate-700">
                    <ImageIcon className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Screenshot #{activeImageIndex + 1}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 max-w-md">
                    Place image file at: <br />
                    <span className="text-red-400">{galleryImages[activeImageIndex]}</span>
                  </p>
                </div>
              )}

              {/* Navigation Overlay Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-slate-950/80 hover:bg-red-600 text-white border border-slate-800 transition-colors shadow-lg opacity-80 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-slate-950/80 hover:bg-red-600 text-white border border-slate-800 transition-colors shadow-lg opacity-80 group-hover:opacity-100 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Fullscreen Zoom Trigger */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Zoom</span>
              </button>

              {/* Image Counter Badge */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                {activeImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {galleryImages.length > 1 && (
              <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={cn(
                      "relative w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-slate-900",
                      activeImageIndex === idx
                        ? "border-red-500 ring-2 ring-red-500/30 scale-105"
                        : "border-slate-800 opacity-60 hover:opacity-100"
                    )}
                  >
                    {!imageErrorMap[idx] ? (
                      <img
                        src={img}
                        alt={`Thumb ${idx + 1}`}
                        onError={() => handleImageError(idx)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] font-mono text-slate-400">
                        #{idx + 1}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PROJECT DETAILS & FEATURES GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-8">

              {/* Important Implementation Note if available */}
              {project.importantNote && (
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-amber-600 dark:text-amber-400 mb-1">
                        {t.projects.importantDetails}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {language === 'ar' ? project.importantNote.ar : project.importantNote.en}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t.projects.keyFeatures}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">

              {/* Technologies Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="red" size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Repository & External Actions Card */}
              <div className="p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Project Actions
                </h3>

                <div className="space-y-3">
                  {project.githubUrl ? (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      variant="primary"
                      size="md"
                      className="w-full"
                      icon={<Github className="w-4 h-4" />}
                    >
                      {t.projects.viewGithub}
                    </Button>
                  ) : (
                    <div className="p-3 rounded-xl bg-slate-900 text-xs text-slate-400 italic text-center border border-slate-800">
                      Private Repository / Institutional Demo
                    </div>
                  )}

                  <Button
                    href="/#contact"
                    variant="outline"
                    size="md"
                    className="w-full"
                  >
                    Inquire About This Solution
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 sm:p-8">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-3 rounded-2xl bg-slate-900 text-white border border-slate-800 hover:bg-red-600 transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
              {!imageErrorMap[activeImageIndex] ? (
                <img
                  src={galleryImages[activeImageIndex]}
                  alt="Zoomed view"
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              ) : (
                <div className="text-white text-center font-mono">
                  Image #{activeImageIndex + 1} Placeholder
                </div>
              )}

              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 p-3 rounded-2xl bg-slate-900/80 text-white border border-slate-800 hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 p-3 rounded-2xl bg-slate-900/80 text-white border border-slate-800 hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
