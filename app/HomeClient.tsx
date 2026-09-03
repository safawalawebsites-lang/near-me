"use client";

import { FormEvent, ReactNode, useState } from "react";
import { gallery, internalLocations, nearbyLocations, primaryKeywords, services } from "./site-data";
import { keywordPages } from "./keyword-data";
import SiteFooter from "./SiteFooter";

const serviceIcons: Record<string, ReactNode> = {
  "wedding-safa-tying": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l4.5 4.5L12 4l4.5 9.5L21 9" /><path d="M4.5 20h15" /></svg>
  ),
  "groom-pagdi": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /></svg>
  ),
  "baraati-safa": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="8.5" cy="8" r="3" /><path d="M2.5 20a6 6 0 0 1 12 0" /><path d="M15.5 6.2a3 3 0 0 1 0 5.6" /><path d="M17.5 14.2a6 6 0 0 1 4 5.8" /></svg>
  ),
  "destination-wedding-safa": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.2a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.8" r="2.4" /></svg>
  ),
};

const faq = [
  ["How much does wedding safa tying cost?", "Pricing depends on the city, number of safas, selected fabric, accessories and time available for tying. Your local Safawala team will confirm a tailored quote once you share your date and venue."],
  ["Do you provide safa tying at hotels and resorts?", "Yes. Each city's Safawala team travels to hotels, resorts, homes and wedding venues across that city and its nearby service area."],
  ["Can you tie safas for the groom and the full baraati group?", "Yes. The groom receives a dedicated pagdi styling session, while a team handles family members and baraatis in planned batches."],
  ["How early should a destination wedding book the safa team?", "For peak dates and larger groups, book several weeks ahead. Early confirmation gives more time to finalise colours, fabrics and the correct number of artists."],
  ["Can the safa colour match our outfits or wedding décor?", "Yes. Share clear outfit and décor references. We can create a coordinated palette while keeping the groom's pagdi visually distinctive."],
  ["What if my city isn't listed yet?", "Send us your city and event details directly. We regularly add new city teams and can advise on the closest available Safawala service in the meantime."],
];

const safaStyleIcons = [
  <svg key="crown" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l4.5 4.5L12 4l4.5 9.5L21 9" /><path d="M4.5 20h15" /></svg>,
  <svg key="gem" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l3 6-9 12L3 9z" /><path d="M3 9h18" /><path d="M9 3l3 6 3-6" /></svg>,
  <svg key="waves" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0" /><path d="M2 16c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 7.5 0" /></svg>,
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" /></svg>,
  <svg key="palette" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-1 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4c0-5-4-8-9-8z" /></svg>,
  <svg key="sliders" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h10M4 12h6M4 18h13" /><circle cx="17" cy="6" r="2" /><circle cx="13" cy="12" r="2" /><circle cx="20" cy="18" r="2" /></svg>,
];

const safaStyles = [
  ["Rajasthani & Rajwadi", "Structured royal folds for a traditional groom pagdi, family pagdi or coordinated baraati safa look."],
  ["Jodhpuri Safa", "A refined, high-profile style that pairs well with bandhgalas, achkans and detailed sherwanis."],
  ["Bandhani & Leheriya", "Colour-rich wedding safas that bring movement and regional character to daytime and outdoor celebrations."],
  ["Marwari Pagdi", "A heritage-led silhouette for families who want a strong traditional identity across the wedding party."],
  ["Pastel Designer Safa", "Ivory, blush, peach, mint and muted gold palettes designed around modern destination-wedding décor."],
  ["Custom Groom Turban", "A distinctive groom safa with considered height, pleats, kalgi, brooch or feather placement."],
];

