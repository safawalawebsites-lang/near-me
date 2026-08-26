import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you enquire about or book Safawala Near Me's wedding safa and pagdi styling services.",
  alternates: { canonical: "https://safawalanearme.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <header className="site-header"><a className="brand" href="/" aria-label="Safawala Near Me home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>NEAR ME</small></a><nav aria-label="Page navigation"><a href="/">Home</a><a href="/about">About</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav></header>

      <main className="subpage-main">
        <section className="subpage-hero section-shell">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>Terms of Service</b></div>
            <h1>Terms of Service</h1>
            <p>The terms that apply when you enquire about or book Safawala Near Me's wedding safa and pagdi styling services. Last updated 25 August 2026.</p>
          </div>
        </section>

        <section className="subpage-content section-shell">
          <div>
            <h2>Our services</h2>
            <p>One trusted safa brand, with dedicated local teams for wedding safa and groom pagdi styling across India and beyond. These terms apply to enquiries and bookings made through this website, by phone or over WhatsApp.</p>
            <h2>Enquiries and booking</h2>
            <p>A booking is confirmed once you and our team have agreed on the event date, venue, guest count, fabric and package over WhatsApp or phone. Availability is not guaranteed until this confirmation has taken place.</p>
            <h2>Pricing</h2>
            <p>Prices are quoted per enquiry, based on guest count, fabric choice, styling complexity and travel distance, and are confirmed with you before your event.</p>
            <h2>Rescheduling and cancellations</h2>
            <p>If your plans change, please contact us as early as possible so we can try to accommodate a new date or discuss cancellation. Because artist time and travel are reserved in advance of your event, cancellations made close to the date may not be fully refundable — we'll always discuss the specifics with you directly rather than apply a fixed rule.</p>
            <h2>On the day</h2>
            <p>Styling takes place on-location at your hotel, resort, home or venue. The groom is styled first in a dedicated session, followed by close family and the wider baraat in coordinated batches.</p>
            <h2>Limitation of liability</h2>
            <p>Safawala Near Me takes care in planning and styling for your event. To the extent permitted by law, we are not liable for delays or issues caused by circumstances outside our reasonable control, such as venue access, weather or traffic.</p>
            <h2>Governing law</h2>
            <p>These terms are governed by the laws of India.</p>
          </div>
          <div className="subpage-card"><h3>Get in touch</h3><p>Questions about this page? Reach the team directly.</p><p><a className="footer-phone" href="tel:+919725295691">+91 97252 95691</a></p><p><a href="https://wa.me/919725295691">WhatsApp the team</a></p></div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
