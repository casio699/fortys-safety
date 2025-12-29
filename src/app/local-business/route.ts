import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fortys-Safety",
    "description": "ISO 45001:2018 certified safety consultancy providing audits, training, and compliance solutions.",
    "url": "https://fortys-safety.com",
    "telephone": "+961 3 123 456",
    "email": "info@fortys-safety.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beirut",
      "addressCountry": "Lebanon"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.8938,
      "longitude": 35.5018
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "LBP, USD",
    "services": [
      "Safety Audits",
      "Health & Safety Consulting", 
      "Risk Assessments",
      "Compliance & Training",
      "Fire Prevention & Emergency Planning"
    ],
    "areaServed": "Lebanon",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "ISO 45001:2018 Certification",
        "recognizedBy": "International Organization for Standardization"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/fortys-safety",
      "https://instagram.com/fortys-safety",
      "https://facebook.com/fortys-safety"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+961 3 123 456",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic", "French"],
      "hoursAvailable": "Mo-Fr 09:00-17:00"
    }
  }

  return NextResponse.json(localBusiness, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
