import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Heart,
  HelpCircle,
  Layers,
  Music2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { ContactForm, Footer, Header } from "@/components/site"
import { getService, services } from "@/data/services"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  return {
    title: service ? `${service.title} | Feature Brights` : "Service | Feature Brights",
    description: service?.shortDesc,
  }
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3)

  const categoryIcon =
    service.category === "wedding" ? (
      <Heart size={14} />
    ) : service.category === "corporate" ? (
      <Briefcase size={14} />
    ) : (
      <Music2 size={14} />
    )

  return (
    <>
      <Header solid />
      <main className="bg-[#FDF8F3] pt-24 lg:pt-28">
        {/* Breadcrumbs Navigation */}
        <div className="border-b border-[#E5D8CB]/80 bg-white/70 backdrop-blur-sm px-5 py-3 lg:px-8">
          <nav aria-label="Breadcrumb" className="mx-auto flex max-w-7xl items-center gap-2 text-xs font-semibold text-[#765F4C]">
            <Link href="/" className="hover:text-[#B08355] transition">Home</Link>
            <ChevronRight size={13} />
            <Link href="/services" className="hover:text-[#B08355] transition">Services</Link>
            <ChevronRight size={13} />
            <Link href={`/services#${service.category}`} className="hover:text-[#B08355] capitalize transition">
              {service.category}
            </Link>
            <ChevronRight size={13} />
            <span className="text-[#4A3421] font-bold truncate">{service.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative h-[62vh] min-h-[480px] overflow-hidden bg-[#2D1F13]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 lg:px-8">
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E5C8A7] backdrop-blur-md">
                {categoryIcon}
                <span>{service.category} discipline</span>
              </span>

              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-white">
                {service.title}
              </h1>

              <p className="mt-3 text-lg font-medium text-[#E5C8A7] max-w-2xl">
                {service.tagline}
              </p>

              {/* Specification Pills */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
                  <Clock size={15} className="text-[#E5C8A7]" />
                  <span>Timeline: {service.timeline}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
                  <Users size={15} className="text-[#E5C8A7]" />
                  <span>Capacity: {service.capacity}</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#B08355]/80 px-4 py-2 backdrop-blur-sm text-white font-bold">
                  <Sparkles size={15} />
                  <span>{service.pricingGuide}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Depth Editorial Breakdown */}
        <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-12 lg:px-8">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08355]">
                The Experience Blueprint
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl">
                How we orchestrate your {service.title.toLowerCase()}
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#4A3421]">
                {service.longDesc}
              </p>
            </div>

            {/* Inclusions & Features */}
            <div className="rounded-3xl border border-[#E5D8CB] bg-white p-8 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#4A3421]">
                What is Included & Managed
              </h3>
              <p className="mt-2 text-sm text-[#765F4C]">
                Turnkey production coverage backed by our senior event producers and verified technical vendors.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#4A3421]">
                    <CheckCircle2 size={18} className="shrink-0 text-[#B08355] mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Production Roadmap */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08355]">
                Production Methodology
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-[#4A3421] sm:text-3xl">
                Step-by-Step Delivery Roadmap
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-[#E5D8CB] bg-white p-6 shadow-2xs"
                  >
                    <span className="font-serif text-2xl font-bold text-[#B08355]">
                      {step.step}
                    </span>
                    <h4 className="mt-3 font-serif text-lg font-bold text-[#4A3421]">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#765F4C]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="rounded-3xl bg-[#F6EDE4] p-8 sm:p-10 border border-[#E5D8CB]">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[#B08355] text-white">
                  <Layers size={20} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#4A3421]">
                    Client Deliverables Package
                  </h3>
                  <p className="text-xs text-[#765F4C]">Tangible assets you receive before and during production</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-[#4A3421]">
                    <span className="size-2 rounded-full bg-[#B08355]" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Gallery for this Service */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#4A3421]">
                Service Visual Archive
              </h3>
              <p className="mt-1 text-sm text-[#765F4C]">
                Real captures of setups, stages, and moments delivered under this discipline.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.galleryImages.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-[#E5D8CB]">
                    <Image
                      src={img}
                      alt={`${service.title} setup ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            <div>
              <div className="flex items-center gap-2">
                <HelpCircle className="text-[#B08355]" size={20} />
                <h3 className="font-serif text-2xl font-bold text-[#4A3421]">
                  Common Questions Regarding {service.title}
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#E5D8CB] bg-white p-6 shadow-2xs"
                  >
                    <h4 className="font-serif text-base font-bold text-[#4A3421]">
                      {faq.question}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#765F4C]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Inquiry Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Quick Inquiry Box */}
              <div className="rounded-3xl border border-[#E5D8CB] bg-white p-6 sm:p-8 shadow-md">
                <span className="inline-block rounded-full bg-[#F6EDE4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B08355]">
                  Instant Booking Request
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-[#4A3421]">
                  Plan {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#765F4C]">
                  Directly consult with our dedicated producer for this service discipline.
                </p>

                <div className="mt-6">
                  <ContactForm prefilledService={service.title} />
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="rounded-3xl bg-[#4A3421] p-6 text-white text-center">
                <Sparkles className="mx-auto text-[#E5C8A7]" size={24} />
                <h4 className="mt-3 font-serif text-lg font-bold">Prefer a direct call?</h4>
                <p className="mt-1 text-xs text-white/70">
                  Speak directly with our senior event producer right now.
                </p>
                <a
                  href="tel:+919773269662"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
                >
                  <PhoneCall size={14} />
                  <span>+91-977-326-9662</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services in Same Category */}
        <section className="border-t border-[#E5D8CB] bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.25em] text-[#B08355]">
                  Related {service.category} Disciplines
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#4A3421]">
                  Explore Companion Services
                </h2>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-[#B08355] hover:text-[#4A3421] transition inline-flex items-center gap-1"
              >
                <span>View all 18 services</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((rel) => (
                <Link
                  href={`/services/${rel.slug}`}
                  key={rel.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E5D8CB] bg-[#FDF8F3] p-4 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#E5D8CB]">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-serif text-lg font-bold text-[#4A3421] group-hover:text-[#B08355] transition">
                        {rel.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#765F4C] line-clamp-2">
                        {rel.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className="p-3 pt-0 flex items-center justify-between text-xs font-bold text-[#B08355]">
                    <span>Explore details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
