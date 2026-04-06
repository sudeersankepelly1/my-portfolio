'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '@/config/site';
import { GlowCard } from '@/components/ui/GlowCard';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-slate-400 mb-16">
            13 years across government, consulting, and enterprise product development.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-white/[0.05]">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-500 to-violet-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-6 z-10">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-accent-400" />
                    {index === 0 && (
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent-400 animate-ping opacity-75" />
                    )}
                  </div>
                </div>

                <GlowCard className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {index === 0 && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-accent-400 mt-1 md:mt-0">
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center text-slate-300 mb-2">
                    <Briefcase size={16} className="mr-2 text-slate-500" />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <div className="flex items-center text-slate-400">
                    <MapPin size={16} className="mr-2 text-slate-500" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
