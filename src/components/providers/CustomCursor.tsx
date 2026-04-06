'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const cursorRef = useRef({ x: 0, y: 0 });

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const ringX = useSpring(0, { damping: 20, stiffness: 200, mass: 0.8 });
  const ringY = useSpring(0, { damping: 20, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    const hasFineCursor = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasFineCursor);
    if (!hasFineCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnterInteractive = () => setIsPointer(true);
    const handleMouseLeaveInteractive = () => setIsPointer(false);

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea, select'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
      return interactiveElements;
    };

    window.addEventListener('mousemove', handleMouseMove);
    const elements = addListeners();

    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
      addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 0.5 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="w-2 h-2 rounded-full bg-accent-400"
        />
      </motion.div>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-full border border-accent-400/50"
        />
      </motion.div>
    </>
  );
}
