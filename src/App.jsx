import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    useEffect(() => {
          const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.classList.add("scroll-ready");

    const elements = document.querySelectorAll(
      ".section-heading, .service-card, .process-item, .work-card, .about-content, .cta > *"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
  window.removeEventListener("mousemove", handleMouseMove);
  observer.disconnect();
  document.body.classList.remove("scroll-ready");
};
  }, []);
  return (
    <div className="site">

      {/* NAVBAR */}
<nav className="navbar">
 <a href="#home" className="logo">
  <img src="/tenxing-logo.png" alt="T≡NXING Agency" />
</a>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#work">Work</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>

  <a href="#contact" className="nav-button">
    Let's Talk
  </a>

  <button
  className={`menu-button ${menuOpen ? "active" : ""}`}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</button>

<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#services" onClick={() => setMenuOpen(false)}>
    Services
  </a>

  <a href="#work" onClick={() => setMenuOpen(false)}>
    Work
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>
</div>
      </nav>

      {/* HERO */}
      <section
  className="hero"
  id="home"
  style={{
    "--mouse-x": `${mousePosition.x}%`,
    "--mouse-y": `${mousePosition.y}%`,
  }}
>
        <div className="hero-content">

          <div className="eyebrow">
            <span></span>
            DIGITAL GROWTH AGENCY
          </div>

          <h1>
            WE TURN
            <br />
            <span>ATTENTION</span>
            <br />
            INTO GROWTH.
          </h1>

          <p className="hero-text">
            T≡NXING helps ambitious brands grow online through
            Meta Ads, content creation, social media and digital
            marketing strategies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Start Your Growth <span>↗</span>
            </a>

            <a href="#work" className="secondary-button">
              View Our Work
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="growth-card">
            <div className="card-top">
              <span>GROWTH</span>
              <span>+247%</span>
            </div>

            <div className="chart">
              <div className="chart-line"></div>
            </div>

            <div className="chart-bottom">
              <span>CAMPAIGN PERFORMANCE</span>
              <span>90 DAYS</span>
            </div>
          </div>

          <div className="floating-card card-one">
            <strong>Meta Ads</strong>
            <span>Performance</span>
          </div>

          <div className="floating-card card-two">
            <strong>Leads</strong>
            <span>+ Growth</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services">

        <div className="section-heading">
          <div>
            <span className="section-number">01 / SERVICES</span>
            <h2>WHAT WE<br /><span>DO.</span></h2>
          </div>

          <p>
            We combine strategy, creativity and performance marketing
            to help brands build attention and turn it into measurable
            business growth.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Meta Ads</h3>
            <p>
              High-performance Facebook and Instagram advertising
              campaigns designed to generate leads and sales.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <h3>Content Creation</h3>
            <p>
              Scroll-stopping creative content that captures attention
              and communicates your brand message.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <h3>Social Media</h3>
            <p>
              Strategic social media management focused on consistency,
              engagement and long-term audience growth.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-card">
            <span className="service-number">04</span>
            <h3>Influencer Marketing</h3>
            <p>
              Creator collaborations that connect brands with relevant
              audiences and build trust.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-card">
            <span className="service-number">05</span>
            <h3>Lead Generation</h3>
            <p>
              Campaign systems built to attract qualified prospects
              and turn attention into real opportunities.
            </p>
            <span className="service-arrow">↗</span>
          </div>

          <div className="service-card">
            <span className="service-number">06</span>
            <h3>Brand Promotion</h3>
            <p>
              Digital campaigns that position your brand, increase
              visibility and create stronger online presence.
            </p>
            <span className="service-arrow">↗</span>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">

        <div className="section-heading">
          <div>
            <span className="section-number">02 / PROCESS</span>
            <h2>HOW WE<br /><span>GROW.</span></h2>
          </div>

          <p>
            A simple process built around understanding your business,
            creating the right strategy and continuously improving
            performance.
          </p>
        </div>

        <div className="process-list">

          <div className="process-item">
            <span>01</span>
            <h3>Discover</h3>
            <p>Understand your brand, audience and goals.</p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Strategize</h3>
            <p>Build a clear marketing and growth strategy.</p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Create</h3>
            <p>Develop content and campaigns that stand out.</p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Launch</h3>
            <p>Put campaigns in front of the right audience.</p>
          </div>

          <div className="process-item">
            <span>05</span>
            <h3>Optimize</h3>
            <p>Analyze performance and improve what matters.</p>
          </div>

          <div className="process-item">
            <span>06</span>
            <h3>Grow</h3>
            <p>Scale what works and build sustainable growth.</p>
          </div>

        </div>
      </section>

      {/* WORK */}
      <section className="section work" id="work">

        <div className="section-heading">
          <div>
            <span className="section-number">03 / WORK</span>
            <h2>BUILT TO<br /><span>PERFORM.</span></h2>
          </div>

          <p>
            Every campaign starts with an objective. Every creative
            has a purpose. Every result gives us something to improve.
          </p>
        </div>

       <div className="work-grid">

<div className="work-card work-card-featured">

    <div className="work-visual">
        <div className="visual-label">META ADS</div>

        <div className="visual-chart">
            
            <div className="chart-point point-1"></div>
            <div className="chart-point point-2"></div>
            <div className="chart-point point-3"></div>
            <div className="chart-point point-4"></div>
        </div>

        
    </div>

    <div className="work-info">
        <span>01 / PERFORMANCE MARKETING</span>

        <h3>
            Meta Ads
            <br />
            Campaigns
        </h3>

        <p>
            Paid advertising systems designed to generate qualified leads and business growth.
        </p>

        <a href="#contact">View Project ↗</a>
    </div>

</div>


  <div className="work-card">
    <div className="work-visual social-visual">
      <div className="social-circle"></div>
      <div className="social-card">
        <span>CONTENT</span>
        <strong>+ ENGAGEMENT</strong>
      </div>
    </div>

    <div className="work-info">
      <span>02 / SOCIAL MEDIA</span>
      <h3>Social<br />Growth</h3>
      <p>Creative content and social media strategies built to increase attention and engagement.</p>
      <a href="#contact">View Project ↗</a>
    </div>
  </div>


  <div className="work-card">
    <div className="work-visual brand-visual">
      <div className="brand-symbol">T≡</div>
<div className="brand-text">BRAND SYSTEM</div>
    </div>

    <div className="work-info">
      <span>03 / BRAND PROMOTION</span>
      <h3>Brand<br />Promotion</h3>
      <p>Digital campaigns that help brands build visibility, trust and a stronger online presence.</p>
      <a href="#contact">View Project ↗</a>
    </div>
  </div>

</div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">

        <div className="about-number">04</div>

        <div className="about-content">
          <span className="section-number">ABOUT T≡NXING</span>

          <h2>
            WE DON'T JUST
            <br />
            <span>RUN ADS.</span>
          </h2>

          <p>
            We build digital growth systems that connect creativity,
            marketing and performance. Our goal is simple — help
            brands get noticed, build trust and turn attention into
            meaningful business results.
          </p>

          <a href="#contact" className="text-link">
            Let's build something <span>↗</span>
          </a>
        </div>

      </section>

     {/* CTA / CONTACT */}
<section className="cta" id="contact">
  <span className="section-number">
    05 / LET'S WORK TOGETHER
  </span>

  <h2>
    READY TO
    <br />
    <span>GROW?</span>
  </h2>

  <p>
    Tell us about your brand and let's create your next
    growth campaign.
  </p>

  <form
    className="contact-form"
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.currentTarget;
      const name = form.name.value;
      const phone = form.phone.value;
      const service = form.service.value;
      const message = form.message.value;

     const whatsappMessage =
  `🚀 NEW T≡NXING ENQUIRY\n\n` +
  `👤 Name: ${name}\n` +
  `📱 Phone: ${phone}\n` +
  `🎯 Service: ${service}\n\n` +
  `💬 Project Details:\n${message}\n\n` +
  `— T≡NXING Digital Growth Agency`;

window.open(
  `https://wa.me/917075999203?text=${encodeURIComponent(whatsappMessage)}`,
  "_blank"
);
    }}
  >
   <input
  type="text"
  name="name"
  placeholder="Your Name"
  autoComplete="name"
  required
