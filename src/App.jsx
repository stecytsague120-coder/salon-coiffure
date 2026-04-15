import './App.css'

const whatsappLink =
  'https://wa.me/18328485025?text=Hi%20Yarro%27s%20African%20Braiding%2C%20I%20would%20like%20to%20book%20an%20appointment.'

const callLink = 'tel:+18328485025'
const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=20307+Aldine+Westfield+Rd%2C+Spring%2C+TX+77373'
const mapEmbed =
  'https://www.google.com/maps?q=20307%20Aldine%20Westfield%20Rd,%20Spring,%20TX%2077373&z=15&output=embed'

const services = [
  {
    name: 'Crochet Braids',
    price: 'Starting at $120',
    description: 'Lightweight crochet installs with neat parts, defined curls, and a natural-looking finish.',
    image: '/yarros-braids/crochet-style.jpeg',
    alt: "Crochet braids style at Yarro's African Braiding salon",
  },
  {
    name: 'Cornrows',
    price: 'Starting at $40',
    description: 'Sharp, clean cornrows created for everyday wear, protective styling, and statement looks.',
    image: '/yarros-braids/cornrows-closeup.jpeg',
    alt: "Close-up of detailed cornrows at Yarro's African Braiding",
  },
  {
    name: 'Boho Braids',
    price: 'Starting at $200',
    description: 'Soft boho movement with textured strands and premium finishing for an elevated result.',
    image: '/yarros-braids/boho-braids.jpeg',
    alt: "Boho braids with curly ends done at Yarro's African Braiding",
  },
  {
    name: 'Box Braids',
    price: 'Starting at $150',
    description: 'Classic box braids installed with balance, comfort, and polished sectioning that lasts.',
    image: '/yarros-braids/twist-braids.jpeg',
    alt: "Long braided protective style at Yarro's African Braiding salon",
  },
  {
    name: 'Knotless Braids',
    price: 'Starting at $180',
    description: 'Soft tension knotless braids designed for a seamless look, lightweight feel, and long wear.',
    image: '/yarros-braids/braiding-action.jpeg',
    alt: "Braiding process showing professional knotless braids work at Yarro's African Braiding",
  },
]

const reasons = [
  'Specialized in African braiding',
  'Long-lasting styles',
  'Professional finish',
  'Fast and easy booking',
  'Available 24/7',
]

const galleryImages = [
  {
    src: '/yarros-braids/cornrows-closeup.jpeg',
    alt: "Detailed African braids close-up at Yarro's African Braiding",
  },
  {
    src: '/yarros-braids/boho-braids.jpeg',
    alt: "Boho braids hairstyle at Yarro's African Braiding in Spring TX",
  },
  {
    src: '/yarros-braids/twist-braids.jpeg',
    alt: "Protective braids style at Yarro's African Braiding salon",
  },
  {
    src: '/yarros-braids/crochet-style.jpeg',
    alt: "Crochet braid result at Yarro's African Braiding",
  },
]

const contactItems = [
  { label: 'Phone', value: '832-848-5025', href: callLink },
  { label: 'WhatsApp', value: '832-848-5025', href: whatsappLink },
  {
    label: 'Address',
    value: '20307 Aldine Westfield Rd, Spring, TX 77373',
    href: mapsLink,
  },
  { label: 'Hours', value: 'Open 24/7' },
]

