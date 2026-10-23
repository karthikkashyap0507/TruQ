import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ---------- Hero slideshow ---------- */

export function initHero(motion) {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  const slides = [...hero.querySelectorAll('[data-hero-slide]')];
  const dots = [...hero.querySelectorAll('[data-hero-dot]')];
  const caption = hero.querySelector('[data-hero-caption]');
  const DURATION = 6.5;
  let index = 0;
  let progress = null;
  let inView = true;

  // Intro: content rises in once the first image is ready.
  if (motion) {
    const firstImg = slides[0].querySelector('img');
    gsap.fromTo(firstImg, { scale: 1.18 }, { scale: 1.06, duration: 2.6, ease: 'expo.out' });
    gsap.fromTo(
      hero.querySelectorAll('[data-hero-in]'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.3, ease: 'expo.out', stagger: 0.1, delay: 0.55 },
    );
    // Gentle parallax as the hero scrolls away.
    gsap.to(hero.querySelector('.hero__slides'), {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to(hero.querySelector('.hero__content'), {
      yPercent: -14,
      opacity: 0.2,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  if (slides.length < 2) return;

  function setDot(i, p) {
    dots.forEach((d, j) => {
      d.classList.toggle('is-active', j === i);
      d.style.setProperty('--p', j === i ? p : 0);
    });
  }

  function runProgress() {
    progress?.kill();
    const state = { p: 0 };
    progress = gsap.to(state, {
      p: 1,
      duration: DURATION,
      ease: 'none',
      onUpdate: () => setDot(index, state.p),
      onComplete: () => go(index + 1),
    });
    if (!motion || !inView) progress.pause();
  }

  function go(next) {
    next = (next + slides.length) % slides.length;
    if (next === index) return;
    const current = slides[index];
    const incoming = slides[next];
    const img = incoming.querySelector('img');
    img.loading = 'eager';

    incoming.classList.add('is-active');
    gsap.set(incoming, { zIndex: 2 });
    gsap.set(current, { zIndex: 1 });
    if (motion) {
      gsap.fromTo(incoming, { opacity: 0 }, { opacity: 1, duration: 1.6, ease: 'power2.inOut', onComplete: () => current.classList.remove('is-active') });
      gsap.fromTo(img, { scale: 1.16 }, { scale: 1.04, duration: DURATION + 2, ease: 'power1.out' });
    } else {
      gsap.set(incoming, { opacity: 1 });
      current.classList.remove('is-active');
    }

    index = next;
    caption.textContent = incoming.dataset.caption;
    runProgress();
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));

  // Warm up the next images after the page settles.
  window.addEventListener('load', () => slides.forEach(s => (s.querySelector('img').loading = 'eager')), { once: true });

  ScrollTrigger.create({
    trigger: hero,
    start: 'top top',
    end: 'bottom top',
    onToggle: self => {
      inView = self.isActive;
      if (!motion) return;
      inView ? progress?.play() : progress?.pause();
    },
  });
  document.addEventListener('visibilitychange', () => {
    if (!motion) return;
    document.hidden ? progress?.pause() : inView && progress?.play();
  });

  runProgress();
}

/* ---------- Draggable works carousel ---------- */

export function initCarousel() {
  document.querySelectorAll('[data-carousel]').forEach(root => {
    const viewport = root.querySelector('[data-carousel-viewport]');
    const bar = root.querySelector('[data-carousel-progress]');
    const prev = root.querySelector('[data-carousel-prev]');
    const next = root.querySelector('[data-carousel-next]');
    const items = [...root.querySelectorAll('.carousel__item')];
    let tween = null;

    const max = () => viewport.scrollWidth - viewport.clientWidth;

    function update() {
      const m = max();
      const visible = viewport.clientWidth / viewport.scrollWidth;
      const p = m > 0 ? viewport.scrollLeft / m : 0;
      bar.style.width = `${Math.max(visible, 0.12) * 100}%`;
      bar.style.transform = `translateX(${p * ((1 - visible) / Math.max(visible, 0.12)) * 100}%)`;
      prev.disabled = viewport.scrollLeft < 4;
      next.disabled = viewport.scrollLeft > m - 4;
    }

    function scrollToX(x) {
      tween?.kill();
      tween = gsap.to(viewport, { scrollLeft: gsap.utils.clamp(0, max(), x), duration: 1, ease: 'expo.out' });
    }

    const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : viewport.clientWidth * 0.8);
    prev.addEventListener('click', () => scrollToX(viewport.scrollLeft - step()));
    next.addEventListener('click', () => scrollToX(viewport.scrollLeft + step()));
    viewport.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    viewport.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') scrollToX(viewport.scrollLeft + step());
      if (e.key === 'ArrowLeft') scrollToX(viewport.scrollLeft - step());
    });

    // Mouse drag with momentum (touch devices use native scrolling).
    let down = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;

    viewport.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      tween?.kill();
      down = true;
      moved = false;
      startX = lastX = e.clientX;
      startScroll = viewport.scrollLeft;
      lastT = performance.now();
      velocity = 0;
    });

    window.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 6) {
        moved = true;
        viewport.classList.add('is-dragging');
      }
      if (!moved) return;
      viewport.scrollLeft = startScroll - dx;
      const now = performance.now();
      velocity = (e.clientX - lastX) / Math.max(now - lastT, 1);
      lastX = e.clientX;
      lastT = now;
    });

    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      if (moved) {
        scrollToX(viewport.scrollLeft - velocity * 420);
        requestAnimationFrame(() => viewport.classList.remove('is-dragging'));
      }
    });

    viewport.addEventListener('click', e => moved && e.preventDefault(), true);
    viewport.addEventListener('dragstart', e => e.preventDefault());

    update();
  });
}

/* ---------- Floating preview on the home services list ---------- */

export function initServicePreview() {
  const list = document.querySelector('[data-svc-list]');
  const float = document.querySelector('[data-svc-float]');
  if (!list || !float || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const imgs = [...float.children];
  gsap.set(float, { xPercent: -50, yPercent: -50, scale: 0.85 });
  const xTo = gsap.quickTo(float, 'x', { duration: 0.6, ease: 'power3.out' });
  const yTo = gsap.quickTo(float, 'y', { duration: 0.6, ease: 'power3.out' });
  const rTo = gsap.quickTo(float, 'rotation', { duration: 0.8, ease: 'power3.out' });
  let lastX = 0;
  let shown = false;

  list.addEventListener('pointermove', e => {
    xTo(e.clientX);
    yTo(e.clientY);
    rTo(gsap.utils.clamp(-10, 10, (e.clientX - lastX) * 0.6) - 4);
    lastX = e.clientX;
  });

  list.querySelectorAll('[data-svc-row]').forEach(row => {
    row.addEventListener('pointerenter', e => {
      const i = Number(row.dataset.svcRow);
      imgs.forEach((img, j) => img.classList.toggle('is-active', i === j));
      if (!shown) {
        shown = true;
        gsap.set(float, { x: e.clientX, y: e.clientY });
        gsap.to(float, { opacity: 1, scale: 1, duration: 0.5, ease: 'expo.out', overwrite: 'auto' });
      }
    });
  });

  list.addEventListener('pointerleave', () => {
    shown = false;
    gsap.to(float, { opacity: 0, scale: 0.85, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
  });
}
