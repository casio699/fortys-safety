'use client'

import { Briefcase, Calendar, MapPin, Users, Shield, Award, Target, Zap } from 'lucide-react'
import Layout from '@/components/Layout'

export default function ExperiencePage() {

  const experience = [
    {
      period: '2021 - Present',
      role: 'Lead Safety Consultant',
      company: 'Fortys-Safety',
      type: 'Founder & Principal Consultant',
      description: 'Leading safety consultancy firm providing comprehensive OHS services to multinational clients across Lebanon and the Middle East.',
      achievements: [
        'Successfully implemented ISO 45001:2018 systems for 15+ organizations',
        'Conducted 200+ safety audits with 98% client satisfaction',
        'Developed customized safety training programs for 5000+ employees',
        'Reduced workplace incidents by 40% for key clients'
      ],
      skills: ['Strategic Planning', 'Risk Management', 'Compliance Auditing', 'Team Leadership']
    },
    {
      period: '2019 - 2021',
      role: 'Fire Prevention Coordinator',
      company: 'Lebanese Civil Defence',
      type: 'Government Contract',
      description: 'Coordinated fire prevention and emergency response operations for Beirut and surrounding regions.',
      achievements: [
        'Developed and implemented fire safety protocols for 50+ industrial facilities',
        'Trained 200+ emergency response personnel',
        'Reduced fire incidents by 30% through preventive measures',
        'Coordinated emergency response during critical incidents'
      ],
      skills: ['Fire Safety', 'Emergency Planning', 'Risk Assessment', 'Public Safety']
    },
    {
      period: '2016 - 2019',
      role: 'Health & Safety Officer',
      company: 'Industrial Manufacturing Group',
      type: 'Full-time Employment',
      description: 'Managed occupational health and safety programs for large-scale manufacturing operations with 500+ employees.',
      achievements: [
        'Achieved zero lost-time injuries for 18 consecutive months',
        'Implemented comprehensive safety management system',
        'Reduced insurance premiums by 25% through safety improvements',
        'Led safety culture transformation initiative'
      ],
      skills: ['OHS Management', 'Safety Training', 'Incident Investigation', 'Regulatory Compliance']
    }
  ]

  const industries = [
    {
      name: 'Manufacturing & Industrial',
      years: '5+ years',
      projects: '25+ projects',
      description: 'Comprehensive safety management for manufacturing plants, production facilities, and industrial operations.',
      clients: 'Leading manufacturers in Lebanon and GCC region'
    },
    {
      name: 'Construction & Engineering',
      years: '4+ years',
      projects: '30+ projects',
      description: 'Site safety management, risk assessments, and compliance for large-scale construction projects.',
      clients: 'Major construction companies and infrastructure developers'
    },
    {
      name: 'Oil & Gas',
      years: '3+ years',
      projects: '15+ projects',
      description: 'Specialized safety consulting for petroleum operations, refineries, and gas processing facilities.',
      clients: 'Regional oil companies and energy sector clients'
    },
    {
      name: 'Healthcare',
      years: '2+ years',
      projects: '10+ projects',
      description: 'Healthcare safety management, infection control, and occupational health programs for hospitals and clinics.',
      clients: 'Major hospitals and healthcare networks'
    }
  ]

  const keyProjects = [
    {
      name: 'Beirut Port Modernization',
      client: 'Port Authority Beirut',
      duration: '2022 - 2023',
      scope: 'Comprehensive safety audit and system implementation for port operations',
      impact: 'Improved safety compliance by 85%, reduced incidents by 60%'
    },
    {
      name: 'Regional Manufacturing Hub',
      client: 'International Manufacturing Corp',
      duration: '2021 - 2022',
      scope: 'ISO 45001:2018 certification and safety management system implementation',
      impact: 'Achieved certification in 6 months, zero incidents in first year'
    },
    {
      name: 'Healthcare Network Safety',
      client: 'Mediterranean Health Group',
      duration: '2020 - 2021',
      scope: 'Occupational health program development and staff training across 5 hospitals',
      impact: 'Reduced workplace injuries by 45%, improved staff safety awareness'
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
              Our Experience & Expertise
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Over 9 years of dedicated experience in occupational health and safety, 
              serving diverse industries with proven results and transformative solutions.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key roles and responsibilities that shaped our expertise
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover-lift border border-gray-100">
                        <div className="text-sm text-primary-600 font-semibold mb-2">{exp.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                        <p className="text-primary-600 font-semibold mb-1">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-3">{exp.type}</p>
                        <p className="text-gray-600 mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep domain knowledge across multiple sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Briefcase className="text-primary-600" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                      <p className="text-primary-600 font-semibold">{industry.years}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Projects</p>
                      <p className="font-semibold text-gray-900">{industry.projects}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-900">{industry.years}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500">Notable Clients:</p>
                    <p className="text-sm text-gray-700">{industry.clients}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transformative safety initiatives with measurable impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover-lift border border-gray-100">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <Target className="text-primary-600" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{project.client}</p>
                  <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Scope:</h4>
                      <p className="text-gray-600 text-sm">{project.scope}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                      <p className="text-green-600 text-sm font-semibold">{project.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Summary */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Our Experience Matters
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">9+ years of successful safety implementations across diverse industries with measurable results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Industry Knowledge</h3>
                      <p className="text-gray-600">Deep understanding of sector-specific challenges and regulatory requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Certified Expertise</h3>
                      <p className="text-gray-600">Internationally recognized certifications and continuous professional development.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-bg rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Impact by Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <p className="text-white/80">Safety Audits</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <p className="text-white/80">ISO Implementations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5000+</div>
                    <p className="text-white/80">Employees Trained</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <p className="text-white/80">Incident Reduction</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-white/20 rounded-lg">
                  <p className="text-center font-semibold">
                    Trusted by leading organizations across Lebanon and the Middle East
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
