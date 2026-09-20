"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
} from "lucide-react"

export function BrandVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  // Ensure video element is strictly muted by default across all browsers
  const handlePlayToggle = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.muted = isMuted
      videoRef.current.play()
      setIsPlaying(true)
      setHasStarted(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleMuteToggle = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  const cities = [
    { name: "Surat", tag: "Headquarters" },
    { name: "Vadodara", tag: "Full Production" },
    { name: "Ahmedabad", tag: "Statewide Hub" },
    { name: "Rajkot & Saurashtra", tag: "Destination & Venues" },
  ]

  const capabilities = [
    "Venue Booking",
    "Personal Event Planning",
    "Corporate Conferences",
    "Private Parties",
    "Trade Exhibitions",
    "Virtual Event Management",
    "Destination Weddings",
    "Stage Shows & Concerts",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF8F3] via-white to-[#FDF8F3] px-5 py-20 sm:py-28 lg:px-8">
      {/* Subtle background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#E5D8CB]/35 blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl">
        {/* Header Block with user-provided copy */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B08355]/30 bg-[#F6EDE4] px-4 py-1.5 shadow-xs">
            <Sparkles size={14} className="text-[#B08355]" />
            <span className="text-xs font-bold uppercase tracking-[.25em] text-[#B08355]">
              Services by Feature Brights
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-[#4A3421] sm:text-4xl md:text-5xl">
            Event Management
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#765F4C]">
            Feature Brights Event Management is a premier event management company serving the entire state of Gujarat. Based in Surat, we offer comprehensive services including venue booking, personal event planning, corporate conferences, private parties, trade exhibitions, virtual event management, destination weddings, and stage shows. We proudly cover Surat, Vadodara, Ahmedabad, and all other major cities across Gujarat.
          </p>

          {/* City Coverage Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {cities.map((city) => (
              <span
                key={city.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E5D8CB] bg-white px-3.5 py-1 text-xs font-semibold text-[#4A3421] shadow-xs"
              >
                <MapPin size={12} className="text-[#B08355]" />
                <span>{city.name}</span>
                <span className="text-[10px] text-[#B08355]">({city.tag})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Cinematic Video Showcase Player */}
        <div className="relative mt-12 sm:mt-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl sm:rounded-[2rem] border border-[#B08355]/30 bg-[#1A110A] p-2 sm:p-3.5 shadow-[0_25px_60px_rgba(74,52,33,0.22)]">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-[1.6rem] bg-black">
              {/* HTML5 Video Element - Direct CDN Link, Muted by Default */}
              <video
                ref={videoRef}
                src="https://featurebrights.com/wp-content/uploads/2025/04/Future-Brights-Events.mp4"
                playsInline
                preload="metadata"
                muted={isMuted}
                controls={hasStarted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={() => {
                  if (videoRef.current) setIsMuted(videoRef.current.muted)
                }}
                className="h-full w-full object-cover"
              />

              {/* Floating Mute/Unmute Indicator Button */}
              {hasStarted && (
                <button
                  type="button"
                  onClick={handleMuteToggle}
                  className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/20 transition hover:bg-black/90 hover:scale-105 shadow-lg"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX size={14} className="text-[#E5C8A7]" />
                      <span>Sound Off (Click to Unmute)</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={14} className="text-emerald-400" />
                      <span>Sound On</span>
                    </>
                  )}
                </button>
              )}

              {/* Custom Initial Play Overlay */}
              {!hasStarted && (
                <div
                  onClick={handlePlayToggle}
                  className="group absolute inset-0 z-20 flex cursor-pointer flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-black/30 p-6 text-center transition-opacity"
                >
                  {/* Glowing Play Circle */}
                  <div className="relative grid size-20 sm:size-24 place-items-center rounded-full bg-gradient-to-tr from-[#B08355] to-[#D4A574] text-white shadow-[0_0_35px_rgba(176,131,85,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(176,131,85,0.9)]">
                    <span className="pointer-events-none absolute -inset-2 rounded-full border border-[#E5C8A7]/40 animate-ping opacity-60" />
                    <Play className="ml-1 size-8 sm:size-10 fill-current" />
                  </div>

                  <div className="mt-5 text-white">
                    <p className="font-serif text-lg sm:text-2xl font-bold tracking-wide">
                      Watch Feature Brights in Action
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-white/80">
                      Experience our signature production scale, lighting, and stage craftsmanship
                    </p>
                  </div>

                  {/* Badges on overlay */}
                  <div className="mt-4 hidden sm:flex items-center gap-3 text-[11px] font-semibold text-white/75">
                    <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
                      Full HD Production
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
                      Surat • Vadodara • Ahmedabad
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Comprehensive Services Grid Below Video */}
        <div className="mt-12 rounded-3xl border border-[#E5D8CB] bg-[#F6EDE4]/70 p-6 sm:p-8 backdrop-blur-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5D8CB]/80 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#B08355]">
                Full-Service Event Capabilities
              </p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3421] mt-0.5">
                Everything We Manage Across Gujarat
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#B08355] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-[#8C6239]"
              >
                <span>Inquire for Your Date</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/919773269662?text=Hello%20Feature%20Brights!%20I%20would%20like%20to%20inquire%20about%20event%20management%20services%20in%20Gujarat."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366] bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#1B703A] shadow-xs transition hover:bg-[#25D366]/10"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-2xl bg-white p-3.5 text-xs sm:text-sm font-semibold text-[#4A3421] shadow-2xs border border-[#E5D8CB]/60"
              >
                <CheckCircle2 size={16} className="shrink-0 text-[#B08355]" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
