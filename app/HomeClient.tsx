"use client";

import { FormEvent, useState } from "react";
import { gallery, internalLocations, nearbyLocations, primaryKeywords, services } from "./site-data";

const faq = [
  ["How much does a wedding safa tying service cost in Rishikesh?", "Pricing depends on the number of safas, selected fabric, accessories, venue location and time available for tying. Send your date, venue and approximate headcount for a tailored quote."],
  ["Do you provide safa tying at Rishikesh hotels and resorts?", "Yes. Our artists travel to hotels, resorts, homes and wedding venues across Rishikesh, Tapovan, Muni Ki Reti, Shivpuri and the wider service area."],
  ["Can you tie safas for the groom and the full baraati group?", "Yes. The groom receives a dedicated pagdi styling session, while a team handles family members and baraatis in planned batches."],
  ["How early should a destination wedding book the safa team?", "For peak dates and larger groups, book several weeks ahead. Early confirmation gives more time to finalise colours, fabrics and the correct number of artists."],
  ["Can the safa colour match our outfits or wedding décor?", "Yes. Share clear outfit and décor references. We can create a coordinated palette while keeping the groom's pagdi visually distinctive."],
  ["Do you travel from Rishikesh to Haridwar, Dehradun or Mussoorie?", "Yes, subject to date and travel availability. Nearby-city bookings are planned as outstation assignments with the venue pin and reporting time confirmed in advance."],
];