export default function HomeClient() {
  const [expandedAreas, setExpandedAreas] = useState(false);
  const [expandedSearches, setExpandedSearches] = useState(false);
  const allLocations = [...internalLocations, ...nearbyLocations];

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Safawala Near Me, I would like to check wedding safa availability.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Event date: ${data.get("date") || "Not finalised"}`,
      `Venue / area: ${data.get("area")}`,
      `Requirement: ${data.get("requirement")}`,
    ].join("\n");
    window.open(`https://wa.me/919725295691?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Safawala Near Me home">
          <span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>NEAR ME</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#footer-areas">Areas</a><a href="#faq">FAQs</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Find Your City's Wedding Safa Wala</p>
            <h1>Safawala, Near You.</h1>
            <p className="hero-lede">One trusted safa brand, serving grooms and families across every major city — find your city's dedicated Safawala team below.</p>
            <div className="hero-actions"><a className="button primary" href="#quote">Get a free quote</a><a className="text-link" href="#gallery">View real celebrations <span>↗</span></a></div>
            <div className="hero-photo">
              <img src="/gallery/mountain-wedding.webp" alt="Groom in an ivory wedding safa celebrating under rose petals" width="1200" height="1500" />
              <div className="photo-note"><span>Serving Safawala Near Me & nearby destinations</span><strong>31 unique locations</strong></div>
            </div>
          </div>

          <aside className="quote-card" id="quote" aria-labelledby="quote-heading">
            <div className="card-kicker">Complimentary planning call</div>
            <h2 id="quote-heading">Check your date</h2>
            <p>Tell us the essentials. Your enquiry opens in WhatsApp so you can continue directly with our team.</p>
            <form onSubmit={submitInquiry}>
              <label>Your name<input name="name" required placeholder="e.g. Rahul Sharma" autoComplete="name" /></label>
              <div className="form-row">
                <label>WhatsApp number<input name="phone" required inputMode="tel" placeholder="98765 43210" autoComplete="tel" /></label>
                <label>Event date<input name="date" type="date" /></label>
              </div>
              <label>Venue or area<input name="area" required placeholder="e.g. Tapovan, Shivpuri" /></label>
              <label>What do you need?<textarea name="requirement" required rows={4} placeholder="Groom pagdi, 50 baraati safas, preferred colours…" /></label>
              <button className="button primary submit" type="submit">Continue on WhatsApp <span>→</span></button>
              <small className="privacy">Your details are used only to reply to this enquiry.</small>
            </form>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Safawala credentials">
          <div><strong>40+</strong><span>years of heritage</span></div><div><strong>4.5 lakh+</strong><span>clients served</span></div><div><strong>30+</strong><span>cities represented</span></div><div><strong>15+</strong><span>countries reached</span></div>
        </section>

        <section className="content-section section-shell" id="services">
          <div className="section-heading"><div><p className="eyebrow">Made for the whole wedding party</p><h2>One polished look. Every guest ready on time.</h2></div><p>Our professional safa tying service is organised around your headcount, photography and baraat departure—not a rushed one-size-fits-all appointment.</p></div>
          <div className="service-grid">
            {services.slice(0, 4).map((service) => <a className="service-card" href={`/services/${service.slug}`} key={service.slug}><span>{serviceIcons[service.slug]}</span><h3>{service.name}</h3><p>{service.intro}</p><b>Explore service →</b></a>)}
          </div>
        </section>

        <section className="seo-intro section-shell" aria-labelledby="rishikesh-safa-heading">
          <div className="seo-intro-heading">
            <p className="eyebrow">A safa wala near every city we serve</p>
            <h2 id="rishikesh-safa-heading">A safa wala near you, in every city we serve.</h2>
          </div>
          <div className="seo-intro-copy"><p>Safawala Near Me connects you to the dedicated, city-specific Safawala team closest to your wedding venue. Each city site is run by local artists who know the venues, travel times and preparation routines of that area.</p><p>Search for your city below, or send us your event details directly and we'll route your enquiry to the right local team for <strong>wedding safa rental, groom pagdi styling and baraati safa tying</strong>.</p></div>
          <div className="seo-feature-grid">
            <article><span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4c-6 0-14 4-14 12 0 2 1 4 3 4 6 0 12-6 12-12 0-1.5-.3-3-1-4z" /><path d="M4 20L14 10" /></svg></span><h3>Groom safa and wedding pagdi</h3><p>A dedicated, camera-ready groom pagdi session with optional kalgi, brooch, feather and coordinated stole details.</p></article>
            <article><span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg></span><h3>Baraati safa rental and tying</h3><p>Matching guest safas, bulk wedding turban planning and enough trained artists to complete larger groups on time.</p></article>
            <article><span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V9l8-6 8 6v12" /><path d="M9 21v-7h6v7" /></svg></span><h3>On-site destination wedding team</h3><p>Venue-based styling at hotels, resorts, homes and wedding properties, wherever your celebration is.</p></article>
          </div>
        </section>

        <section className="editorial section-shell">
          <div className="editorial-image"><img src="/gallery/rishikesh-editorial.webp" alt="Groom wearing a refined ivory wedding safa and embroidered sherwani" width="1080" height="1350" /></div>
          <div className="editorial-copy"><p className="eyebrow">Local-team planning</p><h2>Calm preparation before the celebration begins.</h2><p>Every wedding is local in the end, so a safa service only works well when the artists actually know the venues, travel times and preparation routines of that city.</p><p>We route your enquiry to the closest dedicated Safawala team, who confirm the venue pin, reporting time and preparation room directly with you before the event.</p><ul><li>On-location hotel, resort and home service</li><li>Groom, family and baraati styling plans</li><li>Colour coordination from outfit references</li><li>Travel planning for nearby destinations</li></ul></div>
        </section>

        <section className="styles-section section-shell" aria-labelledby="styles-heading">
          <div className="section-heading"><div><p className="eyebrow">Styles, fabrics and colours</p><h2 id="styles-heading">A wedding safa collection for traditional and modern celebrations.</h2></div><p>Choose the direction first, then refine the fabric and colour against the groom’s sherwani, family outfits, floral palette and venue lighting.</p></div>
          <div className="styles-grid">{safaStyles.map(([name, description], index) => <article key={name}><span className="style-number">{safaStyleIcons[index]}</span><div><h3>{name}</h3><p>{description}</p></div></article>)}</div>
          <div className="fabric-note"><strong>Popular fabric and colour requests</strong><p>Silk wedding safa, premium fabric safa, embroidered pagdi, Bandhani safa, ivory groom safa, cream wedding pagdi, maroon wedding safa, red wedding turban, gold groom pagdi, blush pink and sage green guest safas.</p></div>
        </section>

        <section className="keyword-section section-shell">
          <div className="keyword-panel">
            <div>
              <p className="eyebrow">Popular searches</p>
              <h2>What people search for before booking a safa wala.</h2>
              <p>These are real terms couples, families and event planners use when comparing a professional safa tying service — we rank and answer for all of them.</p>
            </div>
            <div className="keyword-cloud">{primaryKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">Selected work</p><h2>Real details. Quiet confidence.</h2></div><p>Photographs from the supplied Safawala collection, selected for their focus on groom styling and wedding craft.</p></div></div>
          <div className="gallery-grid">{gallery.map(([src, alt], index) => <figure className={`gallery-item gallery-${index + 1}`} key={src}><img src={src} alt={alt} loading={index > 1 ? "lazy" : "eager"} width="1350" height="1688" /><figcaption>{index === 0 ? "A celebration framed by the hills" : index === 1 ? "Ivory folds with floral detail" : index === 2 ? "A timeless groom palette" : index === 3 ? "Made to move with the moment" : index === 4 ? "Emerald accents, balanced softly" : "Details that hold the whole look"}</figcaption></figure>)}</div>
        </section>

        <section className="content-section section-shell process">
          <div className="section-heading compact"><div><p className="eyebrow">A considered process</p><h2>From enquiry to the final fold.</h2></div></div>
          <ol><li><span>01</span><div><h3>Share the wedding plan</h3><p>Date, venue, guest count, timing and the people who need safas.</p></div></li><li><span>02</span><div><h3>Align colour and style</h3><p>Send outfit references and choose a groom-led or coordinated family palette.</p></div></li><li><span>03</span><div><h3>Confirm the team</h3><p>We assign enough artists for the tying window and venue logistics.</p></div></li><li><span>04</span><div><h3>Arrive wedding-ready</h3><p>The groom is styled first; family and baraatis follow in organised batches.</p></div></li></ol>
        </section>

        <section className="seo-guide">
          <div className="section-shell">
            <div className="section-heading"><div><p className="eyebrow">A useful booking guide</p><h2>A clearer way to plan your wedding safa service.</h2></div><p>Your quote is shaped by the fabric, quantity, location and time available for styling.</p></div>
            <div className="guide-grid">
              <article><span>01</span><h3>Price and packages</h3><p>Wedding safa price typically runs ₹5,000–₹15,000 per person, depending on fabric, guest quantity, tying style, groom accessories, artist count and venue distance. Share your date, venue pin and headcount for a useful package estimate.</p></article>
              <article><span>02</span><h3>Destination logistics</h3><p>For hotels, resorts and venues nationwide, we plan the arrival buffer, preparation room and tying sequence so the groom and baraatis are ready on time.</p></article>
              <article><span>03</span><h3>Functions and groups</h3><p>Book a groom safa, family pagdi service or full baraati safa team for the wedding, engagement, reception, sangeet, haldi or mehndi.</p></article>
              <article><span>04</span><h3>Comfort and finishing</h3><p>Each wedding pagdi is balanced for shape and comfort, with kalgi, brooch, feather or pearl details used selectively for a polished finish.</p></article>
            </div>
          </div>
        </section>

        <section className="explore-section section-shell" id="areas" aria-label="Explore wedding safa service pages">
          <article className="explore-card">
            <div className="explore-card-head"><div><h2>Find your city</h2><p>{allLocations.length} cities across India — search or browse below.</p></div><button type="button" onClick={() => setExpandedAreas((value) => !value)} aria-expanded={expandedAreas}>{expandedAreas ? "View less" : "View more"}</button></div>
            <div className="explore-chip-links">{allLocations.slice(0, expandedAreas ? allLocations.length : 8).map((area) => <a href={`/${area.slug}`} key={area.slug}>{area.name}</a>)}</div>
          </article>
          <article className={`explore-card explore-card-compact ${expandedSearches ? "is-expanded" : ""}`}>
            <div className="explore-card-head"><div><h2>Popular wedding safa searches</h2><p>Focused pages for groom pagdi, baraati safa and wedding turban services.</p></div><button type="button" onClick={() => setExpandedSearches((value) => !value)} aria-expanded={expandedSearches}>{expandedSearches ? "Hide pages" : "View all"}</button></div>
            {expandedSearches && <div className="explore-chip-links">{services.map((service) => <a href={`/services/${service.slug}`} key={service.slug}>{service.name}</a>)}</div>}
          </article>
          <article className="explore-card explore-card-compact">
            <div className="explore-card-head"><div><h2>Popular searches</h2><p>{Math.min(30, keywordPages.length)} of {keywordPages.length} specific searches we have pages for.</p></div></div>
            <div className="explore-chip-links">{keywordPages.slice(0, 30).map((k) => <a href={`/keywords/${k.slug}`} key={k.slug}>{k.title}</a>)}</div>
          </article>
        </section>

        <section className="faq-section section-shell" id="faq">
          <div className="section-heading"><div><p className="eyebrow">Wedding Safa FAQs</p><h2>Questions couples ask before booking.</h2></div><p>These answers are specific to our service model. Location and service pages use separate question sets.</p></div>
          <div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

      </main>

      <SiteFooter />

    </>
  );
}
