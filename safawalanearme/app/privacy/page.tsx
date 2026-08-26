import type { Metadata } from "next";
import SiteFooter from "../SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Safawala Near Me collects, uses and protects the information you share with us.",
  alternates: { canonical: "https://safawalanearme.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="site-header"><a className="brand" href="/" aria-label="Safawala Near Me home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>NEAR ME</small></a><nav aria-label="Page navigation"><a href="/">Home</a><a href="/about">About</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Service</a></nav></header>

      <main className="subpage-main">
        <section className="subpage-hero section-shell">
          <div>
            <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>Privacy Policy</b></div>
            <h1>Privacy Policy</h1>
            <p>How Safawala Near Me collects, uses and protects the information you share with us. Last updated 25 August 2026.</p>
          </div>
        </section>

        <section className="subpage-content section-shell">
          <div>
            <h2>Information we collect</h2>
            <p>When you enquire about a booking, we collect the details you choose to share over WhatsApp, phone or our enquiry form — typically your name, phone number, event date, venue location, guest count and any fabric or style preferences. This website does not require account creation, and we do not process payments through it.</p>
            <h2>How we use your information</h2>
            <p>We use the information you share solely to respond to your enquiry, confirm availability, and plan your booking — including team size, travel and fabric requirements. We do not sell or rent your information to third parties.</p>
            <h2>How we store your information</h2>
            <p>Enquiry details are kept only for as long as needed to plan and deliver your event, plus a reasonable period afterward for our own records, after which they are deleted or anonymised.</p>
            <h2>Cookies and tracking</h2>
            <p>This website does not currently use tracking or advertising cookies. If that changes in future, this policy will be updated to reflect it.</p>
            <h2>Sharing with our team</h2>
            <p>We may share your enquiry details with our own on-ground styling artists and coordinators solely to fulfil your booking. We do not share your information with unrelated third parties.</p>
            <h2>Your rights</h2>
            <p>You can ask us to review, correct or delete the information you've shared with us at any time by contacting us using the details below.</p>
            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time. The date above reflects the most recent revision.</p>
          </div>
          <div className="subpage-card"><h3>Get in touch</h3><p>Questions about this page? Reach the team directly.</p><p><a className="footer-phone" href="tel:+919725295691">+91 97252 95691</a></p><p><a href="https://wa.me/919725295691">WhatsApp the team</a></p></div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
