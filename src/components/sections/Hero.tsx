'use client';

import { useEffect, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Linkedin, Phone } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { siteConfig } from '@/config/site';

const ParticleBackground = lazy(() =>
  import('@/components/ui/ParticleBackground').then((mod) => ({
    default: mod.ParticleBackground,
  }))
);

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const nameChars = siteConfig.name.split('');

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 glassmorphism-light rounded-full animate-float"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm text-slate-300 font-medium">Open to Opportunities</span>
        </motion.div>

        {/* Name - character by character animation */}
        <div className="mb-6 overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.03,
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="inline-block gradient-text-animate"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-300 mb-4 font-medium"
        >
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticButton
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-accent-500 to-violet-500 text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-shadow"
          >
            <Mail size={20} className="mr-2" />
            Get in Touch
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl border border-white/20 text-white hover:border-accent-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all"
          >
            View My Work
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Mail, label: 'Email', href: `mailto:${siteConfig.email}` },
            { icon: Phone, label: 'Call', href: `tel:${siteConfig.phone}` },
            { icon: Linkedin, label: 'LinkedIn', href: `https://${siteConfig.linkedin}`, external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center text-slate-400 hover:text-accent-400 transition-all group"
            >
              <link.icon
                size={20}
                className="mr-2 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all"
              />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-slate-500 hover:text-accent-400 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
}
