import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fortys-Safety - Safety Consultancy Services',
    short_name: 'Fortys-Safety',
    description: 'ISO 45001:2018 certified safety consultancy providing audits, training, and compliance solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0b6bf2',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'professional_services'],
    lang: 'en',
    dir: 'ltr',
  }
}
