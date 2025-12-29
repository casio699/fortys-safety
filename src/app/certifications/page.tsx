'use client'

import { Award, Shield, CheckCircle, FileText, Star, Clock } from 'lucide-react'
import Layout from '@/components/Layout'

export default function CertificationsPage() {

  const certifications = [
    {
      name: 'ISO 45001:2018',
      title: 'Occupational Health and Safety Management Systems',
      type: 'Lead Implementor',
      issuer: 'International Organization for Standardization',
      date: '2018',
      description: 'Comprehensive certification for implementing and managing occupational health and safety management systems based on ISO 45001:2018 standards.',
      scope: 'Full implementation and management of OHSMS, risk assessment, hazard control, and continuous improvement processes.',
      validity: '3 years',
      image: '/certifications/iso-45001.jpg'
    },
    {
      name: 'ISO 45001:2018',
      title: 'Occupational Health and Safety Management Systems',
      type: 'Internal Auditor',
      issuer: 'International Organization for Standardization',
      date: '2018',
      description: 'Specialized certification for conducting internal audits of occupational health and safety management systems.',
      scope: 'Internal audit planning, execution, reporting, and follow-up of OHSMS compliance assessments.',
      validity: '3 years',
      image: '/certifications/iso-auditor.jpg'
    },
    {
      name: 'Fire Safety Coordinator',
      title: 'Fire Prevention and Emergency Response',
      type: 'Professional Certification',
      issuer: 'Lebanese Civil Defence',
      date: '2019',
      description: 'Advanced certification in fire safety coordination, emergency response planning, and fire prevention strategies.',
      scope: 'Fire risk assessment, emergency response planning, fire safety system design, and coordination with emergency services.',
      validity: '2 years',
      image: '/certifications/fire-safety.jpg'
    },
    {
      name: 'Occupational Health & Safety Officer',
      title: 'Workplace Safety Management',
      type: 'Professional License',
      issuer: 'Lebanese Ministry of Labor',
      date: '2016',
      description: 'Official government license for practicing occupational health and safety consultancy in Lebanon.',
      scope: 'Workplace safety inspections, risk assessments, safety training, and compliance management.',
      validity: 'Renewable annually',
      image: '/certifications/ohs-officer.jpg'
    }
  ]

  const standards = [
    {
      name: 'ISO 45001:2018',
      description: 'International standard for occupational health and safety management systems',
      benefits: ['Reduces workplace incidents', 'Improves legal compliance', 'Enhances reputation', 'Increases productivity']
    },
    {
      name: 'OHSAS 18001',
      description: 'British standard for occupational health and safety management systems',
      benefits: ['Framework for OHS management', 'Risk assessment guidelines', 'Performance evaluation', 'Continuous improvement']
    },
    {
      name: 'ILO-OSH 2001',
      description: 'International Labour Organization guidelines for occupational safety and health',
      benefits: ['Global best practices', 'Worker protection', 'Safety culture development', 'Policy framework']
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 gradient-bg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-glow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Certifications & Standards
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Internationally recognized certifications that demonstrate our commitment 
              to excellence in occupational health and safety management.
            </p>
          </div>
        </section>

        {/* Main Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team holds internationally recognized certifications in occupational health and safety
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="text-primary-600" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                        <p className="text-primary-600 font-semibold mb-1">{cert.type}</p>
                        <p className="text-gray-600 text-sm">{cert.title}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <FileText className="text-primary-600 mr-2" size={20} />
                          Description
                        </h4>
                        <p className="text-gray-600">{cert.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="text-primary-600 mr-2" size={20} />
                          Scope
                        </h4>
                        <p className="text-gray-600">{cert.scope}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Issued By</p>
                          <p className="font-semibold text-gray-900">{cert.issuer}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Date Issued</p>
                          <p className="font-semibold text-gray-900">{cert.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Validity</p>
                          <p className="font-semibold text-gray-900">{cert.validity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Status</p>
                          <p className="font-semibold text-green-600">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Standards & Frameworks</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with internationally recognized standards to ensure comprehensive safety management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.name}</h3>
                  <p className="text-gray-600 mb-6">{standard.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    {standard.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Certification Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                      <p className="text-gray-600">Comprehensive evaluation of current safety management systems and practices.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Gap Analysis</h3>
                      <p className="text-gray-600">Identification of gaps between current practices and certification requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                      <p className="text-gray-600">Development and implementation of required systems and documentation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Audit & Certification</h3>
                      <p className="text-gray-600">Final audit and successful certification by accredited bodies.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-bg rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Certified Consultants?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="text-yellow-300" size={20} />
                    <span>Proven expertise and knowledge</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-yellow-300" size={20} />
                    <span>Internationally recognized standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-yellow-300" size={20} />
                    <span>Continuous professional development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-yellow-300" size={20} />
                    <span>Quality assurance and reliability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-yellow-300" size={20} />
                    <span>Legal compliance and risk mitigation</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-white" size={20} />
                    <div>
                      <p className="font-semibold">Average Certification Timeline</p>
                      <p className="text-sm">3-6 months depending on scope and complexity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
