const menu = document.querySelector('#main-menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');

function setMenu(open) {
  menu.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

menuToggle.addEventListener('click', () => setMenu(true));
menuClose.addEventListener('click', () => setMenu(false));
menu.addEventListener('click', (event) => {
  if (event.target === menu || event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

// Replace playful emoji with simple, consistent line icons.
const icons = {
  '❄️': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M4.9 6l14.2 12M19.1 6L4.9 18M5 12h14M8 3.8 12 6l4-2.2M8 20.2 12 18l4 2.2"/></svg>',
  '🌀': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5c4.2 0 6.8 2.1 6.8 4.8 0 2.1-1.8 3.6-4.2 3.6-2.1 0-3.4-1.3-3.4-2.9 0-1.2 1-2.1 2.3-2.1 1 0 1.7.5 1.9 1.2M12 19.5c-4.2 0-6.8-2.1-6.8-4.8 0-2.1 1.8-3.6 4.2-3.6 2.1 0 3.4 1.3 3.4 2.9 0 1.2-1 2.1-2.3 2.1-1 0-1.7.5-1.9 1.2"/></svg>',
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

// Scroll reveal: set the animation state before observing, then reveal only when the user reaches the section.
const problemSection = document.querySelector('.problem-section');
if (problemSection) {
  const heading = problemSection.querySelector('.section-heading');
  if (heading) heading.classList.add('reveal-up');

  problemSection.querySelectorAll('.problem-card').forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? 'reveal-left' : 'reveal-right');
    card.style.setProperty('--reveal-delay', `${index * 120}ms`);
  });
}

const revealTargets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

function revealVisibleElements() {
  revealTargets.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const visible = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.08;
    if (visible) element.classList.add('is-visible');
  });
}

if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });

  // Wait one frame so the hidden starting state is painted before the observer can reveal anything.
  requestAnimationFrame(() => revealTargets.forEach((element) => observer.observe(element)));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

// Safety fallback for browsers where IntersectionObserver behaves inconsistently.
window.addEventListener('load', revealVisibleElements, { once: true });
