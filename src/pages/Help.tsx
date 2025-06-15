
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, HelpCircle, Mail, Phone, Users, Shield } from 'lucide-react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 'access-m365',
      question: 'How do I access Microsoft 365 AI tools?',
      answer: 'M365 AI tools are already available in your Office apps. Look for the Copilot icon in Word, Excel, PowerPoint, and Teams. You can also access Bing Chat Enterprise through your Edge browser when signed in with your work account.',
      category: 'M365'
    },
    {
      id: 'what-included',
      question: 'What AI tools are included in my M365 E5 license?',
      answer: 'Your license includes Microsoft Copilot across all Office apps, Copilot in Teams for meeting summaries, AI features in Word/Excel/PowerPoint, and Bing Chat Enterprise for secure web search with AI assistance.',
      category: 'M365'
    },
    {
      id: 'safe-to-use',
      question: 'Is it safe to use M365 AI tools with company data?',
      answer: 'Yes! M365 AI tools are enterprise-grade and your data stays within our Microsoft tenant. They include built-in security, compliance features, and audit trails. However, never input sensitive personal or client information.',
      category: 'Safety'
    },
    {
      id: 'external-tools',
      question: 'Can I use ChatGPT or Google AI for work?',
      answer: 'External AI tools require approval through our request process. These tools don\'t have the same enterprise protections as M365. You must never input company data into external tools without approval.',
      category: 'External Tools'
    },
    {
      id: 'ai-lab-apply',
      question: 'How do I apply for the AI Lab program?',
      answer: 'The AI Lab requires a significant commitment (4+ hours/week). You need manager approval, basic technical skills, and a project idea. Visit the AI Lab page to learn about requirements and apply.',
      category: 'AI Lab'
    },
    {
      id: 'request-process',
      question: 'How long does the tool request process take?',
      answer: 'External tool requests are typically reviewed within 2-3 business days. The process includes business justification review and manager approval. You\'ll receive email confirmation of the decision.',
      category: 'Requests'
    },
    {
      id: 'data-privacy',
      question: 'What data should I never share with AI tools?',
      answer: 'Never share: customer information, financial data, employee personal details, passwords, proprietary information, legal documents, medical records, or any confidential company information.',
      category: 'Safety'
    },
    {
      id: 'ai-wrong',
      question: 'What if AI gives me wrong information?',
      answer: 'Always verify AI outputs, especially for important decisions. AI can make mistakes or have outdated information. Cross-check facts from reliable sources and use your professional judgment.',
      category: 'General'
    },
    {
      id: 'training-available',
      question: 'Is there training available for AI tools?',
      answer: 'Yes! Check our Guides section for tutorials and best practices. We also offer AI Fundamentals training (required for AI Lab) and regular lunch-and-learn sessions.',
      category: 'Training'
    },
    {
      id: 'security-incident',
      question: 'What if I accidentally shared sensitive information?',
      answer: 'Contact the Security Team immediately at security@company.com or call the emergency line. Don\'t wait - quick action can help minimize any potential impact.',
      category: 'Security'
    }
  ];

  const contacts = [
    {
      title: 'M365 Support',
      description: 'Help with Microsoft 365 AI tools and features',
      email: 'm365support@company.com',
      phone: '+1-555-0365',
      icon: Mail,
      color: 'corporate-green'
    },
    {
      title: 'AI Lab Team',
      description: 'Questions about the AI Lab program and applications',
      email: 'ailab@company.com',
      phone: '+1-555-0142',
      icon: Users,
      color: 'corporate-teal'
    },
    {
      title: 'Security Team',
      description: 'Security incidents and compliance questions',
      email: 'security@company.com',
      phone: '+1-555-0911',
      icon: Shield,
      color: 'corporate-red'
    },
    {
      title: 'General Help',
      description: 'IT support and general assistance',
      email: 'it@company.com',
      phone: '+1-555-0123',
      icon: HelpCircle,
      color: 'corporate-blue'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <HelpCircle className="h-10 w-10 text-corporate-blue mr-3" />
            Help & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions and get the support you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                />
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No FAQs found matching your search.</p>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-2">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg">
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-left font-medium text-gray-900">{faq.question}</span>
                          <span className="text-xs bg-corporate-blue/10 text-corporate-blue px-2 py-1 rounded-full ml-3">
                            {faq.category}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
              
              <div className="space-y-6">
                {contacts.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg bg-${contact.color}/10 mr-3 flex-shrink-0`}>
                          <IconComponent className={`h-5 w-5 text-${contact.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                          
                          <div className="space-y-2">
                            <a
                              href={`mailto:${contact.email}`}
                              className="flex items-center text-sm text-corporate-blue hover:text-corporate-blue/80"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              {contact.email}
                            </a>
                            <a
                              href={`tel:${contact.phone}`}
                              className="flex items-center text-sm text-corporate-blue hover:text-corporate-blue/80"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              {contact.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-corporate-red/10 border border-corporate-red/20 rounded-lg">
                <h3 className="font-semibold text-corporate-red mb-2 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Emergency
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  For immediate security incidents or data breaches
                </p>
                <a
                  href="tel:+1-555-0911"
                  className="inline-flex items-center px-3 py-2 bg-corporate-red text-white text-sm font-medium rounded hover:bg-corporate-red/90 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
