import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Feature Brights | South Wedding Planner & Event Management Studio",
  description:
    "Feature Brights — Premier luxury wedding planners and event management studio in Vesu, Surat, Gujarat. Specialized in royal weddings, grand receptions, and corporate productions.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
