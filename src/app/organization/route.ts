import { NextResponse } from 'next/server'

export async function GET() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fortys-Safety",
    "url": "https://fortys-safety.com",
    "logo": "https://fortys-safety.com/fortys-logo.png",
    "description": "Your trusted partner for comprehensive occupational health and safety solutions. ISO 45001:2018 certified professionals dedicated to protecting your workplace.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beirut",
      "addressCountry": "Lebanon"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+961-3-123-456",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic", "French"]
    },
    "sameAs": [
      "https://linkedin.com/company/fortys-safety",
      "https://instagram.com/fortys-safety",
      "https://facebook.com/fortys-safety"
    ],
    "services": [
      "Safety Audits",
      "Health & Safety Consulting",
      "Risk Assessments",
      "Compliance & Training",
      "Fire Prevention"
    ],
    "certification": [
      {
        "@type": "Certification",
        "name": "ISO 45001:2018",
        "certificationStandard": "Occupational Health and Safety Management Systems"
      }
    ]
  }

  return NextResponse.json(organization, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  })
}
