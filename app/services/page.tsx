import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Heart,
  Music2,
  PhoneCall,
  Sparkles,
} from "lucide-react"
import { Footer, Header, SectionHeading, ServiceGrid } from "@/components/site"
import { categoryDescriptions, servicePromises, services } from "@/data/services"

export const metadata = {
  title: "All 18 Event Services | Feature Brights",
  description:
    "Explore our complete directory of 18 specialized services spanning luxury weddings, enterprise corporate events, and live concert entertainment.",
}

export default function ServicesPage() {
  return (
    <>
      <Header solid />
      <main className="bg-[#FDF8F3] pb-24 pt-28 lg:pt-36">
        {/* Page Hero */}
        <section className="px-5 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
            <div>
              <span className="inline-block rounded-full bg-[#F6EDE4] px-4 py-1.5 text-xs font-bold uppercase tracking-[.25em] text-[#B08355] border border-[#E5D8CB]">
                Complete Services Directory
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.06] text-[#4A3421] sm:text-5xl md:text-6xl">
                The right expertise for every landmark celebration.
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#765F4C]">
                Whether you are organizing an annual leadership summit, bringing a celebrity performer to a packed arena, or designing an intimate sunset wedding, our 18 specialized service teams ensure every single cue is hit with absolute perfection.
              </p>

              {/* Quick Jump Pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#wedding"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5D8CB] bg-white px-5 py-2.5 text-xs font-bold text-[#4A3421] shadow-2xs hover:bg-[#F6EDE4] transition"
                >
                  <Heart size={14} className="text-[#B08355]" />
                  <span>Weddings (6)</span>
                </a>
                <a
                  href="#corporate"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5D8CB] bg-white px-5 py-2.5 text-xs font-bold text-[#4A3421] shadow-2xs hover:bg-[#F6EDE4] transition"
                >
                  <Briefcase size={14} className="text-[#B08355]" />
                  <span>Corporate (6)</span>
                </a>
                <a
                  href="#entertainment"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5D8CB] bg-white px-5 py-2.5 text-xs font-bold text-[#4A3421] shadow-2xs hover:bg-[#F6EDE4] transition"
                >
                  <Music2 size={14} className="text-[#B08355]" />
                  <span>Entertainment (6)</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#4A3421]">
                <span className="flex items-center gap-2">
                  <Check className="text-[#B08355]" size={16} />
                  12+ Years Industry Experience
                </span>
                <span className="flex items-center gap-2">
                  <Check className="text-[#B08355]" size={16} />
                  One Dedicated Lead Producer
                </span>
                <span className="flex items-center gap-2">
                  <Check className="text-[#B08355]" size={16} />
                  100% In-House Technical Staging
                </span>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#E5D8CB] shadow-[0_20px_60px_rgba(74,52,33,0.15)]">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85"
                alt="Grand banquet ballroom styled by Elegance Events"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur shadow-md">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B08355]">
                  Our Studio Guarantee
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-[#4A3421]">
                  You host with pride. We handle the production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Services Showcase Grid */}
        <section id="services-grid" className="mt-28 scroll-mt-24 px-5 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Explore All 18 Disciplines"
              title="Curated Event Services"
              text="Filter by category or search below to explore detailed deliverables, timelines, and package inclusions for your exact event type."
            />
            <div className="mt-14">
              <ServiceGrid />
            </div>
          </div>
        </section>

        {/* Category Deep Dives */}
        <section className="mt-28 space-y-24 px-5 lg:px-8">
          {/* Weddings Category Deep Dive */}
          <div id="wedding" className="scroll-mt-28 mx-auto max-w-7xl rounded-3xl bg-white p-8 sm:p-12 border border-[#E5D8CB] shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F6EDE4] px-3.5 py-1 text-xs font-bold uppercase text-[#B08355]">
                  <Heart size={14} />
                  Category 01
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl">
                  {categoryDescriptions.wedding.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#B08355]">
                  {categoryDescriptions.wedding.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#765F4C]">
                  {categoryDescriptions.wedding.description}
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {categoryDescriptions.wedding.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#4A3421]">
                      <CheckCircle2 size={16} className="text-[#B08355] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {services
                    .filter((s) => s.category === "wedding")
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full bg-[#FDF8F3] border border-[#E5D8CB] px-3.5 py-1.5 text-xs font-bold text-[#4A3421] hover:bg-[#B08355] hover:text-white transition"
                      >
                        {s.title} →
                      </Link>
                    ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
                  alt="Wedding planning"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Corporate Category Deep Dive */}
          <div id="corporate" className="scroll-mt-28 mx-auto max-w-7xl rounded-3xl bg-white p-8 sm:p-12 border border-[#E5D8CB] shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F6EDE4] px-3.5 py-1 text-xs font-bold uppercase text-[#B08355]">
                  <Briefcase size={14} />
                  Category 02
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl">
                  {categoryDescriptions.corporate.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#B08355]">
                  {categoryDescriptions.corporate.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#765F4C]">
                  {categoryDescriptions.corporate.description}
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {categoryDescriptions.corporate.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#4A3421]">
                      <CheckCircle2 size={16} className="text-[#B08355] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {services
                    .filter((s) => s.category === "corporate")
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full bg-[#FDF8F3] border border-[#E5D8CB] px-3.5 py-1.5 text-xs font-bold text-[#4A3421] hover:bg-[#B08355] hover:text-white transition"
                      >
                        {s.title} →
                      </Link>
                    ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85"
                  alt="Corporate launch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entertainment Category Deep Dive */}
          <div id="entertainment" className="scroll-mt-28 mx-auto max-w-7xl rounded-3xl bg-white p-8 sm:p-12 border border-[#E5D8CB] shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#F6EDE4] px-3.5 py-1 text-xs font-bold uppercase text-[#B08355]">
                  <Music2 size={14} />
                  Category 03
                </span>
                <h2 className="mt-3 font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl">
                  {categoryDescriptions.entertainment.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#B08355]">
                  {categoryDescriptions.entertainment.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#765F4C]">
                  {categoryDescriptions.entertainment.description}
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {categoryDescriptions.entertainment.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#4A3421]">
                      <CheckCircle2 size={16} className="text-[#B08355] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {services
                    .filter((s) => s.category === "entertainment")
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="rounded-full bg-[#FDF8F3] border border-[#E5D8CB] px-3.5 py-1.5 text-xs font-bold text-[#4A3421] hover:bg-[#B08355] hover:text-white transition"
                      >
                        {s.title} →
                      </Link>
                    ))}
                </div>
              </div>
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=85"
                  alt="Live concert entertainment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The 4-Step Production Process */}
        <section className="mt-28 border-y border-[#E5D8CB] bg-[#F6EDE4] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[.28em] text-[#B08355]">
                  Our Production Formula
                </p>
                <h2 className="font-serif text-3xl font-bold leading-tight text-[#4A3421] sm:text-4xl md:text-5xl">
                  Thoughtfully Designed.<br />Calmly Delivered.
                </h2>
              </div>
              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-[#765F4C]">
                The most remarkable events feel effortless because the production behind them is so rigorous. We bring engineering discipline to creativity, ensuring you never have to worry about a detail.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {servicePromises.map((promise) => (
                <article
                  key={promise.number}
                  className="rounded-3xl bg-white p-8 shadow-xs border border-[#E5D8CB]/80"
                >
                  <span className="font-serif text-4xl font-bold text-[#B08355]">
                    {promise.number}
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-bold text-[#4A3421]">
                    {promise.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#765F4C]">
                    {promise.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Banner */}
        <section className="px-5 pt-28 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#2D1F13] px-8 py-16 text-center text-white md:px-16 shadow-xl">
            <Sparkles className="mx-auto text-[#E5C8A7]" size={32} />
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Need a tailored proposal for your event?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-white/75">
              Tell us your target dates, estimated guest count, and goals. We will assemble a customized production blueprint and line-item budget estimate.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#B08355] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:brightness-110 transition"
              >
                Request Custom Proposal
              </Link>
              <a
                href="tel:+919773269662"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-[#4A3421] transition"
              >
                <PhoneCall size={16} />
                <span>Call +91-977-326-9662</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
