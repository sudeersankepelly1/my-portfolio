'use client';

import { useState, useCallback } from 'react';
import { SmoothScrollProvider } from '@/components/providers/SmoothScroll';
import { CustomCursor } from '@/components/providers/CustomCursor';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Preloader } from '@/components/ui/Preloader';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <ScrollProgress />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
