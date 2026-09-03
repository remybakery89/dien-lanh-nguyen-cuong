const redesignStylesheet = document.createElement('link');
redesignStylesheet.rel = 'stylesheet';
redesignStylesheet.href = 'css/homepage-redesign-v1.css?v=7';
document.head.appendChild(redesignStylesheet);

const PHONE = '0367309659';
const ZALO = 'https://zalo.me/0367309659';

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
if (heroHeading) heroHeading.innerHTML = 'Sửa chữa điện lạnh <span>Nhanh chóng – Uy tín</span>';

const heroActions = hero ? hero.querySelector('.hero-actions') : null;
if (heroActions) {
  const primary = heroActions.querySelector('.btn-primary');
  const secondary = heroActions.querySelector('.btn-secondary');
  if (primary) {
    primary.href = `tel:${PHONE}`;
    primary.innerHTML = '☎ <span>GỌI NGAY</span>';
  }
  if (secondary) {
    secondary.href = ZALO;
    secondary.target = '_blank';
    secondary.rel = 'noopener';
    secondary.innerHTML = '<span class="zalo-mark">Zalo</span><span>CHAT ZALO</span>';
  }
}

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
    const [asset, text] = trustAssets[index] || [];
    if (icon && asset) {
      icon.innerHTML = '';
      const image = document.createElement('img');
      image.src = `assets/${asset}`;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      icon.appendChild(image);
    }
    if (label && text) label.innerHTML = text;
  });
}

/* Dịch vụ: ảnh thật từ các nguồn ảnh thực tế, chọn hình đúng thiết bị/thao tác nhất có thể. */
const serviceVisuals = [
  {
    title: 'Sửa máy lạnh',
    detail: 'Không lạnh • Chảy nước • Kêu to • Hư board',
    image: 'https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&cs=tinysrgb&w=900'
  },
  {
    title: 'Sửa máy giặt',
    detail: 'Không vắt • Không xả • Báo lỗi • Hư board',
    image: 'https://images.pexels.com/photos/34734504/pexels-photo-34734504.jpeg?auto=compress&cs=tinysrgb&w=900'
  },
  {
    title: 'Sửa tủ lạnh',
    detail: 'Không lạnh • Không đông đá • Chảy nước',
    image: 'https://images.pexels.com/photos/5591927/pexels-photo-5591927.jpeg?auto=compress&cs=tinysrgb&w=900'
  },
  {
    title: 'Sửa máy nước nóng',
    detail: 'Không nóng • Rò điện • Không lên nguồn',
    image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=900'
  },
  {
    title: 'Sửa lò vi sóng',
    detail: 'Không nóng • Mất nguồn • Liệt phím',
    image: 'https://images.pexels.com/photos/35290689/pexels-photo-35290689.jpeg?auto=compress&cs=tinysrgb&w=900'
  }
];

