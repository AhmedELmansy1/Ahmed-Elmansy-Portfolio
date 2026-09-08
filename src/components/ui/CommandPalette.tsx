'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/socials';
import {
  Search,
  Terminal,
  FolderGit2,
  User,
  Shield,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Download,
  Copy,
  Check,
  Github,
  Linkedin,
  MessageSquare,
  Volume2,
  Languages,
  X,
  Sparkles
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyNotice?: (text: string) => void;
}

export function CommandPalette({ isOpen, onClose, onCopyNotice }: CommandPaletteProps) {
  const { t, language } = useTranslation();
  const [query, setQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open palette
          window.dispatchEvent(new CustomEvent('open-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    if (onCopyNotice) {
      onCopyNotice(`${label} copied to clipboard!`);
    }
    setTimeout(() => setCopiedText(null), 2000);
  };

  const actions = [
    {
      id: 'projects',
      label: language === 'ar' ? 'الانتقال لقسم المشاريع' : 'Navigate to Projects',
      icon: <FolderGit2 className="w-4 h-4 text-[#3B82F6]" />,
      perform: () => navigateTo('projects'),
    },
    {
      id: 'about',
      label: language === 'ar' ? 'نبذة عن أحمد المنسي' : 'Navigate to About Me',
      icon: <User className="w-4 h-4 text-[#F5C542]" />,
      perform: () => navigateTo('about'),
    },
    {
      id: 'skills',
      label: language === 'ar' ? 'استعراض المهارات والتقنيات' : 'Navigate to Technical Skills',
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
      perform: () => navigateTo('skills'),
    },
    {
      id: 'experience',
      label: language === 'ar' ? 'الخبرة البرمجية والمشاريع' : 'Navigate to Development Experience',
      icon: <Briefcase className="w-4 h-4 text-violet-400" />,
      perform: () => navigateTo('experience'),
    },
    {
      id: 'education',
      label: language === 'ar' ? 'المؤهل الأكاديمي والتقدير' : 'Navigate to Academic Education',
      icon: <GraduationCap className="w-4 h-4 text-[#F5C542]" />,
      perform: () => navigateTo('education'),
    },
    {
      id: 'contact',
      label: language === 'ar' ? 'التواصل المباشر' : 'Navigate to Contact Section',
      icon: <Mail className="w-4 h-4 text-[#EF4444]" />,
      perform: () => navigateTo('contact'),
    },
    {
      id: 'copy-email',
      label: language === 'ar' ? 'نسخ البريد الإلكتروني' : 'Copy Email Address',
      icon: <Copy className="w-4 h-4 text-cyan-400" />,
      perform: () => handleCopy(personalInfo.email, 'Email'),
    },
    {
      id: 'copy-phone',
      label: language === 'ar' ? 'نسخ رقم الهاتف' : 'Copy Phone Number',
      icon: <Copy className="w-4 h-4 text-emerald-400" />,
      perform: () => handleCopy(personalInfo.phone, 'Phone'),
    },
    {
      id: 'download-cv',
      label: language === 'ar' ? 'تحميل السيرة الذاتية PDF' : 'Download CV Document',
      icon: <Download className="w-4 h-4 text-[#F5C542]" />,
      perform: () => {
        onClose();
        const a = document.createElement('a');
        a.href = personalInfo.cvPath;
        a.download = 'Ahmed-Elmansy-CV.pdf';
        a.click();
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      icon: <Github className="w-4 h-4 text-white" />,
      perform: () => {
        onClose();
        window.open(personalInfo.githubUrl, '_blank');
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      icon: <Linkedin className="w-4 h-4 text-[#3B82F6]" />,
      perform: () => {
        onClose();
        window.open(personalInfo.linkedinUrl, '_blank');
      },
    },
    {
      id: 'whatsapp',
      label: 'Open WhatsApp Chat',
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        onClose();
        window.open(personalInfo.whatsappUrl, '_blank');
      },
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.label.toLowerCase().includes(query.toLowerCase()) ||
    act.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#030712]/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#080B14] border border-[#F5C542]/40 shadow-2xl shadow-[#F5C542]/10 overflow-hidden z-10 flex flex-col"
        >
          {/* Search Header Input */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-800 bg-[#05070D]">
            <Search className="w-5 h-5 text-[#F5C542] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={language === 'ar' ? 'اكتب أمراً أو ابحث عن قسم...' : 'Type a command or search sections (Ctrl + K)...'}
              className="w-full bg-transparent text-sm text-white focus:outline-none font-mono placeholder-slate-500"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action List */}
          <div className="p-3 max-h-80 overflow-y-auto space-y-1 scrollbar-thin">
            {filteredActions.length > 0 ? (
              filteredActions.map((act) => (
                <button
                  key={act.id}
                  onClick={act.perform}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#0A1020]/60 hover:bg-[#1E293B] border border-transparent hover:border-[#3B82F6]/30 text-xs sm:text-sm text-slate-200 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#030712] border border-slate-800 group-hover:border-[#F5C542]/40">
                      {act.icon}
                    </div>
                    <span className="font-semibold group-hover:text-white transition-colors">
                      {act.label}
                    </span>
                  </div>

                  {copiedText === act.id && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  )}
                </button>
              ))
            ) : (
              <div className="p-8 text-center text-xs font-mono text-slate-500">
                No matching commands found.
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 border-t border-slate-800 bg-[#05070D] flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Command Palette Active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">ESC</span>
              <span>to close</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
