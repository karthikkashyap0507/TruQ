import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const EASE = 'expo.out';

// Scroll-driven reveals, split headings, counters, parallax, marquee and the process line.
export function initMotion(motion) {
  initMarquee(motion);
  if (!motion) return;

  initReveals();
  initMedia();
  initCounters();
  initProcessLine();
  initFooterMark();
  initGlow();

  document.fonts.ready.then(() => {
    initSplits();
    ScrollTrigger.refresh();
  });

  // Images that load late change layout; keep trigger positions honest.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

function initSplits() {
  document.querySelectorAll('[data-split]').forEach(el => {
    const isHero = el.dataset.split === 'hero';
    const blocks = el.querySelectorAll(':scope > .h-line');
    const targets = blocks.length ? [...blocks] : el;

    SplitText.create(targets, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        el.classList.add('is-split');
        return gsap.from(self.lines, {
          yPercent: 115,
          duration: isHero ? 1.5 : 1.2,
          ease: EASE,
          stagger: 0.09,
          delay: isHero ? 0.25 : 0,
          scrollTrigger: isHero ? undefined : { trigger: el, start: 'top 90%', once: true },
        });
      },
    });
  });
}

function initReveals() {
  const els = gsap.utils.toArray('[data-reveal]').filter(el => !el.closest('[data-hero]'));
  ScrollTrigger.batch(els, {
    start: 'top 92%',
    once: true,
    onEnter: batch =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: EASE,
        stagger: 0.08,
        overwrite: true,
        onComplete: () => batch.forEach(el => el.classList.add('is-in')),
        clearProps: 'opacity,transform',
      }),
  });
}

function initMedia() {
  gsap.utils.toArray('[data-media-reveal]').forEach(el => {
    const img = el.querySelector('img');
    const parallax = el.hasAttribute('data-parallax');

    gsap.fromTo(
      el,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4,
        ease: 'expo.inOut',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onComplete: () => {
          el.classList.add('is-revealed');
          gsap.set(el, { clearProps: 'clipPath' });
        },
      },
    );
    if (!img) return;
    gsap.fromTo(
      img,
      { scale: 1.25 },
      {
        scale: parallax ? 1.12 : 1,
        duration: 1.9,
        ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onComplete: () => !parallax && gsap.set(img, { clearProps: 'transform' }),
      },
    );
    if (parallax) {
      gsap.fromTo(
        img,
        { yPercent: -5 },
        { yPercent: 5, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    }
  });
}

function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const state = { v: 0 };
    el.textContent = (0).toFixed(decimals);
    gsap.to(state, {
      v: target,
      duration: 2.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => (el.textContent = state.v.toFixed(decimals)),
    });
  });
}

// Marquee loops continuously and leans into the direction and speed of scrolling.
function initMarquee(motion) {
  document.querySelectorAll('[data-marquee-track]').forEach(track => {
    const loop = gsap.to(track, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
    // Start deep into the repeat so a negative timeScale (scrolling up) never hits time zero.
    loop.totalTime(loop.duration() * 500);
    if (!motion) {
      loop.pause();
      return;
    }
    let direction = 1;
    ScrollTrigger.create({
      trigger: track,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: self => (self.isActive ? loop.play() : loop.pause()),
      onUpdate: self => {
        const v = self.getVelocity();
        direction = self.direction;
        const boost = gsap.utils.clamp(1, 6, 1 + Math.abs(v) / 400);
        gsap.to(loop, { timeScale: direction * boost, duration: 0.2, overwrite: true });
        gsap.to(loop, { timeScale: direction, duration: 1.2, delay: 0.2, ease: 'power2.out' });
      },
    });
  });
}

function initProcessLine() {
  const bar = document.querySelector('[data-process-progress]');
  if (!bar) return;
  gsap.to(bar, {
    scaleY: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.stages', start: 'top 60%', end: 'bottom 60%', scrub: true },
  });
}

function initFooterMark() {
  const mark = document.querySelector('[data-footer-mark]');
  if (!mark) return;
  gsap.fromTo(
    mark.children,
    { yPercent: 40, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      stagger: 0.12,
      ease: 'none',
      scrollTrigger: { trigger: mark, start: 'top bottom', end: 'bottom bottom', scrub: 0.6 },
    },
  );
}

function initGlow() {
  gsap.utils.toArray('[data-glow]').forEach(glow => {
    gsap.fromTo(
      glow,
      { yPercent: -12, scale: 0.9 },
      {
        yPercent: 12,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: { trigger: glow.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}
