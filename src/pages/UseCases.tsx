
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, BarChart3, Mail, Calendar, MessageSquare, Presentation } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: FileText,
      title: 'Document Creation & Editing',
      category: 'Content Creation',
      examples: [
        'Draft professional emails and responses',
        'Create meeting agendas and summaries',
        'Write project proposals and reports',
        'Generate policy documents and procedures'
      ],
      tools: ['Word Copilot', 'Outlook Copilot']
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Insights',
      category: 'Analytics',
      examples: [
        'Analyze sales trends and performance metrics',
        'Create executive dashboards and reports',
        'Generate data summaries from large datasets',
        'Identify patterns in customer feedback'
      ],
      tools: ['Excel Copilot', 'Power BI']
    },
    {
      icon: Presentation,
      title: 'Presentation Design',
      category: 'Communication',
      examples: [
        'Create compelling slide decks for meetings',
        'Design training materials and workshops',
        'Build client presentation templates',
        'Generate visual content from data'
      ],
      tools: ['PowerPoint Copilot']
    },
    {
      icon: Users,
      title: 'Meeting Management',
      category: 'Collaboration',
      examples: [
        'Generate meeting summaries and action items',
        'Create follow-up tasks from discussions',
        'Analyze meeting participation and engagement',
        'Schedule and coordinate team meetings'
      ],
      tools: ['Teams Copilot', 'Outlook Copilot']
    },
    {
      icon: Mail,
      title: 'Communication Enhancement',
      category: 'Productivity',
      examples: [
        'Improve email tone and clarity',
        'Draft responses to common inquiries',
        'Create customer service templates',
        'Generate internal announcements'
      ],
      tools: ['Outlook Copilot', 'Teams Copilot']
    },
    {
      icon: MessageSquare,
      title: 'Knowledge Management',
      category: 'Information',
      examples: [
        'Create FAQ documents from team knowledge',
        'Organize and categorize information',
        'Generate training documentation',
        'Build searchable knowledge bases'
      ],
      tools: ['SharePoint Copilot', 'Teams Copilot']
    }
  ];

  const departments = [
    {
      name: 'Human Resources',
      color: 'corporate-blue',
      cases: [
        'Employee handbook updates',
        'Job description creation',
        'Performance review summaries',
        'Training material development'
      ]
    },
    {
      name: 'Finance',
      color: 'corporate-green',
      cases: [
        'Financial report generation',
        'Budget analysis and forecasting',
        'Expense report summaries',
        'Compliance documentation'
      ]
    },
    {
      name: 'Sales & Marketing',
      color: 'corporate-teal',
      cases: [
        'Sales proposal creation',
        'Customer communication templates',
        'Market analysis reports',
        'Campaign performance reviews'
      ]
    },
    {
      name: 'Operations',
      color: 'corporate-yellow',
      cases: [
        'Process documentation',
        'Operational efficiency reports',
        'Quality assurance protocols',
        'Vendor communication'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Copilot Internal Use Cases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical examples of how your colleagues are using Microsoft Copilot to boost productivity and streamline daily tasks
          </p>
        </div>

        {/* Safety Reminder */}
        <div className="bg-corporate-green/10 border border-corporate-green/20 rounded-lg p-6 mb-12">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-corporate-green mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe for Company Data</h3>
              <p className="text-gray-700">
                These use cases are safe with company data because Copilot for Work provides enterprise-grade security 
                and data protection. Your information stays within our Microsoft tenant and follows all compliance requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-2 rounded-lg bg-corporate-blue/10 mr-3">
                        <IconComponent className="h-6 w-6 text-corporate-blue" />
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{useCase.category}</span>
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-corporate-green mr-2 flex-shrink-0 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-3">
                      <p className="text-xs text-gray-500 mb-1">Recommended Tools:</p>
                      <div className="flex flex-wrap gap-1">
                        {useCase.tools.map((tool, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Department-Specific Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">By Department</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className={`text-xl text-${dept.color} flex items-center`}>
                    <div className={`w-3 h-3 bg-${dept.color} rounded-full mr-3`}></div>
                    {dept.name}
                  </CardTitle>
                  <CardDescription>Popular use cases in this department</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {dept.cases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="h-4 w-4 text-corporate-green mr-2 flex-shrink-0 mt-0.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Getting Started Section */}
        <section>
          <div className="bg-corporate-blue/5 border border-corporate-blue/20 rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These use cases are just the beginning. Start with simple tasks and gradually explore more advanced features 
                as you become comfortable with Copilot.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-corporate-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-corporate-blue font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Small</h3>
                <p className="text-sm text-gray-600">Begin with simple tasks like email drafting or document summarization</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-corporate-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-corporate-blue font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Practice Daily</h3>
                <p className="text-sm text-gray-600">Use Copilot in your regular workflow to build familiarity</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-corporate-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-corporate-blue font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Share & Learn</h3>
                <p className="text-sm text-gray-600">Share your discoveries with colleagues and learn from their experiences</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UseCases;
