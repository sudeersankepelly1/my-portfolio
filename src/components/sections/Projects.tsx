'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { GlowCard } from '@/components/ui/GlowCard';
import { projects } from '@/config/site';

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index, isFeatured }: {
  project: typeof projects[0];
  index: number;
  isFeatured: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={isFeatured && index === 0 ? 'md:col-span-2' : ''}
    >
      <TiltCard>
        <GlowCard className="p-8 h-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20">
              {project.period}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {project.title}
          </h3>
          <div className="text-sm text-slate-400 mb-1">{project.role}</div>
          <div className="text-sm text-slate-500 mb-6">{project.organization}</div>

          {/* Challenge & Solution - collapsible */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 transition-colors mb-4"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.div>
            {isExpanded ? 'Show less' : 'View details'}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                      Challenge
                    </h4>
                    <p className="text-slate-300/80 leading-relaxed text-sm">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                      Solution
                    </h4>
                    <p className="text-slate-300/80 leading-relaxed text-sm">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Impact */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
              Impact
            </h4>
            <ul className="space-y-2">
              {project.impact.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle size={16} className="text-accent-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300/80 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full glassmorphism-light text-slate-300 hover:text-accent-400 hover:border-accent-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlowCard>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern-bg opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 mb-16">
            Selected work that demonstrates technical depth and business impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={true}
            />
          ))}
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={featuredProjects.length + index}
              isFeatured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
