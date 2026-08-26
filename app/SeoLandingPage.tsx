import InquiryForm from "./InquiryForm";
import ExplorePanels from "./ExplorePanels";
import { getHeroTitle, getLocationSeoContent, getServiceSeoContent } from "./seo-content";
import { keywordPages } from "./keyword-data";
import { gallery, getServiceFaqs, locations, services, type LocationItem } from "./site-data";
import SiteFooter from "./SiteFooter";

type ServiceItem = (typeof services)[number];

type Props =
  | { kind: "location"; location: LocationItem }
  | { kind: "service"; service: ServiceItem };

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand${footer ? " footer-brand" : ""}`} href="/" aria-label="Safawala Near Me home"><span className="brand-logo-window"><img src="/safawala-logo-current.png" alt="Safawala" /></span><small>NEAR ME</small></a>;
}

export default function SeoLandingPage(props: Props) {
  const isLocation = props.kind === "location";
  const location = isLocation ? props.location : null;
  const service = !isLocation ? props.service : null;
  const relatedKeywords = location
    ? (() => {
        const seed = location.slug;
        const picks = new Set<number>();
        let i = 0;
        while (picks.size < Math.min(8, keywordPages.length) && i < 200) {
          let h = 0;
          const s = `${seed}|${i}`;
          for (let c = 0; c < s.length; c++) h = (h * 31 + s.charCodeAt(c)) >>> 0;
          picks.add(h % keywordPages.length);
          i++;
        }
        return Array.from(picks).map((idx) => keywordPages[idx]);
      })()
    : [];
  const pageName = location?.name ?? service!.name;
  const focusKeyword = location ? `wedding safa wala in ${location.name}` : `${service!.name.toLowerCase()} in Safawala Near Me`;
  const title = getHeroTitle(location?.slug ?? service!.slug, location ? "location" : "service");
  const intro = location ? location.summary : service!.intro;
  const detail = location ? location.planning : service!.detail;
  const locationIndex = location ? locations.findIndex((item) => item.slug === location.slug) : services.findIndex((item) => item.slug === service!.slug);
  const rotatedGallery = [...gallery.slice(locationIndex % gallery.length), ...gallery.slice(0, locationIndex % gallery.length)];
  const faq = location ? location.faq : getServiceFaqs(service!);
  const seoContent = location
    ? getLocationSeoContent(location.slug, location.name)
    : getServiceSeoContent(service!.slug, service!.name);
  const aboutTitle = location
    ? `A professional safa team planned around your ${location.name} wedding.`
    : `${service!.name} with a polished, wedding-ready finish.`;
  const aboutCopy = location
    ? `${detail} Our wedding safa wala in ${location.name} coordinates the groom pagdi, close-family pagdis and baraati safa tying as one organised preparation plan.`
    : `${detail} Every ${focusKeyword} booking is planned around the groom’s ready time, guest quantity, venue access and the photography schedule.`;
  const secondCopy = location
    ? `Couples looking for professional wedding safa tying in ${location.name} can choose groom-only styling, family pagdis or a complete baraati safa service. Fabric, colour and artist count are finalised before the team reaches the venue.`
    : `Choose a groom-only appointment, coordinated family styling or a full wedding-party package. We confirm the fabric, colour direction and number of artists before the Safawala Near Me event.`;

  return (
    <>
      <header className="site-header">
        <Brand />
        <nav aria-label="Page navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#areas">Areas</a><a href="#faq">FAQs</a></nav>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <div className="landing-hero-inner section-shell">
            <div className="landing-hero-copy">
              <div className="breadcrumbs"><a href="/">Home</a><span>/</span>{!isLocation && <><a href="/#services">Services</a><span>/</span></>}<b>{pageName}</b></div>
              <p className="eyebrow">{location ? "Local safa network · On-location service" : "Professional wedding safa service"}</p>
              <h1>{title}</h1>
              <p>{intro}</p>
              <div className="landing-keyword-line"><span>Specialists in</span><strong>{focusKeyword}</strong></div>
            </div>
            <InquiryForm pageName={pageName} areaPlaceholder={location ? `${location.name} venue or hotel` : "e.g. Tapovan, Shivpuri"} />
          </div>
        </section>

        <section className="landing-trust" aria-label="Safawala service strengths"><div><strong>On-site</strong><span>hotel, resort or home</span></div><div><strong>Groom first</strong><span>unhurried signature styling</span></div><div><strong>Team planned</strong><span>for your guest quantity</span></div><div><strong>Colour aligned</strong><span>with outfits and décor</span></div></section>

        <section className="landing-about section-shell" id="about">
          <div className="landing-about-image"><img src={rotatedGallery[0][0]} alt={`${focusKeyword} – ${rotatedGallery[0][1]}`} /></div>
          <div className="landing-about-copy"><p className="eyebrow">About the service</p><h2>{aboutTitle}</h2><p>{aboutCopy}</p><p>{secondCopy}</p><ul><li>Groom pagdi consultation</li><li>Family and baraati batches</li><li>Venue-based artist team</li><li>Style and colour coordination</li></ul></div>
        </section>

        <section className="landing-services section-shell" id="services">
          <div className="section-heading"><div><p className="eyebrow">Wedding safa services</p><h2>One coordinated look, planned for the complete celebration.</h2></div><p>Every service page is connected, so you can move from the location to the exact groom, family or baraati requirement.</p></div>
          <div className="landing-service-grid">{services.slice(0, 4).map((item, index) => <a href={`/services/${item.slug}`} key={item.slug}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.intro}</p><b>View service →</b></a>)}</div>
        </section>

        <section className="landing-gallery" id="gallery">
          <div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">Safawala gallery</p><h2>Wedding safas made for the moment—and the photographs.</h2></div><p>A curated view of groom pagdi details, fabrics, colours and coordinated wedding styling.</p></div></div>
          <div className="landing-gallery-grid">{rotatedGallery.slice(0, 6).map(([src, alt]) => <figure key={src}><img src={src} alt={`${alt} for ${pageName}`} loading="lazy" /></figure>)}</div>
        </section>

        <section className="landing-planning section-shell">
          <div><p className="eyebrow">Keyword-focused planning guide</p><h2>What to confirm before booking {focusKeyword}.</h2><p>{location ? `${location.summary} ${location.planning}` : `${service!.intro} ${service!.detail}`}</p><p>Share the event date, exact venue pin, reporting time, number of safas and outfit references. This allows the Safawala Near Me team to suggest a realistic tying window, suitable wedding safa package and the correct number of artists.</p></div>
          <ol><li><span>01</span><h3>Date and venue</h3><p>Confirm the property and preparation room.</p></li><li><span>02</span><h3>Quantity</h3><p>Separate groom, family and baraati requirements.</p></li><li><span>03</span><h3>Colour direction</h3><p>Share sherwani and décor references.</p></li><li><span>04</span><h3>Ready-by time</h3><p>Protect portraits and baraat departure.</p></li></ol>
        </section>

        <section className="landing-seo-content section-shell" aria-labelledby="seo-content-heading">
          <div className="section-heading compact"><div><p className="eyebrow">Local keyword guide</p><h2 id="seo-content-heading">{seoContent.heading}</h2></div><p>{seoContent.introduction}</p></div>
          <div className="landing-seo-grid">{seoContent.blocks.map((block, index) => <article key={block.title}><span>0{index + 1}</span><h3>{block.title}</h3><p>{block.body}</p></article>)}</div>
        </section>

        <ExplorePanels />

        <section className="landing-faq section-shell" id="faq">
          <div className="section-heading"><div><p className="eyebrow">Unique page FAQs</p><h2>Questions about {pageName}.</h2></div><p>Answers are written for this page’s service or location context rather than copied from the Safawala Near Me homepage.</p></div>
          <div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>
      </main>

      {relatedKeywords.length > 0 && (
        <section className="landing-planning section-shell" aria-label="Related searches">
          <div>
            <p className="eyebrow">Related searches</p>
            <h2>More ways people search for this.</h2>
          </div>
          <div className="explore-chip-links">{relatedKeywords.map((k) => <a href={`/keywords/${k.slug}`} key={k.slug}>{k.title}</a>)}</div>
        </section>
      )}
      <SiteFooter />
    </>
  );
}
