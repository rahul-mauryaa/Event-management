import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Footer, Gallery, Header, SectionHeading } from "@/components/site"
import { InstagramShowcase } from "@/components/instagram-showcase"

export const metadata = {
  title: "Event Gallery & Visual Portfolio | Feature Brights",
  description:
    "Explore our visual archive of luxury wedding celebrations, corporate keynote reveals, and live concert spectacles orchestrated across Surat and Gujarat.",
}

export default function GalleryPage() {
  return (
    <>
      <Header solid />
      <main className="bg-[#FDF8F3] px-5 pb-24 pt-28 lg:pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <SectionHeading
            eyebrow="Visual Portfolio"
            title="Moments Worth Remembering"
            text="A curated visual retrospective of recent weddings, arena concerts, and corporate summits. Tap any photo to open in high resolution."
          />

          {/* Interactive Lightbox Gallery */}
          <div className="mt-14">
            <Gallery />
          </div>

          {/* Official Instagram Reels and Photos Showcase */}
          <div className="mt-20">
            <InstagramShowcase />
          </div>

          {/* Bottom Banner */}
          <div className="mt-24 rounded-3xl bg-[#2D1F13] p-10 sm:p-16 text-center text-white shadow-xl">
            <Sparkles className="mx-auto text-[#E5C8A7]" size={28} />
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Inspired by what you see?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/75 leading-relaxed">
              Every photograph began as an initial conversation. Share your ideas with our production studio, and let us shape your defining celebration.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#B08355] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:brightness-110 transition"
              >
                Inquire for Your Event
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-[#4A3421] transition"
              >
                Explore All 18 Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
