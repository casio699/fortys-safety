import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ExternalLink, MessageCircle } from 'lucide-react'

const Footer = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/fortys-safety' : ''
  const contactInfo = {
    phone: '+961 3 123 456',
    whatsapp: '+961 3 123 456',
    email: 'info@fortys-safety.com',
    address: 'Beirut, Lebanon',
    linkedin: 'https://linkedin.com/company/fortys-safety',
    instagram: 'https://instagram.com/fortys-safety',
    facebook: 'https://facebook.com/fortys-safety'
  }

  const kitsInfo = {
    name: 'KiTS',
    phone: '+961 1 234 567',
    whatsapp: '+961 1 234 567',
    instagram: 'https://instagram.com/kits.solutions',
    email: 'info@kits-solutions.com',
    website: 'https://kits-solutions.com'
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    { name: 'Safety Audits', href: '/services#audits' },
    { name: 'Health & Safety Consulting', href: '/services#consulting' },
    { name: 'Risk Assessments', href: '/services#risk' },
    { name: 'Compliance & Training', href: '/services#compliance' },
    { name: 'Fire Prevention', href: '/services#fire' }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={`${basePath}/fortys-logo.png`} alt="Fortys-Safety Logo" className="w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-white">Fortys-Safety</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for comprehensive occupational health and safety solutions. ISO 45001:2018 certified professionals dedicated to protecting your workplace.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/fortys-safety" className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/fortys-safety" className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/fortys-safety" className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400" />
                <div>
                  <p className="text-sm text-secondary-300">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-primary-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400" />
                <div>
                  <p className="text-sm text-secondary-300">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-primary-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-400" />
                <div>
                  <p className="text-sm text-secondary-300">Address</p>
                  <p className="text-white">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KiTS Credit Section */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-secondary-300 mb-2">
                Website created and supported by
              </p>
              <div className="flex items-center space-x-3">
                <img 
                  src={`${basePath}/kits-logo.png`} 
                  alt="KiTS Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h5 className="text-lg font-semibold text-primary-400">
                  {kitsInfo.name}
                </h5>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href={`tel:${kitsInfo.phone}`}
                className="flex items-center space-x-2 text-sm text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <Phone size={16} />
                <span>{kitsInfo.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${kitsInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a 
                href={kitsInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a 
                href={`mailto:${kitsInfo.email}`}
                className="flex items-center space-x-2 text-sm text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <Mail size={16} />
                <span>{kitsInfo.email}</span>
              </a>
              <a 
                href={kitsInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-secondary-300 hover:text-primary-400 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-secondary-400">
            © {new Date().getFullYear()} Fortys-Safety. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
