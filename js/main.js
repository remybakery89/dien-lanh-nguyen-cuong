document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#main-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');

  function setMenu(open) {
    if (!menu || !menuToggle) return;
    menu.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menu && menuToggle && menuClose) {
    menuToggle.addEventListener('click', () => setMenu(true));
    menuClose.addEventListener('click', () => setMenu(false));
    menu.addEventListener('click', (event) => {
      if (event.target === menu || event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  const icons = {
    '❄️': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M4.9 6l14.2 12M19.1 6L4.9 18M5 12h14M8 3.8 12 6l4-2.2M8 20.2 12 18l4 2.2"/></svg>',
    '🌀': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5c4.2 0 6.8 2.1 6.8 4.8 0 2.1-1.8 3.6-4.2 3.6-2.1 0-3.4-1.3-3.4-2.9 0-1.2 1-2.1 2.3-2.1 1 0 1.7.5 1.9 1.2M12 19.5c-4.2 0-6.8-2.1-6.8-4.8 0-2.1 1.8-3.6 4.2-3.6 2.1 0 3.4 1.3 3.4 2.9 0 1.2-1 2.1-2.3 2.1-1 0-1.7-.5-1.9-1.2"/></svg>',
    '🧊': '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 10h14M15 6h2"/></svg>',
    '🔥': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21c4 0 7-2.7 7-6.6 0-3.5-2.1-5.8-4.8-8.1.1 2.2-.8 3.5-2 4.2.1-3.4-1.4-5.7-3.4-7.5.1 3.8-2.8 5.8-2.8 9.3C6 17.9 8.7 21 12 21Z"/></svg>',
    '🍲': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h14v2a7 7 0 0 1-14 0V9Z"/><path d="M8 5h8M9 3v2M15 3v2M3 9h2M19 9h2"/></svg>'
  };

  document.querySelectorAll('.problem-icon, .service-icon, .menu-service-icon').forEach((element) => {
    const key = element.textContent.trim();
    if (icons[key]) {
      element.innerHTML = icons[key];
      element.classList.add('modern-icon');
    }
  });

  /* One deliberate animation system: heading rises, cards alternate from left/right. */
  const problemSection = document.querySelector('.problem-section');
  if (!problemSection) return;

  const heading = problemSection.querySelector('.section-heading');
  const cards = [...problemSection.querySelectorAll('.problem-card')];
  const targets = [];

  if (heading) {
    heading.classList.add('reveal-up');
    targets.push(heading);
  }

  cards.forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? 'reveal-left' : 'reveal-right');
    card.style.setProperty('--reveal-delay', `${index * 100}ms`);
    targets.push(card);
  });

  if (!targets.length) return;

  const reveal = (element) => element.classList.add('is-visible');

  const revealOnScroll = () => {
    const triggerLine = window.innerHeight * 0.82;
    targets.forEach((element) => {
      if (element.getBoundingClientRect().top <= triggerLine) reveal(element);
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -18% 0px' });

    targets.forEach((element) => observer.observe(element));
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('resize', revealOnScroll);
  requestAnimationFrame(revealOnScroll);
});
