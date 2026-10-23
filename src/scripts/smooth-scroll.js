import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lenis drives the page scroll and GSAP's ticker drives Lenis, so ScrollTrigger stays in sync.
// Returns a small facade so the rest of the site can lock/unlock scrolling without caring
// whether smooth scrolling is active (it is off for reduced-motion visitors).
export function initSmoothScroll(motion) {
  let lenis = null;

  if (motion) {
    const headerH = () => document.querySelector('[data-header]')?.offsetHeight ?? 0;
    lenis = new Lenis({
      lerp: 0.095,
      wheelMultiplier: 1,
      anchors: { offset: -headerH() - 16 },
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const listeners = new Set();
  const notify = () => listeners.forEach(fn => fn(window.scrollY));
  if (lenis) lenis.on('scroll', notify);
  else window.addEventListener('scroll', notify, { passive: true });

  return {
    lenis,
    onScroll(fn) {
      listeners.add(fn);
      fn(window.scrollY);
    },
    lock() {
      lenis ? lenis.stop() : (document.documentElement.style.overflow = 'hidden');
    },
    unlock() {
      lenis ? lenis.start() : (document.documentElement.style.overflow = '');
    },
  };
}
