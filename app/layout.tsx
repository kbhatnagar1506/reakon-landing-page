import React from "react"
import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const SITE_URL = 'https://reakon.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Reakon — Stop losing the GST money that\'s already yours',
    template: '%s | Reakon',
  },
  description:
    'Reakon finds the GST input credit you\'re losing, chases customers who owe you, and flags risky vendors — all on WhatsApp, without changing how you work.',
  keywords: [
    'GST input tax credit', 'ITC recovery', 'GST reconciliation', 'GSTR-2B',
    'vendor GST compliance', 'WhatsApp accounting', 'Indian small business finance',
    'GST software India', 'invoice management system', 'accounts receivable',
  ],
  authors: [{ name: 'Reakon' }],
  creator: 'Reakon Technologies Pvt. Ltd.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Reakon',
    title: 'Reakon — Stop losing the GST money that\'s already yours',
    description:
      'Find the GST credit you\'re losing, get paid faster, and flag risky vendors — all on WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reakon — Stop losing the GST money that\'s already yours',
    description:
      'Find the GST credit you\'re losing, get paid faster, and flag risky vendors — all on WhatsApp.',
    site: '@Reakonofficial',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
