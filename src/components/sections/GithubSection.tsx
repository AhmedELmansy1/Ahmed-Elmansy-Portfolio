'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/socials';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function GithubSection() {
  const { t } = useTranslation();

  const githubProjects = projectsData.filter((p) => p.githubUrl);

  return (
    <section id="github" className="py-20 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source Matrix"
          title={t.github.sectionTitle}
          subtitle={t.github.sectionSubtitle}
        />

        {/* Profile Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-3xl bg-[#080B14] text-white border border-slate-800 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F5C542] via-[#3B82F6] to-[#EF4444] p-0.5 shrink-0 shadow-lg shadow-blue-500/20">
              <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center">
                <Github className="w-8 h-8 text-[#F5C542]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  {personalInfo.githubUsername}
                </h3>
                <Badge variant="gold" size="sm">
                  Developer
                </Badge>
              </div>
              <p className="text-xs font-mono text-[#3B82F6] mt-1">
                Flutter • Python • Cybersecurity
              </p>
            </div>
          </div>

          <Button
            href={personalInfo.githubUrl}
            target="_blank"
            variant="primary"
            size="md"
            icon={<ExternalLink className="w-4 h-4" />}
          >
            {t.github.viewProfile}
          </Button>
        </motion.div>

        {/* Highlighted Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0A1020] border border-slate-200 dark:border-slate-800 hover:border-[#3B82F6]/50 shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
                    <FolderGit2 className="w-5 h-5 text-[#3B82F6]" />
                    <span>{project.title}</span>
                  </div>
                  <Badge variant="cyan" size="sm">
                    Public
                  </Badge>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant="slate" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.githubUrl && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    github.com/{personalInfo.githubUsername}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] hover:text-[#60A5FA] hover:underline"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
