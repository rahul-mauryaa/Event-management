"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Mail,
  MapPin,
  Menu,
  Music2,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react"
import {
  categoryDescriptions,
  categoryLabels,
  galleryImages,
  services,
  testimonials,
  type Service,
  type ServiceCategory,
} from "@/data/services"

const slides = [
  {
    title: "Weddings Crafted with Soul & Splendor",
    tag: "Luxury Celebrations",
    text: "From intimate sunset ring vows to historic palace processions, we shape celebrations that feel uniquely and completely yours.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=90",
  },
  {
    title: "Corporate Events Built for Lasting Impact",
    tag: "Enterprise Productions",
    text: "High-octane product launches, multi-city roadshows, and global summits delivered with military timing and executive polish.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=90",
  },
  {
    title: "Live Entertainment That Steals the Show",
    tag: "Arena & Stage Experiences",
    text: "Celebrity headliners, spine-tingling arena concerts, master illusionists, and synchronized dance productions that captivate thousands.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1920&q=90",
  },
]

export function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCategoryFilter, setMobileCategoryFilter] = useState<"all" | ServiceCategory>("all")
  const [mobileSearchQuery, setMobileSearchQuery] = useState("")
  const [desktopMenuHover, setDesktopMenuHover] = useState(false)
  const [activeDesktopCategory, setActiveDesktopCategory] = useState<ServiceCategory>("wedding")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const filteredMobileServices = services.filter((s) => {
    const matchesCategory = mobileCategoryFilter === "all" || s.category === mobileCategoryFilter
    const matchesSearch =
      s.title.toLowerCase().includes(mobileSearchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(mobileSearchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const isLightNav = scrolled || solid || open
  const textColor = isLightNav ? "text-[#4A3421]" : "text-white"
  const textMuted = isLightNav ? "text-[#765F4C]" : "text-white/80"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isLightNav
          ? "bg-[#FDF8F3]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(74,52,33,0.08)] border-b border-[#E5D8CB]/60"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative size-11 sm:size-12 shrink-0 overflow-hidden rounded-full bg-white/95 p-1 shadow-md border border-[#E5D8CB] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Feature Brights Logo"
              fill
              priority
              sizes="48px"
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight sm:text-2xl ${textColor}`}>
              Feature Brights
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B08355]">
              South Wedding & Event Planner
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          <Link
            href="/"
            className={`text-sm font-semibold transition hover:text-[#B08355] ${textColor}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold transition hover:text-[#B08355] ${textColor}`}
          >
            About
          </Link>

          {/* Desktop Interactive Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopMenuHover(true)}
            onMouseLeave={() => setDesktopMenuHover(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1.5 text-sm font-semibold transition hover:text-[#B08355] py-2 ${textColor}`}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${desktopMenuHover ? "rotate-180 text-[#B08355]" : ""}`}
              />
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {desktopMenuHover && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full -translate-x-1/2 w-[720px] rounded-3xl bg-white p-6 shadow-[0_25px_60px_rgba(74,52,33,0.18)] border border-[#E5D8CB] grid grid-cols-12 gap-6"
                >
                  {/* Category Switcher Tabs */}
                  <div className="col-span-4 border-r border-[#E5D8CB]/80 pr-4 space-y-1.5">
                    <p className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B08355]">
                      Categories
                    </p>
                    <button
                      onClick={() => setActiveDesktopCategory("wedding")}
                      onMouseEnter={() => setActiveDesktopCategory("wedding")}
                      className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition ${
                        activeDesktopCategory === "wedding"
                          ? "bg-[#F6EDE4] text-[#4A3421] shadow-sm font-bold"
                          : "text-[#765F4C] hover:bg-[#FDF8F3]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Heart size={16} className="text-[#B08355]" />
                        Weddings (6)
                      </span>
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => setActiveDesktopCategory("corporate")}
                      onMouseEnter={() => setActiveDesktopCategory("corporate")}
                      className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition ${
                        activeDesktopCategory === "corporate"
                          ? "bg-[#F6EDE4] text-[#4A3421] shadow-sm font-bold"
                          : "text-[#765F4C] hover:bg-[#FDF8F3]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Briefcase size={16} className="text-[#B08355]" />
                        Corporate (6)
                      </span>
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => setActiveDesktopCategory("entertainment")}
                      onMouseEnter={() => setActiveDesktopCategory("entertainment")}
                      className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm font-semibold transition ${
                        activeDesktopCategory === "entertainment"
                          ? "bg-[#F6EDE4] text-[#4A3421] shadow-sm font-bold"
                          : "text-[#765F4C] hover:bg-[#FDF8F3]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Music2 size={16} className="text-[#B08355]" />
                        Entertainment (6)
                      </span>
                      <ChevronRight size={14} />
                    </button>

                    <div className="pt-4 px-2">
                      <Link
                        href="/services"
                        onClick={() => setDesktopMenuHover(false)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#B08355] hover:text-[#4A3421] transition"
                      >
                        <span>View All 18 Services</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Services List for Active Category */}
                  <div className="col-span-8 pl-1">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5D8CB]/60 mb-3">
                      <p className="font-serif text-sm font-bold text-[#4A3421]">
                        {categoryDescriptions[activeDesktopCategory].title}
                      </p>
                      <Link
                        href={`/services#${activeDesktopCategory}`}
                        onClick={() => setDesktopMenuHover(false)}
                        className="text-xs font-semibold text-[#B08355] hover:underline"
                      >
                        Explore Category
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {services
                        .filter((s) => s.category === activeDesktopCategory)
                        .map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setDesktopMenuHover(false)}
                            className="group/item flex items-center gap-3 rounded-xl p-2 transition hover:bg-[#F6EDE4]"
                          >
                            <div className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="48px"
                                className="object-cover transition duration-300 group-hover/item:scale-110"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-xs font-bold text-[#4A3421] group-hover/item:text-[#B08355]">
                                {service.title}
                              </p>
                              <p className="truncate text-[11px] text-[#765F4C]">
                                {service.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/gallery"
            className={`text-sm font-semibold transition hover:text-[#B08355] ${textColor}`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-semibold transition hover:text-[#B08355] ${textColor}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-[#B08355] to-[#8C6239] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:shadow-md hover:brightness-105 sm:inline-flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`relative grid size-11 place-items-center rounded-2xl border transition lg:hidden ${
              isLightNav
                ? "border-[#E5D8CB] bg-white text-[#4A3421] shadow-sm"
                : "border-white/30 bg-black/30 text-white backdrop-blur"
            }`}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Interactive Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-y-auto border-t border-[#E5D8CB] bg-[#FDF8F3] px-5 py-6 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col gap-2 pb-16">
              {/* Primary Links */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#4A3421] hover:bg-[#F6EDE4]"
              >
                <span>Home</span>
                <ChevronRight size={16} className="text-[#B08355]" />
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#4A3421] hover:bg-[#F6EDE4]"
              >
                <span>About Us</span>
                <ChevronRight size={16} className="text-[#B08355]" />
              </Link>

              {/* Interactive Services Section Accordion */}
              <div className="rounded-2xl border border-[#E5D8CB] bg-white shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-bold text-[#4A3421] transition hover:bg-[#F6EDE4]"
                  aria-expanded={mobileServicesOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-7 place-items-center rounded-lg bg-[#F6EDE4] text-[#B08355]">
                      <Sparkles size={16} />
                    </span>
                    <span>Our Services (18)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#B08355]">
                      {mobileServicesOpen ? "Collapse" : "Browse"}
                    </span>
                    <motion.div
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-[#B08355]" />
                    </motion.div>
                  </div>
                </button>

                {/* Collapsible Services Dropdown Content */}
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-[#E5D8CB] bg-[#FAF3EC]/60 p-3.5"
                    >
                      {/* Search Bar inside Mobile Menu */}
                      <div className="relative mb-3">
                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#765F4C]" />
                        <input
                          type="text"
                          value={mobileSearchQuery}
                          onChange={(e) => setMobileSearchQuery(e.target.value)}
                          placeholder="Search 18 services (e.g. Wedding, Launch)..."
                          className="w-full rounded-xl border border-[#E5D8CB] bg-white pl-9 pr-3 py-2 text-xs text-[#4A3421] placeholder:text-[#765F4C]/70 focus:border-[#B08355] focus:outline-none"
                        />
                        {mobileSearchQuery && (
                          <button
                            onClick={() => setMobileSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#765F4C]"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </div>

                      {/* Category Filter Pills in Mobile Menu */}
                      <div className="flex gap-1.5 pb-2 overflow-x-auto no-scrollbar">
                        {(["all", "corporate", "entertainment", "wedding"] as const).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setMobileCategoryFilter(cat)}
                            className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold transition ${
                              mobileCategoryFilter === cat
                                ? "bg-[#B08355] text-white"
                                : "bg-white text-[#4A3421] border border-[#E5D8CB]"
                            }`}
                          >
                            {cat === "all" ? "All (18)" : cat === "corporate" ? "Corporate (6)" : cat === "entertainment" ? "Entertainment (6)" : "Weddings (6)"}
                          </button>
                        ))}
                      </div>

                      {/* Interactive List of Services with Proper Images */}
                      <div className="mt-2 max-h-72 overflow-y-auto space-y-2 pr-1">
                        {filteredMobileServices.length === 0 ? (
                          <p className="text-center text-xs py-4 text-[#765F4C]">
                            No services match &ldquo;{mobileSearchQuery}&rdquo;
                          </p>
                        ) : (
                          filteredMobileServices.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setOpen(false)}
                              className="group flex items-center gap-3 rounded-xl bg-white p-2 border border-[#E5D8CB]/80 shadow-2xs hover:border-[#B08355] transition"
                            >
                              <div className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  sizes="48px"
                                  className="object-cover transition duration-300 group-hover:scale-105"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1">
                                  <p className="truncate text-xs font-bold text-[#4A3421] group-hover:text-[#B08355]">
                                    {service.title}
                                  </p>
                                  <span className="shrink-0 rounded-full bg-[#F6EDE4] px-2 py-0.5 text-[9px] font-semibold text-[#B08355] uppercase">
                                    {service.category}
                                  </span>
                                </div>
                                <p className="truncate text-[11px] text-[#765F4C]">
                                  {service.tagline}
                                </p>
                              </div>
                              <ChevronRight size={14} className="shrink-0 text-[#B08355]" />
                            </Link>
                          ))
                        )}
                      </div>

                      {/* Link to Full Services Directory */}
                      <Link
                        href="/services"
                        onClick={() => setOpen(false)}
                        className="mt-3 block rounded-xl bg-[#F6EDE4] py-2.5 text-center text-xs font-bold text-[#B08355] hover:bg-[#E5D8CB]/60 transition"
                      >
                        Explore Full Services Directory →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#4A3421] hover:bg-[#F6EDE4]"
              >
                <span>Gallery & Portfolio</span>
                <ChevronRight size={16} className="text-[#B08355]" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-[#4A3421] hover:bg-[#F6EDE4]"
              >
                <span>Contact & Enquiries</span>
                <ChevronRight size={16} className="text-[#B08355]" />
              </Link>

              {/* Call & Direct Contact Info */}
              <div className="mt-4 rounded-2xl bg-white p-4 border border-[#E5D8CB] space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B08355]">
                  Need Immediate Assistance?
                </p>
                <a
                  href="tel:+919773269662"
                  className="flex items-center gap-2.5 text-sm font-bold text-[#4A3421]"
                >
                  <Phone size={16} className="text-[#B08355]" />
                  <span>+91-977-326-9662</span>
                </a>
                <a
                  href="mailto:featurebrights15@gmail.com"
                  className="flex items-center gap-2.5 text-xs text-[#765F4C]"
                >
                  <Mail size={15} className="text-[#B08355]" />
                  <span>featurebrights15@gmail.com</span>
                </a>

                {/* Mobile Social Links */}
                <div className="pt-2 border-t border-[#E5D8CB]/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B08355] block mb-2">
                    Follow us :
                  </span>
                  <div className="flex items-center gap-2">
                    {socialMediaLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="grid size-9 place-items-center rounded-full bg-[#F6EDE4] text-[#4A3421] transition hover:bg-[#B08355] hover:text-white"
                      >
                        <svg
                          aria-hidden="true"
                          className="size-3.5 fill-current"
                          viewBox={social.viewBox}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Book Consultation Button */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-2xl bg-gradient-to-r from-[#B08355] to-[#8C6239] px-6 py-3.5 text-center text-base font-bold text-white shadow-md"
              >
                Book Your Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Slower, relaxed auto-play interval for big display and mobile readability
    const id = setInterval(() => setActive((x) => (x + 1) % slides.length), 9500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[active]

  return (
    <section className="relative min-h-[720px] sm:min-h-[760px] lg:h-[92vh] lg:min-h-[680px] w-full overflow-hidden bg-[#21170F] flex flex-col justify-between">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Enhanced readability gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#170E08]/95 via-[#170E08]/75 to-[#170E08]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#170E08] via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-6 sm:pt-32 sm:pb-8 lg:px-8 lg:pt-36">
        <motion.div
          key={`copy-${active}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-3xl text-white"
        >
          {/* Category Tag */}
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 backdrop-blur-md border border-white/20 sm:px-4 sm:py-1.5">
            <Sparkles size={13} className="text-[#E5C8A7]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[.25em] text-[#E5C8A7]">
              {slide.tag}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl font-bold leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-5 max-w-2xl text-xs sm:text-base md:text-lg leading-relaxed text-white/85">
            {slide.text}
          </p>

          {/* Action Buttons */}
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <Link
              href="/services"
              className="rounded-full bg-gradient-to-r from-[#B08355] to-[#91653B] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:brightness-110 flex items-center justify-center gap-2 text-center"
            >
              <span>Explore 18 Services</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 bg-white/10 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#4A3421] text-center"
            >
              Get Custom Proposal
            </Link>
          </div>

          {/* Quick Metrics Bar in dedicated glassmorphic card */}
          <div className="mt-6 sm:mt-9 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 p-4 sm:p-5 max-w-2xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#E5C8A7]">500+</p>
                <p className="text-[11px] sm:text-xs text-white/70 mt-0.5">Events Orchestrated</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#E5C8A7]">12+ Yrs</p>
                <p className="text-[11px] sm:text-xs text-white/70 mt-0.5">Industry Leadership</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#E5C8A7]">18 Services</p>
                <p className="text-[11px] sm:text-xs text-white/70 mt-0.5">Tailored Disciplines</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#E5C8A7]">4.9 / 5.0</p>
                <p className="text-[11px] sm:text-xs text-white/70 mt-0.5">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dedicated Bottom Slider Controls Bar */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-6 sm:pb-8 lg:px-8">
        <div className="flex items-center justify-between border-t border-white/10 pt-4 sm:pt-5">
          {/* Slide Navigation Dots & Counter */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 sm:w-10 bg-[#B08355]" : "w-3 sm:w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
            <span className="ml-2 text-[11px] font-semibold text-white/60">
              0{active + 1} / 0{slides.length}
            </span>
          </div>

          {/* Slide Controls Prev/Next */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous slide"
              onClick={() => setActive((active + slides.length - 1) % slides.length)}
              className="grid size-9 sm:size-10 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur transition hover:bg-[#B08355] hover:border-[#B08355]"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => setActive((active + 1) % slides.length)}
              className="grid size-9 sm:size-10 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur transition hover:bg-[#B08355] hover:border-[#B08355]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                 Slow Continuous Highlights Ribbon / Ticker                 */
/* -------------------------------------------------------------------------- */

function HighlightWhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.5 3.66-8.15 8.16-8.15 2.18 0 4.23.85 5.77 2.39a8.127 8.127 0 0 1 2.39 5.76c0 4.5-3.66 8.15-8.16 8.15zm4.47-6.1c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.53.07-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3z" />
    </svg>
  )
}

export function HighlightsBar() {
  const items = [
    { icon: Award, text: "Certified Luxury Event Producers" },
    { icon: Sparkles, text: "18 Tailored Service Disciplines" },
    {
      icon: HighlightWhatsAppIcon,
      text: "WhatsApp Us: +91 97732 69662",
      isWhatsApp: true,
      href: "https://wa.me/919773269662?text=Hello%20Feature%20Brights!%20I%20would%20like%20to%20inquire%20about%20event%20planning.",
    },
    { icon: Star, text: "5.0 ★ Google Top-Rated in Surat" },
    { icon: Clock, text: "99.8% On-Time Cue Precision" },
    { icon: Heart, text: "500+ Milestone Celebrations" },
    { icon: ShieldCheck, text: "100% Guaranteed Confidentiality" },
    { icon: MapPin, text: "Ratna Madhav, Vesu, Surat Studio" },
    { icon: Music2, text: "Turnkey Sound, Light & 4K Production" },
  ]

  // Quadruple repetition guarantees unbroken, seamless flow across ultra-wide and 4K displays
  const duplicated = [...items, ...items, ...items, ...items]

  return (
    <section className="relative overflow-hidden border-b border-[#E5D8CB] bg-[#F6EDE4] py-4 sm:py-5 lg:py-5.5 shadow-[inset_0_1px_3px_rgba(74,52,33,0.04)]">
      {/* Edge gradient masks tailored for big displays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-36 lg:w-56 xl:w-72 bg-gradient-to-r from-[#F6EDE4] via-[#F6EDE4]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-36 lg:w-56 xl:w-72 bg-gradient-to-l from-[#F6EDE4] via-[#F6EDE4]/90 to-transparent" />

      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-slow-marquee flex items-center gap-8 sm:gap-12 lg:gap-16 pr-8 sm:pr-12 lg:pr-16">
          {duplicated.map((item, idx) => {
            const Icon = item.icon
            const content = (
              <div
                className={`flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-[15px] font-semibold tracking-wide whitespace-nowrap transition-colors ${
                  item.isWhatsApp
                    ? "text-[#1B703A] hover:text-[#128C7E]"
                    : "text-[#4A3421] hover:text-[#B08355]"
                }`}
              >
                <span
                  className={`grid size-7 sm:size-8 lg:size-9 place-items-center rounded-xl shadow-xs transition-transform hover:scale-105 ${
                    item.isWhatsApp
                      ? "bg-[#25D366]/20 text-[#128C7E]"
                      : "bg-[#E5D8CB]/80 text-[#B08355]"
                  }`}
                >
                  <Icon className="size-3.5 sm:size-4 lg:size-4.5" />
                </span>
                <span className={item.isWhatsApp ? "font-bold underline decoration-[#25D366]/40 underline-offset-4" : ""}>
                  {item.text}
                </span>
                <span className="ml-5 sm:ml-8 lg:ml-10 text-[11px] lg:text-xs text-[#B08355]/40 font-serif">✦</span>
              </div>
            )

            if (item.href) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.text}
                  className="cursor-pointer"
                >
                  {content}
                </a>
              )
            }

            return <div key={idx}>{content}</div>
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string
  title: string
  text?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[.28em] text-[#B08355]">
        {eyebrow || "Made Memorable"}
      </p>
      <h2 className="font-serif text-3xl font-bold text-[#4A3421] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#765F4C]">{text}</p>}
    </div>
  )
}

export function ServiceGrid() {
  const [filter, setFilter] = useState<"all" | ServiceCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = services.filter((s) => {
    const matchesCategory = filter === "all" || s.category === filter
    const matchesQuery =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div>
      {/* Category Tabs & Search */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-10">
        {/* Category Buttons */}
        <div role="tablist" aria-label="Service categories" className="flex flex-wrap gap-2">
          {(["all", "corporate", "entertainment", "wedding"] as const).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition shadow-xs ${
                filter === key
                  ? "bg-gradient-to-r from-[#B08355] to-[#8C6239] text-white shadow-md"
                  : "border border-[#E5D8CB] bg-white text-[#4A3421] hover:bg-[#F6EDE4]"
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        {/* Live Filter Search Input */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#765F4C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 18 services..."
            className="w-full rounded-full border border-[#E5D8CB] bg-white pl-10 pr-4 py-2 text-sm text-[#4A3421] placeholder:text-[#765F4C]/70 shadow-2xs focus:border-[#B08355] focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#765F4C]"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Services Grid with Rich Content and Proper Images */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-[#E5D8CB] bg-white p-12 text-center">
          <Sparkles className="mx-auto text-[#B08355]" size={32} />
          <p className="mt-4 font-serif text-xl font-bold text-[#4A3421]">No services found</p>
          <p className="mt-2 text-sm text-[#765F4C]">
            Try searching for another term or reset your category filter.
          </p>
          <button
            onClick={() => {
              setFilter("all")
              setSearchQuery("")
            }}
            className="mt-5 rounded-full bg-[#B08355] px-6 py-2.5 text-xs font-bold text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <motion.article
              layout
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-[#E5D8CB] shadow-[0_10px_30px_rgba(74,52,33,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(74,52,33,0.12)]"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E5D8CB]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4A3421] backdrop-blur shadow-sm">
                      {service.category}
                    </span>
                  </div>

                  {/* Timeline Badge */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1 text-[11px] font-semibold text-white/95 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <Clock size={12} />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#4A3421] group-hover:text-[#B08355] transition">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#B08355] line-clamp-1">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#765F4C] line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#E5D8CB]/60 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#4A3421]">
                        <Check size={14} className="shrink-0 text-[#B08355] mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="border-t border-[#E5D8CB]/70 bg-[#FDF8F3] px-6 py-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#765F4C]">
                  {service.capacity}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B08355] group-hover:text-[#4A3421] transition"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export function InteractiveEventEstimator() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("wedding")
  const [guestCount, setGuestCount] = useState<string>("100–300")
  const [selectedSlug, setSelectedSlug] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)

  const availableServices = services.filter((s) => s.category === selectedCategory)

  // Default selected slug
  useEffect(() => {
    if (availableServices.length > 0) {
      setSelectedSlug(availableServices[0].slug)
    }
  }, [selectedCategory])

  const currentService = services.find((s) => s.slug === selectedSlug) || availableServices[0]

  return (
    <div className="overflow-hidden rounded-3xl border border-[#E5D8CB] bg-white shadow-[0_20px_50px_rgba(74,52,33,0.08)]">
      <div className="grid lg:grid-cols-12">
        {/* Form Inputs Column */}
        <div className="p-6 sm:p-10 lg:col-span-7">
          <span className="inline-block rounded-full bg-[#F6EDE4] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#B08355]">
            Interactive Event Planner
          </span>
          <h3 className="mt-3 font-serif text-2xl font-bold text-[#4A3421] sm:text-3xl">
            Design your celebration roadmap
          </h3>
          <p className="mt-2 text-sm text-[#765F4C]">
            Select your event type and estimated guest capacity to see an instant production blueprint.
          </p>

          <div className="mt-6 space-y-5">
            {/* Step 1: Category */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#4A3421]">
                1. Select Event Type
              </label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {(["wedding", "corporate", "entertainment"] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl p-3 text-center transition ${
                      selectedCategory === cat
                        ? "bg-[#B08355] text-white font-bold shadow-sm"
                        : "bg-[#FDF8F3] text-[#4A3421] border border-[#E5D8CB] hover:bg-[#F6EDE4]"
                    }`}
                  >
                    <p className="text-xs capitalize">{cat}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Specific Service */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#4A3421]">
                2. Select Specific Service ({availableServices.length} Available)
              </label>
              <select
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm font-semibold text-[#4A3421] focus:border-[#B08355] focus:outline-none"
              >
                {availableServices.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title} — {s.tagline}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Guest Range */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#4A3421]">
                3. Estimated Guest Capacity
              </label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {["50–150", "150–400", "400–1,000", "1,000+"].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setGuestCount(count)}
                    className={`rounded-xl py-2.5 text-center text-xs font-semibold transition ${
                      guestCount === count
                        ? "border border-[#B08355] bg-[#F6EDE4] text-[#B08355] font-bold"
                        : "border border-[#E5D8CB] bg-white text-[#765F4C] hover:bg-[#FDF8F3]"
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2">
              <Link
                href={`/contact?service=${currentService?.slug}&guests=${guestCount}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4A3421] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#342416]"
              >
                <span>Request Custom Proposal for this Plan</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Preview Column */}
        {currentService && (
          <div className="bg-[#FAF3EC] p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E5D8CB]">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08355]">
                  Recommended Blueprint
                </span>
                <h4 className="font-serif text-xl font-bold text-[#4A3421]">
                  {currentService.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#765F4C]">
                  {currentService.shortDesc}
                </p>

                <div className="mt-4 space-y-2 rounded-xl bg-white p-4 border border-[#E5D8CB]/80">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#765F4C]">Planning Runway:</span>
                    <span className="font-bold text-[#4A3421]">{currentService.timeline}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#765F4C]">Target Capacity:</span>
                    <span className="font-bold text-[#4A3421]">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-[#765F4C]">Investment Guide:</span>
                    <span className="font-bold text-[#B08355]">{currentService.pricingGuide}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5D8CB]">
              <p className="text-[11px] text-[#765F4C]">
                Includes dedicated producer, 3D spatial renders, and full day-of coordination.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Gallery({ preview = false }: { preview?: boolean }) {
  const [activeTab, setActiveTab] = useState<"all" | ServiceCategory>("all")
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null)

  const items = preview ? galleryImages.slice(0, 8) : galleryImages
  const filteredItems = items.filter((item) => activeTab === "all" || item.category === activeTab)

  return (
    <div>
      {!preview && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(["all", "wedding", "corporate", "entertainment"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                activeTab === cat
                  ? "bg-[#B08355] text-white shadow-sm"
                  : "bg-white text-[#4A3421] border border-[#E5D8CB] hover:bg-[#F6EDE4]"
              }`}
            >
              {cat === "all" ? "All Photos" : cat === "wedding" ? "Weddings" : cat === "corporate" ? "Corporate" : "Entertainment"}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {filteredItems.map((item, i) => (
          <div
            key={`${item.url}-${i}`}
            onClick={() => setSelectedImage(item)}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-[#E5D8CB] ${
              i % 5 === 0 ? "aspect-[4/5] md:col-span-2 md:aspect-[16/10]" : "aspect-square"
            }`}
          >
            <Image
              src={item.url}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#E5C8A7]">
                {item.category}
              </p>
              <p className="font-serif text-sm font-bold text-white truncate">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-700"
            >
              <button
                aria-label="Close preview"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] w-full max-h-[70vh]">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-neutral-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B08355]">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-0.5">{selectedImage.title}</h3>
                </div>
                <Link
                  href="/contact"
                  className="rounded-full bg-[#B08355] px-5 py-2 text-xs font-bold text-white"
                >
                  Plan Similar Event
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ContactForm({ prefilledService }: { prefilledService?: string }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefilledService || "",
    date: "",
    guests: "100–300",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit proposal request.")
      }

      setSent(true)
    } catch (err: any) {
      setError(
        err.message ||
          "Could not send email. Please try again or reach out directly via WhatsApp/Call at +91-977-326-9662."
      )
    } finally {
      setLoading(false)
    }
  }

  return sent ? (
    <div className="rounded-3xl bg-[#F6EDE4] p-8 sm:p-10 text-center border border-[#E5D8CB]">
      <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#B08355] text-white shadow-sm">
        <Sparkles size={28} />
      </div>
      <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-bold text-[#4A3421]">
        Proposal Request Received!
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm sm:text-base leading-relaxed text-[#765F4C]">
        Thank you, <span className="font-bold text-[#4A3421]">{formData.name}</span>. Your event details have been delivered to our lead production team at <span className="font-semibold text-[#B08355]">featurebrights15@gmail.com</span>. We will review your vision and connect within 24 hours.
      </p>
      <button
        onClick={() => {
          setSent(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: prefilledService || "",
            date: "",
            guests: "100–300",
            message: "",
          })
        }}
        className="mt-6 rounded-full border border-[#B08355] bg-white px-7 py-2.5 text-xs font-bold text-[#B08355] hover:bg-[#B08355] hover:text-white transition shadow-2xs"
      >
        Submit Another Enquiry
      </button>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      {error && (
        <div className="md:col-span-2 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
          <span className="text-base leading-none">⚠️</span>
          <div className="flex-1">
            <p className="font-bold">Transmission Notice</p>
            <p className="mt-0.5">{error}</p>
          </div>
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Your Full Name *
        </label>
        <input
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Maya Singhania"
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Email Address *
        </label>
        <input
          required
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. maya@example.com"
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Phone / WhatsApp *
        </label>
        <input
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+91-977-326-9662"
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Service Interested In *
        </label>
        <select
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        >
          <option value="">Select a Service (18 Options)</option>
          <optgroup label="Weddings & Celebrations">
            {services
              .filter((s) => s.category === "wedding")
              .map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
          </optgroup>
          <optgroup label="Corporate Events">
            {services
              .filter((s) => s.category === "corporate")
              .map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
          </optgroup>
          <optgroup label="Entertainment & Concerts">
            {services
              .filter((s) => s.category === "entertainment")
              .map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
          </optgroup>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Target Date / Month
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Estimated Guests
        </label>
        <select
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        >
          <option>Under 50 Guests</option>
          <option>50 – 150 Guests</option>
          <option>150 – 400 Guests</option>
          <option>400 – 1,000 Guests</option>
          <option>1,000+ Guests</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#4A3421]">
          Tell us about your event vision, venue, or budget
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share any details: preferred city, aesthetic ideas, special artists, or specific requirements..."
          className="w-full rounded-xl border border-[#E5D8CB] bg-[#FDF8F3] px-4 py-3 text-sm text-[#4A3421] outline-none focus:border-[#B08355] focus:bg-white transition"
        />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[#765F4C]">
          🔒 Direct encrypted transmission to Feature Brights executive desk.
        </p>
        <button
          type="submit"
          disabled={loading}
          className={`w-full sm:w-auto rounded-full bg-gradient-to-r from-[#B08355] to-[#8C6239] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:brightness-105 transition flex items-center justify-center gap-2 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <span className="inline-block size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <span>Sending Details via SMTP...</span>
            </>
          ) : (
            <>
              <span>Request Proposal & Blueprint</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 sm:p-12 shadow-[0_15px_50px_rgba(74,52,33,0.08)] border border-[#E5D8CB]">
      <div className="flex flex-col items-center text-center">
        {/* Star Rating */}
        <div className="mb-6 flex gap-1.5 text-[#B08355]">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} fill="currentColor" size={20} />
          ))}
        </div>

        {/* Quote */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#4A3421] italic">
          &ldquo;{item.quote}&rdquo;
        </p>

        {/* Client Bio */}
        <div className="mt-8 flex items-center gap-4">
          <div className="relative size-14 overflow-hidden rounded-full border-2 border-[#B08355]">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-serif text-lg font-bold text-[#4A3421]">{item.name}</p>
            <p className="text-xs font-semibold text-[#B08355]">{item.role}</p>
            <p className="text-[11px] text-[#765F4C]">{item.event}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-8 flex items-center gap-3">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((index + testimonials.length - 1) % testimonials.length)}
            className="grid size-10 place-items-center rounded-full border border-[#E5D8CB] bg-[#FDF8F3] text-[#4A3421] transition hover:bg-[#B08355] hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-semibold text-[#765F4C]">
            {index + 1} / {testimonials.length}
          </span>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % testimonials.length)}
            className="grid size-10 place-items-center rounded-full border border-[#E5D8CB] bg-[#FDF8F3] text-[#4A3421] transition hover:bg-[#B08355] hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export const socialMediaLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/FeatureBrights?t=1yirWfvc7Gr2lWmZPK5HQg&s=09",
    viewBox: "0 0 512 512",
    path: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1AorsgwNXs/",
    viewBox: "0 0 320 512",
    path: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
  },
  {
    name: "LinkedIn",
    href: "#!",
    viewBox: "0 0 448 512",
    path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/feature_brights15?igsh=dDFsaW9sZWFidXMw",
    viewBox: "0 0 448 512",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@FeatureBrights_15",
    viewBox: "0 0 576 512",
    path: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
  },
]

export function Footer() {
  return (
    <footer className="bg-[#2D1F13] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-white p-1 shadow-md border border-[#E5D8CB]">
                <Image
                  src="/logo.png"
                  alt="Feature Brights Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold block leading-tight">Feature Brights</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E5C8A7]">
                  South Wedding & Event Planner
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              An elite wedding management and experience design agency based in Surat, Gujarat. We transform weddings, corporate summits, and concert productions into unforgettable memories.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#E5C8A7] shrink-0 mt-0.5" />
                <div>
                  <span>block no. C, Ratna Madhav, Shop no. 3 near diamond jalaram temple, vesu, Surat, Gujarat 395007</span>
                  <a
                    href="https://www.google.com/maps/place/Feature+Brights+south+wedding+planner/data=!4m2!3m1!1s0x0:0x9fe42a5b79a38f30?sa=X&ved=1t:2428&hl=en-IN&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[11px] font-bold text-[#E5C8A7] hover:underline mt-0.5"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#E5C8A7] shrink-0" />
                <a href="tel:+919773269662" className="hover:text-white font-semibold">
                  +91-977-326-9662
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-[#E5C8A7] shrink-0" />
                <a href="mailto:featurebrights15@gmail.com" className="hover:text-white font-semibold">
                  featurebrights15@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-white/65 text-[11px]">
                <Clock size={14} className="text-[#E5C8A7] shrink-0" />
                <span>Mon – Sat: 9.00 am-4.00 pm (Sunday: Closed)</span>
              </p>
            </div>

            {/* Social Media Links Section */}
            <div className="footer-social mt-7 pt-6 border-t border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5C8A7] block mb-3">
                Follow us :
              </span>
              <ul className="ul_li flex items-center gap-2.5 flex-wrap">
                {socialMediaLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="grid size-10 place-items-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-[#B08355] hover:text-white hover:scale-110 shadow-sm border border-white/10"
                    >
                      <svg
                        aria-hidden="true"
                        className="size-4 fill-current"
                        viewBox={social.viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-base font-bold text-[#E5C8A7]">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  All 18 Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="mb-4 font-serif text-base font-bold text-[#E5C8A7]">Weddings & Shows</h3>
            <ul className="space-y-2 text-xs text-white/70">
              {services.slice(12, 18).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Events */}
          <div>
            <h3 className="mb-4 font-serif text-base font-bold text-[#E5C8A7]">Corporate & Concerts</h3>
            <ul className="space-y-2 text-xs text-white/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright & Social Row */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Feature Brights. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white">Terms of Production</Link>
            <Link href="/contact" className="hover:text-white">Safety & Permits</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* -------------------------------------------------------------------------- */
/*                              FAQ Accordion                                 */
/* -------------------------------------------------------------------------- */

export interface FaqItemType {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItemType[] }) {
  // First item active by default (matching Elementor active-block)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
              isOpen
                ? "border-[#B08355] bg-[#FDF8F3] shadow-xs"
                : "border-[#E5D8CB] bg-white hover:border-[#B08355]/60 hover:bg-[#FDF8F3]/50"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                <span
                  className={`grid size-7 sm:size-8 shrink-0 place-items-center rounded-lg text-xs font-bold transition-colors ${
                    isOpen
                      ? "bg-[#B08355] text-white"
                      : "bg-[#F6EDE4] text-[#B08355]"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-[#4A3421] leading-snug">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                  isOpen
                    ? "bg-[#B08355] text-white"
                    : "bg-[#F6EDE4] text-[#B08355] hover:bg-[#E5D8CB]"
                }`}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="border-t border-[#E5D8CB]/70 px-5 pb-5 pt-3.5 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-[#765F4C]">
                    <div className="sm:pl-12 pl-10">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

