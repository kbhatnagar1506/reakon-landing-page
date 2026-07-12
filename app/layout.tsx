import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { TurnstileWidget } from '@/components/landing/turnstile-widget'
import { PreventInitialAutoScroll } from '@/components/prevent-initial-autoscroll'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const SITE_URL = 'https://www.reakon.in'

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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reakon — Track it, claim it, save it',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reakon — Stop losing the GST money that\'s already yours',
    description:
      'Find the GST credit you\'re losing, get paid faster, and flag risky vendors — all on WhatsApp.',
    site: '@ReakonHQ',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <PreventInitialAutoScroll />
        {children}
        <TurnstileWidget />
        <Analytics />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-17W7H9P6PL"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-17W7H9P6PL');
          `}
        </Script>
      </body>
    </html>
  )
}
