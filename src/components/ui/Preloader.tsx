'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p >= 1) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onComplete, 600);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [onComplete]);

  const name = 'SUDEER';

  return (
    <motion.div
      animate={isExiting ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center"
      style={{ pointerEvents: isExiting ? 'none' : 'auto' }}
    >
      {/* Name letters */}
      <div className="flex gap-1 mb-8">
        {name.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="text-4xl md:text-6xl font-display font-bold gradient-text"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)',
          }}
        />
      </div>

      {/* Progress text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xs text-slate-500 font-mono"
      >
        {Math.round(progress * 100)}%
      </motion.p>
    </motion.div>
  );
}
