import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { Footer, Header, SectionHeading } from "@/components/site"

export const metadata = {
  title: "About Our Studio | Feature Brights",
  description:
    "Meet the producers, designers, and artisans behind Feature Brights. Over 12 years of crafting unforgettable luxury celebrations and enterprise summits.",
}

const milestones = [
  { year: "2014", title: "Studio Founded", desc: "Started as a boutique bespoke wedding styling collective in Mumbai." },
  { year: "2017", title: "Corporate Production Desk", desc: "Expanded into high-octane enterprise launches and national dealer meets." },
  { year: "2020", title: "Virtual & Hybrid Broadcasting", desc: "Built our proprietary 4K streaming studio delivering global hybrid summits." },
  { year: "2023", title: "Pan-Asian Destination Reach", desc: "Successfully orchestrated flagship destination weddings in Bali, Thailand, and Dubai." },
  { year: "2026", title: "500+ Milestone", desc: "Celebrating over 500 iconic gatherings produced with zero compromises on craft." },
]

const leadership = [
  {
    name: "Vikram Singhania",
    role: "Co-Founder & Executive Producer",
    bio: "With 16+ years in theatrical and mega-scale event direction, Vikram oversees master logistics, staging safety, and artist management.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ananya Roy",
    role: "Creative Director & Spatial Designer",
    bio: "A graduate of Central Saint Martins, Ananya transforms blank ballrooms into sensory landscapes through bespoke florals, textures, and lighting.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rohan Varma",
    role: "Head of Technical Production & AV",
    bio: "Sound engineer and concert rigging specialist, Rohan ensures every acoustic decibel and moving laser light operates in clockwork synchronization.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
]

export default function About() {
  return (
    <>
      <Header solid />
      <main className="bg-[#FDF8F3] pb-24 pt-28 lg:pt-36">
        {/* Hero */}
        <section className="px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full bg-[#F6EDE4] px-4 py-1.5 text-xs font-bold uppercase tracking-[.25em] text-[#B08355] border border-[#E5D8CB]">
              Our Heritage & Philosophy
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#4A3421] sm:text-5xl md:text-6xl">
              Thoughtful by Nature.<br />Extraordinary by Design.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#765F4C]">
              We are a close-knit family of producers, spatial architects, floral artists, and hospitality purists. Together, we create gatherings that feel effortless, personal, and unforgettable.
            </p>
          </div>
        </section>

        {/* Story Grid */}
        <section className="mt-20 bg-white px-5 py-24 lg:px-8 border-y border-[#E5D8CB]">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#E5D8CB] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
                alt="Event table setup"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08355]">
                Why We Started
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl">
                Events should feel like human connection, not clockwork panic.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#765F4C]">
                We believe that rigorous operational planning is what actually liberates joy. When the technical cues, safety protocols, and vendor contracts are managed with absolute precision, the hosts and their guests can let go and celebrate wholeheartedly.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#765F4C]">
                We believe that rigorous operational planning is what actually liberates joy. When the technical cues, safety protocols, and vendor contracts are managed with absolute precision, the hosts and their guests can let go and celebrate wholeheartedly.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#FDF8F3] p-5 border border-[#E5D8CB]">
                  <h3 className="font-serif text-lg font-bold text-[#4A3421]">Our Mission</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#765F4C]">
                    To turn life&apos;s defining milestones and strategic business messages into immersive, emotionally resonant experiences.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#FDF8F3] p-5 border border-[#E5D8CB]">
                  <h3 className="font-serif text-lg font-bold text-[#4A3421]">Our Vision</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#765F4C]">
                    To be the most trusted experience production studio across the region, recognized for artistry, empathy, and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Journey"
              title="A Decade of Milestones"
              text="From our humble boutique beginnings to producing world-class gatherings."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-[#E5D8CB] bg-white p-6 shadow-2xs transition hover:-translate-y-1"
                >
                  <span className="font-serif text-2xl font-bold text-[#B08355]">{m.year}</span>
                  <h4 className="mt-3 font-serif text-base font-bold text-[#4A3421]">{m.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#765F4C]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-[#F6EDE4] px-5 py-24 lg:px-8 border-t border-[#E5D8CB]">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Meet the Minds"
              title="Studio Leadership"
              text="The dedicated executive producers and designers who bring your vision into reality."
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {leadership.map((leader, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-xs"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#E5D8CB]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#4A3421]">{leader.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#B08355]">
                      {leader.role}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-[#765F4C]">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-5 pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#2D1F13] p-10 sm:p-14 text-center text-white shadow-xl">
            <Sparkles className="mx-auto text-[#E5C8A7]" size={32} />
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Let&apos;s build your celebration together.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/75">
              Contact our directors for an informal discovery chat about your upcoming dates and ideas.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#B08355] px-8 py-3 text-sm font-bold text-white shadow-md hover:brightness-110 transition"
            >
              Get in Touch with Our Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
