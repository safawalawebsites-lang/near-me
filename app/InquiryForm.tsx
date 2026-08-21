"use client";

import { FormEvent } from "react";

type Props = {
  pageName: string;
  areaPlaceholder?: string;
};

export default function InquiryForm({ pageName, areaPlaceholder = "Venue or area" }: Props) {
  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Hello Safawala Near Me, I want to check availability for ${pageName}.`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Event date: ${data.get("date") || "Not finalised"}`,
      `Venue / area: ${data.get("area")}`,
      `Requirement: ${data.get("requirement")}`,
    ].join("\n");
    window.open(`https://wa.me/919725295691?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <aside className="quote-card landing-quote" aria-labelledby="landing-quote-heading">
      <div className="card-kicker">Complimentary planning call</div>
      <h2 id="landing-quote-heading">Check your wedding date</h2>
      <p>Share the essentials and continue directly with our Safawala Near Me safa team on WhatsApp.</p>
      <form onSubmit={submitInquiry}>
        <label>Your name<input name="name" required placeholder="e.g. Rahul Sharma" autoComplete="name" /></label>
        <div className="form-row">
          <label>WhatsApp number<input name="phone" required inputMode="tel" placeholder="98765 43210" autoComplete="tel" /></label>
          <label>Event date<input name="date" type="date" /></label>
        </div>
        <label>Venue or area<input name="area" required placeholder={areaPlaceholder} /></label>
        <label>What do you need?<textarea name="requirement" required rows={3} placeholder="Groom pagdi, 50 baraati safas, colours…" /></label>
        <button className="button primary submit" type="submit">Continue on WhatsApp <span>→</span></button>
      </form>
    </aside>
  );
}
