import type { Metadata } from "next";
import { services, internalLocations } from "./site-data";
import SiteFooter from "./SiteFooter";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <header className="site-header"><a className="brand" href="/" aria-label="Safawala Near Me home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>NEAR ME</small></a><nav aria-label="Page navigation"><a href="/">Home</a><a href="/about">About</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav></header>

      <main className="subpage-main">
        <section className="subpage-hero section-shell">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>Page not found</b></div>
            <h1>We couldn&apos;t find that page.</h1>
            <p>The page you&apos;re looking for may have moved or the link may be out of date. Here are a few places to start instead.</p>
          </div>
        </section>

        <section className="subpage-content section-shell">
          <div>
            <h2>Services</h2>
            {services.slice(0, 6).map((s) => <p key={s.slug}><a href={`/services/${s.slug}`}>{s.name}</a></p>)}
            <h2>Areas we serve</h2>
            {internalLocations.slice(0, 8).map((l) => <p key={l.slug}><a href={`/${l.slug}`}>{l.name}</a></p>)}
          </div>
          <div className="subpage-card"><h3>Still can&apos;t find it?</h3><p>Reach the team directly and we&apos;ll help.</p><p><a className="footer-phone" href="tel:+919725295691">+91 97252 95691</a></p><p><a href="https://wa.me/919725295691">WhatsApp the team</a></p></div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
