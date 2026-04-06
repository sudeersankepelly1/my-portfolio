'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface/60 backdrop-blur-xl rounded-xl border border-white/[0.05] p-6',
        hover && 'transition-all duration-300 hover:border-white/[0.1] hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]',
        className
      )}
    >
      {children}
    </div>
  );
}
