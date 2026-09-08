'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Shield, Sparkles, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const { t, language, isRtl } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'flutter' | 'ai' | 'desktop'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsData.find((p) => p.id === 'ai-forensics');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'flutter') return p.category.includes('Flutter');
    if (filter === 'ai') return p.category.includes('AI') || p.category.includes('Forensics');
    if (filter === 'desktop') return p.category.includes('Desktop');
    return true;
  });

  const gridProjects = filter === 'all'
    ? projectsData.filter((p) => p.id !== 'ai-forensics')
    : filteredProjects;

  const forensicCaps = language === 'ar' ? [
    'كشف تزوير وتعديل الصور',
    'كشف التزييف الصوتي العميق',
    'تحليل مقاطع الفيديو',
    'خرائط Grad-CAM الحرارية',
    'تحليل الطيف الصوتي',
    'تشفير الأدلة بـ SHA-256'
  ] : [
    'Image Forgery Detection',
    'Audio Deepfake Detection',
    'Video Analysis',
    'Grad-CAM Heatmaps',
    'Spectrogram Analysis',
    'SHA-256 Evidence Hashing'
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Portfolio"
          title={t.projects.sectionTitle}
          subtitle={t.projects.sectionSubtitle}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: t.projects.all },
            { id: 'flutter', label: t.projects.flutter },
            { id: 'ai', label: t.projects.ai },
            { id: 'desktop', label: t.projects.desktop },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
                filter === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/25 border border-red-500'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FEATURED DOMINANT SHOWCASE (Show when filter is 'all' or 'ai') */}
        {(filter === 'all' || filter === 'ai') && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 rounded-3xl bg-slate-950 text-white border border-slate-800 hover:border-red-500/50 shadow-2xl overflow-hidden relative group transition-all duration-300"
          >
            {/* Top Ambient Light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-7 space-y-5">
                {/* Header Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                    {t.projects.featuredBadge}
                  </span>
                  <Badge variant="red" size="sm" icon={<Shield className="w-3 h-3" />}>
                    AI • Digital Forensics • Cybersecurity
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {language === 'ar' ? featuredProject.titleAr : featuredProject.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {language === 'ar' ? featuredProject.descriptionAr : featuredProject.description}
                </p>

                {/* Core Forensic Capabilities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {forensicCaps.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredProject.technologies.slice(0, 8).map((tech, idx) => (
                    <Badge key={idx} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button
                    href={`/projects/${featuredProject.id}`}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className={cn("w-4 h-4", isRtl && "rotate-180")} />}
                    iconPosition="right"
                  >
                    {t.projects.viewDetails}
                  </Button>
                </div>
              </div>

              {/* Graphic Feature Panel */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 font-mono text-xs text-slate-300 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-red-500" />
                      <span>FORENSIC PIPELINE</span>
                    </span>
                    <span className="text-[10px] text-emerald-400">ACTIVE ANALYSIS</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                      <span>Image Analysis (ELA)</span>
                      <span className="text-amber-400">ResNet-50 / EfficientNet</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                      <span>Audio Deepfake</span>
                      <span className="text-cyan-400">AASIST / XLS-R</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                      <span>Explainable AI</span>
                      <span className="text-red-400">Grad-CAM Heatmaps</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                      <span>Evidence Cryptography</span>
                      <span className="text-emerald-400">SHA-256 Hashing</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Grid for Other / Filtered Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {gridProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
