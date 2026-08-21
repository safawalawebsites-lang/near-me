import { internalLocations, services } from "./site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-signature">
          <a className="brand footer-brand" href="/" aria-label="Safawala Near Me home">
            <span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span>
            <small>NEAR ME</small>
          </a>
          <h2>Tradition, tied beautifully.</h2>
          <p>Refined groom pagdis and coordinated wedding safas, styled at your venue across Safawala Near Me and nearby destinations.</p>
          <a className="footer-whatsapp" href="https://wa.me/919725295691?text=Hello%20Safawala%20Near%20Me%2C%20I%20want%20to%20check%20availability.">Plan on WhatsApp <span>↗</span></a>
        </div>

        <div className="footer-nav-group">
          <h3>Services</h3>
          {services.slice(0, 5).map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.name}</a>)}
        </div>

        {internalLocations.length > 0 && (
        <div className="footer-nav-group" id="footer-areas">
          <h3>Popular areas</h3>
          {internalLocations.slice(0, 6).map((area) => <a href={`/${area.slug}`} key={area.slug}>{area.name}</a>)}
        </div>
        )}

        <div className="footer-contact">
          <h3>Contact</h3>
          <a className="footer-phone" href="tel:+919725295691">+91 97252 95691</a>
          <a href="https://wa.me/919725295691">WhatsApp the team</a>
          <p>Connecting you to your nearest Safawala team</p>
          <p>Monday–Saturday<br />10:00–19:00</p>
        </div>
      </div>

      <div className="footer-bottom section-shell">
        <span>© 2026 Safawala Near Me</span>
        <span>Wedding safa · Groom pagdi · Baraati styling</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
