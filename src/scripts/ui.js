import { gsap } from 'gsap';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])';

function trapFocus(container, event) {
  if (event.key !== 'Tab') return;
  const items = [...container.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/* ---------- Header: solid after the hero, hides on scroll down ---------- */

export function initHeader(scroller) {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  let last = 0;
  scroller.onScroll(y => {
    header.classList.toggle('is-scrolled', y > 40);
    const goingDown = y > last + 4;
    const goingUp = y < last - 4;
    if (goingDown && y > 240 && !document.body.classList.contains('menu-open')) header.classList.add('is-hidden');
    if (goingUp || y < 120) header.classList.remove('is-hidden');
    last = y;
  });
}

/* ---------- Mobile menu ---------- */

let closeMenuFn = () => {};

export function initMenu(scroller) {
  const menu = document.querySelector('[data-menu]');
  const openBtn = document.querySelector('[data-menu-open]');
  if (!menu || !openBtn) return;
  const items = menu.querySelectorAll('[data-menu-item]');
  let open = false;

  const onKey = e => {
    if (e.key === 'Escape') close();
    else trapFocus(menu, e);
  };

  function show() {
    if (open) return;
    open = true;
    menu.hidden = false;
    document.body.classList.add('menu-open');
    openBtn.setAttribute('aria-expanded', 'true');
    scroller.lock();
    gsap.fromTo(menu, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'expo.inOut' });
    gsap.fromTo(items, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.05, delay: 0.3 });
    menu.querySelector('[data-menu-close]').focus();
    document.addEventListener('keydown', onKey);
  }

  function close() {
    if (!open) return;
    open = false;
    openBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKey);
    gsap.to(menu, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.6,
      ease: 'expo.inOut',
      onComplete: () => {
        menu.hidden = true;
        document.body.classList.remove('menu-open');
        scroller.unlock();
      },
    });
    openBtn.focus();
  }

  closeMenuFn = close;
  openBtn.addEventListener('click', show);
  menu.querySelector('[data-menu-close]').addEventListener('click', close);
  window.addEventListener('resize', () => window.innerWidth > 1024 && close());
}

/* ---------- Project enquiry modal ---------- */

