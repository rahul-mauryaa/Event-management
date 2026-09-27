"use client"

import { useState } from "react"
import { ExternalLink, Layers, MapPin, Navigation, Phone, Sparkles, Star } from "lucide-react"
import { branchLocations } from "@/data/reviews"

export function ContactInteractiveMap() {
  const [viewMode, setViewMode] = useState<"both" | "main" | "surat">("both")

  const mainBranch = branchLocations.main
  const suratBranch = branchLocations.surat

  return (
    <section className="mt-16 space-y-8">
      {/* Section Header & View Mode Switcher */}
      <div className="rounded-3xl border border-[#E5D8CB] bg-[#FDF8F3] p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6EDE4] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#B08355] border border-[#E5D8CB]">
              <MapPin size={13} />
              <span>Interactive Google Maps</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#4A3421]">
              Explore Our Branch & Studio Maps
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#765F4C] max-w-2xl leading-relaxed">
              Visit our primary <strong className="text-[#4A3421]">Main Branch in Bengaluru</strong> or our full-service <strong className="text-[#4A3421]">Regional Studio in Surat</strong>. Both locations are open for in-person planning consultations, floral design previews, and 3D event blueprints.
            </p>
          </div>

          {/* Map View Mode Controls */}
          <div className="w-full sm:w-auto grid grid-cols-3 sm:flex sm:items-center gap-1 sm:gap-2 bg-white/80 p-1.5 rounded-2xl border border-[#E5D8CB] shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("both")}
              className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                viewMode === "both"
                  ? "bg-[#4A3421] text-white shadow-sm"
                  : "text-[#4A3421] hover:bg-[#F6EDE4]"
              }`}
            >
              <Layers size={13} className="shrink-0" />
              <span className="hidden sm:inline">Show Both Maps</span>
              <span className="sm:hidden">Both</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("main")}
              className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                viewMode === "main"
                  ? "bg-[#B08355] text-white shadow-sm"
                  : "text-[#4A3421] hover:bg-[#F6EDE4]"
              }`}
            >
              <Star size={13} className="shrink-0" fill={viewMode === "main" ? "currentColor" : "none"} />
              <span className="hidden sm:inline">⭐ Main Branch (Bengaluru)</span>
              <span className="sm:hidden">⭐ Main</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("surat")}
              className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                viewMode === "surat"
                  ? "bg-[#B08355] text-white shadow-sm"
                  : "text-[#4A3421] hover:bg-[#F6EDE4]"
              }`}
            >
              <MapPin size={13} className="shrink-0" />
              <span className="hidden sm:inline">Surat Studio (Gujarat)</span>
              <span className="sm:hidden">Surat</span>
            </button>
          </div>
        </div>
      </div>

      {/* DUAL MAPS GRID (Both maps displayed directly) */}
      {viewMode === "both" && (
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card 1: Main Branch (Bengaluru) */}
          <div className="flex flex-col overflow-hidden rounded-3xl border-2 border-[#B08355] bg-white shadow-md">
            {/* Header info */}
            <div className="border-b border-[#E5D8CB] bg-[#FDF8F3] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-300">
                  <Star size={13} fill="currentColor" />
                  ⭐ MAIN BRANCH (HEADQUARTERS)
                </span>
                <span className="text-[11px] font-bold text-[#B08355] uppercase tracking-wider">
                  Bengaluru, KA
                </span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-[#4A3421]">
                {mainBranch.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#765F4C] leading-relaxed flex items-start gap-2">
                <MapPin size={16} className="text-[#B08355] shrink-0 mt-0.5" />
                <span>{mainBranch.address}</span>
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5D8CB]/70 flex flex-wrap items-center justify-between gap-3 text-xs text-[#765F4C]">
                <span>
                  <strong className="text-[#4A3421]">Hours:</strong> {mainBranch.hours}
                </span>
                <a
                  href={`tel:${mainBranch.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-semibold text-[#B08355] hover:underline flex items-center gap-1"
                >
                  <Phone size={12} />
                  <span>{mainBranch.phone}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-[380px] w-full bg-[#E5D8CB]">
              <iframe
                title="Featurebright south wedding planner Bengaluru Main Branch Google Map"
                src={mainBranch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Pill */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-3 backdrop-blur shadow-md border border-[#E5D8CB] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-serif text-xs font-bold text-[#4A3421] truncate">
                    ⭐ Bengaluru Main Branch
                  </p>
                  <p className="text-[10px] text-[#765F4C] truncate">
                    Basavanagar, Marathahalli, Bengaluru
                  </p>
                </div>
                <a
                  href={mainBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#B08355] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:brightness-110 transition"
                >
                  <Navigation size={12} />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-white border-t border-[#E5D8CB] flex items-center justify-between gap-3">
              <a
                href={mainBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4A3421] py-2.5 px-4 text-xs font-bold text-white shadow-sm hover:bg-[#382618] transition"
              >
                <Navigation size={13} />
                <span>Get Directions (Main Branch)</span>
              </a>
              <a
                href={mainBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] py-2.5 px-4 text-xs font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
              >
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card 2: Surat Studio Branch */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-md">
            {/* Header info */}
            <div className="border-b border-[#E5D8CB] bg-[#FDF8F3] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6EDE4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B08355] border border-[#E5D8CB]">
                  <MapPin size={13} />
                  REGIONAL STUDIO BRANCH
                </span>
                <span className="text-[11px] font-bold text-[#B08355] uppercase tracking-wider">
                  Surat, GJ
                </span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-[#4A3421]">
                {suratBranch.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#765F4C] leading-relaxed flex items-start gap-2">
                <MapPin size={16} className="text-[#B08355] shrink-0 mt-0.5" />
                <span>{suratBranch.address}</span>
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5D8CB]/70 flex flex-wrap items-center justify-between gap-3 text-xs text-[#765F4C]">
                <span>
                  <strong className="text-[#4A3421]">Hours:</strong> {suratBranch.hours}
                </span>
                <a
                  href={`tel:${suratBranch.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-semibold text-[#B08355] hover:underline flex items-center gap-1"
                >
                  <Phone size={12} />
                  <span>{suratBranch.phone}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map for Surat */}
            <div className="relative h-[380px] w-full bg-[#E5D8CB]">
              <iframe
                title="Feature Brights south wedding planner Surat Studio Google Map"
                src={suratBranch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Pill */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-3 backdrop-blur shadow-md border border-[#E5D8CB] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-serif text-xs font-bold text-[#4A3421] truncate">
                    Surat Studio Branch
                  </p>
                  <p className="text-[10px] text-[#765F4C] truncate">
                    Ratna Madhav, Vesu, Surat
                  </p>
                </div>
                <a
                  href={suratBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#B08355] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:brightness-110 transition"
                >
                  <Navigation size={12} />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 bg-white border-t border-[#E5D8CB] flex items-center justify-between gap-3">
              <a
                href={suratBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#B08355] py-2.5 px-4 text-xs font-bold text-white shadow-sm hover:bg-[#966b40] transition"
              >
                <Navigation size={13} />
                <span>Get Directions (Surat Studio)</span>
              </a>
              <a
                href={suratBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] py-2.5 px-4 text-xs font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
              >
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SINGLE BRANCH FOCUSED VIEW (When specifically chosen) */}
      {viewMode !== "both" && (
        <div className="overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-sm">
          {(() => {
            const current = viewMode === "main" ? mainBranch : suratBranch
            return (
              <>
                <div className="border-b border-[#E5D8CB] bg-[#FDF8F3] px-6 py-5 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                        current.isMainBranch
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-[#F6EDE4] text-[#B08355] border border-[#E5D8CB]"
                      }`}
                    >
                      {current.isMainBranch && <Star size={11} fill="currentColor" />}
                      <span>{current.branchTag}</span>
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#4A3421] mt-1">
                      {current.name}
                    </h3>
                    <p className="text-xs text-[#765F4C] mt-0.5 max-w-xl">
                      {current.address}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <a
                      href={current.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#B08355] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:brightness-110 transition"
                    >
                      <Navigation size={14} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                <div className="relative h-[440px] w-full bg-[#E5D8CB]">
                  <iframe
                    key={current.id}
                    title={`${current.name} Google Map`}
                    src={current.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </>
            )
          })()}
        </div>
      )}
    </section>
  )
}
