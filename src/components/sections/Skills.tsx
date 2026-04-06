'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/config/site';
import { SKILL_CATEGORY_CONFIG } from '@/lib/constants';
import { GlowCard } from '@/components/ui/GlowCard';

const categoryOrder = ['core', 'frontend', 'backend', 'cloud', 'tools'] as const;

function OrbitVisualization() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(800);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setSize(Math.min(w, 800));
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const center = size / 2;
  const scale = size / 800;

  return (
    <div ref={containerRef} className="w-full max-w-[800px] mx-auto mb-16">
      <div className="relative" style={{ width: size, height: size, margin: '0 auto' }}>
        {/* Central Hub */}
        <div
          className="absolute z-20 flex items-center justify-center"
          style={{
            left: center - 40 * scale,
            top: center - 40 * scale,
            width: 80 * scale,
            height: 80 * scale,
          }}
        >
          <div className="w-full h-full rounded-full bg-surface border border-accent-500/30 flex items-center justify-center animate-glow-pulse">
            <span className="text-xs md:text-sm font-display font-bold gradient-text text-center leading-tight">
              Full<br />Stack
            </span>
          </div>
        </div>

        {/* Orbital Rings & Skill Nodes */}
        {categoryOrder.map((catKey, ringIndex) => {
          const config = SKILL_CATEGORY_CONFIG[catKey];
          const catSkills = skills.filter((s) => s.category === catKey);
          const radius = config.radius * scale;
          const isHighlighted = hoveredCategory === catKey || hoveredCategory === null;

          return (
            <div key={catKey} className="absolute inset-0">
              {/* Ring */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: isHighlighted ? 0.3 : 0.08,
                  transition: 'opacity 0.3s',
                }}
              >
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={config.color}
                  strokeWidth={1}
                  strokeDasharray="4 6"
                />
              </svg>

              {/* Category label */}
              <div
                className="absolute text-[10px] md:text-xs font-medium transition-opacity duration-300"
                style={{
                  left: center + radius + 8,
                  top: center - 8,
                  color: config.color,
                  opacity: isHighlighted ? 0.7 : 0.2,
                }}
              >
                {config.label}
              </div>

              {/* Rotating container */}
              <div
                className="absolute inset-0"
                style={{
                  animation: `spin ${config.speed}s linear infinite${ringIndex % 2 === 1 ? ' reverse' : ''}`,
                }}
              >
                {catSkills.map((skill, i) => {
                  const angle = (i / catSkills.length) * Math.PI * 2 - Math.PI / 2;
                  const x = center + Math.cos(angle) * radius;
                  const y = center + Math.sin(angle) * radius;
                  const nodeSize = skill.proficiency === 'expert' ? 36 : skill.proficiency === 'advanced' ? 30 : 24;
                  const isHovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      className="absolute group"
                      style={{
                        left: x - (nodeSize * scale) / 2,
                        top: y - (nodeSize * scale) / 2,
                        width: nodeSize * scale,
                        height: nodeSize * scale,
                      }}
                      onMouseEnter={() => {
                        setHoveredSkill(skill.name);
                        setHoveredCategory(catKey);
                      }}
                      onMouseLeave={() => {
                        setHoveredSkill(null);
                        setHoveredCategory(null);
                      }}
                    >
                      {/* Counter-rotate to keep text readable */}
                      <div
                        className="w-full h-full"
                        style={{
                          animation: `spin ${config.speed}s linear infinite${ringIndex % 2 === 1 ? '' : ' reverse'}`,
                        }}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300 cursor-default"
                          style={{
                            background: isHovered
                              ? `${config.color}30`
                              : 'rgba(10,10,26,0.8)',
                            border: `1px solid ${isHovered ? config.color : 'rgba(255,255,255,0.1)'}`,
                            boxShadow: isHovered
                              ? `0 0 20px ${config.color}40`
                              : 'none',
                            transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                          }}
                          aria-label={`${skill.name} - ${skill.proficiency}`}
                        >
                          <span
                            className="text-[7px] md:text-[9px] font-medium text-center leading-tight px-1 transition-colors duration-300"
                            style={{ color: isHovered ? config.color : 'rgba(255,255,255,0.6)' }}
                          >
                            {skill.name.length > 8 ? skill.name.split(' ')[0] : skill.name}
                          </span>
                        </div>

                        {/* Tooltip */}
                        {isHovered && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 glassmorphism rounded-lg text-xs whitespace-nowrap z-50 pointer-events-none">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-slate-400 ml-2">{skill.proficiency}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillBar({ name, percent, color, delay, inView }: {
  name: string;
  percent: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className="text-slate-500">{percent}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
          style={{
            background: `linear-gradient(90deg, ${color}, #8b5cf6)`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-100px' });

  const groupedSkills = categoryOrder.map((category) => ({
    category,
    config: SKILL_CATEGORY_CONFIG[category],
    skills: skills.filter((s) => s.category === category),
  }));

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern-bg opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-400">
            Deep expertise in enterprise .NET development, modern web technologies, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Orbit Visualization - hidden on mobile */}
        <div className="hidden md:block">
          <OrbitVisualization />
        </div>

        {/* Skill Bars Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedSkills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
            >
              <GlowCard glowColor={`${group.config.color}20`} className="p-6 h-full">
                <h3
                  className="text-lg font-display font-bold mb-6 pb-3 border-b border-white/[0.05]"
                  style={{ color: group.config.color }}
                >
                  {group.config.label}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      percent={skill.proficiencyPercent}
                      color={group.config.color}
                      delay={groupIndex * 0.1 + i * 0.05}
                      inView={gridInView}
                    />
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Additional expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12"
        >
          <GlowCard className="p-8">
            <h3 className="text-lg font-display font-semibold text-white mb-6">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-300/80">
              {[
                'Legacy system modernization & migration strategies',
                'Federal compliance & government sector experience',
                'Performance optimization & database tuning',
                'Team leadership & remote collaboration',
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-accent-400 mr-2 mt-1">&#x2022;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
