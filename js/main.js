const redesignStylesheet = document.createElement('link');
redesignStylesheet.rel = 'stylesheet';
redesignStylesheet.href = 'css/homepage-redesign-v1.css?v=8';
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
  { id:'may-lanh', title:'Sửa máy lạnh', detail:'Không lạnh • Chảy nước • Kêu to • Không chạy', image:'https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id:'may-giat', title:'Sửa máy giặt', detail:'Không vắt • Không xả • Báo lỗi • Hư board', image:'https://images.pexels.com/photos/34734504/pexels-photo-34734504.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id:'tu-lanh', title:'Sửa tủ lạnh', detail:'Không lạnh • Không đông đá • Chảy nước • Kêu to', image:'https://images.pexels.com/photos/5591927/pexels-photo-5591927.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id:'may-nuoc-nong', title:'Sửa máy nước nóng', detail:'Không nóng • Rò điện • Không lên nguồn • Nhảy CB', image:'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id:'lo-vi-song', title:'Sửa lò vi sóng', detail:'Chạy nhưng không nóng • Mất nguồn • Liệt phím', image:'https://images.pexels.com/photos/35290689/pexels-photo-35290689.jpeg?auto=compress&cs=tinysrgb&w=900' }
];
const serviceCards = [...document.querySelectorAll('.services-grid .service-card')];
serviceCards.forEach((card,index)=>{
  const data=serviceVisuals[index]; if(!data)return;
  card.href=`#chi-tiet-${data.id}`;
  card.style.position='relative'; card.style.overflow='hidden'; card.style.minHeight='240px'; card.style.padding='0'; card.style.border='0'; card.style.background='#172536'; card.style.color='#fff';
  const emoji=['❄️','🌀','🧊','🔥','🍲'][index];
  card.innerHTML=`<span class="service-card-photo" aria-hidden="true"></span><span class="service-card-shade" aria-hidden="true"></span><span class="service-card-content"><span class="service-card-top"><span class="service-icon modern-icon">${icons[emoji]}</span><span class="arrow">↗</span></span><span class="service-card-copy"><h3>${data.title}</h3><p>${data.detail}</p></span></span>`;
  const photo=card.querySelector('.service-card-photo'), shade=card.querySelector('.service-card-shade'), content=card.querySelector('.service-card-content');
  Object.assign(photo.style,{position:'absolute',inset:'0',display:'block',backgroundImage:`url("${data.image}")`,backgroundSize:'cover',backgroundPosition:'center',opacity:'0.78',transform:'scale(1.01)',transition:'transform .3s ease, opacity .3s ease'});
  Object.assign(shade.style,{position:'absolute',inset:'0',display:'block',background:'linear-gradient(180deg,rgba(7,21,37,.12) 25%,rgba(7,21,37,.88) 100%)'});
  Object.assign(content.style,{position:'relative',zIndex:'2',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%',minHeight:'240px',padding:'22px',boxSizing:'border-box'});
  Object.assign(card.querySelector('.service-icon').style,{background:'rgba(255,255,255,.94)',color:'#172536'});
  Object.assign(card.querySelector('.arrow').style,{background:'rgba(255,255,255,.16)',color:'#fff'});
  Object.assign(card.querySelector('h3').style,{color:'#fff',margin:'12px 0 5px',fontSize:'25px'});
  Object.assign(card.querySelector('p').style,{color:'rgba(255,255,255,.82)',margin:'0',fontSize:'13px',lineHeight:'1.45'});
  card.addEventListener('mouseenter',()=>{photo.style.transform='scale(1.06)';photo.style.opacity='0.88';});
  card.addEventListener('mouseleave',()=>{photo.style.transform='scale(1.01)';photo.style.opacity='0.78';});
});
function applyServiceMobileLayout(){const grid=document.querySelector('.services-grid');if(!grid)return;const mobile=window.matchMedia('(max-width:699px)').matches;grid.style.gridTemplateColumns=mobile?'1fr':'';serviceCards.forEach(card=>{card.style.width=mobile?'100%':'';card.style.aspectRatio='auto';card.style.height=mobile?'190px':'240px';const content=card.querySelector('.service-card-content');if(content)content.style.minHeight=mobile?'190px':'240px';});}
applyServiceMobileLayout(); window.addEventListener('resize',applyServiceMobileLayout);

document.querySelectorAll('.problem-link').forEach(link=>link.remove());

const detailData=[
 {id:'may-lanh',title:'Sửa máy lạnh tại nhà',intro:'Máy lạnh không lạnh, lạnh yếu, chảy nước, kêu to hoặc đang chạy thì tự tắt? Nguyễn Cường tiếp nhận kiểm tra và sửa chữa máy lạnh tại nhà theo đúng tình trạng thực tế.',image:serviceVisuals[0].image,issues:['Không lạnh hoặc lạnh yếu','Chảy nước trong nhà','Kêu to, rung hoặc có mùi','Không chạy hoặc tự tắt','Báo lỗi hoặc hoạt động bất thường'],causes:'Có thể liên quan đến vệ sinh, dàn lạnh – dàn nóng, quạt, nguồn điện, cảm biến, bo mạch hoặc hệ thống lạnh. Không nên đoán bệnh và thay linh kiện khi chưa kiểm tra thực tế.',handles:'Kiểm tra tình trạng máy · vệ sinh khi cần · xác định nguyên nhân · tư vấn phương án xử lý · báo giá trước khi sửa.'},
 {id:'may-giat',title:'Sửa máy giặt tại nhà',intro:'Máy giặt không vắt, không xả nước, không lên nguồn hoặc báo lỗi khiến quần áo bị ngâm giữa chừng? Dịch vụ tập trung xử lý đúng lỗi đang xảy ra trên máy.',image:serviceVisuals[1].image,issues:['Không vắt hoặc vắt yếu','Không xả nước','Không lên nguồn','Báo lỗi','Rung mạnh hoặc hoạt động bất thường'],causes:'Nguyên nhân có thể nằm ở đường xả, khóa cửa, nguồn cấp, cảm biến, mô-tơ, bộ truyền động hoặc bo mạch. Cần kiểm tra theo từng dấu hiệu thay vì thay linh kiện theo phỏng đoán.',handles:'Kiểm tra lỗi · kiểm tra nguồn và đường nước · xác định bộ phận liên quan · tư vấn cách xử lý · báo giá trước khi thực hiện.'},
 {id:'tu-lanh',title:'Sửa tủ lạnh tại nhà',intro:'Tủ lạnh không lạnh, ngăn đá không đông, chảy nước hoặc chạy liên tục? Nguyễn Cường kiểm tra tình trạng thực tế để xác định nguyên nhân trước khi đề xuất sửa chữa.',image:serviceVisuals[2].image,issues:['Không lạnh hoặc lạnh yếu','Ngăn đá không đông đá','Chảy nước','Chạy liên tục','Kêu bất thường'],causes:'Có thể liên quan đến vệ sinh, luồng gió, cảm biến, quạt, hệ thống lạnh, block hoặc bo mạch. Việc xác định nguyên nhân cần dựa trên tình trạng thực tế của từng tủ.',handles:'Kiểm tra khả năng làm lạnh · xác định khu vực lỗi · tư vấn phương án · báo giá trước · sửa chữa khi khách hàng đồng ý.'},
 {id:'may-nuoc-nong',title:'Sửa máy nước nóng tại nhà',intro:'Máy nước nóng không nóng, không lên nguồn, thường xuyên nhảy CB hoặc có dấu hiệu rò điện là những tình trạng cần được kiểm tra sớm, đặc biệt khi liên quan đến an toàn điện.',image:serviceVisuals[3].image,issues:['Không nóng','Không lên nguồn','Nhảy CB khi sử dụng','Nghi rò điện','Hoạt động bất thường'],causes:'Có thể liên quan đến nguồn điện, thiết bị bảo vệ, bộ phận gia nhiệt, cảm biến hoặc các kết nối điện. Khi nghi có rò điện hoặc mất an toàn, nên ngừng sử dụng và kiểm tra.',handles:'Kiểm tra nguồn và tình trạng an toàn · xác định nguyên nhân · tư vấn phương án xử lý · báo giá trước khi thực hiện.'},
 {id:'lo-vi-song',title:'Sửa lò vi sóng tại nhà',intro:'Lò vi sóng vẫn chạy nhưng không nóng, mất nguồn, liệt phím hoặc hoạt động chập chờn? Nguyễn Cường tiếp nhận kiểm tra theo từng dấu hiệu để tránh sửa chữa theo phỏng đoán.',image:serviceVisuals[4].image,issues:['Chạy nhưng không nóng','Mất nguồn','Liệt phím hoặc không điều khiển','Hoạt động chập chờn','Có dấu hiệu bất thường'],causes:'Nguyên nhân có thể nằm ở nguồn cấp, mạch điều khiển, bộ phận gia nhiệt hoặc các linh kiện liên quan. Lò vi sóng có phần điện cao áp nên không nên tự tháo khi không có chuyên môn.',handles:'Kiểm tra tình trạng · xác định nhóm lỗi · tư vấn phương án · báo giá trước khi sửa.'}
];
const servicesSection=document.querySelector('.services-section');
if(servicesSection&&!document.querySelector('#service-details')){
  const wrapper=document.createElement('section');wrapper.id='service-details';wrapper.className='service-details-section';
  wrapper.innerHTML=`<div class="section-heading"><p class="eyebrow-dark">CHI TIẾT 5 DỊCH VỤ</p><h2>Đúng lỗi – <span>đúng cách xử lý</span></h2><p>Tìm nhanh tình trạng thường gặp, nguyên nhân có thể có và phạm vi Nguyễn Cường hỗ trợ tại nhà.</p></div>`+detailData.map((item,index)=>`<article class="service-detail" id="chi-tiet-${item.id}"><div class="service-detail-media"><img src="${item.image}" alt="${item.title}" loading="lazy"></div><div class="service-detail-body"><p class="service-detail-number">0${index+1} / 05</p><h3>${item.title}</h3><p class="service-detail-intro">${item.intro}</p><div class="service-detail-columns"><div><h4>Thường gặp</h4><ul>${item.issues.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><h4>Nguyên nhân có thể</h4><p>${item.causes}</p></div></div><div class="service-detail-handle"><strong>Nguyễn Cường hỗ trợ:</strong> ${item.handles}</div><div class="service-detail-actions"><a class="btn btn-primary" href="tel:${PHONE}">☎ GỌI NGAY</a><a class="btn btn-secondary service-zalo" href="${ZALO}" target="_blank" rel="noopener">Zalo CHAT</a></div></div></article>`).join('');
  servicesSection.insertAdjacentElement('afterend',wrapper);
}

const priceSection=document.querySelector('.price-section');
if(priceSection)priceSection.innerHTML=`<div class="section-heading"><p class="eyebrow-dark">MINH BẠCH CHI PHÍ</p><h2 id="price-title">Bảng giá <span>tham khảo</span></h2><p>Không có một mức giá chung cho mọi ca sửa. Kỹ thuật viên kiểm tra tình trạng thực tế và báo giá trước khi làm.</p></div><div class="price-preview v1-price-table" role="table" aria-label="Các hạng mục dịch vụ cần báo giá"><div class="price-row"><strong>Máy lạnh</strong><span>Kiểm tra, vệ sinh, sửa chữa, bơm gas, xử lý chảy nước</span><b>Liên hệ</b></div><div class="price-row"><strong>Máy giặt</strong><span>Kiểm tra lỗi nguồn, xả, vắt, board và linh kiện</span><b>Liên hệ</b></div><div class="price-row"><strong>Tủ lạnh</strong><span>Kiểm tra lạnh, đông đá, chảy nước, block, board</span><b>Liên hệ</b></div><div class="price-row"><strong>Máy nước nóng</strong><span>Kiểm tra nguồn điện, gia nhiệt và các lỗi an toàn</span><b>Liên hệ</b></div><div class="price-row"><strong>Lò vi sóng</strong><span>Kiểm tra nguồn, gia nhiệt, bàn phím và mạch</span><b>Liên hệ</b></div></div><p class="price-disclaimer"><strong>Nguyên tắc:</strong> kiểm tra trước – báo giá trước – khách đồng ý mới sửa. Chi phí thay đổi theo tình trạng và linh kiện thực tế.</p>`;

const experienceSection=document.querySelector('.experience-section');
if(experienceSection)experienceSection.innerHTML=`<div class="section-heading"><p class="eyebrow-dark">KINH NGHIỆM SỬ DỤNG</p><h2 id="experience-title">Biết đúng cách, <span>đỡ tốn tiền</span></h2><p>Một vài kiến thức đơn giản giúp bạn dùng thiết bị an toàn hơn, nhận biết sự cố sớm và biết khi nào nên gọi thợ.</p></div><div class="experience-grid v1-experience-grid"><article class="experience-card"><span>01</span><h3>Thời gian hâm nóng các loại thức ăn trong lò vi sóng?</h3><p>Gợi ý thời gian hâm nóng theo từng loại thức ăn để sử dụng lò vi sóng đúng cách và hạn chế tình trạng thức ăn quá nóng hoặc không chín đều.</p></article><article class="experience-card"><span>02</span><h3>Cách vệ sinh máy lạnh tại nhà từ A–Z</h3><p>Những bước vệ sinh cơ bản, dấu hiệu máy lạnh cần được kiểm tra và cách chủ động bảo dưỡng để máy hoạt động ổn định hơn.</p></article><article class="experience-card"><span>03</span><h3>Máy lạnh không lạnh, máy giặt không vắt: đừng cố chạy tiếp</h3><p>Khi thiết bị có tiếng động lạ, mùi khét, rò nước hoặc lỗi lặp lại, nên dừng sử dụng và kiểm tra nguyên nhân thay vì cố vận hành.</p></article></div>`;

const trustSection=document.querySelector('.trust-section');
if(trustSection){
  trustSection.innerHTML=`<div class="section-heading"><p class="eyebrow-dark">LÀM RÕ TRƯỚC KHI SỬA</p><h2 id="trust-title">Điều bạn có thể <span>yên tâm</span></h2><p>Khách hàng cần biết rõ mình đang được kiểm tra gì, sửa gì và chi phí được xác nhận ra sao trước khi quyết định.</p></div><div class="trust-grid trust-grid-v2"><article class="trust-card"><span class="trust-card-icon">✓</span><div><h3>Kiểm tra tận nơi</h3><p>Đánh giá tình trạng thiết bị thực tế trước khi đưa ra phương án.</p></div></article><article class="trust-card"><span class="trust-card-icon">₫</span><div><h3>Báo giá trước khi sửa</h3><p>Chi phí được trao đổi trước; khách đồng ý mới tiến hành.</p></div></article><article class="trust-card"><span class="trust-card-icon">↔</span><div><h3>Tư vấn theo đúng lỗi</h3><p>Tập trung vào nguyên nhân và phương án phù hợp với tình trạng máy.</p></div></article><article class="trust-card"><span class="trust-card-icon">▣</span><div><h3>Linh kiện rõ ràng</h3><p>Trao đổi rõ hạng mục và linh kiện cần thay khi phát sinh.</p></div></article><article class="trust-card"><span class="trust-card-icon">✓</span><div><h3>Bảo hành sau sửa</h3><p>Thực hiện theo chính sách bảo hành áp dụng cho từng hạng mục.</p></div></article><article class="trust-card"><span class="trust-card-icon">☎</span><div><h3>Hỗ trợ khi cần</h3><p>Có kênh liên hệ để khách trao đổi thêm về tình trạng thiết bị.</p></div></article></div><div class="trust-note"><strong>Không chạy theo con số đẹp.</strong> Những thông tin như số năm kinh nghiệm, số ca sửa chữa, đánh giá khách hàng hay thời gian bảo hành cụ thể chỉ đưa lên khi có số liệu thực tế.</div>`;
}

const processSection=document.querySelector('.process-section');
if(processSection){
  processSection.classList.add('process-section-v2');
  processSection.innerHTML=`<div class="section-heading"><p class="eyebrow-dark">QUY TRÌNH RÕ RÀNG</p><h2 id="process-title">Từ lúc gọi đến <span>lúc bàn giao</span></h2><p>Quy trình ngắn gọn để khách biết trước mình sẽ trải qua những bước nào.</p></div><div class="process-grid process-grid-v2"><article class="process-step"><span>01</span><div><h3>Gửi tình trạng</h3><p>Cho biết thiết bị gì và đang gặp lỗi gì; có thể gửi thêm hình ảnh nếu cần.</p></div></article><article class="process-step"><span>02</span><div><h3>Kiểm tra tận nơi</h3><p>Kỹ thuật viên kiểm tra thiết bị và xác định nhóm nguyên nhân có thể gây lỗi.</p></div></article><article class="process-step"><span>03</span><div><h3>Báo giá & xác nhận</h3><p>Trao đổi phương án và chi phí trước khi thực hiện sửa chữa.</p></div></article><article class="process-step"><span>04</span><div><h3>Sửa chữa</h3><p>Chỉ tiến hành khi khách hàng đồng ý với phương án đã trao đổi.</p></div></article><article class="process-step"><span>05</span><div><h3>Kiểm tra & bàn giao</h3><p>Kiểm tra lại thiết bị, hướng dẫn sử dụng và áp dụng bảo hành nếu có.</p></div></article></div><div class="process-cta"><div><strong>Thiết bị đang gặp lỗi?</strong><span>Gọi hoặc chat Zalo để mô tả tình trạng trước.</span></div><div class="process-cta-actions"><a class="btn btn-primary" href="tel:${PHONE}">☎ GỌI NGAY</a><a class="btn btn-secondary" href="${ZALO}" target="_blank" rel="noopener">CHAT ZALO</a></div></div>`;
}

const footer=document.querySelector('.site-footer');
if(footer)footer.innerHTML=`<div class="footer-main"><div class="footer-brand"><strong>ĐIỆN LẠNH NGUYỄN CƯỜNG</strong><p>Sửa chữa điện lạnh tại nhà · TP.HCM</p><p>76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4, Hồ Chí Minh</p></div><div class="footer-links"><a href="#home">Trang chủ</a><a href="#dich-vu">Dịch vụ</a><a href="#van-de">Tình trạng thường gặp</a><a href="#bang-gia">Bảng giá</a><a href="#kinh-nghiem">Kinh nghiệm</a></div><div class="footer-contact"><a href="tel:${PHONE}">☎ ${PHONE}</a><a href="${ZALO}" target="_blank" rel="noopener">Zalo: ${PHONE}</a><a href="mailto:${EMAIL}">${EMAIL}</a></div></div><div class="footer-bottom"><span>© 2026 Điện Lạnh Nguyễn Cường</span><span>Sửa chữa · Bảo trì · Lắp đặt điện lạnh tại TP.HCM</span></div>`;

const floating=document.querySelector('.floating-actions');
if(floating){const phone=floating.querySelector('.phone'),zalo=floating.querySelector('.zalo'),messenger=floating.querySelector('.messenger');if(phone)phone.href=`tel:${PHONE}`;if(zalo){zalo.href=ZALO;zalo.target='_blank';zalo.rel='noopener';}if(messenger)messenger.href='#lien-he';}

const structuredData={'@context':'https://schema.org','@type':'LocalBusiness',name:'Điện Lạnh Nguyễn Cường',url:'https://dienlanhnguyencuong.com/',telephone:'+84367309659',email:EMAIL,description:'Sửa chữa, bảo trì và lắp đặt máy lạnh, máy giặt, tủ lạnh, máy nước nóng và lò vi sóng tại TP.HCM.',address:{'@type':'PostalAddress',streetAddress:'76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4',addressLocality:'Hồ Chí Minh',addressCountry:'VN'},areaServed:'TP. Hồ Chí Minh',serviceType:['Sửa máy lạnh','Sửa máy giặt','Sửa tủ lạnh','Sửa máy nước nóng','Sửa lò vi sóng']};
const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify(structuredData);document.head.appendChild(ld);

if(!document.querySelector('#cluster3-styles')){
  const style=document.createElement('style');style.id='cluster3-styles';style.textContent=`
    .trust-section-v2{background:#f7f5f1}
    .trust-grid-v2{max-width:1050px!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:14px!important}
    .trust-card{display:flex;align-items:flex-start;gap:15px;min-width:0;padding:22px;border:1px solid #e7e9eb;border-radius:18px;background:#fff;box-shadow:0 8px 24px rgba(23,37,54,.05)}
    .trust-card-icon{display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:11px;background:rgba(232,137,45,.12);color:#e8892d;font-weight:850}
    .trust-card h3{margin:1px 0 6px;color:#172536;font-size:17px;line-height:1.2}.trust-card p{margin:0;color:#66717d;font-size:13px;line-height:1.55}
    .trust-note{width:min(1050px,100%);margin:22px auto 0;padding:15px 18px;border-left:3px solid #e8892d;background:#fff;color:#66717d;font-size:12px;line-height:1.55}.trust-note strong{color:#172536}
    .process-section-v2 .process-grid-v2{width:min(1050px,100%);margin:0 auto;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
    .process-grid-v2 .process-step{position:relative;min-width:0;padding:22px 17px;border:1px solid #e7e9eb;border-radius:18px;background:#fff}.process-grid-v2 .process-step>span{display:grid;place-items:center;width:38px;height:38px;margin-bottom:18px;border-radius:50%;background:#172536;color:#fff;font-size:12px;font-weight:850}.process-grid-v2 .process-step h3{margin:0 0 8px;color:#172536;font-size:16px;line-height:1.25}.process-grid-v2 .process-step p{margin:0;color:#66717d;font-size:12px;line-height:1.55}
    .process-cta{width:min(1050px,100%);margin:22px auto 0;padding:22px 24px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-radius:18px;background:#172536;color:#fff}.process-cta>div:first-child{display:flex;flex-direction:column;gap:5px}.process-cta strong{font-size:17px}.process-cta span{color:rgba(255,255,255,.68);font-size:12px}.process-cta-actions{display:flex;gap:10px;flex-wrap:wrap}.process-cta .btn{min-height:46px;padding:0 18px}.process-cta .btn-secondary{border-color:rgba(255,255,255,.4);color:#fff}
    @media(max-width:899px){.trust-grid-v2{grid-template-columns:repeat(2,minmax(0,1fr))!important}.process-section-v2 .process-grid-v2{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:699px){.trust-grid-v2{grid-template-columns:1fr!important;gap:10px!important}.trust-card{padding:18px}.process-section-v2 .process-grid-v2{grid-template-columns:1fr;gap:10px}.process-grid-v2 .process-step{display:flex;gap:13px;padding:17px}.process-grid-v2 .process-step>span{margin:0;flex:0 0 34px;width:34px;height:34px}.process-cta{flex-direction:column;align-items:flex-start;padding:20px}.process-cta-actions{width:100%}.process-cta .btn{flex:1}}
  `;document.head.appendChild(style);
}

const problemSection=document.querySelector('.problem-section');
if(problemSection){const heading=problemSection.querySelector('.section-heading');if(heading)heading.classList.add('reveal-up');problemSection.querySelectorAll('.problem-card').forEach((card,index)=>{card.classList.add(index%2===0?'reveal-left':'reveal-right');card.style.setProperty('--reveal-delay',`${index*120}ms`);});}
const servicesSectionReveal=document.querySelector('.services-section');
if(servicesSectionReveal){const heading=servicesSectionReveal.querySelector('.section-heading');if(heading)heading.classList.add('reveal-up');servicesSectionReveal.querySelectorAll('.service-card').forEach((card,index)=>{card.classList.add(index%2===0?'reveal-left':'reveal-right');card.style.setProperty('--reveal-delay',`${index*120}ms`);});}
const detailsSection=document.querySelector('#service-details');
if(detailsSection){const heading=detailsSection.querySelector('.section-heading');if(heading)heading.classList.add('reveal-up');detailsSection.querySelectorAll('.service-detail').forEach((card,index)=>{card.classList.add(index%2===0?'reveal-left':'reveal-right');card.style.setProperty('--reveal-delay',`${index*120}ms`);});}
const trustReveal=document.querySelector('.trust-section');
if(trustReveal){trustReveal.querySelectorAll('.section-heading,.trust-card,.trust-note').forEach((el,index)=>{el.classList.add(index===0?'reveal-up':index%2===0?'reveal-left':'reveal-right');el.style.setProperty('--reveal-delay',`${Math.min(index,6)*100}ms`);});}
const processReveal=document.querySelector('.process-section');
if(processReveal){processReveal.querySelectorAll('.section-heading,.process-step,.process-cta').forEach((el,index)=>{el.classList.add(index===0?'reveal-up':index%2===0?'reveal-left':'reveal-right');el.style.setProperty('--reveal-delay',`${Math.min(index,6)*100}ms`);});}
const revealTargets=document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right');
function revealVisibleElements(){revealTargets.forEach(element=>{const rect=element.getBoundingClientRect();const visible=rect.top<window.innerHeight*.9&&rect.bottom>window.innerHeight*.08;if(visible)element.classList.add('is-visible');});}
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.01,rootMargin:'0px 0px -5% 0px'});requestAnimationFrame(()=>revealTargets.forEach(element=>observer.observe(element)));}else revealTargets.forEach(element=>element.classList.add('is-visible'));
window.addEventListener('load',revealVisibleElements);window.addEventListener('scroll',revealVisibleElements,{passive:true});