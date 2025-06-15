
import React from 'react';
import { AlertTriangle, CheckCircle, Rocket, Award, Users, ArrowRight } from 'lucide-react';

const AILab = () => {
  const benefits = [
    {
      category: 'Technical Resources',
      icon: Rocket,
      items: [
        'Azure Sandbox Environment',
        '$500/month Azure credits',
        'Premium tools access',
        'GitHub Copilot license'
      ]
    },
    {
      category: 'Learning & Growth',
      icon: Award,
      items: [
        'Expert mentorship',
        'Hands-on projects',
        'Certification support',
        'Conference opportunities'
      ]
    },
    {
      category: 'Career Benefits',
      icon: Users,
      items: [
        'Build your portfolio',
        'Get recognized',
        'Expand your network',
        'Advance your career'
      ]
    }
  ];

  const requirements = [
    'Manager approval for time allocation',
    'Basic technical skills (Python/R basics)',
    'Completed AI Fundamentals training',
    'Clear project idea for first use case'
  ];

  const commitments = [
    'Create 1 use case per quarter',
    'Complete 2 internal projects per year',
    'Attend monthly lab meetings',
    'Share knowledge through presentations'
  ];

  const testimonials = [
    {
      text: "The AI Lab transformed my career. I went from Excel reports to building ML models.",
      author: "Jane D., Finance"
    },
    {
      text: "Best learning experience ever. Real tools, real problems, real impact.",
      author: "Mike S., Operations"
    },
    {
      text: "The mentorship made all the difference. I'm now leading our AI initiatives.",
      author: "Sarah K., HR"
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Read Requirements',
      description: 'Review all requirements and commitments thoroughly'
    },
    {
      step: 2,
      title: 'Get Manager Approval',
      description: 'Secure written approval for 4+ hours/week commitment'
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'Complete the application with your use case idea'
    },
    {
      step: 4,
      title: 'Start Onboarding',
      description: 'Begin your AI Lab journey with orientation session'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corporate-blue via-corporate-teal to-corporate-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI & Data Analytics Lab
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Build Real AI Solutions with Enterprise Tools
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-3xl mx-auto">
            Innovation Sandbox Program
          </p>
          
          <button className="inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg">
            Apply Now
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Warning Section */}
        <div className="bg-corporate-yellow/10 border border-corporate-yellow/30 rounded-xl p-6 mb-16">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-corporate-yellow mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Important: This is a Commitment, Not Just Access
              </h3>
              <p className="text-gray-700 mb-4">This program requires:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 4+ hours per week of active participation</li>
                <li>• Quarterly deliverables of working use cases</li>
                <li>• Collaboration with other departments</li>
                <li>• Knowledge sharing with the community</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What is AI Lab */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What is AI Lab?</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <p className="text-lg text-gray-700 mb-6">
              The AI Lab is a hands-on Azure sandbox environment where employees work with real enterprise AI tools 
              to solve actual business problems. This isn't just tool access – it's active participation in building 
              the future of our company's AI capabilities.
            </p>
            <p className="text-gray-600">
              Participants work on quarterly use cases that directly impact their departments while building 
              skills in machine learning, data analytics, and AI implementation.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-corporate-teal/10">
                      <IconComponent className="h-6 w-6 text-corporate-teal" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{benefit.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-corporate-green mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Requirements & Commitments</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-corporate-green mr-2" />
                Must Have
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-corporate-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-corporate-yellow mr-2" />
                Must Commit To
              </h3>
              <ul className="space-y-3">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-corporate-yellow rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {commitment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-corporate-teal/5 rounded-xl p-6 border border-corporate-teal/20">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-corporate-teal font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-corporate-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-corporate-blue to-corporate-teal rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join the AI Lab and start building the future of our company's AI capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-corporate-blue font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Apply Now
              </button>
              <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AILab;
