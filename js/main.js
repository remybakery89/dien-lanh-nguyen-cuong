const redesignStylesheet = document.createElement('link');
redesignStylesheet.rel = 'stylesheet';
redesignStylesheet.href = 'css/homepage-redesign-v1.css?v=7';
document.head.appendChild(redesignStylesheet);

const PHONE = '0367309659';
const ZALO = 'https://zalo.me/0367309659';
const EMAIL = 'dienlanhnguyenccuong79@gmail.com';

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
if (menu) menu.addEventListener('click', (event) => { if (event.target === menu || event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

const icons = {
  '❄️': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M4.9 6l14.2 12M19.1 6L4.9 18M5 12h14M8 3.8 12 6l4-2.2M8 20.2 12 18l4 2.2"/></svg>',
  '🌀': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5c4.2 0 6.8 2.1 6.8 4.8 0 2.1-1.8 3.6-4.2 3.6-2.1 0-3.4-1.3-3.4-2.9 0-1.2 1-2.1 2.3-2.1 1 0 1.7.5 1.9 1.2M12 19.5c-4.2 0-6.8-2.1-6.8-4.8 0-2.1 1.8-3.6 4.2-3.6 2.1 0 3.4 1.3 3.4 2.9 0 1.2-1 2.1-2.3 2.1-1 0-1.7-.5-1.9-1.2"/></svg>',
  '🧊': '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 10h14M15 6h2"/></svg>',
  '🔥': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21c4 0 7-2.7 7-6.6 0-3.5-2.1-5.8-4.8-8.1.1 2.2-.8 3.5-2 4.2.1-3.4-1.4-5.7-3.4-7.5.1 3.8-2.8 5.8-2.8 9.3C6 17.9 8.7 21 12 21Z"/></svg>',
  '🍲': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h14v2a7 7 0 0 1-14 0V9Z"/><path d="M8 5h8M9 3v2M15 3v2M3 9h2M19 9h2"/></svg>'
};

document.querySelectorAll('.problem-icon, .service-icon, .menu-service-icon').forEach((element) => {
  const key = element.textContent.trim();
  if (icons[key]) { element.innerHTML = icons[key]; element.classList.add('modern-icon'); }
});

const hero = document.querySelector('.hero');
if (hero) {
  hero.classList.add('reference-hero');
  hero.style.background = "#071525 url('assets/hero-bg.png') center center / cover no-repeat";
  hero.style.overflow = 'hidden';
  hero.style.isolation = 'isolate';
  const heading = hero.querySelector('h1');
  if (heading) heading.innerHTML = 'Sửa chữa điện lạnh <span>Nhanh chóng – Uy tín</span>';
  const subtitle = hero.querySelector('.hero-subtitle');
  if (subtitle) { subtitle.textContent = 'Chuyên sửa chữa, bảo trì, lắp đặt các thiết bị điện lạnh\nTận tâm – Chất lượng – Giá cả hợp lý'; subtitle.style.textAlign = 'left'; }
  const actions = hero.querySelector('.hero-actions');
  if (actions) {
    const primary = actions.querySelector('.btn-primary');
    const secondary = actions.querySelector('.btn-secondary');
    if (primary) { primary.href = `tel:${PHONE}`; primary.innerHTML = '☎ <span>GỌI NGAY</span>'; }
    if (secondary) { secondary.href = ZALO; secondary.target = '_blank'; secondary.rel = 'noopener'; secondary.innerHTML = '<span class="zalo-mark">Zalo</span><span>CHAT ZALO</span>'; }
  }
  const visual = hero.querySelector('.hero-visual');
  if (visual) visual.remove();
}

const heroTrust = document.querySelector('.hero-trust');
if (heroTrust && hero) hero.insertAdjacentElement('afterend', heroTrust);
if (heroTrust) {
  const items = [...heroTrust.querySelectorAll(':scope > span')];
  if (items[1]) items[1].remove();
  const assets = [
    ['trust-speed.png', 'Có mặt<br>Nhanh chóng'],
    ['trust-price.png', 'Giá cả<br>Minh bạch'],
    ['trust-warranty.png', 'Bảo hành<br>dịch vụ'],
    ['trust-happy.png', 'Khách hàng<br>Hài lòng']
  ];
  heroTrust.classList.add('reference-trust');
  heroTrust.querySelectorAll(':scope > span').forEach((item, index) => {
    const icon = item.querySelector('.trust-icon');
    const label = item.querySelector('b');
    const [asset, text] = assets[index] || [];
    if (icon && asset) { icon.innerHTML = ''; const image = document.createElement('img'); image.src = `assets/${asset}`; image.alt = ''; image.setAttribute('aria-hidden', 'true'); icon.appendChild(image); }
    if (label && text) label.innerHTML = text;
  });
}

const serviceVisuals = [
  { id: 'may-lanh', title: 'Sửa máy lạnh', detail: 'Không lạnh • Chảy nước • Kêu to • Không chạy', image: 'https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'may-giat', title: 'Sửa máy giặt', detail: 'Không vắt • Không xả • Báo lỗi • Hư board', image: 'https://images.pexels.com/photos/34734504/pexels-photo-34734504.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'tu-lanh', title: 'Sửa tủ lạnh', detail: 'Không lạnh • Không đông đá • Chảy nước • Kêu to', image: 'https://images.pexels.com/photos/5591927/pexels-photo-5591927.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'may-nuoc-nong', title: 'Sửa máy nước nóng', detail: 'Không nóng • Rò điện • Không lên nguồn • Nhảy CB', image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'lo-vi-song', title: 'Sửa lò vi sóng', detail: 'Chạy nhưng không nóng • Mất nguồn • Liệt phím', image: 'https://images.pexels.com/photos/35290689/pexels-photo-35290689.jpeg?auto=compress&cs=tinysrgb&w=900' }
];

const serviceCards = [...document.querySelectorAll('.services-grid .service-card')];
serviceCards.forEach((card, index) => {
  const data = serviceVisuals[index];
  if (!data) return;
  card.href = `#chi-tiet-${data.id}`;
  card.style.position = 'relative'; card.style.overflow = 'hidden'; card.style.minHeight = '240px'; card.style.padding = '0'; card.style.border = '0'; card.style.background = '#172536'; card.style.color = '#fff';
  const emoji = ['❄️','🌀','🧊','🔥','🍲'][index];
  card.innerHTML = `<span class="service-card-photo" aria-hidden="true"></span><span class="service-card-shade" aria-hidden="true"></span><span class="service-card-content"><span class="service-card-top"><span class="service-icon modern-icon">${icons[emoji]}</span><span class="arrow">↗</span></span><span class="service-card-copy"><h3>${data.title}</h3><p>${data.detail}</p></span></span>`;
  const photo = card.querySelector('.service-card-photo');
  const shade = card.querySelector('.service-card-shade');
  const content = card.querySelector('.service-card-content');
  Object.assign(photo.style, { position:'absolute', inset:'0', display:'block', backgroundImage:`url("${data.image}")`, backgroundSize:'cover', backgroundPosition:'center', opacity:'0.78', transform:'scale(1.01)', transition:'transform .3s ease, opacity .3s ease' });
  Object.assign(shade.style, { position:'absolute', inset:'0', display:'block', background:'linear-gradient(180deg, rgba(7,21,37,.12) 25%, rgba(7,21,37,.88) 100%)' });
  Object.assign(content.style, { position:'relative', zIndex:'2', display:'flex', flexDirection:'column', justifyContent:'space-between', width:'100%', height:'100%', minHeight:'240px', padding:'22px', boxSizing:'border-box' });
  Object.assign(card.querySelector('.service-icon').style, { background:'rgba(255,255,255,.94)', color:'#172536' });
  Object.assign(card.querySelector('.arrow').style, { background:'rgba(255,255,255,.16)', color:'#fff' });
  Object.assign(card.querySelector('h3').style, { color:'#fff', margin:'12px 0 5px', fontSize:'25px' });
  Object.assign(card.querySelector('p').style, { color:'rgba(255,255,255,.82)', margin:'0', fontSize:'13px', lineHeight:'1.45' });
  card.addEventListener('mouseenter', () => { photo.style.transform='scale(1.06)'; photo.style.opacity='0.88'; });
  card.addEventListener('mouseleave', () => { photo.style.transform='scale(1.01)'; photo.style.opacity='0.78'; });
});
function applyServiceMobileLayout() {
  const grid = document.querySelector('.services-grid'); if (!grid) return;
  const mobile = window.matchMedia('(max-width: 699px)').matches;
  grid.style.gridTemplateColumns = mobile ? '1fr' : '';
  serviceCards.forEach((card) => { card.style.width=mobile?'100%':''; card.style.aspectRatio='auto'; card.style.height=mobile?'190px':'240px'; const content=card.querySelector('.service-card-content'); if(content) content.style.minHeight=mobile?'190px':'240px'; });
}
applyServiceMobileLayout(); window.addEventListener('resize', applyServiceMobileLayout);

/* Bỏ nút chọn tình trạng: toàn bộ card vẫn là vùng click, nhưng không còn CTA dư thừa bên trong. */
document.querySelectorAll('.problem-link').forEach((link) => link.remove());

/* Cụm 2 — nội dung chuyên sâu cho từng dịch vụ, phục vụ cả người dùng và SEO. */
const detailData = [
  {
    id:'may-lanh', title:'Sửa máy lạnh tại nhà', intro:'Máy lạnh không lạnh, lạnh yếu, chảy nước, kêu to hoặc đang chạy thì tự tắt? Nguyễn Cường tiếp nhận kiểm tra và sửa chữa máy lạnh tại nhà theo đúng tình trạng thực tế.', image:serviceVisuals[0].image,
    issues:['Máy lạnh không lạnh hoặc lạnh yếu','Máy lạnh chảy nước trong nhà','Máy lạnh kêu to, rung hoặc có mùi','Máy lạnh không chạy, tự tắt','Máy lạnh báo lỗi hoặc hoạt động bất thường'],
    causes:'Có thể liên quan đến vệ sinh, dàn lạnh – dàn nóng, quạt, nguồn điện, cảm biến, bo mạch hoặc hệ thống lạnh. Không nên đoán bệnh và thay linh kiện khi chưa kiểm tra thực tế.',
    handles:'Kiểm tra tình trạng máy · vệ sinh khi cần · xác định nguyên nhân · tư vấn phương án xử lý · báo giá trước khi sửa.'
  },
  {
    id:'may-giat', title:'Sửa máy giặt tại nhà', intro:'Máy giặt không vắt, không xả nước, không lên nguồn hoặc báo lỗi khiến quần áo bị ngâm giữa chừng? Dịch vụ tập trung xử lý đúng lỗi đang xảy ra trên máy.', image:serviceVisuals[1].image,
    issues:['Máy giặt không vắt hoặc vắt yếu','Máy giặt không xả nước','Máy giặt không lên nguồn','Máy giặt báo lỗi','Máy giặt rung mạnh hoặc hoạt động bất thường'],
    causes:'Nguyên nhân có thể nằm ở đường xả, khóa cửa, nguồn cấp, cảm biến, mô-tơ, bộ truyền động hoặc bo mạch. Cần kiểm tra theo từng dấu hiệu thay vì thay linh kiện theo phỏng đoán.',
    handles:'Kiểm tra lỗi · kiểm tra nguồn và đường nước · xác định bộ phận liên quan · tư vấn cách xử lý · báo giá trước khi thực hiện.'
  },
  {
    id:'tu-lanh', title:'Sửa tủ lạnh tại nhà', intro:'Tủ lạnh không lạnh, ngăn đá không đông, chảy nước hoặc chạy liên tục? Nguyễn Cường kiểm tra tình trạng thực tế để xác định nguyên nhân trước khi đề xuất sửa chữa.', image:serviceVisuals[2].image,
    issues:['Tủ lạnh không lạnh hoặc lạnh yếu','Ngăn đá không đông đá','Tủ lạnh chảy nước','Tủ lạnh chạy liên tục','Tủ lạnh kêu bất thường'],
    causes:'Có thể liên quan đến vệ sinh, luồng gió, quạt, cảm biến, hệ thống lạnh, block hoặc bo mạch. Việc xác định nguyên nhân cần dựa trên biểu hiện và tình trạng thực tế của tủ.',
    handles:'Kiểm tra khả năng làm lạnh · kiểm tra các bộ phận liên quan · xác định nguyên nhân · tư vấn phương án · báo giá trước khi sửa.'
  },
  {
    id:'may-nuoc-nong', title:'Sửa máy nước nóng tại nhà', intro:'Máy nước nóng không nóng, không lên nguồn, nhảy CB hoặc có dấu hiệu rò điện cần được kiểm tra sớm, đặc biệt khi liên quan đến an toàn điện.', image:serviceVisuals[3].image,
    issues:['Máy nước nóng không nóng','Máy nước nóng không lên nguồn','Máy nước nóng nhảy CB khi sử dụng','Nghi rò điện hoặc có dấu hiệu mất an toàn','Nước nóng hoạt động bất thường'],
    causes:'Sự cố có thể liên quan đến nguồn điện, bộ phận gia nhiệt, cảm biến, thermostat, dây dẫn hoặc các bộ phận bảo vệ. Nếu nghi rò điện, nên ngừng sử dụng và ngắt nguồn trước khi kiểm tra.',
    handles:'Kiểm tra nguồn và dấu hiệu bất thường · kiểm tra bộ phận liên quan · xác định nguyên nhân · tư vấn phương án an toàn · báo giá trước khi sửa.'
  },
  {
    id:'lo-vi-song', title:'Sửa lò vi sóng tại nhà', intro:'Lò vi sóng vẫn chạy nhưng không nóng, mất nguồn, liệt phím hoặc hoạt động bất thường? Nguyễn Cường kiểm tra theo từng dấu hiệu để tìm đúng nhóm lỗi.', image:serviceVisuals[4].image,
    issues:['Lò vi sóng chạy nhưng không nóng','Lò vi sóng mất nguồn','Lò vi sóng liệt phím hoặc không điều khiển','Lò vi sóng hoạt động chập chờn','Lò vi sóng có dấu hiệu bất thường'],
    causes:'Lỗi có thể liên quan đến nguồn, mạch điều khiển, bộ phận gia nhiệt hoặc các linh kiện bên trong. Không nên tự tháo lò nếu không có chuyên môn vì bên trong có bộ phận điện áp cao.',
    handles:'Kiểm tra tình trạng và biểu hiện lỗi · xác định nhóm nguyên nhân · tư vấn phương án xử lý · báo giá trước khi sửa.'
  }
];

const servicesSection = document.querySelector('.services-section');
if (servicesSection && !document.querySelector('#service-details')) {
  const wrapper = document.createElement('section');
  wrapper.id = 'service-details';
  wrapper.className = 'service-details-section';
  wrapper.innerHTML = `<div class="section-heading"><p class="eyebrow-dark">CHI TIẾT 5 DỊCH VỤ</p><h2>Đúng lỗi – <span>đúng cách xử lý</span></h2><p>Tìm nhanh tình trạng thường gặp, nguyên nhân có thể có và phạm vi Nguyễn Cường hỗ trợ tại nhà.</p></div>` + detailData.map((item, index) => `
    <article class="service-detail" id="chi-tiet-${item.id}">
      <div class="service-detail-media"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
      <div class="service-detail-body">
        <p class="service-detail-number">0${index + 1} / 05</p>
        <h3>${item.title}</h3>
        <p class="service-detail-intro">${item.intro}</p>
        <div class="service-detail-columns">
          <div><h4>Thường gặp</h4><ul>${item.issues.map(issue => `<li>${issue}</li>`).join('')}</ul></div>
          <div><h4>Nguyên nhân có thể</h4><p>${item.causes}</p></div>
        </div>
        <div class="service-detail-handle"><strong>Nguyễn Cường hỗ trợ:</strong> ${item.handles}</div>
        <div class="service-detail-actions"><a class="btn btn-primary" href="tel:${PHONE}">☎ GỌI NGAY</a><a class="btn btn-secondary service-zalo" href="${ZALO}" target="_blank" rel="noopener">Zalo CHAT</a></div>
      </div>
    </article>`).join('');
  servicesSection.insertAdjacentElement('afterend', wrapper);

  const style = document.createElement('style');
  style.id = 'service-detail-styles';
  style.textContent = `
    .service-details-section{width:100%;padding:76px 16px 84px;background:#f7f5f1;overflow:hidden}
    .service-details-section>.section-heading{margin-bottom:42px}
    .service-detail{width:min(1100px,100%);margin:0 auto 28px;display:grid;grid-template-columns:minmax(280px,.8fr) minmax(0,1.2fr);background:#fff;border:1px solid #e7e9eb;border-radius:24px;overflow:hidden;box-shadow:0 14px 35px rgba(23,37,54,.08);scroll-margin-top:90px}
    .service-detail:nth-of-type(even){grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr)}
    .service-detail:nth-of-type(even) .service-detail-media{order:2}
    .service-detail-media{min-height:430px;background:#dfe4e8}
    .service-detail-media img{display:block;width:100%;height:100%;min-height:430px;object-fit:cover}
    .service-detail-body{padding:36px 38px 34px}
    .service-detail-number{margin:0 0 9px;color:#e8892d;font-size:11px;font-weight:850;letter-spacing:.13em}
    .service-detail h3{margin:0;color:#172536;font-size:clamp(28px,4vw,42px);line-height:1.02;letter-spacing:-.04em}
    .service-detail-intro{margin:16px 0 0;color:#66717d;font-size:15px;line-height:1.65}
    .service-detail-columns{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:25px;padding-top:22px;border-top:1px solid #e7e9eb}
    .service-detail-columns h4{margin:0 0 11px;color:#172536;font-size:13px;text-transform:uppercase;letter-spacing:.06em}
    .service-detail-columns p,.service-detail-columns li{color:#4f5c68;font-size:13px;line-height:1.6}
    .service-detail-columns p{margin:0}.service-detail-columns ul{margin:0;padding-left:18px}.service-detail-columns li+li{margin-top:5px}
    .service-detail-handle{margin-top:22px;padding:15px 17px;border-radius:13px;background:#f7f5f1;color:#4f5c68;font-size:13px;line-height:1.55}.service-detail-handle strong{color:#172536}
    .service-detail-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.service-detail-actions .btn{min-height:46px;padding:0 18px}.service-detail-actions .btn-secondary{border-color:#d6dce1;color:#172536;background:#fff}.service-zalo{font-weight:800}
    @media(max-width:699px){.service-details-section{padding:58px 14px 64px}.service-detail,.service-detail:nth-of-type(even){display:flex;flex-direction:column;grid-template-columns:none;margin-bottom:18px;border-radius:18px}.service-detail:nth-of-type(even) .service-detail-media{order:0}.service-detail-media,.service-detail-media img{min-height:210px;height:210px}.service-detail-body{padding:24px 20px 22px}.service-detail h3{font-size:29px}.service-detail-intro{font-size:14px;line-height:1.6}.service-detail-columns{grid-template-columns:1fr;gap:18px;margin-top:20px;padding-top:18px}.service-detail-actions{margin-top:18px}.service-detail-actions .btn{flex:1;min-width:130px}}
  `;
  document.head.appendChild(style);
}

const priceSection = document.querySelector('.price-section');
if (priceSection) priceSection.innerHTML = `<div class="section-heading"><p class="eyebrow-dark">MINH BẠCH CHI PHÍ</p><h2 id="price-title">Bảng giá <span>tham khảo</span></h2><p>Không có một mức giá chung cho mọi ca sửa. Kỹ thuật viên kiểm tra tình trạng thực tế và báo giá trước khi làm.</p></div><div class="price-preview v1-price-table" role="table" aria-label="Các hạng mục dịch vụ cần báo giá"><div class="price-row"><strong>Máy lạnh</strong><span>Kiểm tra, vệ sinh, sửa chữa, bơm gas, xử lý chảy nước</span><b>Liên hệ</b></div><div class="price-row"><strong>Máy giặt</strong><span>Kiểm tra lỗi nguồn, xả, vắt, board và linh kiện</span><b>Liên hệ</b></div><div class="price-row"><strong>Tủ lạnh</strong><span>Kiểm tra lạnh, đông đá, chảy nước, block, board</span><b>Liên hệ</b></div><div class="price-row"><strong>Máy nước nóng</strong><span>Kiểm tra nguồn điện, gia nhiệt và các lỗi an toàn</span><b>Liên hệ</b></div><div class="price-row"><strong>Lò vi sóng</strong><span>Kiểm tra nguồn, gia nhiệt, bàn phím và mạch</span><b>Liên hệ</b></div></div><p class="price-disclaimer"><strong>Nguyên tắc:</strong> kiểm tra trước – báo giá trước – khách đồng ý mới sửa. Chi phí thay đổi theo tình trạng và linh kiện thực tế.</p>`;

const experienceSection = document.querySelector('.experience-section');
if (experienceSection) experienceSection.innerHTML = `<div class="section-heading"><p class="eyebrow-dark">KINH NGHIỆM SỬ DỤNG</p><h2 id="experience-title">Biết đúng cách, <span>đỡ tốn tiền</span></h2><p>Một vài kiến thức đơn giản giúp bạn dùng thiết bị an toàn hơn, nhận biết sự cố sớm và biết khi nào nên gọi thợ.</p></div><div class="experience-grid v1-experience-grid"><article class="experience-card"><span>01</span><h3>Thời gian hâm nóng các loại thức ăn trong lò vi sóng?</h3><p>Gợi ý thời gian hâm nóng theo từng loại thức ăn để sử dụng lò vi sóng đúng cách và hạn chế tình trạng thức ăn quá nóng hoặc không chín đều.</p></article><article class="experience-card"><span>02</span><h3>Cách vệ sinh máy lạnh tại nhà từ A–Z</h3><p>Những bước vệ sinh cơ bản, dấu hiệu máy lạnh cần được kiểm tra và cách chủ động bảo dưỡng để máy hoạt động ổn định hơn.</p></article><article class="experience-card"><span>03</span><h3>Máy lạnh không lạnh, máy giặt không vắt: đừng cố chạy tiếp</h3><p>Khi thiết bị có tiếng động lạ, mùi khét, rò nước hoặc lỗi lặp lại, nên dừng sử dụng và kiểm tra nguyên nhân thay vì cố vận hành.</p></article></div>`;

const footer = document.querySelector('.site-footer');
if (footer) footer.innerHTML = `<div class="footer-main"><div class="footer-brand"><strong>ĐIỆN LẠNH NGUYỄN CƯỜNG</strong><p>Sửa chữa điện lạnh tại nhà · TP.HCM</p><p>76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4, Hồ Chí Minh</p></div><div class="footer-links"><a href="#home">Trang chủ</a><a href="#dich-vu">Dịch vụ</a><a href="#van-de">Tình trạng thường gặp</a><a href="#bang-gia">Bảng giá</a><a href="#kinh-nghiem">Kinh nghiệm</a></div><div class="footer-contact"><a href="tel:${PHONE}">☎ ${PHONE}</a><a href="${ZALO}" target="_blank" rel="noopener">Zalo: ${PHONE}</a><a href="mailto:${EMAIL}">${EMAIL}</a></div></div><div class="footer-bottom"><span>© 2026 Điện Lạnh Nguyễn Cường</span><span>Sửa chữa · Bảo trì · Lắp đặt điện lạnh tại TP.HCM</span></div>`;

const floating = document.querySelector('.floating-actions');
if (floating) { const phone=floating.querySelector('.phone'), zalo=floating.querySelector('.zalo'), messenger=floating.querySelector('.messenger'); if(phone) phone.href=`tel:${PHONE}`; if(zalo){zalo.href=ZALO;zalo.target='_blank';zalo.rel='noopener';} if(messenger) messenger.href='#lien-he'; }

const structuredData = {'@context':'https://schema.org','@type':'LocalBusiness',name:'Điện Lạnh Nguyễn Cường',url:'https://dienlanhnguyencuong.com/',telephone:'+84367309659',email:EMAIL,description:'Sửa chữa, bảo trì và lắp đặt máy lạnh, máy giặt, tủ lạnh, máy nước nóng và lò vi sóng tại TP.HCM.',address:{'@type':'PostalAddress',streetAddress:'76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4',addressLocality:'Hồ Chí Minh',addressCountry:'VN'},areaServed:'TP. Hồ Chí Minh',serviceType:['Sửa máy lạnh','Sửa máy giặt','Sửa tủ lạnh','Sửa máy nước nóng','Sửa lò vi sóng']};
const ld=document.createElement('script'); ld.type='application/ld+json'; ld.textContent=JSON.stringify(structuredData); document.head.appendChild(ld);

const problemSection=document.querySelector('.problem-section');
if(problemSection){const heading=problemSection.querySelector('.section-heading');if(heading)heading.classList.add('reveal-up');problemSection.querySelectorAll('.problem-card').forEach((card,index)=>{card.classList.add(index%2===0?'reveal-left':'reveal-right');card.style.setProperty('--reveal-delay',`${index*120}ms`);});}
const detailsSection=document.querySelector('#service-details');
if(detailsSection){const heading=detailsSection.querySelector('.section-heading');if(heading)heading.classList.add('reveal-up');detailsSection.querySelectorAll('.service-detail').forEach((card,index)=>{card.classList.add(index%2===0?'reveal-left':'reveal-right');card.style.setProperty('--reveal-delay',`${index*120}ms`);});}
const servicesSectionReveal=document.querySelector('.services-section');
if(servicesSectionReveal){const heading=servicesSectionReveal.querySelector('.section-heading');if(heading)heading.classList.add('reveal-up');servicesSectionReveal.querySelectorAll('.service-card').forEach((card,index)=>{card.classList.add(index%2===0?'reveal-left':'reveal-right');card.style.setProperty('--reveal-delay',`${index*120}ms`);});}
const revealTargets=document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');
function revealVisibleElements(){revealTargets.forEach(element=>{const rect=element.getBoundingClientRect();const visible=rect.top<window.innerHeight*.9&&rect.bottom>window.innerHeight*.08;if(visible)element.classList.add('is-visible');});}
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.01,rootMargin:'0px 0px -5% 0px'});requestAnimationFrame(()=>revealTargets.forEach(element=>observer.observe(element)));}else revealTargets.forEach(element=>element.classList.add('is-visible'));
window.addEventListener('load',revealVisibleElements);window.addEventListener('scroll',revealVisibleElements,{passive:true});