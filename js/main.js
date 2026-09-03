const redesignStylesheet = document.createElement('link');
redesignStylesheet.rel = 'stylesheet';
redesignStylesheet.href = 'css/homepage-redesign-v1.css?v=4';
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

const hero = document.querySelector('.hero');
if (hero) {
  hero.classList.add('reference-hero');
  hero.style.background = '#0d1723';
  hero.style.overflow = 'hidden';
  hero.style.isolation = 'isolate';
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

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  heroSubtitle.textContent = 'Chuyên sửa chữa, bảo trì, lắp đặt các thiết bị điện lạnh\nTận tâm – Chất lượng – Giá cả hợp lý';
  heroSubtitle.style.textAlign = 'left';
}

const heroHeading = hero ? hero.querySelector('h1') : null;
if (heroHeading) {
  heroHeading.innerHTML = 'Sửa chữa điện lạnh <span>Nhanh chóng – Uy tín</span>';
}

const heroActions = hero ? hero.querySelector('.hero-actions') : null;
if (heroActions) {
  const primary = heroActions.querySelector('.btn-primary');
  const secondary = heroActions.querySelector('.btn-secondary');
  if (primary) primary.innerHTML = '☎ <span>GỌI NGAY</span>';
  if (secondary) secondary.innerHTML = '<span class="zalo-mark">Zalo</span><span>CHAT ZALO</span>';
}

const heroVisual = hero ? hero.querySelector('.hero-visual') : null;
if (heroVisual) {
  heroVisual.querySelectorAll('.visual-glow, .service-orbit').forEach((element) => element.remove());
  const caption = heroVisual.querySelector('.technician-art > div:last-child');
  if (caption) caption.remove();
}

const heroTrust = document.querySelector('.hero-trust');
if (heroTrust && hero) {
  hero.insertAdjacentElement('afterend', heroTrust);
}

if (heroTrust) {
  const trustItems = [...heroTrust.querySelectorAll(':scope > span')];
  if (trustItems[1]) trustItems[1].remove();

  const trustIcons = [
    '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M40 13a27 27 0 1 1-19.1 7.9"/><path d="M40 24v16l12 7"/><path d="M14 28h17V11"/><path d="M8 35h12M11 25h11"/></svg>',
    '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M17 18h46v47H17z"/><path d="M27 18V10h26v8M27 32h26M27 43h20M27 54h14"/><circle cx="57" cy="55" r="10"/><path d="M53 55h8M57 51v8"/></svg>',
    '<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M40 7 67 17v18c0 18-11 30-27 38C24 65 13 53 13 35V17L40 7Z"/><path d="m25 39 9 9 21-23"/></svg>',
    '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="28"/><circle cx="30" cy="34" r="2.8"/><circle cx="50" cy="34" r="2.8"/><path d="M27 47c4.1 6 8.5 9 13 9s8.9-3 13-9"/></svg>'
  ];
  const trustLabels = ['Có mặt<br>Nh nhanh chóng'.replace('Nh nhanh','Nhanh'), 'Giá cả<br>Minh bạch', 'Bảo hành<br>dịch vụ', 'Khách hàng<br>Hài lòng'];

  heroTrust.style.display = 'grid';
  heroTrust.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
  heroTrust.style.gap = '0';
  heroTrust.style.marginTop = '0';
  heroTrust.style.width = '100%';
  heroTrust.style.maxWidth = 'none';

  heroTrust.querySelectorAll(':scope > span').forEach((item, index) => {
    const icon = item.querySelector('.trust-icon');
    const label = item.querySelector('b');
    if (icon) {
      icon.innerHTML = trustIcons[index];
      icon.style.display = 'grid';
      icon.style.placeItems = 'center';
      icon.style.color = '#176b3b';
    }
    if (label) {
      label.innerHTML = trustLabels[index];
      label.style.display = 'block';
      label.style.textAlign = 'center';
      label.style.color = '#111';
    }
    item.style.display = 'grid';
    item.style.justifyItems = 'center';
    item.style.alignContent = 'start';
    item.style.padding = '0 18px';
    item.style.border = '0';
    item.style.borderRadius = '0';
    item.style.background = 'transparent';
    item.style.boxShadow = 'none';
    item.style.position = 'relative';
  });
}

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