/>
  <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  autoComplete="tel"
  inputMode="numeric"
  pattern="[0-9]{10}"
  maxLength="10"
  required
/>

    <select name="service" required defaultValue="">
      <option value="" disabled>
        Select a Service
      </option>
      <option value="Meta Ads">Meta Ads</option>
      <option value="Content Creation">Content Creation</option>
      <option value="Social Media Marketing">
        Social Media Marketing
      </option>
      <option value="Influencer Marketing">
        Influencer Marketing
      </option>
      <option value="Lead Generation">Lead Generation</option>
      <option value="Brand Promotion">Brand Promotion</option>
    </select>

    <textarea
      name="message"
      placeholder="Tell us about your project..."
      rows="5"
      required
    ></textarea>

    <button type="submit" className="cta-button">
      Send Enquiry <span>↗</span>
    </button>
  </form>

  <a
    href="https://wa.me/917075999203"
    target="_blank"
    rel="noreferrer"
    className="whatsapp-link"
  >
    Or message us directly on WhatsApp →
  </a>
</section>
      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          T<span>≡</span>NXING
        </div>

<div className="footer-socials">
  <a
    href="https://www.instagram.com/tenxing_agency/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram ↗
  </a>

  <a
    href="https://www.facebook.com/tenxingagency/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook ↗
  </a>

  <a href="mailto:tenxingagency@gmail.com">
    tenxingagency@gmail.com ↗
  </a>
</div>
        <p>
          Digital Growth Agency
        </p>

        <div className="footer-bottom">
          <span>© 2026 T≡NXING. All rights reserved.</span>

          <div>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

      </footer>

    </div>
  );
}

<div className="floating-social-buttons">
  <a
    className="floating-social whatsapp-button"
    href="https://wa.me/917075999203"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with T≡NXING on WhatsApp"
    title="Chat on WhatsApp"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L0 24l6.4-1.7a11.8 11.8 0 0 0 5.7 1.5h.1C18.7 23.8 24 18.5 24 12c0-3.2-1.2-6.2-3.5-8.5ZM12.1 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4a12.5 12.5 0 0 0 4.8 4.3c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.2-.2-.5-.4Z"/>
    </svg>
  </a>

  <a
    className="floating-social instagram-button"
    href="https://www.instagram.com/tenxing_agency/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit T≡NXING on Instagram"
    title="Follow on Instagram"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
    </svg>
  </a>
</div>

export default App;
