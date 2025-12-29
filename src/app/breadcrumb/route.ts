import { NextResponse } from 'next/server'

export async function GET() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fortys-safety.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://fortys-safety.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Safety Audits",
        "item": "https://fortys-safety.com/services#audits"
      }
    ]
  }

  return NextResponse.json(breadcrumb, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
