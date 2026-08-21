"use client";

import { useState } from "react";
import { locations } from "./site-data";

const searchLinks = [
  ["wedding safa wala in Safawala Near Me", "/services/wedding-safa-tying"],
  ["professional safa tying", "/services/wedding-safa-tying"],
  ["groom pagdi Safawala Near Me", "/services/groom-pagdi"],
  ["royal wedding pagdi", "/services/groom-pagdi"],
  ["baraati safa service", "/services/baraati-safa"],
  ["wedding party safa", "/services/baraati-safa"],
  ["destination wedding safa team", "/services/destination-wedding-safa"],
  ["family pagdi styling", "/services/family-pagdi"],
  ["custom wedding safa colours", "/services/custom-safa-colours"],
  ["safa wala near me", "/services/wedding-safa-tying"],
] as const;

export default function ExplorePanels() {
  const [showAllAreas, setShowAllAreas] = useState(false);
  const [showSearches, setShowSearches] = useState(false);
  const visibleAreas = showAllAreas ? locations : locations.slice(0, 8);

  return (
    <section className="explore-section landing-explore section-shell" id="areas" aria-label="Explore Safawala service pages">
      {locations.length > 0 && (
      <div className="explore-card">
        <div className="explore-card-head">
          <div><h2>Areas we serve</h2><p>{locations.length} locations and nearby destinations.</p></div>
          <button type="button" onClick={() => setShowAllAreas((value) => !value)} aria-expanded={showAllAreas}>{showAllAreas ? "View less" : "View more"}</button>
        </div>
        <div className="explore-chip-links">{visibleAreas.map((area) => <a href={`/${area.slug}`} key={area.slug}>{area.name}</a>)}</div>
      </div>
      )}

      <div className="explore-card explore-search-card">
        <div className="explore-card-head">
          <div><h2>Popular wedding safa searches</h2><p>Focused pages for groom pagdi, baraati safa and wedding turban services.</p></div>
          <button type="button" onClick={() => setShowSearches((value) => !value)} aria-expanded={showSearches}>{showSearches ? "View less" : "View all"}</button>
        </div>
        {showSearches && <div className="explore-chip-links">{searchLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>}
      </div>
    </section>
  );
}
