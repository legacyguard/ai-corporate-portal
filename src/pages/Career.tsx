import React, { useState } from 'react';
import { Target, ChevronRight, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Career = () => {
  const [selectedTrack, setSelectedTrack] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [motivation, setMotivation] = useState('');
  const [managerEmail, setManagerEmail] = useState('');
  const [timeCommitment, setTimeCommitment] = useState(false);

  const phases = [
    {
      number: 1,
      title: 'Customer Needs Discovery',
      description: 'Identify market needs and emerging technologies',
      lead: 'Pavel Horsak & Andrej Šukoljukov',
      color: 'bg-corporate-yellow'
    },
    {
      number: 2,
      title: 'Upskilling & Certification',
      description: 'Access training programs and earn certifications',
      lead: 'Education Team',
      color: 'bg-orange-500'
    },
    {
      number: 3,
      title: 'Practicing in Sandbox',
      description: 'Hands-on experience with real projects',
      lead: 'Lubor Fedák (Sandbox Owner)',
      color: 'bg-corporate-teal'
    },
    {
      number: 4,
      title: 'Showing Your Skills',
      description: 'Present work and create case studies',
      lead: 'CTO, Consult Team',
      color: 'bg-corporate-blue'
    },
    {
      number: 5,
      title: 'Client Opportunities',
      description: 'Join client projects as specialist',
      lead: 'CPEs and other Account Leaders',
      color: 'bg-corporate-green'
    }
  ];

  const tracks = [
    {
      title: 'Data Science Track',
      icon: '🧬',
      lead: 'Aleksandar Stankovic',
      skills: ['Machine Learning', 'Predictive Analytics', 'AI Models']
    },
    {
      title: 'Analytics Track',
      icon: '📊',
      lead: 'Bara Pencikova',
      skills: ['Business Intelligence', 'Visualization', 'Insights']
    },
    {
      title: 'Data Engineering Track',
      icon: '🔧',
      lead: 'Tomas Nykodým',
      skills: ['Data Pipelines', 'ETL/ELT', 'Platform Engineering']
    },
    {
      title: 'Data Architecture Track',
      icon: '🏗️',
      lead: 'Coming Soon',
      skills: ['Solution Design', 'Integration', 'Patterns'],
      tbd: true
    },
    {
      title: 'Data Governance Track',
      icon: '🛡️',
      lead: 'Michal Moravec',
      skills: ['Compliance', 'Data Quality', 'Policy']
    },
    {
      title: 'AI Operations Track / MLOps Track',
      icon: '⚙️',
      lead: 'Coming Soon',
      skills: ['Model Deployment', 'ML Infrastructure', 'Responsible AI'],
      tbd: true
    }
  ];

  const partners = ['Microsoft Azure', 'Databricks', 'Google Cloud', 'AWS'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Application submitted successfully! You will receive confirmation within 5 business days.');
  };

  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corporate-blue to-corporate-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI & Data Career Pathway
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transform Your Career with Our 5-Phase Development Program
          </p>
          <Button 
            onClick={scrollToApplication}
            className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold py-3 px-8 text-lg"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Journey Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Your Journey to AI & Data Excellence
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className={`${phase.color} text-white rounded-t-lg`}>
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="font-bold">{phase.number}</span>
                      </div>
                      {index < phases.length - 1 && (
                        <ChevronRight className="h-5 w-5 opacity-70" />
                      )}
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="text-sm text-gray-500">
                      <strong>Lead:</strong> {phase.lead}
                    </div>
                    {phase.number === 3 && (
                      <div className="mt-3">
                        <a 
                          href="/lab" 
                          className="text-corporate-teal hover:underline text-sm font-medium"
                        >
                          → Connect to AI Lab Program
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Choose Your Specialization Track
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <Card key={index} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{track.icon}</div>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Lead:</strong> {track.lead}
                    {track.tbd && <span className="text-corporate-yellow ml-2">• Contact TBD</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <strong className="text-sm text-gray-700">Key Skills:</strong>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {track.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-corporate-green mr-2" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technology Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-gray-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600">
              Apply now to join our comprehensive AI & Data career development program
            </p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Track *
                  </label>
                  <select 
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                    required
                  >
                    <option value="">Choose your specialization...</option>
                    {tracks.map((track, index) => (
                      <option key={index} value={track.title}>{track.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Experience Level *
                  </label>
                  <div className="space-y-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="experience"
                          value={level}
                          checked={experienceLevel === level}
                          onChange={(e) => setExperienceLevel(e.target.value)}
                          className="mr-3"
                          required
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivation (minimum 100 characters) *
                  </label>
                  <textarea
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                    placeholder="Tell us why you want to join this program and what you hope to achieve..."
                    minLength={100}
                    required
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {motivation.length}/100 characters minimum
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Manager Email (for approval) *
                  </label>
                  <input
                    type="email"
                    value={managerEmail}
                    onChange={(e) => setManagerEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                    placeholder="manager@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={timeCommitment}
                      onChange={(e) => setTimeCommitment(e.target.checked)}
                      className="mr-3"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I confirm I can commit the expected time and understand the program requirements *
                    </span>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-corporate-blue hover:bg-corporate-blue/90 text-white py-3"
                >
                  Apply Now
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Applications reviewed within 5 business days
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="time-commitment">
              <AccordionTrigger>How much time commitment is required?</AccordionTrigger>
              <AccordionContent>
                The program requires approximately 4-6 hours per week, including training, hands-on practice, and collaboration activities. This commitment varies by phase and track specialization.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="technical-background">
              <AccordionTrigger>Do I need technical background?</AccordionTrigger>
              <AccordionContent>
                While technical experience is helpful, we welcome participants from all backgrounds. Our program includes foundational training and provides support based on your starting level. Most important is your motivation to learn and grow.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="ai-lab-relation">
              <AccordionTrigger>How does this relate to AI Lab?</AccordionTrigger>
              <AccordionContent>
                The AI Lab is integrated into Phase 3 (Practicing in Sandbox) of the career pathway. Career Path participants get priority access to AI Lab resources and projects. You can apply to both programs or start with one and transition to the other.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="switch-tracks">
              <AccordionTrigger>Can I switch tracks later?</AccordionTrigger>
              <AccordionContent>
                Yes! While we encourage focusing on one track initially, you can switch or add additional tracks as you progress. Many successful participants end up with expertise across multiple areas.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="certifications">
              <AccordionTrigger>What certifications are covered?</AccordionTrigger>
              <AccordionContent>
                The program covers industry-leading certifications from our technology partners including Microsoft Azure AI, AWS Machine Learning, Google Cloud Professional Data Engineer, and Databricks certifications. Specific certifications depend on your chosen track.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Career;
