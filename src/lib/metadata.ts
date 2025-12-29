import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export function generateMetadata(): Metadata {
  return {
    title: {
      default: 'Fortys-Safety - Safety Consultancy Services',
      template: '%s | Fortys-Safety'
    },
    description: 'ISO 45001:2018 certified safety consultancy providing audits, training, and compliance solutions for occupational health and safety.',
    keywords: 'safety consultancy, ISO 45001, safety audits, occupational health, safety training, compliance, risk assessment, fire prevention',
    authors: [{ name: 'Fortys-Safety' }],
    creator: 'Fortys-Safety',
    publisher: 'Fortys-Safety',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://fortys-safety.com'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://fortys-safety.com',
      title: 'Fortys-Safety - Safety Consultancy Services',
      description: 'ISO 45001:2018 certified safety consultancy providing audits, training, and compliance solutions for occupational health and safety.',
      siteName: 'Fortys-Safety',
      images: [
        {
          url: '/fortys-logo.png',
          width: 1200,
          height: 630,
          alt: 'Fortys-Safety Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Fortys-Safety - Safety Consultancy Services',
      description: 'ISO 45001:2018 certified safety consultancy providing audits, training, and compliance solutions for occupational health and safety.',
      images: ['/fortys-logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}
