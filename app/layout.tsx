import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext'
import { ThemeProvider } from '@/providers/ThemeProvider'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'LabuMaker | Labubu Design Generator',
  description: 'Generate custom Labubu designs with LabuMaker. Create unique, personalized Labubu characters with our easy-to-use Labubu generator. Turn your imagination into reality with LabuMaker.',
  keywords: 'LabuMaker, Labubu generator, Labubu design, AI Labubu design, custom Labubu generator, Labubu creator, generate Labubu, create Labubu designs',
  openGraph: {
    title: 'LabuMaker | Labubu Design Generator',
    description: 'Generate custom Labubu designs with LabuMaker. Create unique, personalized Labubu designs.',
    images: [
      {
        url: '/assets/og-image.png', // Create an attractive OG image
        width: 1200,
        height: 630,
        alt: 'LabuMaker - Labubu Design Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LabuMaker | Custom Labubu Design Generator',
    description: 'Generate custom Labubu designs with LabuMaker.',
    images: ['/assets/og-image.png'],
  },
  alternates: {
    canonical: 'https://labubu.odam.ai',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "LabuMaker",
              "applicationCategory": "DesignApplication",
              "description": "AI-powered Labubu character generator and design tool",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme="system"
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
