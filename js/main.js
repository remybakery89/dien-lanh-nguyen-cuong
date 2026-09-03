const redesignStylesheet = document.createElement('link');
redesignStylesheet.rel = 'stylesheet';
redesignStylesheet.href = 'css/homepage-redesign-v1.css?v=6';
document.head.appendChild(redesignStylesheet);

const menu = document.querySelector('#main-menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');

function setMenu(open) {
  if (!menu || !menuToggle) return;
  menu.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

if (menuToggle) menuToggle.addEventListener('click', () => setMenu(true));
if (menuClose) menuClose.addEventListener('click', () => setMenu(false));
if (menu) {
  menu.addEventListener('click', (event) => {
    if (event.target === menu || event.target.closest('a')) setMenu(false);
  });
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const hero = document.querySelector('.hero');
if (hero) {
  hero.classList.add('reference-hero');
  hero.style.background = "#071525 url('assets/hero-bg.png') center center / cover no-repeat";
  hero.style.overflow = 'hidden';
  hero.style.isolation = 'isolate';
}

/* Keep the existing small service/problem icon treatment below the hero. */
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

/* The supplied hero-bg already contains the technician, curve and orange glow. */
const heroVisual = hero ? hero.querySelector('.hero-visual') : null;
if (heroVisual) heroVisual.remove();

const heroTrust = document.querySelector('.hero-trust');
if (heroTrust && hero) hero.insertAdjacentElement('afterend', heroTrust);

if (heroTrust) {
  const trustItems = [...heroTrust.querySelectorAll(':scope > span')];
  if (trustItems[1]) trustItems[1].remove();

  const trustAssets = [
    ['trust-speed.png', 'Có mặt<br>Nhanh chóng'],
    ['trust-price.png', 'Giá cả<br>Minh bạch'],
    ['trust-warranty.png', 'Bảo hành<br>dịch vụ'],
    ['trust-happy.png', 'Khách hàng<br>Hài lòng']
  ];

  heroTrust.classList.add('reference-trust');

  heroTrust.querySelectorAll(':scope > span').forEach((item, index) => {
    const icon = item.querySelector('.trust-icon');
    const label = item.querySelector('b');
    const [asset, text] = trustAssets[index];

    if (icon && asset) {
      icon.innerHTML = '';
      const image = document.createElement('img');
      image.src = `assets/${asset}`;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      icon.appendChild(image);
    }

    if (label) label.innerHTML = text;
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

/* Existing scroll reveal behavior — intentionally preserved. */
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
