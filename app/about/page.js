export default function AboutPage() {
  return (
    <section className="page">
      <div className="container">
        <p className="section-label">About DressMap</p>

        <h1 className="page-title">
          We help people discover fashion with better direction.
        </h1>

        <p className="page-desc">
          DressMap adalah startup fashion technology yang membangun platform
          pencarian outfit berbasis kategori, preferensi gaya, dan kebutuhan
          pengguna modern.
        </p>

        <div className="card-grid section">
          <article className="card">
            <div className="card-icon">
              <i className="ri-eye-line"></i>
            </div>
            <h3>Vision</h3>
            <p>
              Menjadi platform fashion discovery yang membantu pengguna memilih
              outfit dengan lebih percaya diri.
            </p>
          </article>

          <article className="card">
            <div className="card-icon">
              <i className="ri-flag-line"></i>
            </div>
            <h3>Mission</h3>
            <p>
              Menggabungkan teknologi, desain, dan data untuk membuat proses
              menemukan gaya menjadi lebih mudah.
            </p>
          </article>

          <article className="card">
            <div className="card-icon">
              <i className="ri-heart-3-line"></i>
            </div>
            <h3>Value</h3>
            <p>
              Kami percaya fashion harus personal, mudah diakses, dan membantu
              pengguna mengekspresikan dirinya.
            </p>
          </article>
        </div>

        <div className="info-box">
          <h2>Why DressMap Exists</h2>
          <p>
            Banyak pengguna kesulitan menentukan outfit yang cocok untuk
            aktivitas tertentu. DressMap hadir sebagai solusi digital untuk
            membantu pengguna menemukan inspirasi outfit secara cepat, rapi,
            dan relevan.
          </p>
        </div>
      </div>
    </section>
  );
}