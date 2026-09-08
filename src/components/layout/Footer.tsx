'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/socials';
import { Shield, Github, Mail, Linkedin, MapPin, Phone, ArrowUp, MessageSquare } from 'lucide-react';

export function Footer() {
  const { t, language } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Top subtle cyan glow bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-red-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#05070D] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  {language === 'ar' ? personalInfo.nameAr : personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {language === 'ar' ? personalInfo.heroShortIdentityAr : personalInfo.heroShortIdentity}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {language === 'ar' ? personalInfo.supportingLineAr : personalInfo.supportingLine}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{language === 'ar' ? personalInfo.locationAr : personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub ({personalInfo.githubUsername})</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp ({personalInfo.phone})</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.rights}</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
