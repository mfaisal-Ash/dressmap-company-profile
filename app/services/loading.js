export default function Loading() {
  return (
    <section className="loading-screen">
      <div className="loading-box">
        <div className="loading-orbit">
          <div className="loading-center">
            <i className="ri-shirt-line"></i>
          </div>

          <span className="orbit-item item-one">
            <i className="ri-search-line"></i>
          </span>

          <span className="orbit-item item-two">
            <i className="ri-map-pin-line"></i>
          </span>

          <span className="orbit-item item-three">
            <i className="ri-heart-3-line"></i>
          </span>
        </div>

        <p className="section-label">DressMap</p>

        <h2>Exploring Outfit Style</h2>

        <p className="loading-text">
          Sedang menyiapkan halaman dan mencari inspirasi outfit terbaik...
        </p>

        <div className="loading-progress">
          <span></span>
        </div>
      </div>
    </section>
  );
}