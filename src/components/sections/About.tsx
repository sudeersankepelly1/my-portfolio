'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutSection } from '@/config/site';
import { STATS } from '@/lib/constants';
import { GlowCard } from '@/components/ui/GlowCard';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern-bg opacity-50" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full bg-accent-500/10 blur-[100px]" />
      <div className="absolute bottom-0 -left-32 w-64 h-64 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {aboutSection.headline}
          </h2>
          <p className="text-xl text-slate-300 mb-12 font-medium">
            {aboutSection.subheadline}
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {aboutSection.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-lg text-slate-300/80 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlowCard className="p-6 text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-slate-400 mt-2 font-medium">
                  {stat.label}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
