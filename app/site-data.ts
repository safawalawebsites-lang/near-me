export type LocationItem = {
  slug: string;
  name: string;
  group: "Rishikesh area" | "Nearby destination";
  summary: string;
  planning: string;
  faq: [string, string][];
};

const internalNames = [
  "Tapovan", "Muni Ki Reti", "Swarg Ashram", "Ram Jhula", "Laxman Jhula",
  "Shivpuri", "Bharat Mandir Area", "IDPL", "Awas Vikas", "Shyampur",
  "Virbhadra", "Ganga Nagar", "Barrage Road", "Nirmal Block", "Rishikesh Bypass",
];

const nearbyNames = [
  "Haridwar", "Dehradun", "Roorkee", "Muzaffarnagar", "Saharanpur", "Najibabad",
  "Kotdwar", "Lansdowne", "Narendranagar", "Devprayag", "Doiwala", "Kaudiyala",
  "Tehri", "Chamba", "Mussoorie", "Vikasnagar",
];

const localNotes: Record<string, [string, string]> = {
  Tapovan: ["Tapovan weddings often bring together resort guests, destination groups and families staying close to the river belt.", "We plan the tying window around hotel check-in, photography and the groom's departure so the baraat is not kept waiting."],
  "Muni Ki Reti": ["Muni Ki Reti is a practical base for ceremonies on both sides of the Rishikesh hospitality belt.", "Share the venue and room block early so our artists can arrive together and set up where the full group is getting ready."],
  "Swarg Ashram": ["Swarg Ashram celebrations call for a calm, organised service that respects the character of the neighbourhood.", "We confirm access, guest count and the correct arrival point before assigning the safa team."],
  "Ram Jhula": ["For wedding groups near Ram Jhula, timing and the meeting point matter as much as the chosen pagdi style.", "A short venue-access check helps us avoid delays and keep the groom's styling separate from the larger baraati session."],
  "Laxman Jhula": ["Laxman Jhula is popular with intimate and destination wedding groups looking for a distinctly Rishikesh setting.", "We recommend finalising colours from the outfit palette before the team travels to the getting-ready location."],
  Shivpuri: ["Shivpuri suits resort-led and outdoor wedding schedules where guests may be spread across cottages or camps.", "We build a room-wise tying sequence and bring the selected safas together so the entire party is ready on time."],
  "Bharat Mandir Area": ["Central Rishikesh functions around Bharat Mandir often have family groups arriving from several parts of the city.", "A named family coordinator and a confirmed room for styling keep the service smooth for larger groups."],
  IDPL: ["IDPL-area weddings can accommodate organised family preparation when the guest count is known in advance.", "We divide large orders into groom, close family and baraati batches to protect the ceremony timeline."],
  "Awas Vikas": ["Awas Vikas is well suited to home-based preparations and nearby banquet functions.", "For residential setups, we confirm the working space and start time so every safa is tied before vehicles depart."],
  Shyampur: ["Shyampur celebrations often combine local family ceremonies with guests arriving from outside Rishikesh.", "We keep a clear headcount buffer and coordinate directly with the person managing arrivals."],
  Virbhadra: ["Virbhadra wedding schedules can include home rituals followed by a venue entry elsewhere in Rishikesh.", "Our timing plan accounts for both the groom's detailed styling and the faster baraati tying session."],
  "Ganga Nagar": ["Ganga Nagar families usually need a convenient at-home or hotel safa service rather than a showroom visit.", "We arrive with the agreed colour, ornament plan and team size based on the final guest count."],
  "Barrage Road": ["Barrage Road functions benefit from early coordination when the procession and venue timings are close together.", "We recommend one styling room with good light, mirrors and enough seating for the next group in line."],
  "Nirmal Block": ["Nirmal Block weddings are often intimate enough for personalised groom and family styling.", "We can keep the groom's safa distinct while maintaining a coordinated look for parents, brothers and friends."],
  "Rishikesh Bypass": ["Venues around Rishikesh Bypass are convenient for larger guest movement and destination arrivals.", "Send the map pin rather than only the venue name so the artists reach the correct gate and preparation room."],
  Haridwar: ["Haridwar weddings often balance traditional ceremonies with guests travelling between hotels and venues.", "We confirm the exact Haridwar location, travel window and tying order before accepting the event schedule."],
  Dehradun: ["Dehradun offers a wide mix of hotels, lawns and destination venues, so each safa booking needs a venue-specific plan.", "Our Rishikesh team confirms travel time and may add artists for larger guest counts or early-morning ceremonies."],
  Roorkee: ["Roorkee bookings are planned as an outstation service with a defined arrival and completion window.", "Final quantities and colours should be locked before dispatch because last-minute replacements are less practical away from base."],
  Muzaffarnagar: ["Muzaffarnagar functions usually require a dedicated travelling team for groom and baraati pagdi styling.", "We price the service after reviewing guest count, timing and whether the same team is needed for more than one ceremony."],
  Saharanpur: ["Saharanpur weddings can be covered with advance scheduling from Rishikesh for complete family or baraati groups.", "An early start and one on-site coordinator help the team complete every turban before the procession begins."],
  Najibabad: ["Najibabad is handled as a planned destination assignment rather than an on-call city booking.", "Share the venue pin, reporting time and estimated headcount together for an accurate availability check."],
  Kotdwar: ["Kotdwar celebrations are a natural extension of our Rishikesh service area for organised wedding groups.", "We account for travel and setup time, especially when the groom's ceremony starts early in the day."],
  Lansdowne: ["Lansdowne destination weddings favour elegant, photo-ready safas that suit intimate hill venues.", "Weather, travel and resort access are reviewed before the team departs, and a covered styling area is recommended."],
  Narendranagar: ["Narendranagar's destination venues pair beautifully with refined ivory, rust, maroon and muted gold safa palettes.", "We coordinate with the hotel or planner so the team has access before the groom's photography begins."],
  Devprayag: ["Devprayag functions need careful travel planning and a focused selection of safas brought to the venue.", "We confirm road conditions, event time and accommodation requirements when the schedule starts very early."],
  Doiwala: ["Doiwala is close enough for flexible wedding-day service while still benefiting from a confirmed venue pin.", "Larger groups are assigned multiple artists so the groom, relatives and baraatis finish within the same preparation window."],
  Kaudiyala: ["Kaudiyala resort weddings are usually destination-led, with guests preparing in separate rooms or cottages.", "A central styling lounge and a room-wise guest list make the tying session faster and more comfortable."],
  Tehri: ["Tehri celebrations often use scenic venues where travel time and weather can affect the wedding schedule.", "We build in an arrival buffer and confirm whether the team needs an overnight stay for morning events."],
  Chamba: ["Chamba's hill setting works well with understated groom safas and coordinated family colours.", "The final plan includes venue access, temperature-appropriate fabric choices and enough preparation time for photographs."],
  Mussoorie: ["Mussoorie destination weddings call for polished styling that photographs well in hotel, lawn and hillside settings.", "Traffic, weather and hotel entry rules are checked before confirming the team's reporting time."],
  Vikasnagar: ["Vikasnagar weddings can be served by a scheduled travelling team for the groom and full baraati group.", "We confirm the route, headcount and ceremony sequence before recommending the number of safa artists."],
};

