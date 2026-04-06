'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { GlowCard } from '@/components/ui/GlowCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { siteConfig } from '@/config/site';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'View Profile',
    href: `https://${siteConfig.linkedin}`,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/5 blur-[120px]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-400">
            Open to discussing new opportunities and technical challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <GlowCard className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, i) => {
                const Wrapper = method.href ? 'a' : 'div';
                const wrapperProps = method.href
                  ? {
                      href: method.href,
                      ...(method.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }),
                    }
                  : {};

                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="flex items-start p-4 rounded-xl hover:bg-white/[0.03] transition-colors group"
                    >
                      <div className="p-3 rounded-xl glassmorphism-light group-hover:border-accent-500/30 transition-all group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        <method.icon
                          size={24}
                          className="text-accent-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-all"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                        <p className="text-slate-400 text-sm">{method.value}</p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-accent-500/20 to-transparent mb-8" />

            {/* CTA */}
            <div className="text-center">
              <p className="text-slate-400 mb-6">
                Prefer email? Send me a message directly:
              </p>
              <MagneticButton
                onClick={() => (window.location.href = `mailto:${siteConfig.email}`)}
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-accent-500 to-violet-500 text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-shadow"
              >
                <Send size={20} className="mr-2" />
                Send Email
              </MagneticButton>
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center text-slate-500 text-sm"
        >
          <p>
            Based in {siteConfig.location} &bull; Available for remote opportunities &bull; Open to relocation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