export default function HomeClient() {
  const [drawer, setDrawer] = useState<"areas" | "keywords" | null>(null);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Safawala Rishikesh, I would like to check wedding safa availability.",
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
        <a className="brand" href="#top" aria-label="Safawala Rishikesh home">
          <span className="brand-mark">S</span><span><strong>SAFAWALA</strong><small>RISHIKESH</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#areas">Areas</a><a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href="https://wa.me/919725295691?text=Hello%20Safawala%20Rishikesh%2C%20I%20want%20to%20check%20availability.">Check availability</a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Wedding safa specialists · Rishikesh</p>
            <h1>Wedding Safa Wala in Rishikesh</h1>
            <p className="hero-lede">Elegant groom pagdi and coordinated baraati safa styling—brought to your hotel, resort, home or wedding venue.</p>
            <div className="hero-actions"><a className="button primary" href="#quote">Get a free quote</a><a className="text-link" href="#gallery">View real celebrations <span>↗</span></a></div>
            <div className="hero-photo">
              <img src="/gallery/mountain-wedding.webp" alt="Groom in an ivory wedding safa celebrating under rose petals" />
              <div className="photo-note"><span>Serving Rishikesh & nearby destinations</span><strong>31 unique locations</strong></div>
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
          <div className="section-heading"><div><p className="eyebrow">Made for the whole wedding party</p><h2>One polished look. Every guest ready on time.</h2></div><p>Our professional safa tying service in Rishikesh is organised around your headcount, photography and baraat departure—not a rushed one-size-fits-all appointment.</p></div>
          <div className="service-grid">
            {services.slice(0, 4).map((service, index) => <a className="service-card" href={`/services/${service.slug}`} key={service.slug}><span>0{index + 1}</span><h3>{service.name}</h3><p>{service.intro}</p><b>Explore service →</b></a>)}
          </div>
        </section>

        <section className="editorial section-shell">
          <div className="editorial-image"><img src="/gallery/ivory-safa-moment.webp" alt="Groom wearing a soft ivory safa with floral detailing" /></div>
          <div className="editorial-copy"><p className="eyebrow">Rishikesh wedding planning</p><h2>Calm preparation before the celebration begins.</h2><p>Destination weddings around Tapovan, Shivpuri, Narendranagar and the river-side hospitality belt often spread guests across rooms, cottages and separate properties. A beautiful safa service only works when the logistics are equally refined.</p><p>We confirm the venue pin, reporting time, final headcount and preparation room before the event. The groom receives an unhurried styling slot; family and baraatis follow in planned batches with enough artists to protect the schedule.</p><ul><li>On-location hotel, resort and home service</li><li>Groom, family and baraati styling plans</li><li>Colour coordination from outfit references</li><li>Travel planning for nearby destinations</li></ul><a className="button dark" href="#areas">See service areas</a></div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">Selected work</p><h2>Real details. Quiet confidence.</h2></div><p>Photographs from the supplied Safawala collection, selected for their focus on groom styling and wedding craft.</p></div></div>
          <div className="gallery-grid">{gallery.map(([src, alt], index) => <figure className={`gallery-item gallery-${index + 1}`} key={src}><img src={src} alt={alt} loading={index > 1 ? "lazy" : "eager"} /><figcaption>{index === 0 ? "A celebration framed by the hills" : index === 1 ? "Ivory folds with floral detail" : index === 2 ? "A timeless groom palette" : index === 3 ? "Made to move with the moment" : index === 4 ? "Emerald accents, balanced softly" : "Details that hold the whole look"}</figcaption></figure>)}</div>
        </section>

        <section className="content-section section-shell process">
          <div className="section-heading compact"><div><p className="eyebrow">A considered process</p><h2>From enquiry to the final fold.</h2></div></div>
          <ol><li><span>01</span><div><h3>Share the wedding plan</h3><p>Date, venue, guest count, timing and the people who need safas.</p></div></li><li><span>02</span><div><h3>Align colour and style</h3><p>Send outfit references and choose a groom-led or coordinated family palette.</p></div></li><li><span>03</span><div><h3>Confirm the team</h3><p>We assign enough artists for the tying window and venue logistics.</p></div></li><li><span>04</span><div><h3>Arrive wedding-ready</h3><p>The groom is styled first; family and baraatis follow in organised batches.</p></div></li></ol>
        </section>

        <section className="locations-section" id="areas">
          <div className="section-shell"><div className="section-heading"><div><p className="eyebrow">Local coverage</p><h2>Rishikesh areas & destination routes</h2></div><p>Each linked page is built around the location's booking context, planning needs and its own FAQs—not a city name pasted into the same article.</p></div>
            <div className="location-columns"><div><h3>Inside Rishikesh <span>15</span></h3><div className="location-links">{internalLocations.map((item) => <a href={`/areas/${item.slug}`} key={item.slug}>{item.name}<span>↗</span></a>)}</div></div><div><h3>Nearby destinations <span>16 unique</span></h3><div className="location-links">{nearbyLocations.map((item) => <a href={`/areas/${item.slug}`} key={item.slug}>{item.name}<span>↗</span></a>)}</div></div></div>
            <p className="coverage-note">The supplied 18-item nearby list repeats Shivpuri and Rishikesh Bypass, which are already included as Rishikesh areas. This structure keeps one canonical page for each location.</p>
          </div>
        </section>

        <section className="keyword-section section-shell">
          <div className="keyword-panel"><div><p className="eyebrow">Popular service searches</p><h2>Useful pages, organised by intent.</h2><p>Closely related phrases belong on one strong service page. We repeat important terms naturally where they help the reader and avoid creating hundreds of near-duplicate pages.</p></div><div className="keyword-cloud">{primaryKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div></div>
        </section>

        <section className="faq-section section-shell" id="faq">
          <div className="section-heading"><div><p className="eyebrow">Rishikesh FAQs</p><h2>Questions couples ask before booking.</h2></div><p>These answers are specific to the Rishikesh service model. Location and service pages use separate question sets.</p></div>
          <div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="final-cta"><div className="section-shell"><p className="eyebrow">Your date deserves a clear plan</p><h2>Bring the wedding party together—beautifully.</h2><p>Share your Rishikesh venue, date and approximate number of safas. We’ll suggest the right team and styling direction.</p><a className="button light" href="#quote">Request availability</a></div></section>
      </main>

      <footer><div className="section-shell footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">S</span><span><strong>SAFAWALA</strong><small>RISHIKESH</small></span></a><p>Professional wedding safa, groom pagdi and baraati turban styling across Rishikesh and nearby destinations.</p></div><div><h3>Explore</h3><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#areas">Areas</a><a href="#faq">FAQs</a></div><div><h3>Contact</h3><a href="tel:+919725295691">+91 97252 95691</a><a href="https://wa.me/919725295691">WhatsApp the team</a><span>Rishikesh, Uttarakhand</span></div></div><div className="copyright section-shell"><span>© 2026 Safawala Rishikesh</span><span>Wedding styling with clarity, craft and care.</span></div></footer>

      <div className="explore-dock" aria-label="Explore local SEO pages"><button onClick={() => setDrawer("areas")}><span>⌖</span><b>Areas we serve</b><small>31 locations</small></button><button onClick={() => setDrawer("keywords")}><span>↗</span><b>Popular searches</b><small>6 focused pages</small></button></div>
      {drawer && <div className="drawer-backdrop" role="presentation" onMouseDown={() => setDrawer(null)}><aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" onMouseDown={(event) => event.stopPropagation()}><button className="drawer-close" onClick={() => setDrawer(null)} aria-label="Close panel">×</button>{drawer === "areas" ? <><p className="eyebrow">Service network</p><h2 id="drawer-title">Choose your area</h2><p>Open a location page with its own planning guidance and FAQs.</p><div className="drawer-links">{[...internalLocations, ...nearbyLocations].map((item) => <a href={`/areas/${item.slug}`} key={item.slug}>{item.name}<span>→</span></a>)}</div></> : <><p className="eyebrow">Search by service</p><h2 id="drawer-title">What are you looking for?</h2><p>Focused service pages consolidate related keywords into genuinely useful content.</p><div className="drawer-links">{services.map((item) => <a href={`/services/${item.slug}`} key={item.slug}>{item.name}<span>→</span></a>)}</div></>}</aside></div>}
    </>
  );
}
