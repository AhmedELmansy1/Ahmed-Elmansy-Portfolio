'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillsData } from '@/data/skills';
import { SkillCard } from '@/components/ui/SkillCard';

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Capabilities System"
          title={t.skills.sectionTitle}
          subtitle={t.skills.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
