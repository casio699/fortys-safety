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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('/fortys-logo.png')] bg-center bg-no-repeat opacity-[0.02]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Excellence in Safety Consultancy & Compliance
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Your trusted partner for comprehensive occupational health and safety solutions. Fortys-Safety provides expert safety auditing, consulting, and training services to ensure your business meets the highest standards of workplace safety and regulatory compliance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-semibold text-lg hover:bg-primary/5 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Fortys-Safety?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">ISO 45001:2018 Certified</h4>
                      <p className="text-sm text-gray-600">Internationally recognized safety management standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">9+ Years Experience</h4>
                      <p className="text-sm text-gray-600">Extensive expertise in safety consultancy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">500+ Audits Completed</h4>
                      <p className="text-sm text-gray-600">Proven track record of excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve corporations, industrial firms, construction companies, NGOs, and government entities with uncompromising quality and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary-600" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{indicator.name}</h3>
                <p className="text-sm text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/80">Numbers that speak to our commitment and excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    className="inline-block"
                  />
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full range of safety consultancy services designed to protect your people, assets, and reputation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>Our Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Enhance Your Safety Standards?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive safety consultation and take the first step towards a safer workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover-lift hover-scale inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 glass text-white rounded-full font-semibold hover-lift hover-scale"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  )
}

export default HomePage
