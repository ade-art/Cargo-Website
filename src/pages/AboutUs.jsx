import "./AboutUs.css";

const team = [
  { name: "George Chan", role: "Manager", img: "/Ladies.png" },
  { name: "Emily Johnson", role: "Logistics Head", img: "/Advogado.png" },
  { name: "Sophia Brown", role: "Operations", img: "/Beautiful.png" },
  { name: "Arlin Benson", role: "Coordinator", img: "/Premium.png" },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="hero">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Home &gt; About Us</p>
        </div>
      </section>

      {/* Intro */}
      <section className="intro">
        <div className="intro-text">
          <h2>
            Providing full range <br /> of <span>transportation</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Discover More</button>
        </div>

        <div className="intro-image">
          <img src="./ship.png" alt="Cargo Ship" />
          <div className="experience-badge">
            <h3>20+</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="Afeatures">
        <div className="feature">
          <h4>Experience And Expertise</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="feature">
          <h4>Reliable And Timeliness</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className="feature">
          <h4>Comprehensive Services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </section>

      {/* Competence */}
      <section className="competence">
        <div className="competence-image">
          <img src="./AFM.png" alt="Transport" />
        </div>

        <div className="competence-text">
          <h2>
            Our industry-explicit <span>competence</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>

          <ul>
            <li>✔ Freight Forwarding</li>
            <li>✔ Warehouse Storage</li>
            <li>✔ Last-Mile Delivery</li>
            <li>✔ Real-Time Tracking</li>
            <li>✔ 24/7 Customer Support</li>
          </ul>

          <button>Get Started Now</button>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>
          Transport <span>expert team</span>
        </h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
