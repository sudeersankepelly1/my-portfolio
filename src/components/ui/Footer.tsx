'use client';

import { Mail, Linkedin, MapPin, Github } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Gradient divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-display font-semibold gradient-text mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {siteConfig.title}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center text-slate-400 hover:text-accent-400 transition-colors group"
              >
                <Mail size={16} className="mr-2 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                {siteConfig.email}
              </a>
              <a
                href={`https://${siteConfig.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-400 hover:text-accent-400 transition-colors group"
              >
                <Linkedin size={16} className="mr-2 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                LinkedIn
              </a>
              <div className="flex items-center text-slate-400">
                <MapPin size={16} className="mr-2" />
                {siteConfig.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Full Stack Engineer with 13 years of experience building enterprise applications.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
