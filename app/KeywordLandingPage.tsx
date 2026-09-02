import InquiryForm from "./InquiryForm";
import ExplorePanels from "./ExplorePanels";
import { gallery, services } from "./site-data";
import type { KeywordPage } from "./keyword-data";
import SiteFooter from "./SiteFooter";

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand${footer ? " footer-brand" : ""}`} href="/" aria-label="Safawala Near Me home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>NEAR ME</small></a>;
}

export default function KeywordLandingPage({ page }: { page: KeywordPage }) {
  const service = services.find((item) => item.slug === page.serviceSlug) ?? services[0];
  const galleryIndex = page.slug.length % gallery.length;
  const rotatedGallery = [...gallery.slice(galleryIndex), ...gallery.slice(0, galleryIndex)];

  return (
    <>
      <header className="site-header">
        <Brand />
        <nav aria-label="Page navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#faq">FAQs</a></nav>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <div className="landing-hero-inner section-shell">
            <div className="landing-hero-copy">
              <div className="breadcrumbs"><a href="/">Home</a><span>/</span><b>{page.title}</b></div>
              <p className="eyebrow">Professional wedding safa service</p>
              <h1>{page.title}</h1>
              <p>{page.intro}</p>
              <div className="landing-keyword-line"><span>Specialists in</span><strong>{page.keyword}</strong></div>
            </div>
            <InquiryForm pageName={page.title} areaPlaceholder="e.g. Tapovan, Shivpuri" />
          </div>
        </section>

        <section className="landing-trust" aria-label="Safawala service strengths"><div><strong>On-site</strong><span>hotel, resort or home</span></div><div><strong>Groom first</strong><span>unhurried signature styling</span></div><div><strong>Team planned</strong><span>for your guest quantity</span></div><div><strong>Colour aligned</strong><span>with outfits and décor</span></div></section>

        <section className="landing-about section-shell" id="about">
          <div className="landing-about-image"><img src={rotatedGallery[0][0]} alt={`${page.keyword} – ${rotatedGallery[0][1]}`} width="1350" height="1688" /></div>
          <div className="landing-about-copy"><p className="eyebrow">{page.section1Title}</p><h2>{page.title}, planned around your wedding.</h2><p>{page.section1Body}</p><ul><li>Groom pagdi consultation</li><li>Family and baraati batches</li><li>Venue-based artist team</li><li>Style and colour coordination</li></ul></div>
        </section>

        <section className="landing-planning section-shell">
          <div><p className="eyebrow">{page.section2Title}</p><h2>How to book {page.keyword}.</h2><p>{page.section2Body}</p></div>
          <ol><li><span>01</span><h3>Date and venue</h3><p>Confirm the property and preparation room.</p></li><li><span>02</span><h3>Quantity</h3><p>Separate groom, family and baraati requirements.</p></li><li><span>03</span><h3>Colour direction</h3><p>Share sherwani and décor references.</p></li><li><span>04</span><h3>Ready-by time</h3><p>Protect portraits and baraat departure.</p></li></ol>
        </section>

        <section className="landing-seo-content section-shell" aria-labelledby="seo-content-heading">
          <div className="section-heading compact"><div><p className="eyebrow">A closer look</p><h2 id="seo-content-heading">Planning {page.keyword}, in detail.</h2></div></div>
          <div className="landing-seo-grid">
            <article><span>01</span><h3>{page.section3Title}</h3><p>{page.section3Body}</p></article>
            <article><span>02</span><h3>{page.section4Title}</h3><p>{page.section4Body}</p></article>
          </div>
        </section>

        <section className="landing-services section-shell" id="services">
          <div className="section-heading"><div><p className="eyebrow">Related service</p><h2>The full {service.name.toLowerCase()} service.</h2></div><p>This keyword is part of our {service.name} offering — see the complete service page for pricing guidance and FAQs.</p></div>
          <div className="landing-service-grid">{services.slice(0, 4).map((item, index) => <a href={`/services/${item.slug}`} key={item.slug}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.intro}</p><b>View service →</b></a>)}</div>
        </section>

        <section className="landing-gallery" id="gallery">
          <div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">Safawala gallery</p><h2>Wedding safas made for the moment—and the photographs.</h2></div><p>A curated view of groom pagdi details, fabrics, colours and coordinated wedding styling.</p></div></div>
          <div className="landing-gallery-grid">{rotatedGallery.slice(0, 6).map(([src, alt]) => <figure key={src}><img src={src} alt={`${alt} for ${page.keyword}`} loading="lazy" width="1350" height="1688" /></figure>)}</div>
        </section>

        <ExplorePanels />

        <section className="landing-faq section-shell" id="faq">
          <div className="section-heading"><div><p className="eyebrow">Unique page FAQs</p><h2>Questions about {page.keyword}.</h2></div><p>Answers are written for this exact search, not copied from the Safawala Near Me homepage.</p></div>
          <div className="faq-list">{page.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