export function initEnquiry(scroller) {
  const modal = document.querySelector('[data-enquiry-modal]');
  if (!modal) return;
  const dialog = modal.querySelector('[role="dialog"]');
  const backdrop = modal.querySelector('.enquiry__backdrop');
  const form = modal.querySelector('[data-enquiry-form]');
  const done = modal.querySelector('[data-enquiry-done]');
  const doneText = modal.querySelector('[data-enquiry-done-text]');
  const error = modal.querySelector('[data-enquiry-error]');
  const submit = modal.querySelector('[data-enquiry-submit]');
  const submitLabel = modal.querySelector('[data-enquiry-submit-label]');
  let opener = null;
  let isOpen = false;

  const onKey = e => {
    if (e.key === 'Escape') close();
    else trapFocus(dialog, e);
  };

  function open(type, trigger) {
    if (isOpen) return;
    isOpen = true;
    opener = trigger;
    closeMenuFn();
    if (type) {
      const radio = form.querySelector(`input[name="type"][value="${type}"]`);
      if (radio) radio.checked = true;
    }
    modal.hidden = false;
    scroller.lock();
    gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' });
    gsap.fromTo(dialog, { y: 40, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'expo.out' });
    document.addEventListener('keydown', onKey);
    setTimeout(() => (form.hidden ? dialog : form.querySelector('input[name="name"]')).focus({ preventScroll: true }), 60);
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    document.removeEventListener('keydown', onKey);
    gsap.to(dialog, { y: 24, opacity: 0, duration: 0.35, ease: 'power2.in' });
    gsap.to(backdrop, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        modal.hidden = true;
        scroller.unlock();
        if (!done.hidden) {
          form.reset();
          form.hidden = false;
          done.hidden = true;
        }
      },
    });
    opener?.focus?.();
  }

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-enquiry]');
    if (trigger) {
      e.preventDefault();
      open(trigger.dataset.enquiryType, trigger);
      return;
    }
    if (e.target.closest('[data-enquiry-close]')) close();
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    error.textContent = '';
    const data = new FormData(form);
    const name = form.elements.name;
    const email = form.elements.email;
    name.setAttribute('aria-invalid', String(!name.value.trim()));
    email.setAttribute('aria-invalid', String(!email.validity.valid || !email.value.trim()));
    if (!name.value.trim() || !email.value.trim() || !email.validity.valid) {
      error.textContent = 'Please add your name and a valid email so we can reply.';
      (name.value.trim() ? email : name).focus();
      return;
    }

    const endpoint = form.dataset.endpoint;
    const studioEmail = form.dataset.email;

    if (!endpoint) {
      const lines = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone') || '—'}`,
        `Project type: ${data.get('type')}`,
        `Location: ${data.get('location') || '—'}`,
        `Approx. area: ${data.get('area') || '—'}`,
        '',
        `${data.get('message') || ''}`,
      ];
      const subject = `Project enquiry — ${data.get('type')} — ${data.get('name')}`;
      window.location.href = `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      doneText.textContent = `Your email app should open with these details ready to send. If it doesn’t, write to us at ${studioEmail}.`;
      showDone();
      return;
    }

    submit.disabled = true;
    submitLabel.textContent = 'Sending…';
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      showDone();
    } catch {
      error.textContent = `Something went wrong sending your enquiry. Please try again or email ${studioEmail}.`;
    } finally {
      submit.disabled = false;
      submitLabel.textContent = 'Send enquiry';
    }
  });

  function showDone() {
    form.hidden = true;
    done.hidden = false;
    gsap.fromTo(done, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' });
    dialog.focus();
  }
}

/* ---------- Share menu on project pages ---------- */

export function initShare() {
  document.querySelectorAll('[data-share]').forEach(root => {
    const toggle = root.querySelector('[data-share-toggle]');
    const menu = root.querySelector('[data-share-menu]');
    const copy = root.querySelector('[data-share-copy]');
    const url = root.dataset.shareUrl;
    const text = root.dataset.shareText;

    const setOpen = state => {
      menu.hidden = !state;
      toggle.setAttribute('aria-expanded', String(state));
      if (state) gsap.fromTo(menu, { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
    };

    toggle.addEventListener('click', async () => {
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      if (coarse && navigator.share) {
        try {
          await navigator.share({ title: text, url });
        } catch {}
        return;
      }
      setOpen(menu.hidden);
    });

    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(url);
        copy.lastChild.textContent = 'Link copied';
        setTimeout(() => (copy.lastChild.textContent = 'Copy link'), 1800);
      } catch {
        window.prompt('Copy this link', url);
      }
    });

    document.addEventListener('click', e => !root.contains(e.target) && !menu.hidden && setOpen(false));
    root.addEventListener('keydown', e => e.key === 'Escape' && setOpen(false));
  });
}

/* ---------- Contextual cursor ("View", "Drag", "Read") ---------- */

export function initCursor() {
  const el = document.querySelector('[data-cursor-el]');
  if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const label = el.querySelector('[data-cursor-label]');
  const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });
  let active = null;

  window.addEventListener('pointermove', e => {
    xTo(e.clientX);
    yTo(e.clientY);
    const target = e.target.closest?.('[data-cursor]');
    const text = target?.dataset.cursor ?? null;
    if (text === active) return;
    active = text;
    if (text) {
      label.textContent = text;
      el.classList.add('is-on');
      gsap.to(el, { scale: 1, duration: 0.5, ease: 'expo.out' });
    } else {
      gsap.to(el, { scale: 0, duration: 0.4, ease: 'expo.out', onComplete: () => !active && el.classList.remove('is-on') });
    }
  });

  document.addEventListener('pointerdown', () => active && gsap.to(el, { scale: 0.82, duration: 0.3 }));
  document.addEventListener('pointerup', () => active && gsap.to(el, { scale: 1, duration: 0.4, ease: 'expo.out' }));
  document.addEventListener('mouseleave', () => {
    active = null;
    gsap.to(el, { scale: 0, duration: 0.3 });
  });
}
