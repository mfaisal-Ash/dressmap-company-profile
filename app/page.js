import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero corporate-hero">
        <div className="container hero-grid">
          <div>
            <p className="badge">Fashion Technology Company</p>

            <h1>
              Building smarter fashion discovery for modern digital users.
            </h1>

            <p>
              DressMap adalah perusahaan teknologi fashion yang membantu brand,
              pengguna, dan partner bisnis menciptakan pengalaman pencarian
              outfit yang lebih personal, cepat, dan strategis.
            </p>

            <div className="actions">
              <Link href="/about" className="btn">
                Company Profile
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Work With Us
              </Link>
            </div>
          </div>

          <div className="strategy-panel">
            <div className="panel-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>DressMap Strategy</h3>

            <div className="strategy-list">
              <div>
                <strong>01</strong>
                <p>Personalized outfit discovery</p>
              </div>

              <div>
                <strong>02</strong>
                <p>Fashion data mapping</p>
              </div>

              <div>
                <strong>03</strong>
                <p>Brand and user connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="section-label">Company Overview</p>
            <h2>A fashion-tech company with SaaS-driven solutions.</h2>
            <p>
              DressMap menggabungkan fashion, teknologi, dan data untuk membantu
              pengguna menemukan style yang sesuai serta membantu brand memahami
              kebutuhan pasar secara lebih tepat.
            </p>
          </div>

          <div className="stats-grid">
            <article className="stat-card">
              <h3>10K+</h3>
              <p>Outfit inspirations mapped</p>
            </article>

            <article className="stat-card">
              <h3>500+</h3>
              <p>Fashion categories analyzed</p>
            </article>

            <article className="stat-card">
              <h3>30+</h3>
              <p>Potential brand partners</p>
            </article>

            <article className="stat-card">
              <h3>24/7</h3>
              <p>Digital access for users</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Our Solutions</p>
            <h2>Strategic solutions for fashion discovery.</h2>
          </div>

          <div className="card-grid">
            <article className="card">
              <div className="card-icon">⌕</div>
              <h3>Style Discovery Platform</h3>
              <p>
                Membantu pengguna mencari inspirasi outfit berdasarkan kategori,
                preferensi, aktivitas, dan kebutuhan harian.
              </p>
            </article>

            <article className="card">
              <div className="card-icon">▣</div>
              <h3>Fashion Data Mapping</h3>
              <p>
                Mengelompokkan data fashion untuk memahami tren, preferensi
                user, dan peluang strategi brand.
              </p>
            </article>

            <article className="card">
              <div className="card-icon">♡</div>
              <h3>Brand Connection</h3>
              <p>
                Menjadi jembatan antara pengguna dan brand melalui rekomendasi
                outfit yang relevan dan personal.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white">
  <div className="container">
    <div className="section-head center">
      <p className="section-label">Outfit Shopping Map</p>
      <h2>Explore outfit shopping spots around the city.</h2>
      <p>
        DressMap membantu pengguna menemukan area belanja outfit terdekat,
        mulai dari fashion store, boutique, sampai pusat belanja lokal.
      </p>
    </div>

    <div className="map-layout">
      <div className="map-info">
        <div className="map-info-card">
          <div className="card-icon">
            <i className="ri-map-pin-line"></i>
          </div>
          <h3>Bandung Fashion Area</h3>
          <p>
            Titik contoh lokasi belanja outfit yang bisa digunakan sebagai
            referensi eksplorasi fashion.
          </p>
        </div>

        <div className="map-info-card">
          <div className="card-icon">
            <i className="ri-store-2-line"></i>
          </div>
          <h3>Nearby Outfit Stores</h3>
          <p>
            Cocok untuk konsep DressMap sebagai platform pencarian dan pemetaan
            lokasi fashion.
          </p>
        </div>
      </div>

      <div className="map-card">
        <iframe
          title="DressMap Shopping Location"
          src="https://www.google.com/maps?q=Bandung%20fashion%20store&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>

      <section className="section strategy-section">
        <div className="container split-layout">
          <div>
            <p className="section-label">Business Strategy</p>
            <h2>How DressMap creates value.</h2>
            <p className="page-desc">
              DressMap tidak hanya menampilkan inspirasi outfit, tetapi juga
              membangun ekosistem fashion digital yang dapat digunakan untuk
              kebutuhan pengguna, brand, dan partner bisnis.
            </p>
          </div>

          <div className="process-list">
            <article>
              <span>01</span>
              <div>
                <h3>Understand user style</h3>
                <p>Mengidentifikasi preferensi dan kebutuhan fashion pengguna.</p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Map fashion categories</h3>
                <p>Mengatur data outfit agar mudah dicari dan direkomendasikan.</p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Connect with brands</h3>
                <p>Membantu brand menjangkau user dengan rekomendasi relevan.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-label">Let’s Collaborate</p>
            <h2>Build the future of fashion discovery with DressMap.</h2>
          </div>

          <Link href="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}