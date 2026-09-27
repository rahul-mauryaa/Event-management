import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Feature Brights | South Wedding Planner & Event Management Studio",
  description:
    "Feature Brights — Premier luxury wedding planners and event management studio. Main Branch in Basavanagar, Marathahalli, Bengaluru and studio in Vesu, Surat. Specialized in authentic South Indian weddings, royal receptions, and corporate productions.",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/logo.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
