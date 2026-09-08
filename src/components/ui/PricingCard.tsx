'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PricingPlan } from '@/types';
import { useTranslation } from '@/hooks/useTranslation';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  plan: PricingPlan;
  onContactClick: () => void;
}

export function PricingCard({ plan, onContactClick }: PricingCardProps) {
  const { language, t } = useTranslation();

  const title = language === 'ar' ? plan.serviceNameAr : plan.serviceName;
  const description = language === 'ar' ? plan.descriptionAr : plan.description;
  const features = language === 'ar' ? plan.features.ar : plan.features.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-[#0A1020] border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300",
        plan.popular && "border-[#F5C542] dark:border-[#F5C542]/60 ring-2 ring-[#F5C542]/20 shadow-xl shadow-[#F5C542]/10"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#F5C542] via-[#3B82F6] to-[#EF4444] text-white shadow-lg">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            {t.pricing.popular}
          </span>
        </div>
      )}

      <div>
        {/* Service Name */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
          {title}
        </h3>

        {/* Starting Price Header */}
        <div className="mb-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#05070D] border border-slate-200/80 dark:border-slate-800">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono block">
            {t.pricing.startingFrom}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-[#F5C542]">
              {plan.priceUsd}
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              / {plan.priceEgp}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {description}
        </p>

        {/* Included Features */}
        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-0.5 rounded-full bg-cyan-500/10 text-cyan-400 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={onContactClick}
        variant={plan.popular ? 'primary' : 'outline'}
        size="sm"
        className="w-full"
      >
        <span>{t.pricing.getQuote}</span>
      </Button>
    </motion.div>
  );
}
