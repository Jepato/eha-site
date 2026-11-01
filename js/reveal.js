/* reveal.js — scroll reveals that can't break the page.
   Mark elements with data-reveal (optionally data-reveal-group on a parent to stagger its children).
   Nothing is hidden until this script runs AND IntersectionObserver exists AND motion is not reduced;
   anything already on screen at load is shown at once; a cheap scroll check shows anything the observer missed
   once it is in view, and printing shows everything. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = [...document.querySelectorAll('[data-reveal]')];
  if (reduce || !('IntersectionObserver' in window) || !els.length) return;
  const H = innerHeight;
  const show = (el, delay = 0) => { el.style.transitionDelay = delay ? delay + 'ms' : ''; el.classList.add('revealed'); el.classList.remove('will-reveal'); };
  els.forEach(el => { if (el.getBoundingClientRect().top > H * 0.9) el.classList.add('will-reveal'); });
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, group = el.closest('[data-reveal-group]');
      const i = group ? [...group.querySelectorAll('[data-reveal].will-reveal')].indexOf(el) : 0;
      show(el, Math.max(0, Math.min(i, 6)) * 70);   /* 70ms stagger, max 6 steps */
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  els.filter(el => el.classList.contains('will-reveal')).forEach(el => io.observe(el));
  /* never leave content hidden: if the observer misses something (fast flings, odd browsers), show it once it's in view */
  let tick = 0;
  addEventListener('scroll', () => { if (tick) return; tick = requestAnimationFrame(() => { tick = 0;
    document.querySelectorAll('.will-reveal').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) show(el); }); }); }, { passive: true });
  addEventListener('beforeprint', () => document.querySelectorAll('.will-reveal').forEach(el => show(el)));
})();
