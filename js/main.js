const redesignStylesheet = document.createElement('link');
redesignStylesheet.rel = 'stylesheet';
redesignStylesheet.href = 'css/homepage-redesign-v1.css?v=1';
document.head.appendChild(redesignStylesheet);

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

// Hero trust row: five visual proof points, inspired by the reference layout.
// These are informational blocks, not buttons.
const heroTrust = document.querySelector('.hero-trust');
if (heroTrust) {
  const trustIcons = [
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8a16 16 0 1 1-11.3 4.7"/><path d="M24 16v8l6 4"/><path d="M8 17h9V8"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="14" r="7"/><path d="M10 40c1.8-10 6.5-15 14-15s12.2 5 14 15"/><path d="m31 25 4 4 8-10"/><path d="M24 4v4M5 14h5M38 14h5"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 14h30v25H9z"/><path d="M14 14V8h20v6M16 23h16M16 30h10"/><circle cx="34" cy="31" r="3"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5 40 11v10c0 10-6.4 17.2-16 22-9.6-4.8-16-12-16-22V11l16-6Z"/><path d="m15 24 6 6 12-13"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/><path d="M16.5 28c2.4 4 4.9 6 7.5 6s5.1-2 7.5-6"/><path d="M17 19h.01M31 19h.01"/></svg>'
  ];

  heroTrust.style.display = 'grid';
  heroTrust.style.gridTemplateColumns = 'repeat(5, minmax(0, 1fr))';
  heroTrust.style.gap = '0';
  heroTrust.style.marginTop = '26px';
  heroTrust.style.alignItems = 'start';
  heroTrust.style.overflowX = 'auto';
  heroTrust.style.scrollbarWidth = 'none';

  heroTrust.querySelectorAll(':scope > span').forEach((item, index) => {
    const icon = item.querySelector('.trust-icon');
    const label = item.querySelector('b');
    if (icon) {
      icon.innerHTML = trustIcons[index];
      icon.style.display = 'grid';
      icon.style.placeItems = 'center';
      icon.style.width = '42px';
      icon.style.height = '42px';
      icon.style.margin = '0 auto 9px';
      icon.style.color = '#72c784';
    }
    if (label) {
      label.style.display = 'block';
      label.style.fontSize = '11px';
      label.style.fontWeight = '650';
      label.style.lineHeight = '1.35';
      label.style.whiteSpace = 'normal';
      label.style.textAlign = 'center';
      label.style.color = 'rgba(255,255,255,.86)';
    }
    item.style.display = 'block';
    item.style.minHeight = '0';
    item.style.padding = '0 10px';
    item.style.border = '0';
    item.style.borderRadius = '0';
    item.style.background = 'transparent';
    item.style.color = 'inherit';
    item.style.boxShadow = 'none';
    item.style.position = 'relative';
  });

  const mobileTrustLayout = () => {
    const mobile = window.matchMedia('(max-width: 699px)').matches;
    heroTrust.style.gridTemplateColumns = mobile ? 'repeat(5, 112px)' : 'repeat(5, minmax(0, 1fr))';
    heroTrust.style.paddingBottom = mobile ? '4px' : '0';
    heroTrust.style.marginLeft = mobile ? '-6px' : '0';
    heroTrust.style.marginRight = mobile ? '-6px' : '0';
  };
  mobileTrustLayout();
  window.addEventListener('resize', mobileTrustLayout);
}

// Mobile layout: service cards are always one column, never a 2-column grid.
const servicesGrid = document.querySelector('.services-grid');
const serviceCards = servicesGrid ? [...servicesGrid.querySelectorAll('.service-card')] : [];
function applyServiceMobileLayout() {
  if (!servicesGrid) return;
  const isMobile = window.matchMedia('(max-width: 699px)').matches;
  servicesGrid.style.gridTemplateColumns = isMobile ? '1fr' : '';
  serviceCards.forEach((card) => {
    card.style.width = isMobile ? '100%' : '';
    card.style.aspectRatio = isMobile ? 'auto' : '';
    card.style.height = isMobile ? '190px' : '';
  });
}
applyServiceMobileLayout();
window.addEventListener('resize', applyServiceMobileLayout);

// Scroll reveal — preserved from the working checkpoint and extended to services.
const problemSection = document.querySelector('.problem-section');
if (problemSection) {
  const heading = problemSection.querySelector('.section-heading');
  if (heading) heading.classList.add('reveal-up');

  problemSection.querySelectorAll('.problem-card').forEach((card, index) => {
    card.classList.add(index % 2 === 0 ? 'reveal-left' : 'reveal-right');
    card.style.setProperty('--reveal-delay', `${index * 120}ms`);
  });
}

const servicesSection = document.querySelector('.services-section');
if (servicesSection) {
  const heading = servicesSection.querySelector('.section-heading');
  if (heading) heading.classList.add('reveal-up');

  servicesSection.querySelectorAll('.service-card').forEach((card, index) => {
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

  requestAnimationFrame(() => revealTargets.forEach((element) => observer.observe(element)));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

window.addEventListener('load', revealVisibleElements, { once: true });
