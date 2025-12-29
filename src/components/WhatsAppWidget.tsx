'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Environment-based configuration
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+9613123456'
  const defaultMessage = 'Hello! I would like to inquire about your safety consultancy services.'

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
          <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
        
        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
      </div>
    </div>
  )
}

export default WhatsAppWidget
