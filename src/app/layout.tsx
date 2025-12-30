import { Inter } from 'next/font/google'
import { generateMetadata, viewport } from '@/lib/metadata'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

export { generateMetadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NODE_ENV === 'production' ? '/fortys-safety' : ''
  
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href={`${basePath}/favicon-96x96.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/fortys-logo.png`} />
        <link rel="icon" type="image/png" sizes="128x128" href={`${basePath}/favicon-128x128.png`} />
        <link rel="icon" type="image/png" sizes="64x64" href={`${basePath}/favicon-64x64.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/favicon-16x16.png`} />
        <link rel="manifest" href={`${basePath}/manifest.webmanifest`} />
        <link rel="preload" href={`${basePath}/fortys-logo.png`} as="image" type="image/png" />
        <meta name="theme-color" content="#0b6bf2" />
        <meta name="msapplication-TileColor" content="#0b6bf2" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
