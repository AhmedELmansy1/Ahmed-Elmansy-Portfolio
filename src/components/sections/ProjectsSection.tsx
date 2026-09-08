'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { ForensicsDemoWidget } from '@/components/ui/ForensicsDemoWidget';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Shield, Sparkles, CheckCircle2, Lock, ArrowRight, Activity, Terminal, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const { t, language, isRtl } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'flutter' | 'ai' | 'desktop'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsData.find((p) => p.id === 'ai-forensics');

  const filteredProjects = projectsData.filter((p) => {
    const matchesFilter = filter === 'all'
      ? true
      : filter === 'flutter'
      ? p.category.includes('Flutter')
      : filter === 'ai'
      ? p.category.includes('AI') || p.category.includes('Forensics')
      : p.category.includes('Desktop');

    const matchesSearch = searchQuery === ''
      || p.title.toLowerCase().includes(searchQuery.toLowerCase())
      || p.titleAr.includes(searchQuery)
      || p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const gridProjects = filter === 'all' && searchQuery === ''
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
    <section id="projects" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Portfolio"
          title={t.projects.sectionTitle}
          subtitle={t.projects.sectionSubtitle}
        />

        {/* Filter Tabs & Tech Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2">
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
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer',
                  filter === tab.id
                    ? 'bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#F5C542] text-white shadow-xl shadow-blue-500/20 border border-blue-400'
                    : 'bg-[#0A1020] text-slate-300 border border-slate-800 hover:border-[#3B82F6]/50'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Real-time Tech Stack Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#F5C542] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ar' ? 'بحث بالتقنية (PyTorch, BLoC...)' : 'Search tech (PyTorch, BLoC...)'}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0A1020] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#F5C542]"
            />
          </div>
        </div>

        {/* FEATURED CASE STUDY SHOWCASE (AI-Powered Digital Forensics System) */}
        {(filter === 'all' || filter === 'ai') && searchQuery === '' && featuredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 rounded-3xl bg-[#07111F] text-white border-2 border-[#D4AF37]/50 hover:border-[#F5C542] shadow-2xl overflow-hidden relative group transition-all duration-500"
          >
            {/* Top Ambient Gold/Blue Light */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

              <div className="lg:col-span-7 space-y-6">
                {/* Header Pills */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#F5C542] via-[#3B82F6] to-[#EF4444] text-white shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                    {t.projects.featuredBadge}
                  </span>
                  <Badge variant="gold" size="sm" icon={<Shield className="w-3.5 h-3.5 text-[#F5C542]" />}>
                    AI • Digital Forensics • Cybersecurity
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                  <span className="text-[#F5C542]">{language === 'ar' ? featuredProject.titleAr : featuredProject.title}</span>
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {language === 'ar' ? featuredProject.descriptionAr : featuredProject.description}
                </p>

                {/* Core Forensic Capabilities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {forensicCaps.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#030712] border border-slate-800 text-xs font-mono text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#EF4444] shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
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

              {/* Graphic Feature Terminal & Simulator Widget Panel */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                <ForensicsDemoWidget />
              </div>

            </div>
          </motion.div>
        )}

        {/* Grid for Other Projects */}
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
