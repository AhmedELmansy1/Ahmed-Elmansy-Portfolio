'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { servicesData } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';

export function ServicesSection() {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Solutions"
          title={t.services.sectionTitle}
          subtitle={t.services.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onContactClick={handleContactClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
