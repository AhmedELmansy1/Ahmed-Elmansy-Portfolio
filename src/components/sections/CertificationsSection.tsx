'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { certificationsData } from '@/data/certifications';
import { CertificationCard } from '@/components/ui/CertificationCard';

export function CertificationsSection() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-20 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title={t.certifications.sectionTitle}
          subtitle={t.certifications.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
