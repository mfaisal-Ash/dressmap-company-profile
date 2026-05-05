export default function ContactPage() {
  return (
    <section className="page">
      <div className="container">
        <p className="section-label">Contact</p>

        <h1 className="page-title">
          Let’s discuss strategic collaboration.
        </h1>

        <p className="page-desc">
          Hubungi DressMap untuk kerja sama bisnis, partnership, brand
          collaboration, atau pengembangan solusi fashion technology.
        </p>

        <div className="card-grid section">
          <article className="card">
            <div className="card-icon">
              <i className="ri-mail-line"></i>
            </div>
            <h3>Business Email</h3>
            <p>hello@dressmap.com</p>
          </article>

          {/* <article className="card">
            <div className="card-icon">
              <i className="ri-handshake-line"></i>
            </div>
            <h3>Partnership</h3>
            <p>partnership@dressmap.com</p>
          </article> */}

          <article className="card">
            <div className="card-icon">
              <i className="ri-map-pin-line"></i>
            </div>
            <h3>Head Office</h3>
            <p>Bandung, Indonesia</p>
          </article>
        </div>

        <div className="info-box">
          <h2>Collaboration Focus</h2>
          <p>
            Kami terbuka untuk kolaborasi dengan brand fashion, creative agency,
            startup technology, dan partner bisnis yang ingin membangun
            pengalaman fashion digital yang lebih modern.
          </p>
        </div>
      </div>
    </section>
  );
}