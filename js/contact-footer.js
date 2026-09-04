(() => {
  const PHONE = '0367309659';
  const ZALO = 'https://zalo.me/0367309659';
  const EMAIL = 'dienlanhnguyenccuong@gmail.com';
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  const oldCta = document.querySelector('#contact-cta-v2');
  if (!oldCta) {
    const cta = document.createElement('section');
    cta.id = 'contact-cta-v2';
    cta.className = 'contact-cta-v2';
    cta.setAttribute('aria-labelledby', 'contact-cta-title');
    cta.innerHTML = `
      <div class="contact-cta-inner">
        <div class="contact-cta-copy">
          <p class="eyebrow-dark">CẦN SỬA CHỮA?</p>
          <h2 id="contact-cta-title">Thiết bị đang gặp lỗi? <span>Gọi Nguyễn Cường.</span></h2>
          <p>Mô tả tình trạng hoặc gửi hình ảnh thiết bị để được tư vấn bước tiếp theo. Kiểm tra thực tế và báo giá trước khi sửa.</p>
        </div>
        <div class="contact-cta-actions">
          <a class="btn btn-primary" href="tel:${PHONE}">☎ GỌI NGAY</a>
          <a class="btn btn-secondary" href="${ZALO}" target="_blank" rel="noopener">Zalo CHAT</a>
        </div>
      </div>`;
    footer.parentNode.insertBefore(cta, footer);
  }

  footer.innerHTML = `
    <div class="footer-main-v2">
      <div class="footer-brand-v2">
        <strong>ĐIỆN LẠNH NGUYỄN CƯỜNG</strong>
        <p>Sửa chữa điện lạnh tại nhà · TP.HCM</p>
        <p>Kiểm tra rõ ràng · Báo giá trước · Khách đồng ý mới sửa</p>
      </div>
      <div class="footer-column-v2">
        <h3>Điều hướng</h3>
        <a href="#home">Trang chủ</a>
        <a href="#dich-vu">Dịch vụ</a>
        <a href="#van-de">Tình trạng thường gặp</a>
        <a href="#bang-gia">Bảng giá</a>
        <a href="#kinh-nghiem">Kinh nghiệm</a>
      </div>
      <div class="footer-column-v2">
        <h3>Liên hệ</h3>
        <a href="tel:${PHONE}">${PHONE}</a>
        <a href="${ZALO}" target="_blank" rel="noopener">Chat Zalo</a>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
        <span>76/41/5 Tôn Thất Thuyết, Phường 16, Quận 4, Hồ Chí Minh</span>
      </div>
    </div>
    <div class="footer-bottom-v2">
      <span>© ${new Date().getFullYear()} Điện Lạnh Nguyễn Cường</span>
      <span>Phục vụ sửa chữa điện lạnh tại TP.HCM</span>
    </div>`;

  const style = document.createElement('style');
  style.id = 'contact-footer-v2';
  style.textContent = `
    #contact-cta-v2{width:100%;box-sizing:border-box;padding:72px 16px 20px;background:#f7f5f1}
    .contact-cta-inner{width:min(1050px,100%);margin:0 auto;padding:38px 42px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:30px;border-radius:22px;background:#172536;color:#fff;box-shadow:0 14px 35px rgba(23,37,54,.12)}
    .contact-cta-copy{max-width:700px}.contact-cta-copy .eyebrow-dark{margin:0 0 9px;color:#e8892d}.contact-cta-copy h2{margin:0;color:#fff;font-size:clamp(28px,4vw,42px);line-height:1.05;letter-spacing:-.035em}.contact-cta-copy h2 span{color:#e8892d}.contact-cta-copy p:last-child{margin:13px 0 0;color:rgba(255,255,255,.76);font-size:13px;line-height:1.65}
    .contact-cta-actions{display:flex;flex-wrap:wrap;gap:10px;flex:0 0 auto}.contact-cta-actions .btn{min-height:46px;padding:0 18px;border-radius:12px;font-size:11px;font-weight:800;text-decoration:none;display:inline-flex;align-items:center;justify-content:center}.contact-cta-actions .btn-secondary{border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff}
    .site-footer{width:100%;box-sizing:border-box;padding:42px 16px 20px;background:#0f1b29;color:#fff}.footer-main-v2{width:min(1050px,100%);margin:0 auto;display:grid;grid-template-columns:1.4fr .7fr 1fr;gap:42px}.footer-brand-v2 strong{display:block;font-size:17px;letter-spacing:.04em}.footer-brand-v2 p{margin:8px 0 0;color:rgba(255,255,255,.62);font-size:12px;line-height:1.6}.footer-column-v2{display:flex;flex-direction:column;align-items:flex-start;gap:8px}.footer-column-v2 h3{margin:0 0 5px;color:#e8892d;font-size:11px;letter-spacing:.1em;text-transform:uppercase}.footer-column-v2 a,.footer-column-v2 span{color:rgba(255,255,255,.72);font-size:12px;line-height:1.5;text-decoration:none}.footer-column-v2 a:hover{color:#fff}.footer-bottom-v2{width:min(1050px,100%);margin:32px auto 0;padding-top:16px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;gap:20px;color:rgba(255,255,255,.42);font-size:10px;line-height:1.5}
    @media(max-width:699px){#contact-cta-v2{padding:50px 16px 14px}.contact-cta-inner{padding:28px 22px;border-radius:18px;display:block}.contact-cta-copy h2{font-size:29px}.contact-cta-actions{display:grid;grid-template-columns:1fr 1fr;margin-top:20px}.contact-cta-actions .btn{width:100%;box-sizing:border-box}.footer-main-v2{grid-template-columns:1fr;gap:28px}.site-footer{padding:34px 16px 18px}.footer-bottom-v2{margin-top:27px;display:grid;gap:5px}}
  `;
  document.head.appendChild(style);
})();