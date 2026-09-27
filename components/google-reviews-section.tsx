"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Layers,
  MapPin,
  MessageSquarePlus,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  ZoomIn,
} from "lucide-react"
import { branchLocations, googlePlaceInfo, realReviews, type GoogleReview } from "@/data/reviews"

function GoogleReviewCard({
  rev,
  isExpanded,
  onToggleExpand,
  onPhotoClick,
}: {
  rev: GoogleReview
  isExpanded: boolean
  onToggleExpand: () => void
  onPhotoClick?: (photoUrl: string, caption: string) => void
}) {
  const hasPhotos = rev.photos && rev.photos.length > 0
  const isLong = rev.text.length > 130
  const displayText = !isLong || isExpanded ? rev.text : `${rev.text.slice(0, 125)}...`

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-[#E5D8CB] bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(74,52,33,0.06)] hover:shadow-md transition duration-300">
      <div>
        {/* Top Header: Avatar + Author + Date + Standalone Google G */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {rev.avatarUrl ? (
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-[#E5D8CB] shadow-xs">
                <Image
                  src={rev.avatarUrl}
                  alt={rev.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className={`grid size-12 place-items-center rounded-full text-base font-bold text-white shadow-xs shrink-0 ${rev.avatarBg}`}
              >
                {rev.avatarLetter}
              </div>
            )}
            <div className="min-w-0">
              <h4 className="font-serif text-base font-bold text-[#2D1F13] truncate">
                {rev.author}
              </h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5">{rev.date}</p>
            </div>
          </div>

          {/* Standalone Google G Icon */}
          <div className="shrink-0 pt-0.5" title="Google Verified Review">
            <svg className="size-6" viewBox="0 0 24 24">
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
        </div>

        {/* Rating row: 5 Stars + Blue Verified Checkmark Badge */}
        <div className="mt-3.5 flex items-center gap-1.5">
          <div className="flex text-[#FBBC05]">
            {Array.from({ length: rev.rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          {/* Blue Verified Badge - matching user's reference image */}
          <span title="Verified Google Reviewer" className="inline-flex items-center ml-1">
            <svg className="size-4.5 text-[#1A73E8] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
            </svg>
          </span>

          <span className="ml-auto rounded-full bg-[#F6EDE4] px-2.5 py-0.5 text-[9px] font-bold text-[#B08355] truncate max-w-[140px]">
            {rev.event.split(",")[0]}
          </span>
        </div>

        {/* Content Area: Review Text (left) + Customer Event Photo (right) */}
        <div className="mt-3.5 flex items-start gap-3.5">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm leading-relaxed text-[#4A3421]/90">
              {displayText}
            </p>
            {isLong && (
              <button
                type="button"
                onClick={onToggleExpand}
                className="mt-2 text-xs font-semibold text-[#6B7280] hover:text-[#1A73E8] underline block cursor-pointer transition-colors"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>

          {/* Customer Uploaded Photo Thumbnail with Stacked Card Effect */}
          {hasPhotos && rev.photos && (
            <div className="relative shrink-0 pt-1">
              <div className="absolute -left-1.5 top-2.5 size-20 sm:size-22 rounded-2xl border border-[#E5D8CB] bg-[#F6EDE4] -z-10 rotate-[-4deg]" />
              <button
                type="button"
                onClick={() => onPhotoClick?.(rev.photos![0], `${rev.author} • ${rev.event}`)}
                className="group relative size-20 sm:size-22 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md bg-white cursor-pointer active:scale-95 transition"
                title="Click to view event photo"
              >
                <Image
                  src={rev.photos[0]}
                  alt={`${rev.author} event setup`}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Footnote */}
      <div className="mt-4 pt-3 border-t border-[#E5D8CB]/50 flex items-center justify-between text-[11px] text-[#765F4C]">
        <span className="flex items-center gap-1">
          <ShieldCheck size={12} className="text-emerald-600" />
          <span>Verified Client Review</span>
        </span>
        <a
          href={googlePlaceInfo.googleSearchReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#B08355] hover:underline"
        >
          View on Google →
        </a>
      </div>
    </div>
  )
}

export function GoogleReviewsSection() {
  const [filter, setFilter] = useState<"all" | "wedding" | "decor" | "corporate">("all")
  const [activeBranchKey, setActiveBranchKey] = useState<"both" | "main" | "surat">("both")
  const [mobileIndex, setMobileIndex] = useState(0)
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set())
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption: string } | null>(null)

  const mainBranch = branchLocations.main
  const suratBranch = branchLocations.surat

  const filteredReviews =
    filter === "all" ? realReviews : realReviews.filter((r) => r.category === filter)

  // Auto-scroll review every 4.2 seconds
  useEffect(() => {
    if (
      !isAutoPlay ||
      isPaused ||
      selectedPhoto !== null ||
      expandedReviews.size > 0 ||
      filteredReviews.length <= 1
    ) {
      return
    }

    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1))
      setDesktopIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1))
    }, 4200)

    return () => clearInterval(interval)
  }, [isAutoPlay, isPaused, selectedPhoto, expandedReviews.size, filteredReviews.length])

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1))
    setDesktopIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setMobileIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1))
    setDesktopIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1))
  }

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter)
    setMobileIndex(0)
    setDesktopIndex(0)
  }

  const getVisibleDesktopReviews = () => {
    if (filteredReviews.length <= 3) return filteredReviews
    const result = []
    for (let i = 0; i < 3; i++) {
      const idx = (desktopIndex + i) % filteredReviews.length
      result.push(filteredReviews[idx])
    }
    return result
  }

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
            Verified experiences from couples, families, and companies who entrusted their memorable events to Feature Brights south wedding planner across our Bengaluru Main Branch and Surat Studio.
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
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3421]">
                    {googlePlaceInfo.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-200">
                    <Star size={12} fill="currentColor" />
                    ⭐ Main Branch: Bengaluru
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                    <ShieldCheck size={13} />
                    Verified Google Place
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

                <p className="mt-1 text-xs text-[#765F4C] flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="flex items-center gap-1 font-semibold text-[#4A3421]">
                    <MapPin size={13} className="text-[#B08355] shrink-0" />
                    ⭐ Main Branch: Basavanagar, Marathahalli, Bengaluru
                  </span>
                  <span className="text-[#B08355]">•</span>
                  <span>Regional Studio: Vesu, Surat</span>
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
              onClick={() => handleFilterChange(tab.id as typeof filter)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                filter === tab.id
                  ? "bg-[#4A3421] text-white shadow-sm"
                  : "bg-white text-[#765F4C] border border-[#E5D8CB] hover:bg-[#F6EDE4]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile Reviews Carousel (< md) - Auto-scrolling, touch-friendly, matching reference screenshot */}
        <div
          className="mt-8 md:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              {filteredReviews[mobileIndex] && (
                <motion.div
                  key={filteredReviews[mobileIndex].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) handleNext()
                    else if (info.offset.x > 40) handlePrev()
                  }}
                >
                  <GoogleReviewCard
                    rev={filteredReviews[mobileIndex]}
                    isExpanded={expandedReviews.has(filteredReviews[mobileIndex].id)}
                    onToggleExpand={() => toggleExpand(filteredReviews[mobileIndex].id)}
                    onPhotoClick={(url, caption) => setSelectedPhoto({ url, caption })}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Centered Mobile Carousel Controls (< & >) */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className="size-12 rounded-full bg-white shadow-md border border-[#E5D8CB] flex items-center justify-center text-[#4A3421] active:scale-90 transition hover:bg-[#F6EDE4] cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Progress counter pill */}
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5D8CB] shadow-xs">
                <span className="text-xs font-bold text-[#4A3421]">
                  {mobileIndex + 1}
                </span>
                <span className="text-xs text-[#9CA3AF]">/</span>
                <span className="text-xs font-medium text-[#765F4C]">
                  {filteredReviews.length}
                </span>
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="size-12 rounded-full bg-white shadow-md border border-[#E5D8CB] flex items-center justify-center text-[#4A3421] active:scale-90 transition hover:bg-[#F6EDE4] cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-1.5">
              {filteredReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setMobileIndex(idx)
                    setDesktopIndex(idx)
                  }}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    mobileIndex === idx ? "w-6 bg-[#B08355]" : "w-1.5 bg-[#E5D8CB]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Reviews Auto-Scroll Carousel (>= md) */}
        <div
          className="mt-8 hidden md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleDesktopReviews().map((rev) => (
              <GoogleReviewCard
                key={rev.id}
                rev={rev}
                isExpanded={expandedReviews.has(rev.id)}
                onToggleExpand={() => toggleExpand(rev.id)}
                onPhotoClick={(url, caption) => setSelectedPhoto({ url, caption })}
              />
            ))}
          </div>

          {/* Desktop Carousel Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-[#E5D8CB]/60 pt-4">
            <span className="text-xs font-medium text-[#765F4C]">
              Showing {desktopIndex + 1}–{Math.min(desktopIndex + 3, filteredReviews.length)} of {filteredReviews.length} verified reviews
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="size-10 rounded-full bg-white shadow-sm border border-[#E5D8CB] flex items-center justify-center text-[#4A3421] active:scale-95 transition hover:bg-[#F6EDE4] cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next reviews"
                className="size-10 rounded-full bg-white shadow-sm border border-[#E5D8CB] flex items-center justify-center text-[#4A3421] active:scale-95 transition hover:bg-[#F6EDE4] cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* "This Place" Showcase / Studio Location Card */}
        <div className="mt-14 space-y-8">
          {/* Header & Mode Switcher */}
          <div className="overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F6EDE4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B08355]">
                  <MapPin size={13} />
                  <span>Verified Studio & Branch Locations</span>
                </div>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#4A3421]">
                  Visit Our Main Branch & Surat Studio
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#765F4C]">
                  Meet our lead planners, explore physical decor portfolios, and discuss your event blueprint in person at our Bengaluru Main Branch or Surat Studio.
                </p>
              </div>

              {/* View Switcher */}
              <div className="w-full sm:w-auto grid grid-cols-3 sm:flex sm:items-center gap-1 sm:gap-2 bg-[#F6EDE4]/80 p-1.5 rounded-2xl border border-[#E5D8CB] shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveBranchKey("both")}
                  className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeBranchKey === "both"
                      ? "bg-[#4A3421] text-white shadow-sm"
                      : "text-[#4A3421] hover:bg-white/60"
                  }`}
                >
                  <Layers size={13} className="shrink-0" />
                  <span className="hidden sm:inline">Show Both Maps</span>
                  <span className="sm:hidden">Both</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveBranchKey("main")}
                  className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeBranchKey === "main"
                      ? "bg-[#B08355] text-white shadow-sm"
                      : "text-[#4A3421] hover:bg-white/60"
                  }`}
                >
                  <Star size={13} className="shrink-0" fill={activeBranchKey === "main" ? "currentColor" : "none"} />
                  <span className="hidden sm:inline">⭐ Main Branch</span>
                  <span className="sm:hidden">⭐ Main</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveBranchKey("surat")}
                  className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeBranchKey === "surat"
                      ? "bg-[#B08355] text-white shadow-sm"
                      : "text-[#4A3421] hover:bg-white/60"
                  }`}
                >
                  <MapPin size={13} className="shrink-0" />
                  <span className="hidden sm:inline">Surat Studio</span>
                  <span className="sm:hidden">Surat</span>
                </button>
              </div>
            </div>
          </div>

          {/* DUAL MAPS DISPLAY (Both maps displayed directly) */}
          {activeBranchKey === "both" && (
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Main Branch (Bengaluru) */}
              <div className="flex flex-col overflow-hidden rounded-3xl border-2 border-[#B08355] bg-white shadow-md">
                <div className="border-b border-[#E5D8CB] bg-[#FDF8F3] p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300">
                      <Star size={11} fill="currentColor" />
                      ⭐ MAIN BRANCH (HQ)
                    </span>
                    <span className="text-[11px] font-bold text-[#B08355] uppercase tracking-wider">
                      Bengaluru
                    </span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl font-bold text-[#4A3421]">
                    {mainBranch.name}
                  </h4>
                  <p className="mt-2 text-xs text-[#765F4C] flex items-start gap-1.5 leading-relaxed">
                    <MapPin size={14} className="text-[#B08355] shrink-0 mt-0.5" />
                    <span>{mainBranch.address}</span>
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[#E5D8CB]/60 flex items-center justify-between text-xs text-[#765F4C]">
                    <span>{mainBranch.hours}</span>
                    <a href={`tel:${mainBranch.phone.replace(/[^0-9+]/g, "")}`} className="font-semibold text-[#B08355] hover:underline">
                      {mainBranch.phone}
                    </a>
                  </div>
                </div>

                <div className="relative h-[340px] w-full bg-[#E5D8CB]">
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
                </div>

                <div className="p-4 bg-white border-t border-[#E5D8CB] flex items-center gap-3">
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
                    <span>Open Map</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Surat Studio Branch */}
              <div className="flex flex-col overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-md">
                <div className="border-b border-[#E5D8CB] bg-[#FDF8F3] p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F6EDE4] px-2.5 py-0.5 text-[10px] font-bold text-[#B08355] border border-[#E5D8CB]">
                      <MapPin size={11} />
                      REGIONAL STUDIO BRANCH
                    </span>
                    <span className="text-[11px] font-bold text-[#B08355] uppercase tracking-wider">
                      Surat, Gujarat
                    </span>
                  </div>
                  <h4 className="mt-2 font-serif text-xl font-bold text-[#4A3421]">
                    {suratBranch.name}
                  </h4>
                  <p className="mt-2 text-xs text-[#765F4C] flex items-start gap-1.5 leading-relaxed">
                    <MapPin size={14} className="text-[#B08355] shrink-0 mt-0.5" />
                    <span>{suratBranch.address}</span>
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-[#E5D8CB]/60 flex items-center justify-between text-xs text-[#765F4C]">
                    <span>{suratBranch.hours}</span>
                    <a href={`tel:${suratBranch.phone.replace(/[^0-9+]/g, "")}`} className="font-semibold text-[#B08355] hover:underline">
                      {suratBranch.phone}
                    </a>
                  </div>
                </div>

                <div className="relative h-[340px] w-full bg-[#E5D8CB]">
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
                </div>

                <div className="p-4 bg-white border-t border-[#E5D8CB] flex items-center gap-3">
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
                    <span>Open Map</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* SINGLE BRANCH FOCUSED VIEW */}
          {activeBranchKey !== "both" && (
            <div className="overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-md">
              {(() => {
                const current = activeBranchKey === "main" ? mainBranch : suratBranch
                return (
                  <div className="grid gap-0 lg:grid-cols-12">
                    <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-white to-[#FDF8F3]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <div
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                              current.isMainBranch
                                ? "bg-amber-100 text-amber-900 border border-amber-300"
                                : "bg-[#F6EDE4] text-[#B08355] border border-[#E5D8CB]"
                            }`}
                          >
                            {current.isMainBranch ? <Star size={13} fill="currentColor" /> : <MapPin size={13} />}
                            <span>{current.branchTag}</span>
                          </div>
                        </div>

                        <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#4A3421]">
                          {current.isMainBranch ? "Bengaluru Main Branch" : "Surat Studio Branch"}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#765F4C]">
                          {current.isMainBranch
                            ? "Our primary flagship headquarters in Basavanagar, Marathahalli, Bengaluru. Meet our senior directors and spatial designers for full South Indian wedding curation and luxury events."
                            : "Meet our lead planners, explore physical decor portfolios, and discuss your event blueprint in person at our Surat studio."}
                        </p>

                        <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#4A3421]">
                          <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-[#E5D8CB]">
                            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#F6EDE4] text-[#B08355]">
                              <MapPin size={16} />
                            </span>
                            <div>
                              <p className="font-bold">{current.isMainBranch ? "Main Branch Address" : "Studio Address"}</p>
                              <p className="text-xs text-[#765F4C] mt-0.5 leading-relaxed">{current.address}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-[#E5D8CB]">
                            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#F6EDE4] text-[#B08355]">
                              <Phone size={16} />
                            </span>
                            <div>
                              <p className="font-bold">Direct Phone</p>
                              <a href={`tel:${current.phone.replace(/[^0-9+]/g, "")}`} className="text-xs text-[#B08355] font-semibold hover:underline mt-0.5 block">
                                {current.phone}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 border border-[#E5D8CB]">
                            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#F6EDE4] text-[#B08355]">
                              <Clock size={16} />
                            </span>
                            <div>
                              <p className="font-bold">Opening Hours</p>
                              <p className="text-xs text-[#765F4C] mt-0.5">{current.hours}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <a
                          href={current.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#B08355] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#966b40] transition"
                        >
                          <Navigation size={14} />
                          <span>Get Directions</span>
                        </a>
                        <a
                          href={current.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#E5D8CB] bg-white px-5 py-3 text-xs font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
                        >
                          <ExternalLink size={13} className="text-[#B08355]" />
                          <span>Open in Google Maps</span>
                        </a>
                      </div>
                    </div>

                    <div className="relative min-h-[380px] lg:min-h-full lg:col-span-7 bg-[#E5D8CB]">
                      <iframe
                        key={current.id}
                        title={`${current.name} ${current.branchTag} Google Place Location`}
                        src={current.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "400px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                )
              })()}
            </div>
          )}
        </div>

        {/* Customer Review Photo Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full overflow-hidden rounded-3xl bg-white p-4 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X size={18} />
                </button>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={selectedPhoto.url}
                    alt={selectedPhoto.caption}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 text-center text-xs sm:text-sm font-semibold text-[#4A3421]">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
