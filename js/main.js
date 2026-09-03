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

// Hero background: dark navy base with soft curved light trails instead of a flat gradient.
const hero = document.querySelector('.hero');
if (hero) {
  hero.style.background = '#0d1723';
  hero.style.overflow = 'hidden';
  hero.style.isolation = 'isolate';

  const heroLines = document.createElement('div');
  heroLines.setAttribute('aria-hidden', 'true');
  heroLines.style.position = 'absolute';
  heroLines.style.inset = '0';
  heroLines.style.zIndex = '0';
  heroLines.style.pointerEvents = 'none';
  heroLines.style.overflow = 'hidden';
  heroLines.innerHTML = `
    <svg viewBox="0 0 1200 720" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;">
      <defs>
        <linearGradient id="heroTrailBlue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#78b0d0" stop-opacity="0"/>
          <stop offset=".30" stop-color="#78b0d0" stop-opacity=".18"/>
          <stop offset=".62" stop-color="#9bc8dc" stop-opacity=".10"/>
          <stop offset="1" stop-color="#9bc8dc" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="heroTrailOrange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#e8892d" stop-opacity="0"/>
          <stop offset=".46" stop-color="#e8892d" stop-opacity=".18"/>
          <stop offset=".78" stop-color="#f0a04f" stop-opacity=".07"/>
          <stop offset="1" stop-color="#e8892d" stop-opacity="0"/>
        </linearGradient>
        <filter id="heroTrailGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6"/>
        </filter>
      </defs>
      <path d="M-140 545 C120 300 300 675 565 430 S900 120 1340 315" fill="none" stroke="url(#heroTrailBlue)" stroke-width="2"/>
      <path d="M-120 548 C145 305 305 700 575 440 S910 135 1340 325" fill="none" stroke="url(#heroTrailBlue)" stroke-width="10" opacity=".13" filter="url(#heroTrailGlow)"/>
      <path d="M-120 230 C165 455 355 80 625 275 S970 540 1340 205" fill="none" stroke="url(#heroTrailOrange)" stroke-width="1.5"/>
      <path d="M-80 650 C190 485 390 590 610 470 S990 270 1300 380" fill="none" stroke="rgba(255,255,255,.045)" stroke-width="1"/>
    </svg>`;
  hero.insertBefore(heroLines, hero.firstChild);

  hero.querySelectorAll(':scope > *:not(div[aria-hidden="true"])').forEach((element) => {
    if (element !== heroLines) element.style.position = element.style.position || 'relative';
    if (element !== heroLines) element.style.zIndex = element.style.zIndex || '1';
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

// Hero subtitle: centered beneath the headline.
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  heroSubtitle.style.textAlign = 'center';
}

// Hero trust row: four visual proof points, informational rather than button-like.
const heroTrust = document.querySelector('.hero-trust');
if (heroTrust) {
  const trustItems = [...heroTrust.querySelectorAll(':scope > span')];
  if (trustItems[1]) trustItems[1].remove();

  const trustIcons = [
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8a16 16 0 1 1-11.3 4.7"/><path d="M24 16v8l6 4"/><path d="M8 17h9V8"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 14h30v25H9z"/><path d="M14 14V8h20v6M16 23h16M16 30h10"/><circle cx="34" cy="31" r="3"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5 40 11v10c0 10-6.4 17.2-16 22-9.6-4.8-16-12-16-22V11l16-6Z"/><path d="m15 24 6 6 12-13"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18"/><path d="M16.5 28c2.4 4 4.9 6 7.5 6s5.1-2 7.5-6"/><path d="M17 19h.01M31 19h.01"/></svg>'
  ];
  const trustLabels = [
    'Có mặt<br>nhanh chóng',
    'Giá cả<br>minh bạch',
    'Bảo hành<br>dịch vụ',
    'Khách hàng<br>hài lòng'
  ];

  heroTrust.style.display = 'grid';
  heroTrust.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
  heroTrust.style.gap = '0';
  heroTrust.style.marginTop = '26px';
  heroTrust.style.alignItems = 'start';
  heroTrust.style.overflow = 'visible';
  heroTrust.style.width = '100%';
  heroTrust.style.maxWidth = '760px';

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
      label.innerHTML = trustLabels[index];
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
    item.style.padding = '0 8px';
    item.style.border = '0';
    item.style.borderRadius = '0';
    item.style.background = 'transparent';
    item.style.color = 'inherit';
    item.style.boxShadow = 'none';
    item.style.position = 'relative';
  });

  const mobileTrustLayout = () => {
    const mobile = window.matchMedia('(max-width: 699px)').matches;
    heroTrust.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
    heroTrust.style.paddingBottom = '0';
    heroTrust.style.marginLeft = mobile ? '-4px' : '0';
    heroTrust.style.marginRight = mobile ? '-4px' : '0';
    heroTrust.querySelectorAll(':scope > span').forEach((item) => {
      item.style.paddingLeft = mobile ? '3px' : '8px';
      item.style.paddingRight = mobile ? '3px' : '8px';
    });
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
