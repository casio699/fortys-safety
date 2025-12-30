'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, CheckCircle, Users, Award, TrendingUp, ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import AnimatedCounter from '@/components/AnimatedCounter'

const HomePage = () => {
  const stats = [
    { value: 9, label: 'Years of Experience', suffix: '+' },
    { value: 150, label: 'Satisfied Clients', suffix: '+' },
    { value: 500, label: 'Safety Audits Completed', suffix: '+' },
    { value: 1000, label: 'Training Sessions', suffix: '+' }
  ]

  const services = [
    {
      icon: Shield,
      title: 'Safety Audits',
      description: 'Comprehensive safety audits to identify risks and ensure compliance with international standards.',
      href: '/services#audits'
    },
    {
      icon: Users,
      title: 'Health & Safety Consulting',
      description: 'Expert consulting to develop and implement robust safety management systems.',
      href: '/services#consulting'
    },
    {
      icon: CheckCircle,
      title: 'Risk Assessments',
      description: 'Thorough risk assessment and mitigation strategies to prevent workplace incidents.',
      href: '/services#risk'
    },
    {
      icon: Award,
      title: 'Compliance & Training',
      description: 'Customized training programs and compliance management to meet regulatory requirements.',
      href: '/services#compliance'
    },
    {
      icon: TrendingUp,
      title: 'Fire Prevention & Emergency Planning',
      description: 'Specialized fire safety consulting and emergency response planning.',
      href: '/services#fire'
    }
  ]

  const trustIndicators = [
    { name: 'ISO 45001:2018 Certified', description: 'Occupational Health and Safety Management Systems' },
    { name: 'Lead Implementor', description: 'Certified ISO 45001 Lead Implementor' },
    { name: 'Internal Auditor', description: 'Certified Internal Auditor for Safety Management' },
    { name: 'Civil Defence Experience', description: '3 years of Lebanese Civil Defence service' }
  ]

  return (
    <Layout>
      <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-green-900 to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-[url('/fortys-logo.png')] bg-center bg-no-repeat opacity-[0.03]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  ISO 45001:2018 Certified
                </div>
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                  Excellence in <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Safety Consultancy</span> & Compliance
                </h1>
                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-xl">
                  Your trusted partner for comprehensive occupational health and safety solutions. Fortys-Safety provides expert safety auditing, consulting, and training services to ensure your business meets the highest standards of workplace safety and regulatory compliance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">Request Consultation</span>
                  <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Fortys-Safety?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Shield className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">ISO 45001:2018 Certified</h4>
                        <p className="text-sm text-white/70">Internationally recognized safety management standards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">9+ Years Experience</h4>
                        <p className="text-sm text-white/70">Extensive expertise in safety consultancy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">500+ Audits Completed</h4>
                        <p className="text-sm text-white/70">Proven track record of excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              Trusted Excellence
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve corporations, industrial firms, construction companies, NGOs, and government entities with uncompromising quality and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{indicator.name}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-4">
              Our Impact
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Numbers That <span className="text-green-300">Speak</span></h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Metrics that demonstrate our commitment and excellence in safety consultancy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/10 backdrop-blur rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    className="inline-block group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="text-white/90 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Safety Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full range of safety consultancy services designed to protect your people, assets, and reputation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span>Explore All Services</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              Get Started Today
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Enhance</span> Your Safety Standards?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a comprehensive safety consultation and take the first step towards a safer workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  )
}

export default HomePage
