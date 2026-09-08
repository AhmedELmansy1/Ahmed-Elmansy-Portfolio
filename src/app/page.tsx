'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { GithubSection } from '@/components/sections/GithubSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { SplashScreen } from '@/components/ui/SplashScreen';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { Toast } from '@/components/ui/Toast';

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenPalette = () => setPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpenPalette);
    return () => window.removeEventListener('open-command-palette', handleOpenPalette);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <SplashScreen />
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <PricingSection />
      <GithubSection />
      <ContactSection />
      <Footer />

      {/* Interactive Command Palette (Ctrl + K) & Toast */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onCopyNotice={(msg) => triggerToast(msg)}
      />
      <Toast message={toastMessage} />
    </main>
  );
}