export default function App() {
  return (
    <div className="page-shell">
      <a className="floating-whatsapp" href={whatsappLink} aria-label="Book via WhatsApp">
        <span aria-hidden="true">●</span>
        Book via WhatsApp
      </a>

      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" aria-label="Yarro's African Braiding home">
            <span className="brand-badge" aria-hidden="true">
              YB
            </span>
            <span className="brand-copy">
              <strong>Yarro&apos;s African Braiding</strong>
              <span>African braiding salon in Spring, TX</span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#how-to-book">How to Book</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="mobile-top-cta" href={whatsappLink}>
            WhatsApp
          </a>

          <div className="desktop-cta">
            <a className="btn btn-secondary" href={callLink}>
              Call Now
            </a>
            <a className="btn btn-primary" href={whatsappLink}>
              Book via WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="hero-badge">Open 24/7</span>
              <p className="eyebrow">Premium African braiding in Houston</p>
              <h1>Book Your Braids Today We Handle the Rest</h1>
              <p className="hero-text">
                Professional African braiding in Houston. Long-lasting styles, flawless finish,
                available 24/7.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={whatsappLink}>
                  Book via WhatsApp
                </a>
                <a className="btn btn-secondary" href={callLink}>
                  Call Now
                </a>
              </div>

              <div className="hero-highlights" role="list" aria-label="Salon benefits">
                <article role="listitem">
                  <strong>Spring, TX</strong>
                  <span>Easy to find, easy to reach</span>
                </article>
                <article role="listitem">
                  <strong>Premium finish</strong>
                  <span>Neat parts, lasting hold, clean edges</span>
                </article>
                <article role="listitem">
                  <strong>24/7 booking</strong>
                  <span>WhatsApp and phone calls anytime</span>
                </article>
              </div>
            </div>

            <aside className="hero-panel">
              <p>Trusted local braiding salon</p>
              <strong>Yarro&apos;s African Braiding</strong>
              <span>20307 Aldine Westfield Rd, Spring, TX 77373</span>
              <a className="inline-link" href={mapsLink}>
                Open in Google Maps
              </a>
            </aside>
          </div>
        </section>

        <section className="section intro">
          <div className="container intro-grid">
            <div>
              <p className="eyebrow">Luxury, trust, expertise</p>
              <h2>A salon experience that feels polished before your appointment even begins.</h2>
            </div>
            <p className="section-text">
              Yarro&apos;s African Braiding is built for women who want African braiding done with
              care, precision, and premium results. Every section of this page is focused on one
              thing: making it effortless to choose a style and book immediately.
            </p>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <p className="eyebrow">Our services</p>
            <h2>Choose the braid style that matches your look.</h2>
            <div className="services-grid">
              {/* Replace images with files from: This PC > Pictures > Yarro's Braids */}
              {services.map((service) => (
                <article key={service.name} className="service-card">
                  <div className="service-media">
                    <img src={service.image} alt={service.alt} loading="lazy" />
                  </div>
                  <div className="service-body">
                    <div className="service-heading">
                      <h3>{service.name}</h3>
                      <span>{service.price}</span>
                    </div>
                    <p>{service.description}</p>
                    <a className="btn btn-primary btn-block" href={whatsappLink}>
                      Book Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-grid">
            <div className="why-card">
              <p className="eyebrow">Why choose us</p>
              <h2>Beautiful braids are expected. Confidence and trust are part of the service.</h2>
            </div>
            <div
              className="reasons-list"
              role="list"
              aria-label="Reasons to choose Yarro's African Braiding"
            >
              {reasons.map((item) => (
                <article key={item} role="listitem" className="reason-item">
                  <span aria-hidden="true">+</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-book" className="section booking-section">
          <div className="container">
            <p className="eyebrow">How to book</p>
            <h2>Booking should take minutes, not effort.</h2>
            <div className="steps-grid">
              <article className="step-card">
                <span>01</span>
                <h3>Choose your style</h3>
                <p>Pick the braid look you want from the service cards or gallery below.</p>
              </article>
              <article className="step-card">
                <span>02</span>
                <h3>Message us on WhatsApp or call</h3>
                <p>Send your preferred style, date, and any hair details for a fast response.</p>
              </article>
              <article className="step-card">
                <span>03</span>
                <h3>Confirm your appointment</h3>
                <p>We finalize the time, answer any questions, and secure your visit.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section gallery-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Braids gallery</p>
                <h2>Real looks, real salon, real results.</h2>
              </div>
              <a className="btn btn-secondary" href={whatsappLink}>
                Ask About Your Style
              </a>
            </div>

            <div className="gallery-grid">
              {/* Replace images with files from: This PC > Pictures > Yarro's Braids */}
              {galleryImages.map((image) => (
                <figure key={image.src} className="gallery-card">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="section location-section">
          <div className="container location-grid">
            <div>
              <p className="eyebrow">Location</p>
              <h2>Visit Yarro&apos;s African Braiding in Spring, Texas.</h2>
              <p className="section-text">
                Conveniently located at 20307 Aldine Westfield Rd, Spring, TX 77373, United States.
                Open 24/7 for inquiries and bookings.
              </p>
              <a className="btn btn-primary" href={mapsLink}>
                Open in Google Maps
              </a>
            </div>
            <div className="map-frame">
              <iframe
                title="Yarro's African Braiding map"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-card">
              <p className="eyebrow">Contact</p>
              <h2>Ready to book your next braid appointment?</h2>
              <p className="section-text">
                Fast replies, direct booking, and a salon experience focused on premium African
                braiding from start to finish.
              </p>
            </div>

            <div className="contact-list">
              {contactItems.map((item) => (
                <article key={item.label} className="contact-item">
                  <span>{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <strong>{item.value}</strong>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="sticky-cta" aria-label="Quick booking actions">
        <a className="btn btn-secondary" href={callLink}>
          Call Now
        </a>
        <a className="btn btn-primary" href={whatsappLink}>
          Book via WhatsApp
        </a>
      </div>
    </div>
  )
}