const servicesGrid = document.querySelector('.services-grid');
const serviceCards = servicesGrid ? [...servicesGrid.querySelectorAll('.service-card')] : [];
serviceCards.forEach((card, index) => {
  const data = serviceVisuals[index];
  if (!data) return;
  card.href = '#lien-he';
  card.style.position = 'relative';
  card.style.overflow = 'hidden';
  card.style.minHeight = '240px';
  card.style.padding = '0';
  card.style.border = '0';
  card.style.background = '#172536';
  card.style.color = '#fff';
  card.innerHTML = `
    <span class="service-card-photo" aria-hidden="true"></span>
    <span class="service-card-shade" aria-hidden="true"></span>
    <span class="service-card-content">
      <span class="service-card-top"><span class="service-icon modern-icon">${icons[['❄️','🌀','🧊','🔥','🍲'][index]] || ''}</span><span class="arrow">↗</span></span>
      <span class="service-card-copy"><h3>${data.title}</h3><p>${data.detail}</p></span>
    </span>`;
  const photo = card.querySelector('.service-card-photo');
  const shade = card.querySelector('.service-card-shade');
  const content = card.querySelector('.service-card-content');
  const icon = card.querySelector('.service-icon');
  const arrow = card.querySelector('.arrow');
  const copy = card.querySelector('.service-card-copy');
  const heading = card.querySelector('h3');
  const detail = card.querySelector('p');
  Object.assign(photo.style, { position: 'absolute', inset: '0', display: 'block', backgroundImage: `url("${data.image}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.78', transform: 'scale(1.01)', transition: 'transform .3s ease, opacity .3s ease' });
  Object.assign(shade.style, { position: 'absolute', inset: '0', display: 'block', background: 'linear-gradient(180deg, rgba(7,21,37,.12) 25%, rgba(7,21,37,.88) 100%)' });
  Object.assign(content.style, { position: 'relative', zIndex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', minHeight: '240px', padding: '22px', boxSizing: 'border-box' });
  Object.assign(icon.style, { background: 'rgba(255,255,255,.94)', color: '#172536' });
  Object.assign(arrow.style, { background: 'rgba(255,255,255,.16)', color: '#fff' });
  Object.assign(copy.style, { display: 'block' });
  Object.assign(heading.style, { color: '#fff', margin: '12px 0 5px', fontSize: '25px' });
  Object.assign(detail.style, { color: 'rgba(255,255,255,.82)', margin: '0', fontSize: '13px', lineHeight: '1.45' });
  card.addEventListener('mouseenter', () => { photo.style.transform = 'scale(1.06)'; photo.style.opacity = '0.88'; });
  card.addEventListener('mouseleave', () => { photo.style.transform = 'scale(1.01)'; photo.style.opacity = '0.78'; });
});

function applyServiceMobileLayout() {
  if (!servicesGrid) return;
  const isMobile = window.matchMedia('(max-width: 699px)').matches;
  servicesGrid.style.gridTemplateColumns = isMobile ? '1fr' : '';
  serviceCards.forEach((card) => {
    card.style.width = isMobile ? '100%' : '';
    card.style.aspectRatio = 'auto';
    card.style.height = isMobile ? '190px' : '240px';
    const content = card.querySelector('.service-card-content');
    if (content) content.style.minHeight = isMobile ? '190px' : '240px';
  });
}
applyServiceMobileLayout();
window.addEventListener('resize', applyServiceMobileLayout);

/* Giá: không bịa số tiền khi chưa có bảng giá chính thức. */
const priceSection = document.querySelector('.price-section');
if (priceSection) {
  priceSection.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow-dark">MINH BẠCH CHI PHÍ</p>
      <h2 id="price-title">Bảng giá <span>tham khảo</span></h2>
      <p>Không có một mức giá chung cho mọi ca sửa. Kỹ thuật viên kiểm tra tình trạng thực tế và báo giá trước khi làm.</p>
    </div>
    <div class="price-preview v1-price-table" role="table" aria-label="Các hạng mục dịch vụ cần báo giá">
      <div class="price-row"><strong>Máy lạnh</strong><span>Kiểm tra, vệ sinh, sửa chữa, bơm gas, xử lý chảy nước</span><b>Liên hệ</b></div>
      <div class="price-row"><strong>Máy giặt</strong><span>Kiểm tra lỗi nguồn, xả, vắt, board và linh kiện</span><b>Liên hệ</b></div>
      <div class="price-row"><strong>Tủ lạnh</strong><span>Kiểm tra lạnh, đông đá, chảy nước, block, board</span><b>Liên hệ</b></div>
      <div class="price-row"><strong>Máy nước nóng</strong><span>Kiểm tra nguồn điện, gia nhiệt và các lỗi an toàn</span><b>Liên hệ</b></div>
      <div class="price-row"><strong>Lò vi sóng</strong><span>Kiểm tra nguồn, gia nhiệt, bàn phím và mạch</span><b>Liên hệ</b></div>
    </div>
    <p class="price-disclaimer"><strong>Nguyên tắc:</strong> kiểm tra trước – báo giá trước – khách đồng ý mới sửa. Chi phí thay đổi theo tình trạng và linh kiện thực tế.</p>`;
}

/* Kinh nghiệm: nội dung thật của website cũ + nội dung hữu ích theo nhóm lỗi. */
const experienceSection = document.querySelector('.experience-section');
if (experienceSection) {
  experienceSection.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow-dark">KINH NGHIỆM SỬ DỤNG</p>
      <h2 id="experience-title">Biết đúng cách, <span>đỡ tốn tiền</span></h2>
      <p>Một vài kiến thức đơn giản giúp bạn dùng thiết bị an toàn hơn, nhận biết sự cố sớm và biết khi nào nên gọi thợ.</p>
    </div>
    <div class="experience-grid v1-experience-grid">
      <article class="experience-card"><span>01</span><h3>Thời gian hâm nóng các loại thức ăn trong lò vi sóng?</h3><p>Gợi ý thời gian hâm nóng theo từng loại thức ăn để sử dụng lò vi sóng đúng cách và hạn chế tình trạng thức ăn quá nóng hoặc không chín đều.</p></article>
      <article class="experience-card"><span>02</span><h3>Cách vệ sinh máy lạnh tại nhà từ A–Z</h3><p>Những bước vệ sinh cơ bản, dấu hiệu máy lạnh cần được kiểm tra và cách chủ động bảo dưỡng để máy hoạt động ổn định hơn.</p></article>
      <article class="experience-card"><span>03</span><h3>Máy lạnh không lạnh, máy giặt không vắt: đừng cố chạy tiếp</h3><p>Khi thiết bị có tiếng động lạ, mùi khét, rò nước hoặc lỗi lặp lại, nên dừng sử dụng và kiểm tra nguyên nhân thay vì cố vận hành.</p></article>
    </div>`;
}

/* Footer: thông tin thật từ website Nguyễn Cường. */
const footer = document.querySelector('.site-footer');
if (footer) {
  footer.innerHTML = `
    <div class="footer-main">
      <div class="footer-brand">
        <strong>ĐIỆN LẠNH NGUYỄN CƯỜNG</strong>
        <p>Sửa chữa điện lạnh tại nhà · TP.HCM</p>
        <p>76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4, Hồ Chí Minh</p>
      </div>
      <div class="footer-links">
        <a href="#home">Trang chủ</a><a href="#dich-vu">Dịch vụ</a><a href="#van-de">Tình trạng thường gặp</a><a href="#bang-gia">Bảng giá</a><a href="#kinh-nghiem">Kinh nghiệm</a>
      </div>
      <div class="footer-contact">
        <a href="tel:${PHONE}">☎ ${PHONE}</a>
        <a href="${ZALO}" target="_blank" rel="noopener">Zalo: ${PHONE}</a>
        <a href="mailto:dienlanhnguyencuong79@gmail.com">dienlanhnguyencuong79@gmail.com</a>
      </div>
    </div>
    <div class="footer-bottom"><span>© 2026 Điện Lạnh Nguyễn Cường</span><span>Sửa chữa · Bảo trì · Lắp đặt điện lạnh tại TP.HCM</span></div>`;
}

const floating = document.querySelector('.floating-actions');
if (floating) {
  const phone = floating.querySelector('.phone');
  const zalo = floating.querySelector('.zalo');
  const messenger = floating.querySelector('.messenger');
  if (phone) phone.href = `tel:${PHONE}`;
  if (zalo) { zalo.href = ZALO; zalo.target = '_blank'; zalo.rel = 'noopener'; }
  if (messenger) messenger.href = '#lien-he';
}

/* SEO: LocalBusiness schema giúp Google hiểu tên, số điện thoại, địa chỉ và nhóm dịch vụ. */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Điện Lạnh Nguyễn Cường',
  url: 'https://dienlanhnguyencuong.com/',
  telephone: '+84367309659',
  email: 'dienlanhnguyenccuong79@gmail.com',
  description: 'Sửa chữa, bảo trì và lắp đặt máy lạnh, máy giặt, tủ lạnh, máy nước nóng và lò vi sóng tại TP.HCM.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4',
    addressLocality: 'Hồ Chí Minh',
    addressCountry: 'VN'
  },
  areaServed: 'TP. Hồ Chí Minh',
  serviceType: ['Sửa máy lạnh', 'Sửa máy giặt', 'Sửa tủ lạnh', 'Sửa máy nước nóng', 'Sửa lò vi sóng']
};
const ld = document.createElement('script');
ld.type = 'application/ld+json';
ld.textContent = JSON.stringify(structuredData);
document.head.appendChild(ld);

/* Scroll reveal — giữ cơ chế đã ổn định. */
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

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });
  requestAnimationFrame(() => revealTargets.forEach((element) => observer.observe(element)));
} else {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
}

window.addEventListener('load', revealVisibleElements);
window.addEventListener('scroll', revealVisibleElements, { passive: true });