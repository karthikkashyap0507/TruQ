import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Works index: discipline filters and "load more", animated with Flip.
export function initWorks(motion) {
  const grid = document.querySelector('[data-works-grid]');
  if (!grid) return;
  const items = [...grid.querySelectorAll('[data-works-item]')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('[data-filter-count]');
  const more = document.querySelector('[data-load-more]');
  let expanded = false;

  function apply(filter, animate = true) {
    const state = animate && motion ? Flip.getState(items) : null;
    if (filter !== 'all') expanded = true;

    let shown = 0;
    items.forEach(item => {
      const match = filter === 'all' || item.dataset.tags.split(' ').includes(filter);
      item.classList.toggle('is-filtered-out', !match);
      item.classList.toggle('is-shown', expanded);
      if (match) shown++;
    });

    count.textContent = `(${String(shown).padStart(2, '0')} ${shown === 1 ? 'project' : 'projects'})`;
    if (more) more.parentElement.hidden = expanded;

    if (state) {
      Flip.from(state, {
        duration: 0.8,
        ease: 'expo.inOut',
        stagger: 0.03,
        absolute: true,
        onEnter: els => gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.05 }),
        onLeave: els => gsap.to(els, { opacity: 0, scale: 0.95, duration: 0.4, ease: 'power2.in' }),
        onComplete: () => ScrollTrigger.refresh(),
      });
    } else {
      ScrollTrigger.refresh();
    }
  }

  buttons.forEach(btn =>
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      apply(btn.dataset.filter);
    }),
  );

  more?.addEventListener('click', () => {
    expanded = true;
    const active = buttons.find(b => b.classList.contains('is-active'))?.dataset.filter ?? 'all';
    apply(active);
  });

  // First paint: cards rise in, row by row.
  if (motion) {
    const visible = items.filter(i => i.offsetParent !== null);
    gsap.set(visible, { opacity: 0, y: 40 });
    ScrollTrigger.batch(visible, {
      start: 'top 92%',
      once: true,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09 }),
    });
  }
}
