"use client"

import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "919773269662"
  const defaultMessage = encodeURIComponent(
    "Hello Feature Brights! I would like to inquire about event planning and wedding services."
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center"
        aria-label="Chat with Feature Brights on WhatsApp"
      >
        {/* Subtle, gentle slow pulse ring */}
        <span className="pointer-events-none absolute -inset-1.5 rounded-full bg-[#25D366]/35 animate-slow-ping" />

        {/* Floating Text Pill (visible on medium+ screens) */}
        <span className="hidden sm:flex items-center gap-2 mr-3 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#1F2937] shadow-lg border border-[#E5D8CB] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
          <span className="size-2 rounded-full bg-[#25D366]" />
          <span>Chat on WhatsApp</span>
        </span>

        {/* WhatsApp Round Floating Button */}
        <div className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] active:scale-95">
          <svg
            className="size-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.94-.4-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.134 8.134 0 0 1-1.25-4.38c0-4.5 3.66-8.15 8.16-8.15 2.18 0 4.23.85 5.77 2.39a8.127 8.127 0 0 1 2.39 5.76c0 4.5-3.66 8.15-8.16 8.15zm4.47-6.1c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.53.07-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3z" />
          </svg>
        </div>
      </a>
    </div>
  )
}
