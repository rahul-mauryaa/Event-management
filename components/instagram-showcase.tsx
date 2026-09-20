"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Heart,
  MessageCircle,
  Play,
  Share2,
  Sparkles,
  Video,
  X,
  Volume2,
} from "lucide-react"

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export interface InstagramVideoItem {
  id: string
  title: string
  subtitle: string
  youtubeId: string
  thumb: string
  duration: string
  category: string
  likes: string
  views: string
}

export interface InstagramPhotoItem {
  id: string
  image: string
  caption: string
  likes: string
  comments: string
  category: string
  location: string
}

const instagramVideos: InstagramVideoItem[] = [
  {
    id: "vid-1",
    title: "Transforming Dream Events Into Reality",
    subtitle: "Surat Grand Stage & Luxury Mandap Craftsmanship",
    youtubeId: "b3hw3DtLb6Y",
    thumb: "https://i.ytimg.com/vi/b3hw3DtLb6Y/hqdefault.jpg",
    duration: "0:45",
    category: "Wedding Decor",
    likes: "2.8K",
    views: "24.5K",
  },
  {
    id: "vid-2",
    title: "Royal Gold & Candle Light Wedding Setup",
    subtitle: "Bespoke Evening Stage & Chandelier Atmosphere in Surat",
    youtubeId: "stMAX2WV0Hk",
    thumb: "https://i.ytimg.com/vi/stMAX2WV0Hk/hqdefault.jpg",
    duration: "0:52",
    category: "Royal Setup",
    likes: "3.4K",
    views: "31.2K",
  },
  {
    id: "vid-3",
    title: "Five Mandap Styles & Atmospheric Lighting",
    subtitle: "Traditional South & Contemporary Fusion Mandaps",
    youtubeId: "0HCvxgA7o_8",
    thumb: "https://i.ytimg.com/vi/0HCvxgA7o_8/hqdefault.jpg",
    duration: "0:38",
    category: "Mandap Designs",
    likes: "1.9K",
    views: "18.7K",
  },
  {
    id: "vid-4",
    title: "Grand Bridal Entry Ideas & Floral Canopies",
    subtitle: "Creating Unforgettable Cinematic Entrances",
    youtubeId: "SjDMNYqyWo4",
    thumb: "https://i.ytimg.com/vi/SjDMNYqyWo4/hqdefault.jpg",
    duration: "0:48",
    category: "Bridal Entry",
    likes: "4.1K",
    views: "42.0K",
  },
  {
    id: "vid-5",
    title: "A Divine Beginning | Mahadev Theme Decor",
    subtitle: "Sacred Spiritual Stage & Atmospheric Mist in Surat",
    youtubeId: "ChOFKLL92mk",
    thumb: "https://i.ytimg.com/vi/ChOFKLL92mk/hqdefault.jpg",
    duration: "0:40",
    category: "Theme Decor",
    likes: "3.1K",
    views: "27.8K",
  },
  {
    id: "vid-6",
    title: "The Ultimate Royal Wedding Inspiration",
    subtitle: "Redefining Luxury & Grand Indian Celebrations",
    youtubeId: "HnyCEcceGIA",
    thumb: "https://i.ytimg.com/vi/HnyCEcceGIA/hqdefault.jpg",
    duration: "0:58",
    category: "Luxury Wedding",
    likes: "5.2K",
    views: "53.6K",
  },
]

const instagramPhotos: InstagramPhotoItem[] = [
  {
    id: "photo-1",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    caption: "Traditional South wedding floral canopy with fresh mogra and marigolds ✨ #featurebrights #southwedding #suratwedding",
    likes: "1,248",
    comments: "46",
    category: "South Wedding",
    location: "Vesu, Surat",
  },
  {
    id: "photo-2",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
    caption: "Intimate twilight pheras by the royal poolside pavilion 🌺 #weddingdecor #destinationwedding #gujarat",
    likes: "982",
    comments: "32",
    category: "Outdoor Pavilion",
    location: "Vadodara Resort",
  },
  {
    id: "photo-3",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=85",
    caption: "Grand royal banquet and crystal chandelier ballroom setup for 800+ guests ✨ #luxuryevents #eventplanner",
    likes: "1,410",
    comments: "58",
    category: "Grand Ballroom",
    location: "Ahmedabad",
  },
  {
    id: "photo-4",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=85",
    caption: "Bespoke bridal entry floral pathway with soft golden ambient lanterns 🕯️ #bridalentry #featurebrights15",
    likes: "1,876",
    comments: "84",
    category: "Bridal Entry",
    location: "Surat Palace",
  },
  {
    id: "photo-5",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=85",
    caption: "High-octane concert and Sangeet night stage with synchronized beam arrays 🎶 #sangeetnight #suratevents",
    likes: "2,130",
    comments: "92",
    category: "Sangeet Arena",
    location: "Surat Stadium",
  },
  {
    id: "photo-6",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85",
    caption: "Sacred South Indian kalyanam mandap details with traditional brass lamps 🪔 #tradition #kalyanam",
    likes: "1,530",
    comments: "65",
    category: "Kalyanam",
    location: "Surat Mandir Ground",
  },
]

