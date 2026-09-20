import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Lightbulb,
  Music2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react"
import {
  FaqAccordion,
  Footer,
  Gallery,
  Header,
  Hero,
  InteractiveEventEstimator,
  SectionHeading,
  ServiceGrid,
  Testimonials,
} from "@/components/site"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { homeFaqs } from "@/data/faqs"
import { services } from "@/data/services"

export const metadata = {
  title: "Feature Brights | South Wedding Planner & Event Management Studio",
  description:
    "Award-winning event production studio crafting unforgettable weddings, enterprise product launches, conferences, and arena concerts with bespoke perfection.",
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Cinematic Hero */}
        <Hero />

        {/* Introduction & Highlights Bar */}
        <section className="border-b border-[#E5D8CB] bg-[#F6EDE4] px-5 py-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 text-xs sm:text-sm font-semibold text-[#4A3421]">
            <div className="flex items-center gap-2">
              <Award className="text-[#B08355]" size={18} />
              <span>Certified Luxury Event Producers</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#B08355]" size={18} />
              <span>18 Tailored Service Disciplines</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-[#B08355]" size={18} />
              <span>99.8% On-Time Cue Precision</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#B08355]" size={18} />
              <span>100% Guaranteed Confidentiality</span>
            </div>
          </div>
        </section>

        {/* Interactive Services Section */}
        <section id="services" className="bg-[#FDF8F3] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What We Orchestrate"
              title="Tailored Services for Every Scale"
              text="From intimate ring ceremonies to stadium-filling musical concerts and enterprise product launches, explore our 18 specialized event disciplines."
            />
            <div className="mt-14">
              <ServiceGrid />
            </div>
          </div>
        </section>

        {/* Interactive Event Estimator & Configurator */}
        <section className="bg-gradient-to-b from-[#FDF8F3] to-[#F6EDE4] px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <InteractiveEventEstimator />
          </div>
        </section>

        {/* About Us Feature Section */}
        <section className="bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury wedding celebration orchestrated by Feature Brights"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08355]">
                  Our Philosophy
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-[#4A3421]">
                  &ldquo;Perfection is not an accident. It is designed, rehearsed, and delivered with heart.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[.28em] text-[#B08355]">
                Behind the Curtains
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight text-[#4A3421] sm:text-4xl md:text-5xl">
                We make room for the moments that matter most.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#765F4C]">
                Feature Brights is a premier wedding and event production studio founded on a relentless dedication to hospitality, design thinking, and technical mastery. Our collective of event producers, spatial architects, floral artists, and sound engineers bring together over twelve years of experience.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#765F4C]">
                Whether you are unveiling a breakthrough technology to global investors or whispering vows under a palace courtyard, we ensure every detail is executed so seamlessly that you can simply be present in the wonder of the moment.
              </p>

              {/* Stats Grid */}
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#E5D8CB] pt-6 sm:grid-cols-4">
                <div>
                  <p className="font-serif text-3xl font-bold text-[#B08355]">500+</p>
                  <p className="mt-1 text-xs font-medium text-[#765F4C]">Events Delivered</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-[#B08355]">12+</p>
                  <p className="mt-1 text-xs font-medium text-[#765F4C]">Years of Craft</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-[#B08355]">350+</p>
                  <p className="mt-1 text-xs font-medium text-[#765F4C]">Happy Clients</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-[#B08355]">60+</p>
                  <p className="mt-1 text-xs font-medium text-[#765F4C]">Creative Crew</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full bg-[#4A3421] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#352314]"
                >
                  <span>Learn Our Story</span>
                  <ArrowRight className="ml-2" size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#B08355] px-6 py-3 text-sm font-bold text-[#4A3421] hover:bg-[#F6EDE4] transition"
                >
                  <span>Meet the Directors</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Flawless Execution */}
        <section className="bg-[#F6EDE4] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The Elegance Difference"
              title="Built on Four Production Pillars"
              text="How our studio guarantees peace of mind and unforgettable experiences for every client."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-white p-8 shadow-xs border border-[#E5D8CB]/80 transition hover:-translate-y-1">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#F6EDE4] text-[#B08355]">
                  <HeartHandshake size={24} />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-[#4A3421]">
                  Empathy & Storytelling
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#765F4C]">
                  We listen intently before we design. Your personal history or corporate message serves as the guiding North Star for every creative decision.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xs border border-[#E5D8CB]/80 transition hover:-translate-y-1">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#F6EDE4] text-[#B08355]">
                  <Lightbulb size={24} />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-[#4A3421]">
                  Architectural Spatial Design
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#765F4C]">
                  We replace guesswork with photorealistic 3D renders, acoustic simulations, and sightline analyses to make sure every seat is the best seat.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xs border border-[#E5D8CB]/80 transition hover:-translate-y-1">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#F6EDE4] text-[#B08355]">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-[#4A3421]">
                  Air-Tight Production
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#765F4C]">
                  Military-grade cue calling, redundant technical systems, licensed pyrotechnics, and certified safety compliance keep things running smoothly.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xs border border-[#E5D8CB]/80 transition hover:-translate-y-1">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#F6EDE4] text-[#B08355]">
                  <Sparkles size={24} />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-[#4A3421]">
                  White-Glove Hospitality
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#765F4C]">
                  Dedicated guest concierges, bridal shadows, and VIP handlers attend to every unspoken need so hosts can genuinely celebrate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Gallery Section with Lightbox */}
        <section className="bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Visual Portfolio"
              title="A Glimpse of the Magic"
              text="Explore real moments from our recent wedding receptions, arena concerts, and corporate summits."
            />
            <div className="mt-14">
              <Gallery preview />
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-full border-2 border-[#B08355] px-8 py-3 text-sm font-bold text-[#4A3421] transition hover:bg-[#B08355] hover:text-white"
              >
                <span>View Full Photo & Video Gallery</span>
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Real Google Reviews & Place Showcase */}
        <GoogleReviewsSection />

        {/* FAQ Section */}
        <section className="bg-white px-5 py-24 lg:px-8 border-t border-[#E5D8CB]">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Feature Brights"
              title="Frequently Asked Questions"
              text="Everything you need to know about our event management services, budgets, and planning in Surat and beyond."
            />
            <div className="mt-12">
              <FaqAccordion items={homeFaqs} />
            </div>

            <div className="mt-10 rounded-2xl bg-[#F6EDE4] p-6 text-center border border-[#E5D8CB]">
              <p className="text-sm font-bold text-[#4A3421]">
                Have a specific question not listed here?
              </p>
              <p className="mt-1 text-xs text-[#765F4C]">
                Our team is available 7 days a week to guide you through feasibility, budgets, and venue ideas.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#B08355] px-6 py-2.5 text-xs font-bold text-white shadow-sm"
              >
                <PhoneCall size={14} />
                <span>Speak with an Event Producer</span>
              </Link>
            </div>
          </div>
        </section>

        {/* High-Impact Closing CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#382618] via-[#4A3421] to-[#382618] px-5 py-20 text-center text-white lg:px-8">
          <div className="relative z-10 mx-auto max-w-3xl">
            <Sparkles className="mx-auto text-[#E5C8A7]" size={36} />
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Ready to create something unforgettable?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
              Tell us what you are dreaming of—whether you have a complete vision or just an initial date. We will turn it into a clear, breathtaking reality.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#4A3421] shadow-lg transition hover:bg-[#F6EDE4] hover:scale-105"
              >
                Schedule Planning Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#4A3421]"
              >
                Browse All 18 Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
