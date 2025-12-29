'use client'

import { Shield, Users, Award, Target, Eye, Heart } from 'lucide-react'
import Layout from '@/components/Layout'

export default function AboutPage() {

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety and well-being of people above all else, ensuring every decision and action reflects our commitment to protecting lives.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver the highest quality services with uncompromising standards, continuously improving our processes and methodologies.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles, building trust through consistent and reliable actions.'
    },
    {
      icon: Target,
      title: 'Expertise',
      description: 'We bring deep industry knowledge and technical expertise to every project, providing solutions that are both effective and sustainable.'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to safety management, staying ahead of industry trends and best practices.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, working collaboratively to achieve their safety goals and objectives.'
    }
  ]

  const milestones = [
    { year: '2016', title: 'Foundation', description: 'Fortys-Safety was established with a vision to transform workplace safety in Lebanon' },
    { year: '2018', title: 'ISO Certification', description: 'Achieved ISO 45001:2018 certification as Lead Implementor and Internal Auditor' },
    { year: '2019', title: 'Civil Defence Partnership', description: 'Began 3-year collaboration with Lebanese Civil Defence, enhancing emergency response capabilities' },
    { year: '2021', title: 'Expansion', description: 'Expanded services to include comprehensive fire safety and emergency planning solutions' },
    { year: '2023', title: 'Regional Growth', description: 'Extended services across the Middle East region with multinational clients' },
    { year: '2024', title: 'Digital Transformation', description: 'Launched digital safety management platforms and remote auditing capabilities' }
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
              About Fortys-Safety
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in creating safer workplaces through expert safety consultancy, 
              comprehensive audits, and innovative solutions.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-primary-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To protect and enhance workplace safety through expert consultancy, 
                  comprehensive audits, and innovative solutions that empower organizations 
                  to achieve excellence in occupational health and safety standards.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-primary-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading safety consultancy partner in the Middle East, 
                  recognized for our unwavering commitment to excellence, innovation, 
                  and the transformation of workplace safety culture across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our actions and define our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover-lift">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="text-primary-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones that shaped our growth and expertise
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
                        <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive safety solutions across multiple industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Manufacturing & Industrial',
                'Construction & Engineering',
                'Oil & Gas',
                'Healthcare & Pharmaceuticals',
                'Hospitality & Tourism',
                'Government & Public Sector',
                'Education & Research',
                'Logistics & Transportation'
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover-lift">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-primary-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