export function InstagramShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "videos" | "photos">("all")
  const [activeVideo, setActiveVideo] = useState<InstagramVideoItem | null>(null)
  const [activePhoto, setActivePhoto] = useState<InstagramPhotoItem | null>(null)

  const instagramProfileUrl = "https://www.instagram.com/feature_brights15?igsh=dDFsaW9sZWFidXMw"

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 lg:px-8 border-t border-[#E5D8CB]">
      <div className="mx-auto max-w-7xl">
        {/* Top Header Card with Profile Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#E5D8CB]">
          <div className="flex items-start sm:items-center gap-4">
            {/* Instagram Gradient Ring Logo */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] shadow-md shrink-0">
              <div className="size-16 sm:size-20 rounded-full bg-white p-1 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Feature Brights Logo"
                  width={80}
                  height={80}
                  className="size-full object-contain"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3421]">
                  @feature_brights15
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#F6EDE4] px-2.5 py-0.5 text-xs font-bold text-[#B08355]">
                  <Sparkles size={12} />
                  <span>Official Instagram</span>
                </span>
              </div>
              <p className="mt-1 text-sm text-[#765F4C]">
                South wedding events & luxury celebrations in Surat, Gujarat • 240+ Posts
              </p>
              <p className="mt-1 text-xs text-[#B08355] font-semibold">
                Follow for real wedding videos, grand bridal entries & stage decor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#DD2A7B] via-[#8134AF] to-[#515BD4] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:opacity-95 hover:scale-105"
            >
              <InstagramIcon size={17} />
              <span>Follow on Instagram</span>
              <ExternalLink size={13} className="opacity-80" />
            </a>

            <a
              href="https://wa.me/919773269662?text=Hello%20Feature%20Brights!%20I%20saw%20your%20Instagram%20videos%20and%20would%20like%20to%20inquire%20about%20event%20planning."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366] bg-[#25D366]/10 px-5 py-3 text-xs sm:text-sm font-bold text-[#1B703A] transition hover:bg-[#25D366]/20"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Tab Filter Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 rounded-2xl bg-[#F6EDE4] p-1.5 border border-[#E5D8CB]">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
                activeTab === "all"
                  ? "bg-[#4A3421] text-white shadow-sm"
                  : "text-[#765F4C] hover:text-[#4A3421]"
              }`}
            >
              All Media ({instagramVideos.length + instagramPhotos.length})
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
                activeTab === "videos"
                  ? "bg-[#4A3421] text-white shadow-sm"
                  : "text-[#765F4C] hover:text-[#4A3421]"
              }`}
            >
              <Video size={15} />
              <span>Reels & Videos ({instagramVideos.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
                activeTab === "photos"
                  ? "bg-[#4A3421] text-white shadow-sm"
                  : "text-[#765F4C] hover:text-[#4A3421]"
              }`}
            >
              <InstagramIcon size={15} />
              <span>Instagram Photos ({instagramPhotos.length})</span>
            </button>
          </div>

          <p className="text-xs font-semibold text-[#765F4C]">
            Click any video or photo to preview
          </p>
        </div>

        {/* Media Grid */}
        <div className="mt-10">
          {/* Videos Section */}
          {(activeTab === "all" || activeTab === "videos") && (
            <div className="mb-14">
              {activeTab === "all" && (
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video size={18} className="text-[#B08355]" />
                    <h3 className="font-serif text-xl font-bold text-[#4A3421]">
                      Featured Reels & Event Videos
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-[#B08355]">
                    Tap to play video
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#1A110A] border border-[#E5D8CB] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[9/14] w-full overflow-hidden bg-black">
                      <Image
                        src={video.thumb}
                        alt={video.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                      {/* Video Category Badge */}
                      <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20">
                        {video.category}
                      </div>

                      {/* Instagram Reel Icon Tag */}
                      <div className="absolute top-4 right-4 grid size-8 place-items-center rounded-full bg-gradient-to-tr from-[#F58529] to-[#DD2A7B] text-white shadow-sm">
                        <InstagramIcon size={16} />
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="grid size-14 sm:size-16 place-items-center rounded-full bg-white/90 text-[#4A3421] shadow-xl backdrop-blur-xs transition-transform group-hover:scale-110 group-hover:bg-[#B08355] group-hover:text-white">
                          <Play className="ml-1 size-6 sm:size-7 fill-current" />
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-serif text-base sm:text-lg font-bold leading-snug line-clamp-2">
                          {video.title}
                        </p>
                        <p className="mt-1 text-xs text-white/75 line-clamp-1">
                          {video.subtitle}
                        </p>

                        <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2.5 text-[11px] font-medium text-white/80">
                          <span className="flex items-center gap-1">
                            <Heart size={13} className="text-red-400 fill-red-400" />
                            {video.likes}
                          </span>
                          <span>{video.views} views</span>
                          <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px]">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photos Section */}
          {(activeTab === "all" || activeTab === "photos") && (
            <div>
              {activeTab === "all" && (
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <InstagramIcon size={18} className="text-[#DD2A7B]" />
                    <h3 className="font-serif text-xl font-bold text-[#4A3421]">
                      Recent Instagram Photo Moments
                    </h3>
                  </div>
                  <a
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#B08355] hover:text-[#4A3421] transition"
                  >
                    View all 240+ on Instagram →
                  </a>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {instagramPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo)}
                    className="group relative cursor-pointer aspect-square overflow-hidden rounded-2xl bg-[#F6EDE4] border border-[#E5D8CB] shadow-xs transition hover:shadow-md"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay with Instagram details */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 backdrop-blur-2xs transition-opacity duration-300 group-hover:opacity-100 p-2 text-center text-white">
                      <InstagramIcon size={22} className="text-white mb-2" />
                      <div className="flex items-center gap-3 text-xs font-bold">
                        <span className="flex items-center gap-1">
                          <Heart size={13} className="fill-white" />
                          {photo.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle size={13} className="fill-white" />
                          {photo.comments}
                        </span>
                      </div>
                      <span className="mt-2 text-[10px] text-white/80 line-clamp-1">
                        {photo.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-3xl bg-[#170E08] border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 grid size-9 place-items-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-[#B08355]"
                aria-label="Close video"
              >
                <X size={18} />
              </button>

              {/* Responsive Video Embed */}
              <div className="relative aspect-[9/16] w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              {/* Modal Footer with Actions */}
              <div className="p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#E5C8A7]">
                  {activeVideo.category} • Feature Brights
                </p>
                <h4 className="mt-1 font-serif text-lg font-bold leading-snug">
                  {activeVideo.title}
                </h4>
                <p className="mt-1 text-xs text-white/70">
                  {activeVideo.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                  <a
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#DD2A7B] px-4 py-2 text-xs font-bold text-white hover:opacity-90 transition"
                  >
                    <InstagramIcon size={14} />
                    <span>View on Instagram</span>
                  </a>

                  <a
                    href={`https://wa.me/919773269662?text=Hello!%20I%20saw%20this%20video%20on%20your%20website:%20${encodeURIComponent(activeVideo.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white hover:opacity-90 transition"
                  >
                    <MessageCircle size={14} />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photo Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white border border-[#E5D8CB] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-[#B08355]"
                aria-label="Close photo"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-square w-full bg-black">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between border-b border-[#E5D8CB] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 place-items-center rounded-full bg-gradient-to-tr from-[#F58529] to-[#DD2A7B] text-white">
                      <InstagramIcon size={14} />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#4A3421]">@feature_brights15</p>
                      <p className="text-[10px] text-[#765F4C]">{activePhoto.location}</p>
                    </div>
                  </div>

                  <a
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#DD2A7B] px-3.5 py-1.5 text-xs font-bold text-white transition hover:opacity-90"
                  >
                    View Post
                  </a>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#4A3421]">
                  {activePhoto.caption}
                </p>

                <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-[#765F4C]">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-red-500 fill-red-500" />
                    {activePhoto.likes} likes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {activePhoto.comments} comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
