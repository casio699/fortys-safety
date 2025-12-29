import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fortys-safety.com'
  const currentDate = new Date()

  const pages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' },
    { path: '/services', priority: 0.9, changeFreq: 'monthly' },
    { path: '/about', priority: 0.8, changeFreq: 'monthly' },
    { path: '/team', priority: 0.7, changeFreq: 'monthly' },
    { path: '/certifications', priority: 0.8, changeFreq: 'monthly' },
    { path: '/experience', priority: 0.7, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.9, changeFreq: 'weekly' }
  ]

  const locales = ['en', 'ar', 'fr']
  
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add entries for each locale
  locales.forEach(locale => {
    pages.forEach(page => {
      sitemapEntries.push({
        url: locale === 'en' ? `${baseUrl}${page.path}` : `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFreq as 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always',
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [
              loc,
              loc === 'en' ? `${baseUrl}${page.path}` : `${baseUrl}/${loc}${page.path}`
            ])
          )
        }
      })
    })
  })

  return sitemapEntries
}
