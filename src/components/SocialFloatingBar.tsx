'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'

const SocialFloatingBar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/fortys-safety', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/fortys-safety', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/fortys-safety', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@fortys-safety.com', label: 'Email' },
    { icon: Phone, href: 'tel:+9613123456', label: 'Call' },
  ]

  if (!isMounted) return null

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={social.label}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: isMounted ? 'slideInLeft 0.5s ease-out forwards' : 'none',
            opacity: 0,
          }}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  )
}

export default SocialFloatingBar
