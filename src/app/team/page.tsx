'use client'

import { Users, Award, Shield, Mail, Phone, Linkedin } from 'lucide-react'
import Layout from '@/components/Layout'

export default function TeamPage() {

  const teamMembers = [
    {
      name: 'Joseph Fortys',
      title: 'Founder & Lead Safety Consultant',
      bio: 'With over 9 years of experience in occupational health and safety, Joseph founded Fortys-Safety with a vision to transform workplace safety standards in Lebanon and the region.',
      expertise: ['ISO 45001:2018 Lead Implementor', 'Safety Auditing', 'Risk Management', 'Fire Safety', 'Emergency Planning'],
      certifications: ['ISO 45001:2018 Lead Implementor', 'Internal Auditor', 'Fire Safety Coordinator'],
      experience: '9+ years',
      image: '/team/joseph.jpg'
    },
    {
      name: 'Sarah El-Khoury',
      title: 'Senior Safety Consultant',
      bio: 'Sarah brings extensive experience in developing and implementing comprehensive safety management systems for multinational corporations across various industries.',
      expertise: ['Safety Management Systems', 'Compliance Management', 'Training Development', 'Auditing', 'Policy Development'],
      certifications: ['ISO 45001:2018 Internal Auditor', 'Safety Professional Certification'],
      experience: '7+ years',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michel Haddad',
      title: 'Fire Safety Specialist',
      bio: 'Former Lebanese Civil Defence member with specialized expertise in fire prevention, emergency response planning, and industrial safety protocols.',
      expertise: ['Fire Safety Systems', 'Emergency Response', 'Industrial Safety', 'Hazard Analysis', 'Safety Training'],
      certifications: ['Fire Safety Coordinator', 'Emergency Response Manager', 'Industrial Safety Specialist'],
      experience: '5+ years',
      image: '/team/michel.jpg'
    },
    {
      name: 'Lina Abou-Rjeily',
      title: 'Health & Safety Officer',
      bio: 'Lina specializes in occupational health programs, workplace wellness initiatives, and compliance management for healthcare and educational institutions.',
      expertise: ['Occupational Health', 'Workplace Wellness', 'Compliance Management', 'Risk Assessment', 'Health Monitoring'],
      certifications: ['Occupational Health Specialist', 'Compliance Auditor', 'Risk Assessor'],
      experience: '4+ years',
      image: '/team/lina.jpg'
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
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our certified safety professionals bring decades of combined experience 
              to deliver exceptional safety consultancy services.
            </p>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary-600">15+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary-600">12</div>
                <div className="text-gray-600">Professional Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experts behind our commitment to workplace safety excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="text-gray-400" size={48} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-primary-600 font-semibold mb-3">{member.title}</p>
                        <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="text-primary-600 mr-2" size={20} />
                          Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Shield className="text-primary-600 mr-2" size={20} />
                          Certifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.certifications.map((cert, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-gray-500">{member.experience} experience</span>
                        <div className="flex space-x-2">
                          <button className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                            <Mail size={16} />
                          </button>
                          <button className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                            <Phone size={16} />
                          </button>
                          <button className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-200 transition-colors">
                            <Linkedin size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Our Team Makes the Difference
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Certified Professionals</h3>
                      <p className="text-gray-600">All team members hold internationally recognized certifications in occupational health and safety.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Diverse Industry Experience</h3>
                      <p className="text-gray-600">Our team brings experience from manufacturing, construction, healthcare, and government sectors.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Committed to Excellence</h3>
                      <p className="text-gray-600">We continuously update our knowledge and skills to stay ahead of industry standards and best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-bg rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
                <p className="mb-6">
                  We're always looking for talented safety professionals who share our passion for creating safer workplaces.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Competitive compensation package</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Professional development opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Work on impactful projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Collaborative team environment</span>
                  </div>
                </div>
                <button className="mt-8 px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover-lift hover-scale">
                  Send Your Resume
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
