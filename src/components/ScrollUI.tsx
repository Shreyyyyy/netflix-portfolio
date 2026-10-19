import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE } from './fx';

/** Thin progress bar at the top of the page plus a back-to-top button once the hero is out of view. */
export default function ScrollUI() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setShowTop(y > window.innerHeight * 0.9));

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-crimson via-crimson-2 to-[#ffb547] shadow-[0_0_12px_rgba(255,61,90,0.7)]"
        style={{ scaleX: progress }}
      />
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            data-cursor="link"
            onClick={() => scrollTo(0, { offset: 0 })}
            className="glass fixed bottom-5 right-5 z-[120] flex h-12 w-12 items-center justify-center rounded-full text-lg text-bone transition hover:bg-white/15 sm:bottom-8 sm:right-8"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
