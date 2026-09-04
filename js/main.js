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
  };
  original.onerror = () => console.error('Không tải được main-original.js');
  document.head.appendChild(original);
})();