function slugify(name: string) {
  return name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const locations: LocationItem[] = [...internalNames, ...nearbyNames].map((name) => {
  const [summary, planning] = localNotes[name];
  const group = internalNames.includes(name) ? "Rishikesh area" : "Nearby destination";
  return {
    slug: slugify(name), name, group, summary, planning,
    faq: [
      [`Do you provide wedding safa tying in ${name}?`, `Yes. ${name} is included in our ${group === "Rishikesh area" ? "local Rishikesh" : "planned outstation"} service network, subject to date and team availability.`],
      [`How is a ${name} booking confirmed?`, `Send the event date, venue pin, reporting time, approximate number of safas and preferred colours. We confirm the team plan and quote after reviewing those details.`],
      [`Can the groom and baraatis have different styles in ${name}?`, `Yes. The groom can have a more detailed pagdi treatment while family members and baraatis use a coordinated style that is faster to tie in larger numbers.`],
    ],
  };
});

export const internalLocations = locations.filter((item) => item.group === "Rishikesh area");
export const nearbyLocations = locations.filter((item) => item.group === "Nearby destination");

export const services = [
  { slug: "wedding-safa-tying", name: "Wedding Safa Tying", title: "Wedding Safa Tying in Rishikesh", intro: "A coordinated on-location service for grooms, families and wedding guests, planned around your ceremony and departure time.", detail: "We shortlist the drape, colour and finishing style before the event, then assign artists according to the number of people who must be ready together.", faqs: [["How many safas can your team tie?", "Team size is matched to your headcount and available preparation window. Share both figures for an accurate plan."], ["Do you come to the hotel or venue?", "Yes. Our artists provide on-location service at hotels, resorts, homes and wedding venues."], ["Can colours match the wedding theme?", "Yes. Send outfit or décor references before the event so we can recommend suitable coordinated shades."]] },
  { slug: "groom-pagdi", name: "Groom Pagdi Styling", title: "Groom Pagdi Styling in Rishikesh", intro: "A more considered, camera-ready pagdi service shaped around the groom's outfit, face profile and wedding aesthetic.", detail: "The groom receives dedicated styling time, with optional kalgi, brooch and fabric detailing kept balanced rather than overdone.", faqs: [["When should the groom's pagdi be tied?", "Usually before the main portrait session and after the sherwani is complete. We align the exact time with your photographer."], ["Can you suggest a pagdi colour?", "Yes. We consider the sherwani, stole, jewellery and overall wedding palette before suggesting a shade."], ["Is the groom styled separately?", "Yes. The groom's session is planned separately from the faster family and baraati sequence."]] },
  { slug: "baraati-safa", name: "Baraati Safa Service", title: "Baraati Safa Service in Rishikesh", intro: "Fast, consistent safa tying for friends and relatives who need to look coordinated without delaying the procession.", detail: "We divide guests into manageable batches and use an agreed style so the final group feels unified in photographs.", faqs: [["Can you handle a large baraati group?", "Yes. We add artists according to the group size and time available."], ["Should we order extra safas?", "A small quantity buffer is sensible for late additions or fit changes."], ["Can close family wear a different colour?", "Yes. Parents and siblings can use a complementary shade while the wider group stays uniform."]] },
  { slug: "destination-wedding-safa", name: "Destination Wedding Safa", title: "Destination Wedding Safa Team for Rishikesh", intro: "A travel-ready styling team for resorts, river-side celebrations and multi-day destination wedding schedules.", detail: "We coordinate with the planner or hotel, consolidate the fabric and accessories, and build a room-wise tying plan for the guest list.", faqs: [["Do you work at resorts outside central Rishikesh?", "Yes. Share the property and event schedule so travel and access can be planned."], ["Can the team stay for multiple functions?", "Multi-event assignments can be quoted after reviewing dates, styles and accommodation needs."], ["How early should we book?", "For peak wedding dates, reserving the team several weeks ahead is recommended."]] },
  { slug: "family-pagdi", name: "Family Pagdi Styling", title: "Family Pagdi Styling in Rishikesh", intro: "Refined coordinated pagdis for fathers, brothers, uncles and close relatives, with the groom kept visually distinctive.", detail: "Family styling works best with two complementary levels: a signature groom treatment and a clean repeatable fold for relatives.", faqs: [["Can elders have a softer fit?", "Yes. Tell the artist about comfort needs and we can adjust tension and finish."], ["Can two families use separate colours?", "Yes. Separate but complementary palettes can make each side easy to identify."], ["Do you style children?", "Children can be included when their approximate ages and headcount are shared in advance."]] },
  { slug: "custom-safa-colours", name: "Custom Safa Colours", title: "Custom Wedding Safa Colours in Rishikesh", intro: "Colour-led safa planning for couples who want the groom and guests aligned with outfits, flowers or the overall décor palette.", detail: "We work from visual references and recommend combinations that remain elegant in daylight, indoor lighting and wedding photography.", faqs: [["Can you match an exact outfit colour?", "We can work toward a close coordinated match; physical fabric may vary slightly from screen colours."], ["Which colours photograph well outdoors?", "Ivory, rust, maroon, saffron, muted pink and deeper jewel tones generally retain definition in outdoor light."], ["Can the groom use a contrast colour?", "Yes. A controlled contrast is often the best way to keep the groom visually distinct."]] },
];

export const primaryKeywords = [
  "wedding safa wala in Rishikesh", "safa tying service Rishikesh", "groom pagdi Rishikesh",
  "baraati safa service", "wedding turban tying", "destination wedding safa team",
  "professional pagdi wala", "custom wedding safa colours", "family pagdi styling",
  "safa wala near me",
];

export const gallery = [
  ["/gallery/mountain-wedding.webp", "Groom in an ivory wedding safa celebrating under rose petals"],
  ["/gallery/ivory-safa-moment.webp", "Groom wearing a soft ivory safa with floral detailing"],
  ["/gallery/heritage-couple.webp", "Wedding portrait series featuring a classic ivory groom safa"],
  ["/gallery/wedding-dance.webp", "Newly married couple dancing with the groom in a wedding safa"],
  ["/gallery/emerald-safa-couple.webp", "Groom in an ivory safa accented with emerald jewellery"],
  ["/gallery/wedding-detail.webp", "Close wedding detail showing coordinated ivory and green attire"],
] as const;
