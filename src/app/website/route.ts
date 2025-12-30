import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fortys-Safety",
    "alternateName": "Fortys Safety Consultancy",
    "url": "https://fortys-safety.com",
    "description": "ISO 45001:2018 certified safety consultancy providing professional audits, training, and compliance solutions.",
    "inLanguage": ["en", "ar", "fr"],
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "Organization",
      "@id": "https://fortys-safety.com/organization"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Occupational Health and Safety"
      },
      {
        "@type": "Thing", 
        "name": "Safety Consulting"
      },
      {
        "@type": "Thing",
        "name": "ISO 45001:2018"
      }
    ],
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://fortys-safety.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReadAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://fortys-safety.com/{page_path}"
        }
      }
    ],
    "publisher": {
      "@type": "Organization",
      "@id": "https://fortys-safety.com/organization"
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://fortys-safety.com/organization"
    }
  }

  return NextResponse.json(website, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
