(() => {
  const original = document.createElement('script');
  original.src = 'js/main-original.js?v=5';
  original.onload = () => {
    const style = document.createElement('style');
    style.id = 'service-details-layout-fix';
    style.textContent = `
      #service-details {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 72px 16px 80px;
        box-sizing: border-box;
        overflow: hidden;
      }
      #service-details > .section-heading {
        width: 100%;
        max-width: 650px;
        margin: 0 auto 36px;
      }
      #service-details .service-detail {
        width: 100%;
        max-width: 1050px;
        min-width: 0;
        margin: 0 auto 28px;
        display: grid;
        grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
        align-items: stretch;
        overflow: hidden;
        border: 1px solid #e7e9eb;
        border-radius: 22px;
        background: #fff;
        box-shadow: 0 10px 30px rgba(23,37,54,.07);
        box-sizing: border-box;
        scroll-margin-top: 90px;
      }
      #service-details .service-detail:nth-of-type(even) .service-detail-media { order: 2; }
      #service-details .service-detail:nth-of-type(even) .service-detail-body { order: 1; }
      #service-details .service-detail-media {
        position: relative;
        min-width: 0;
        min-height: 100%;
        height: auto;
        overflow: hidden;
        background: #eef1f3;
      }
      #service-details .service-detail-media img {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 390px;
        object-fit: cover;
        object-position: center;
      }
      #service-details .service-detail-body {
        min-width: 0;
        padding: 38px 42px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        overflow-wrap: anywhere;
      }
      #service-details .service-detail-number {
        margin: 0 0 10px;
        color: #e8892d;
        font-size: 11px;
        font-weight: 850;
        letter-spacing: .12em;
      }
      #service-details .service-detail-body h3 {
        margin: 0 0 14px;
        color: #172536;
        font-size: clamp(27px, 3vw, 38px);
        line-height: 1.05;
        letter-spacing: -.035em;
      }
      #service-details .service-detail-intro {
        margin: 0;
        color: #66717d;
        font-size: 14px;
        line-height: 1.65;
      }
      #service-details .service-detail-columns {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 24px;
        margin-top: 24px;
        padding-top: 22px;
        border-top: 1px solid #e7e9eb;
      }
      #service-details .service-detail-columns h4 {
        margin: 0 0 10px;
        color: #172536;
        font-size: 13px;
        line-height: 1.3;
      }
      #service-details .service-detail-columns ul {
        display: grid;
        gap: 7px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      #service-details .service-detail-columns li,
      #service-details .service-detail-columns p {
        margin: 0;
        color: #66717d;
        font-size: 12px;
        line-height: 1.55;
      }
      #service-details .service-detail-columns li {
        position: relative;
        padding-left: 14px;
      }
      #service-details .service-detail-columns li::before {
        content: '';
        position: absolute;
        left: 0;
        top: .58em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #e8892d;
      }
      #service-details .service-detail-handle {
        margin-top: 20px;
        padding: 13px 15px;
        border-left: 3px solid #e8892d;
        background: #f7f5f1;
        color: #66717d;
        font-size: 12px;
        line-height: 1.55;
      }
      #service-details .service-detail-handle strong { color: #172536; }
      #service-details .service-detail-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 22px;
      }
      #service-details .service-detail-actions .btn {
        min-height: 44px;
        padding: 0 18px;
        border-radius: 12px;
        font-size: 12px;
      }
      #service-details .service-detail-actions .btn-secondary {
        border: 1px solid #d9dde1;
        color: #172536;
        background: #fff;
      }
      @media (max-width: 899px) {
        #service-details .service-detail { grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); }
        #service-details .service-detail-body { padding: 30px 28px; }
        #service-details .service-detail-media img { min-height: 360px; }
        #service-details .service-detail-columns { gap: 18px; }
      }
      @media (max-width: 699px) {
        #service-details { padding: 58px 16px 64px; }
        #service-details > .section-heading { margin-bottom: 28px; }
        #service-details .service-detail,
        #service-details .service-detail:nth-of-type(even) { grid-template-columns: 1fr; margin-bottom: 18px; border-radius: 18px; }
        #service-details .service-detail:nth-of-type(even) .service-detail-media,
        #service-details .service-detail:nth-of-type(even) .service-detail-body { order: initial; }
        #service-details .service-detail-media { height: 205px; min-height: 205px; }
        #service-details .service-detail-media img { width: 100%; height: 205px; min-height: 205px; object-fit: cover; }
        #service-details .service-detail-body { padding: 24px 20px 22px; }
        #service-details .service-detail-number { margin-bottom: 8px; }
        #service-details .service-detail-body h3 { margin-bottom: 11px; font-size: 27px; }
        #service-details .service-detail-intro { font-size: 13px; line-height: 1.6; }
        #service-details .service-detail-columns { grid-template-columns: 1fr; gap: 18px; margin-top: 19px; padding-top: 18px; }
        #service-details .service-detail-handle { margin-top: 17px; }
        #service-details .service-detail-actions { margin-top: 18px; }
      }
    `;
    document.head.appendChild(style);

    const priceSection = document.querySelector('.price-section');
    if (priceSection) {
      const priceData = [
        {
          title: 'Máy lạnh',
          rows: [
            ['Máy lạnh không hoạt động', '300.000 – 800.000đ'],
            ['Máy hoạt động nhưng không lạnh', '400.000 – 1.000.000đ'],
            ['Remote bấm không được', '150.000 – 400.000đ'],
            ['Máy hoạt động có tiếng kêu lạ', '300.000 – 700.000đ'],
            ['Hỏng bo mạch / báo lỗi', '500.000 – 1.500.000đ']
          ]
        },
        {
          title: 'Máy giặt',
          rows: [
            ['Máy giặt không lên nguồn', '300.000 – 700.000đ'],
            ['Máy giặt không vắt', '400.000 – 900.000đ'],
            ['Máy bị kêu, run lắc', '300.000 – 800.000đ'],
            ['Hư bo mạch / báo lỗi', '500.000 – 1.500.000đ']
          ]
        },
        {
          title: 'Tủ lạnh',
          rows: [
            ['Tủ không đông đá', '400.000 – 1.000.000đ'],
            ['Ngăn mát kém lạnh', '300.000 – 800.000đ'],
            ['Tủ hở ron cửa', '200.000 – 500.000đ'],
            ['Hư bo mạch / báo lỗi', '500.000 – 1.500.000đ'],
            ['Block không hoạt động', '800.000 – 2.000.000đ']
          ]
        },
        {
          title: 'Máy nước nóng',
          rows: [
            ['Máy không hoạt động', '300.000 – 700.000đ'],
            ['Hoạt động nhưng không nóng', '400.000 – 900.000đ'],
            ['Máy ra nước yếu', '200.000 – 500.000đ'],
            ['Hư bo mạch / báo lỗi', '500.000 – 1.200.000đ']
          ]
        },
        {
          title: 'Lò vi sóng',
          rows: [
            ['Lò không hoạt động', '300.000 – 700.000đ'],
            ['Hoạt động nhưng không nóng', '400.000 – 900.000đ'],
            ['Bị liệt bàn phím', '200.000 – 500.000đ'],
            ['Lò hư bo mạch / mất nguồn', '500.000 – 1.200.000đ']
          ]
        }
      ];

      priceSection.innerHTML = `
        <div class="section-heading price-heading-v2">
          <p class="eyebrow-dark">MINH BẠCH CHI PHÍ</p>
          <h2>Bảng giá <span>tham khảo</span></h2>
          <p>Mỗi thiết bị có tình trạng và mức độ hư hỏng khác nhau. Nguyễn Cường kiểm tra thực tế, trao đổi rõ nguyên nhân và <strong>báo giá trước khi sửa</strong> — khách đồng ý mới tiến hành.</p>
        </div>
        <div class="price-cards-v2">
          ${priceData.map((group, index) => `
            <article class="price-card-v2">
              <div class="price-card-head">
                <span class="price-card-number">0${index + 1}</span>
                <h3>${group.title}</h3>
              </div>
              <div class="price-table-v2" role="table" aria-label="Bảng giá ${group.title}">
                <div class="price-table-head"><span>Tình trạng thường gặp</span><strong>Giá tham khảo</strong></div>
                ${group.rows.map(row => `<div class="price-table-row"><span>${row[0]}</span><strong>${row[1]}</strong></div>`).join('')}
              </div>
            </article>
          `).join('')}
        </div>
        <div class="price-transparency-v2">
          <div class="price-transparency-copy">
            <p class="eyebrow-dark">BẠN LUÔN BIẾT TRƯỚC CHI PHÍ</p>
            <h3>Kiểm tra trước – báo giá trước – <span>khách đồng ý mới sửa</span></h3>
            <p>Giá tham khảo có thể thay đổi tùy tình trạng thiết bị, model, mức độ hư hỏng và linh kiện thực tế cần thay thế. Nguyễn Cường sẽ trao đổi rõ để bạn cân nhắc trước khi quyết định.</p>
          </div>
          <div class="price-transparency-steps" aria-label="Quy trình báo giá">
            <span><b>01</b> Kiểm tra thực tế</span>
            <i aria-hidden="true">→</i>
            <span><b>02</b> Xác định nguyên nhân</span>
            <i aria-hidden="true">→</i>
            <span><b>03</b> Báo giá</span>
            <i aria-hidden="true">→</i>
            <span><b>04</b> Khách đồng ý mới sửa</span>
          </div>
        </div>
        <div class="price-cta-v2">
          <div><strong>Đang cần biết máy nhà mình sửa hết bao nhiêu?</strong><span>Gửi tình trạng hoặc hình ảnh thiết bị, Nguyễn Cường tư vấn trước để bạn dễ hình dung.</span></div>
          <div class="price-cta-actions"><a class="btn btn-primary" href="tel:${PHONE}">☎ GỌI NGAY</a><a class="btn btn-secondary" href="${ZALO}" target="_blank" rel="noopener">Zalo CHAT</a></div>
        </div>
      `;

      const priceStyle = document.createElement('style');
      priceStyle.id = 'price-section-v2';
      priceStyle.textContent = `
        .price-section { width:100%; box-sizing:border-box; }
        .price-heading-v2 { max-width:720px; }
        .price-heading-v2 strong { color:#172536; }
        .price-cards-v2 { width:min(1050px,100%); margin:38px auto 0; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:20px; }
        .price-card-v2 { background:#fff; border:1px solid #e5e8eb; border-radius:20px; overflow:hidden; box-shadow:0 10px 28px rgba(23,37,54,.06); }
        .price-card-head { display:flex; align-items:center; gap:13px; padding:20px 22px; background:#f7f5f1; border-bottom:1px solid #e5e8eb; }
        .price-card-number { display:grid; place-items:center; width:34px; height:34px; flex:0 0 34px; border-radius:10px; background:#172536; color:#fff; font-size:11px; font-weight:800; letter-spacing:.05em; }
        .price-card-head h3 { margin:0; color:#172536; font-size:20px; line-height:1.2; letter-spacing:-.02em; }
        .price-table-v2 { display:block; }
        .price-table-head,.price-table-row { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:18px; align-items:center; padding:13px 20px; }
        .price-table-head { background:#fff; color:#8a939d; font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:.08em; }
        .price-table-head strong { color:#8a939d; font-weight:800; white-space:nowrap; }
        .price-table-row { border-top:1px solid #edf0f2; min-height:48px; box-sizing:border-box; }
        .price-table-row span { color:#566371; font-size:13px; line-height:1.45; }
        .price-table-row strong { color:#e27f25; font-size:13px; line-height:1.35; text-align:right; white-space:nowrap; }
        .price-transparency-v2 { width:min(1050px,100%); margin:28px auto 0; padding:25px 28px; box-sizing:border-box; border:1px solid #ead8c5; border-left:4px solid #e8892d; border-radius:18px; background:#fffaf4; }
        .price-transparency-copy { max-width:760px; }
        .price-transparency-copy .eyebrow-dark { margin-bottom:7px; }
        .price-transparency-copy h3 { margin:0 0 9px; color:#172536; font-size:22px; line-height:1.2; letter-spacing:-.025em; }
        .price-transparency-copy h3 span { color:#e27f25; }
        .price-transparency-copy > p:last-child { margin:0; color:#66717d; font-size:13px; line-height:1.65; }
        .price-transparency-steps { display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin-top:20px; padding-top:18px; border-top:1px solid #f0dfcc; }
        .price-transparency-steps span { display:inline-flex; align-items:center; gap:7px; color:#172536; font-size:11px; font-weight:700; }
        .price-transparency-steps b { display:grid; place-items:center; width:24px; height:24px; border-radius:7px; background:#fff; border:1px solid #ead8c5; color:#e27f25; font-size:9px; }
        .price-transparency-steps i { color:#b5a99d; font-style:normal; }
        .price-cta-v2 { width:min(1050px,100%); margin:20px auto 0; padding:22px 24px; box-sizing:border-box; display:flex; align-items:center; justify-content:space-between; gap:20px; border-radius:18px; background:#172536; color:#fff; }
        .price-cta-v2 > div:first-child { display:grid; gap:5px; }
        .price-cta-v2 strong { font-size:17px; line-height:1.25; }
        .price-cta-v2 span { color:rgba(255,255,255,.72); font-size:12px; line-height:1.5; }
        .price-cta-actions { display:flex; flex-wrap:wrap; gap:9px; flex:0 0 auto; }
        .price-cta-actions .btn { min-height:44px; padding:0 17px; border-radius:11px; font-size:11px; }
        .price-cta-actions .btn-secondary { border:1px solid rgba(255,255,255,.24); background:rgba(255,255,255,.08); color:#fff; }
        @media (max-width:899px) {
          .price-cards-v2 { grid-template-columns:1fr; }
          .price-cta-v2 { align-items:flex-start; flex-direction:column; }
        }
        @media (max-width:699px) {
          .price-cards-v2 { margin-top:28px; gap:14px; }
          .price-card-v2 { border-radius:17px; }
          .price-card-head { padding:17px 17px; }
          .price-card-head h3 { font-size:18px; }
          .price-table-head,.price-table-row { grid-template-columns:minmax(0,1fr) auto; gap:10px; padding:11px 15px; }
          .price-table-head { font-size:9px; }
          .price-table-row span,.price-table-row strong { font-size:11px; }
          .price-table-row strong { max-width:132px; white-space:normal; }
          .price-transparency-v2 { margin-top:18px; padding:20px 17px; border-radius:16px; }
          .price-transparency-copy h3 { font-size:19px; }
          .price-transparency-copy > p:last-child { font-size:12px; }
          .price-transparency-steps { display:grid; grid-template-columns:1fr; gap:8px; }
          .price-transparency-steps i { display:none; }
          .price-transparency-steps span { font-size:11px; }
          .price-cta-v2 { margin-top:14px; padding:19px 17px; border-radius:16px; }
          .price-cta-v2 strong { font-size:16px; }
          .price-cta-v2 span { font-size:11px; }
          .price-cta-actions { width:100%; }
          .price-cta-actions .btn { flex:1 1 0; min-width:0; }
        }
      `;
      document.head.appendChild(priceStyle);

      priceSection.querySelectorAll('.section-heading, .price-card-v2, .price-transparency-v2, .price-cta-v2').forEach((element) => element.classList.add('reveal'));
      const revealPrice = () => {
        priceSection.querySelectorAll('.reveal').forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) element.classList.add('visible');
        });
      };
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold:0.01, rootMargin:'0px 0px -5% 0px' });
        priceSection.querySelectorAll('.reveal').forEach(element => observer.observe(element));
      }
      revealPrice();
      window.addEventListener('scroll', revealPrice, { passive:true });
    }
  };
  original.onerror = () => console.error('Không tải được main-original.js');
  document.head.appendChild(original);
})();