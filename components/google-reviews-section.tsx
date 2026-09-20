"use client"

import { useState } from "react"
import {
  Clock,
  ExternalLink,
  MapPin,
  MessageSquarePlus,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import { googlePlaceInfo, realReviews } from "@/data/reviews"

export function GoogleReviewsSection() {
  const [filter, setFilter] = useState<"all" | "wedding" | "decor" | "corporate">("all")

  const filteredReviews =
    filter === "all" ? realReviews : realReviews.filter((r) => r.category === filter)

  return (
    <section className="bg-[#FDF8F3] px-5 py-20 lg:px-8 border-t border-[#E5D8CB]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F6EDE4] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#B08355] border border-[#E5D8CB]">
            <Sparkles size={14} />
            <span>Real Google User Reviews</span>
          </div>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl md:text-5xl">
            What Clients Say on Google
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#765F4C]">
            Verified experiences from couples, families, and companies who entrusted their memorable events to Feature Brights south wedding planner.
          </p>
        </div>

        {/* Google Place Profile Summary Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Google Brand & Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Google G Logo Badge */}
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white shadow-sm border border-[#E5D8CB]">
                <svg className="size-9" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3421]">
                    {googlePlaceInfo.name}
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                    <ShieldCheck size={13} />
                    Verified Place
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {/* Stars */}
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="font-serif text-lg font-bold text-[#4A3421]">
                    {googlePlaceInfo.rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-[#765F4C]">
                    ({googlePlaceInfo.reviewsCount} verified reviews on Google)
                  </span>
                </div>

                <p className="mt-1 text-xs text-[#765F4C] flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#B08355] shrink-0" />
                  <span>{googlePlaceInfo.shortLocation}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons for Google Reviews */}
            <div className="flex flex-wrap items-center gap-3 pt-2 lg:pt-0">
              <a
                href={googlePlaceInfo.googleSearchReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#B08355] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#966b40] transition"
              >
                <span>View All on Google</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={googlePlaceInfo.googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5D8CB] bg-[#FDF8F3] px-5 py-2.5 text-xs font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
              >
                <MessageSquarePlus size={14} className="text-[#B08355]" />
                <span>Write a Review</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "All Reviews (5.0 ★)" },
            { id: "wedding", label: "Weddings & Ceremonies" },
            { id: "decor", label: "Stage & Mandap Decor" },
            { id: "corporate", label: "Corporate & Product Launches" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                filter === tab.id
                  ? "bg-[#4A3421] text-white shadow-sm"
                  : "bg-white text-[#765F4C] border border-[#E5D8CB] hover:bg-[#F6EDE4]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Real Reviews Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-3xl border border-[#E5D8CB] bg-white p-6 sm:p-7 shadow-2xs hover:shadow-md transition duration-300"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid size-11 place-items-center rounded-full text-base font-bold text-white shadow-xs ${rev.avatarBg}`}
                    >
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#4A3421]">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-[#765F4C]">{rev.date}</p>
                    </div>
                  </div>

                  {/* Google Verified Icon */}
                  <span className="flex items-center gap-1 rounded-md bg-[#FDF8F3] px-2 py-1 text-[10px] font-bold text-[#B08355] border border-[#E5D8CB]">
                    <svg className="size-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    <span>Google</span>
                  </span>
                </div>

                {/* Stars & Event Tag */}
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="rounded-full bg-[#F6EDE4] px-2.5 py-0.5 text-[10px] font-bold text-[#B08355]">
                    {rev.event}
                  </span>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#5F4B3B] line-clamp-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Bottom verification footnote */}
              <div className="mt-5 border-t border-[#E5D8CB]/50 pt-3 flex items-center justify-between text-[11px] text-[#765F4C]">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-600" />
                  <span>Verified Client Review</span>
                </span>
                <a
                  href={googlePlaceInfo.googleSearchReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#B08355] hover:underline"
                >
                  View full review
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* "This Place" Showcase / Studio Location Card */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-md">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* Place Details Column */}
            <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-white to-[#FDF8F3]">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F6EDE4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B08355]">
                  <MapPin size={13} />
                  <span>Verified Google Place</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#4A3421]">
                  Visit Our Studio Place
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#765F4C]">
                  Meet our lead planners, explore physical decor portfolios, and discuss your event blueprint in person at our Surat studio.
                </p>

                {/* Address & Contact Cards */}
                <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#4A3421]">
                  <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-[#E5D8CB]">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#F6EDE4] text-[#B08355]">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <p className="font-bold">Studio Address</p>
                      <p className="text-xs text-[#765F4C] mt-0.5 leading-relaxed">
                        {googlePlaceInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-[#E5D8CB]">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#F6EDE4] text-[#B08355]">
                      <Phone size={16} />
                    </span>
                    <div>
                      <p className="font-bold">Direct Phone</p>
                      <a
                        href={`tel:${googlePlaceInfo.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-xs text-[#B08355] font-semibold hover:underline mt-0.5 block"
                      >
                        {googlePlaceInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-[#E5D8CB]">
                    <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#F6EDE4] text-[#B08355]">
                      <Clock size={16} />
                    </span>
                    <div>
                      <p className="font-bold">Opening Hours</p>
                      <p className="text-xs text-[#765F4C] mt-0.5">
                        {googlePlaceInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={googlePlaceInfo.googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#B08355] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#966b40] transition"
                >
                  <Navigation size={14} />
                  <span>Get Directions to Place</span>
                </a>
                <a
                  href={googlePlaceInfo.googleSearchReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5D8CB] bg-white px-5 py-3 text-xs font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
                >
                  <ExternalLink size={13} className="text-[#B08355]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Map Iframe Column */}
            <div className="relative min-h-[360px] lg:min-h-full lg:col-span-7 bg-[#E5D8CB]">
              <iframe
                title="Feature Brights south wedding planner Google Place Location"
                src={googlePlaceInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Place Info Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl bg-white/95 p-3.5 backdrop-blur shadow-lg border border-[#E5D8CB]">
                <div className="flex items-center gap-2.5">
                  <div className="grid size-8 place-items-center rounded-lg bg-[#B08355] text-white shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-serif text-xs font-bold text-[#4A3421] leading-tight">
                      Feature Brights
                    </p>
                    <p className="text-[10px] text-[#765F4C]">
                      Ratna Madhav, Vesu, Surat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
