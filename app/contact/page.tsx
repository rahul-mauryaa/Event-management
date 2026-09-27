import Link from "next/link"
import {
  CalendarDays,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import { ContactForm, Footer, Header, SectionHeading } from "@/components/site"
import { ContactInteractiveMap } from "@/components/contact-interactive-map"
import { branchLocations } from "@/data/reviews"

export const metadata = {
  title: "Contact Us & Studio Locations | Feature Brights",
  description:
    "Connect with Featurebright south wedding planner. Visit our Main Branch in Basavanagar, Marathahalli, Bengaluru or our studio branch in Vesu, Surat. Interactive Google Maps, phone, and consultation booking.",
}

const BENGALURU_MAIN_MAPS_LINK = branchLocations.main.googleMapsUrl
const SURAT_STUDIO_MAPS_LINK = branchLocations.surat.googleMapsUrl

const contactCards = [
  {
    title: "Main Branch (HQ)",
    badge: "⭐ MAIN BRANCH",
    icon: (
      <svg className="size-6 text-[#B08355]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
    lines: [
      "Building no 701, 1st Cross Rd,",
      "Basavanagar, Marathahalli,",
      "Bengaluru, Karnataka 560037",
    ],
    action: {
      label: "Open Main Branch in Maps",
      href: BENGALURU_MAIN_MAPS_LINK,
    },
  },
  {
    title: "Surat Studio Branch",
    badge: "REGIONAL STUDIO",
    icon: (
      <svg className="size-6 text-[#1A3A6B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
    lines: [
      "Block no. C, Ratna Madhav,",
      "Shop no. 3 near diamond",
      "jalaram temple, Vesu, Surat",
    ],
    action: {
      label: "Open Surat Studio in Maps",
      href: SURAT_STUDIO_MAPS_LINK,
    },
  },
  {
    title: "Direct Support & Calls",
    badge: null,
    icon: (
      <svg className="size-6 text-[#1A3A6B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    lines: ["+91-977-326-9662", "Direct line for bookings & quotes"],
    action: {
      label: "Call Now",
      href: "tel:+919773269662",
    },
  },
  {
    title: "Email & Hours",
    badge: null,
    icon: (
      <svg className="size-6 text-[#1A3A6B]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    lines: ["featurebrights15@gmail.com", "Mon – Sat : 9.00 am-4.00 pm", "Sunday : Closed"],
    action: {
      label: "Send Email",
      href: "mailto:featurebrights15@gmail.com",
    },
  },
]

export default function Contact() {
  return (
    <>
      <Header solid />
      <main className="bg-[#FDF8F3] px-5 pb-24 pt-28 lg:pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <SectionHeading
            eyebrow="Get In Touch"
            title="Start Your Event Blueprint"
            text="Have a target date in mind, or simply exploring creative possibilities? Connect with our senior production team at our Bengaluru Main Branch or Surat Studio for a personalized discovery consultation."
          />

          {/* 4 Feature Contact Cards highlighting Main Branch */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-between rounded-3xl border bg-white p-8 text-center shadow-xs transition hover:-translate-y-1.5 hover:shadow-md ${
                  card.badge?.includes("MAIN")
                    ? "border-[#B08355] ring-2 ring-[#B08355]/20"
                    : "border-[#E5D8CB]"
                }`}
              >
                <div className="flex flex-col items-center w-full">
                  {/* Badge if present */}
                  {card.badge && (
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4 ${
                        card.badge.includes("MAIN")
                          ? "bg-amber-100 text-amber-900 border border-amber-300"
                          : "bg-[#F6EDE4] text-[#B08355] border border-[#E5D8CB]"
                      }`}
                    >
                      {card.badge}
                    </span>
                  )}

                  {/* Round Icon Badge */}
                  <div
                    className={`grid size-16 place-items-center rounded-full mb-5 shadow-2xs ${
                      card.badge?.includes("MAIN")
                        ? "bg-[#F6EDE4] text-[#B08355]"
                        : "bg-[#EBF0F8]"
                    }`}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#111827]">
                    {card.title}
                  </h3>

                  {/* Content Lines */}
                  <div className="mt-4 space-y-1 text-sm text-[#4B5563] leading-relaxed break-words w-full">
                    {card.lines.map((line, i) => (
                      <p key={i} className="font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {card.action && (
                  <div className="mt-6 pt-4 border-t border-[#E5D8CB]/50 w-full">
                    <a
                      href={card.action.href}
                      target={card.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08355] hover:text-[#4A3421] transition"
                    >
                      <span>{card.action.label}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form & Studio Information Layout */}
          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            {/* Form Column */}
            <div className="rounded-3xl border border-[#E5D8CB] bg-white p-6 shadow-sm md:p-10 lg:col-span-7">
              <div className="mb-8 border-b border-[#E5D8CB]/80 pb-6">
                <span className="inline-block rounded-full bg-[#F6EDE4] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#B08355]">
                  Discovery Consultation Form
                </span>
                <h2 className="mt-2 font-serif text-2xl font-bold text-[#4A3421] sm:text-3xl">
                  Tell us about your upcoming event
                </h2>
                <p className="mt-1 text-xs text-[#765F4C]">
                  Please fill out the details below. Our lead producer will review and respond with 3D concepts and line-item estimates within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Direct Contacts & Support Column */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {/* WhatsApp Quick Connect */}
              <div className="rounded-3xl bg-[#2D1F13] p-8 text-white shadow-md">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E5C8A7]">
                  <MessageCircle size={14} />
                  Rapid Response Desk
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold">
                  Need Immediate Answers?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Reach out directly via WhatsApp or phone call for urgent dates, artist availability checks, or emergency production requests.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="https://wa.me/919773269662"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm hover:brightness-105 transition"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp (+91-977-326-9662)</span>
                  </a>
                  <a
                    href="tel:+919773269662"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white hover:text-[#4A3421] transition"
                  >
                    <Phone size={15} />
                    <span>Direct Call (+91-977-326-9662)</span>
                  </a>
                </div>
              </div>

              {/* Studio & Branch Locations Card */}
              <div className="rounded-3xl border border-[#E5D8CB] bg-white p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B08355]">
                    Our Studio Presence
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#4A3421] mt-1">
                    Branch Offices & Studios
                  </h3>
                </div>

                {/* Main Branch Box */}
                <div className="rounded-2xl border-2 border-[#B08355] bg-[#FDF8F3] p-4.5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300">
                      <Star size={11} fill="currentColor" />
                      ⭐ MAIN BRANCH (HQ)
                    </span>
                    <a
                      href={BENGALURU_MAIN_MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B08355] hover:underline"
                    >
                      <span>View Map</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#4A3421]">
                    Bengaluru Main Branch
                  </h4>
                  <p className="flex items-start gap-2 text-xs text-[#765F4C]">
                    <MapPin size={15} className="shrink-0 text-[#B08355] mt-0.5" />
                    <span>Building no 701, 1st Cross Rd, Basavanagar, Marathahalli, Bengaluru, Karnataka 560037</span>
                  </p>
                </div>

                {/* Surat Regional Studio Box */}
                <div className="rounded-2xl border border-[#E5D8CB] bg-white p-4.5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F6EDE4] px-2.5 py-0.5 text-[10px] font-bold text-[#B08355] border border-[#E5D8CB]">
                      REGIONAL STUDIO
                    </span>
                    <a
                      href={SURAT_STUDIO_MAPS_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B08355] hover:underline"
                    >
                      <span>View Map</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#4A3421]">
                    Surat Studio Branch
                  </h4>
                  <p className="flex items-start gap-2 text-xs text-[#765F4C]">
                    <MapPin size={15} className="shrink-0 text-[#B08355] mt-0.5" />
                    <span>Block no. C, Ratna Madhav, Shop no. 3 near Diamond Jalaram Temple, Vesu, Surat, Gujarat 395007</span>
                  </p>
                </div>

                {/* Shared Contact Info */}
                <div className="pt-2 border-t border-[#E5D8CB]/80 space-y-2.5 text-xs text-[#765F4C]">
                  <p className="flex items-center gap-2">
                    <Phone size={15} className="text-[#B08355]" />
                    <a href="tel:+919773269662" className="hover:text-[#4A3421] font-semibold">
                      +91-977-326-9662
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={15} className="text-[#B08355]" />
                    <a href="mailto:featurebrights15@gmail.com" className="hover:text-[#4A3421] font-semibold">
                      featurebrights15@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={15} className="text-[#B08355]" />
                    <span>Mon – Sat: 9:00 AM – 4:00 PM | Sunday: Closed</span>
                  </p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="rounded-2xl bg-[#F6EDE4] p-5 border border-[#E5D8CB] flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#B08355] text-white">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-[#4A3421]">
                    Strict Confidentiality (NDA)
                  </p>
                  <p className="text-xs text-[#765F4C]">
                    We safeguard celebrity appearances, executive speeches, and private family celebrations with ironclad non-disclosure agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Section with Branch Toggle */}
          <ContactInteractiveMap />
        </div>
      </main>
      <Footer />
    </>
  )
}
