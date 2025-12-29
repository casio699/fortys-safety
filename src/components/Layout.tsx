import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import ClientLogoBanner from '@/components/ClientLogoBanner'
import SocialFloatingBar from '@/components/SocialFloatingBar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-20 lg:pt-32 pb-24">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
      <ClientLogoBanner />
      <SocialFloatingBar />
    </div>
  )
}

export default Layout
