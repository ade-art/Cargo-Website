import "./ExportImports.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="Ehero">
        <div className="Ehero-overlay">
          <h1>Your product is in good hands</h1>
          <p>Learn the 10 Principles of Design from these gorgeous posters</p>
          <div className="hero-buttons">
            <button className="btn primary">Read More</button>
            <button className="btn outline">Contact Us</button>
          </div>
        </div>
      </section>

      {/* SERVICES ICONS */}
      <section className="services">
        <h2>Worldwide transportation service</h2>

        <div className="service-grid">
          {[
            "Road Transport",
            "Train Transport",
            "Ship Transport",
            "Plane Transport",
          ].map((item, i) => (
            <div className="service-card" key={i}>
              <img src={`/Frigo${i + 1}.png`} alt={item} />
              <h4>{item}</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits">
        <div className="benefits-text">
          <h2>Benefits for using our services</h2>
          <ul>
            <li>✔ Fast and reliable delivery</li>
            <li>✔ Worldwide coverage</li>
            <li>✔ Real-time tracking</li>
          </ul>
        </div>

        <div className="benefits-map">
          <img src="/Local.png" alt="World Map" />
        </div>
      </section>

      {/* VEHICLES */}
      <section className="vehicles">
        <h2>Worldwide transportation service</h2>

        <div className="vehicle-grid">
          {["Van", "Truck", "Trailer", "Container"].map((v, i) => (
            <div className="vehicle-card" key={i}>
              <img src={`/Obtain${i + 1}.png`} alt={v} />
              <h4>Commercial {v}</h4>
              <p>Capacity: 1000kg</p>
              <p>Range: 100km</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt.”
        </p>
        <h4>— John Doe</h4>
      </section>

    </div>
  );
}
