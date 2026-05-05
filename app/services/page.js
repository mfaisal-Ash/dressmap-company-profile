// async function getServices() {
//   const res = await fetch("http://localhost:3000/api/outfits", {
//     cache: "no-store",
//   });

//   return res.json();
// }

export default async function ServicesPage() {
//   const services = await getServices();

  const icons = [
    "ri-shirt-line",
    "ri-layout-grid-line",
    "ri-bar-chart-line",
  ];

  return (
    <section className="page">
      <div className="container">
        <p className="section-label">Our Services</p>

        <h1 className="page-title">
          DressMap solutions for fashion discovery and brand strategy.
        </h1>

        <p className="page-desc">
          DressMap menyediakan layanan digital untuk membantu pengguna menemukan
          outfit dan membantu brand memahami peluang pasar fashion.
        </p>

        {/* <div className="card-grid section">
          {services.map((service, index) => (
            <article className="card" key={service.id}>
              <div className="card-icon">
                <i className={icons[index]}></i>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
}