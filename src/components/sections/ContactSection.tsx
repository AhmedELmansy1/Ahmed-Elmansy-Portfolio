'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/socials';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const { t, language } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#05070D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title={t.contact.sectionTitle}
          subtitle={t.contact.sectionSubtitle}
        />

        {/* Quick Contact Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button
            href={`mailto:${personalInfo.email}`}
            variant="primary"
            size="md"
            icon={<Mail className="w-4 h-4" />}
          >
            Email Me
          </Button>

          <Button
            href={personalInfo.whatsappUrl}
            target="_blank"
            variant="secondary"
            size="md"
            icon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
          >
            WhatsApp
          </Button>

          <Button
            href={personalInfo.linkedinUrl}
            target="_blank"
            variant="outline"
            size="md"
            icon={<Linkedin className="w-4 h-4 text-cyan-400" />}
          >
            LinkedIn
          </Button>

          <Button
            href={personalInfo.githubUrl}
            target="_blank"
            variant="outline"
            size="md"
            icon={<Github className="w-4 h-4" />}
          >
            GitHub
          </Button>

          <Button
            href={personalInfo.cvPath}
            download="Ahmed-Elmansy-CV.pdf"
            variant="secondary"
            size="md"
            icon={<Download className="w-4 h-4" />}
          >
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-[#080B12] text-white border border-slate-800 shadow-2xl space-y-5"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Direct Contact Details
            </h3>

            {/* Email Item */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#05070D] border border-slate-800 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-mono">{t.contact.emailLabel}</span>
                <span className="text-sm font-bold text-slate-100 truncate block group-hover:text-cyan-400 transition-colors">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* WhatsApp / Phone Item */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#05070D] border border-slate-800 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">WhatsApp &amp; Phone</span>
                <span className="text-sm font-bold text-slate-100 block group-hover:text-emerald-400 transition-colors">
                  {personalInfo.phone}
                </span>
              </div>
            </a>

            {/* LinkedIn Item */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#05070D] border border-slate-800 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-mono">LinkedIn Profile</span>
                <span className="text-sm font-bold text-slate-100 truncate block group-hover:text-indigo-400 transition-colors">
                  linkedin.com/in/ahmed-elmansy-a6b494346
                </span>
              </div>
            </a>

            {/* Location Item */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#05070D] border border-slate-800">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">{t.contact.locationLabel}</span>
                <span className="text-sm font-bold text-slate-100 block">
                  {language === 'ar' ? personalInfo.locationAr : personalInfo.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 dark:bg-[#0B1020]/90 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {t.contact.formTitle}
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 space-y-3 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500" />
                <h4 className="text-lg font-bold">Message Template Prepared</h4>
                <p className="text-sm leading-relaxed">
                  {t.contact.successMessage}
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.nameField} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#05070D] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.contact.emailField} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#05070D] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.subjectField} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Application Development"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#05070D] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.contact.messageField} *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project goals, scope, and timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#05070D] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<Send className="w-4 h-4" />}
                >
                  {t.contact.sendButton}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
