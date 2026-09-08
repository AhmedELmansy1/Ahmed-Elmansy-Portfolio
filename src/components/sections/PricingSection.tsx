'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { pricingPlans } from '@/data/pricing';
import { PricingCard } from '@/components/ui/PricingCard';
import { Info } from 'lucide-react';

export function PricingSection() {
  const { t } = useTranslation();

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Investment Matrix"
          title={t.pricing.sectionTitle}
          subtitle={t.pricing.sectionSubtitle}
        />

        {/* Disclaimer Callout Box */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-[#0A1020] border border-slate-800 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
          <Info className="w-4 h-4 text-[#3B82F6] shrink-0" />
          <span>{t.pricing.disclaimer}</span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onContactClick={handleContactClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
