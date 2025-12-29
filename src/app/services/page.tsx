'use client'

import { Shield, Users, CheckCircle, Award, TrendingUp, ArrowRight, Clock, FileText, Target, Zap } from 'lucide-react'
import Layout from '@/components/Layout'

export default function ServicesPage() {

  const services = [
    {
      id: 'audits',
      icon: Shield,
      title: 'Safety Audits',
      description: 'Comprehensive safety audits to identify risks and ensure compliance with international standards.',
      features: [
        'Comprehensive workplace safety assessments',
        'Regulatory compliance audits',
        'Risk identification and evaluation',
        'Detailed audit reports with recommendations',
        'Follow-up verification services'
      ],
      process: [
        'Initial consultation and scope definition',
        'On-site safety inspection and documentation',
        'Gap analysis against standards',
        'Report generation and presentation',
        'Implementation support and follow-up'
      ]
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'Health & Safety Consulting',
      description: 'Expert consulting to develop and implement robust safety management systems.',
      features: [
        'Safety management system development',
        'Policy and procedure creation',
        'Safety culture transformation',
        'Continuous improvement programs',
        'Executive safety advisory'
      ],
      process: [
        'Current state assessment',
        'System design and planning',
        'Documentation development',
        'Training and implementation',
        'Monitoring and optimization'
      ]
    },
    {
      id: 'risk',
      icon: Target,
      title: 'Risk Assessments',
      description: 'Thorough risk assessment and mitigation strategies to prevent workplace incidents.',
      features: [
        'Hazard identification and analysis',
        'Risk assessment and prioritization',
        'Mitigation strategy development',
        'Emergency response planning',
        'Business continuity planning'
      ],
      process: [
        'Risk identification workshops',
        'Quantitative and qualitative analysis',
        'Risk matrix development',
        'Control measure recommendation',
        'Monitoring and review procedures'
      ]
    },
    {
      id: 'compliance',
      icon: Award,
      title: 'Compliance & Training',
      description: 'Customized training programs and compliance management to meet regulatory requirements.',
      features: [
        'Regulatory compliance management',
        'Customized training programs',
        'Competency assessment',
        'Documentation management',
        'Audit preparation support'
      ],
      process: [
        'Requirements analysis',
        'Training needs assessment',
        'Program development',
        'Delivery and evaluation',
        'Record keeping and reporting'
      ]
    },
    {
      id: 'fire',
      icon: Zap,
      title: 'Fire Prevention & Emergency Planning',
      description: 'Specialized fire safety consulting and emergency response planning.',
      features: [
        'Fire risk assessment',
        'Fire safety system design',
        'Emergency evacuation planning',
        'Fire safety training',
        'Fire drill coordination'
      ],
      process: [
        'Fire hazard analysis',
        'Protection system evaluation',
        'Emergency plan development',
        'Staff training programs',
        'Regular drill execution'
      ]
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
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We offer a full range of safety consultancy services designed to protect your people, assets, and reputation.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                        <service.icon className="text-primary-600" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle size={20} className="text-primary-600 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock size={20} className="text-primary-600 mr-2" />
                          Our Process
                        </h4>
                        <ol className="space-y-2">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Safety Standards?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a comprehensive safety consultation and take the first step towards a safer workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover-lift hover-scale inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+9613123456"
                className="px-8 py-4 glass text-white rounded-full font-semibold hover-lift"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
