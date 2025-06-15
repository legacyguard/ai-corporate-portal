
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, X, Clock, BookOpen } from 'lucide-react';

const Guides = () => {
  const goodPrompts = [
    {
      title: 'Specific and Clear',
      good: '"Write a professional email declining a meeting request, mentioning scheduling conflicts and offering alternative times"',
      bad: '"Write an email"',
      explanation: 'Specific instructions produce better, more targeted results'
    },
    {
      title: 'Context Provided',
      good: '"As a project manager, help me create a timeline for a 3-month software development project with 5 team members"',
      bad: '"Make a timeline"',
      explanation: 'Context helps AI understand your role and constraints'
    },
    {
      title: 'Desired Format',
      good: '"Create a bullet-point summary of the key benefits of remote work, maximum 5 points"',
      bad: '"Tell me about remote work"',
      explanation: 'Specifying format saves time and gives you exactly what you need'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'Being Too Vague',
      description: 'Generic prompts like "help me with work" produce generic, unhelpful responses',
      solution: 'Be specific about what you need, your role, and the desired outcome'
    },
    {
      mistake: 'Sharing Sensitive Information',
      description: 'Including company data, client names, or confidential information in prompts',
      solution: 'Use placeholder names and generic examples instead of real data'
    },
    {
      mistake: 'Not Fact-Checking',
      description: 'Assuming all AI-generated information is accurate and up-to-date',
      solution: 'Always verify important facts and dates from reliable sources'
    },
    {
      mistake: 'One-Shot Prompting',
      description: 'Expecting perfect results from the first prompt without iteration',
      solution: 'Refine your prompts and ask follow-up questions to improve results'
    },
    {
      mistake: 'Ignoring Bias',
      description: 'Not considering that AI responses may contain bias or outdated information',
      solution: 'Review outputs critically and consider multiple perspectives'
    }
  ];

  const productivityTips = [
    {
      category: 'Email & Communication',
      tips: [
        'Use AI to draft professional emails, then personalize them',
        'Create templates for common responses and requests',
        'Summarize long email threads to extract key action items',
        'Translate messages for international colleagues'
      ]
    },
    {
      category: 'Document Creation',
      tips: [
        'Generate outlines for reports and presentations',
        'Create first drafts of standard documents',
        'Proofread and improve existing content',
        'Format complex data into readable summaries'
      ]
    },
    {
      category: 'Research & Analysis',
      tips: [
        'Analyze pros and cons of different approaches',
        'Create comparison tables for decision-making',
        'Generate questions for stakeholder interviews',
        'Summarize industry trends and best practices'
      ]
    },
    {
      category: 'Planning & Organization',
      tips: [
        'Break down complex projects into manageable tasks',
        'Create meeting agendas with time allocations',
        'Generate checklists for recurring processes',
        'Plan training programs and learning paths'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-corporate-blue mr-3" />
            AI Usage Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical examples and tutorials for effective AI tool usage
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="getting-started" className="space-y-4">
          {/* Getting Started */}
          <AccordionItem value="getting-started" className="bg-white rounded-xl shadow-sm border border-gray-200">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">Getting Started with M365 Copilot</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    5 min read
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Access</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Open any Microsoft 365 app (Word, Excel, PowerPoint, Teams)</li>
                    <li>Look for the Copilot icon in the ribbon or sidebar</li>
                    <li>Click to open the Copilot chat panel</li>
                    <li>Start typing your request or question</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">First Steps</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Try simple requests like "Summarize this document" or "Create an outline"</li>
                    <li>• Experiment with different phrasings to see what works best</li>
                    <li>• Use the suggested prompts that appear when you open Copilot</li>
                    <li>• Don't hesitate to ask follow-up questions or request modifications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Practices</h3>
                  <div className="bg-corporate-green/10 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Start with clear, specific requests</li>
                      <li>• Provide context about your goal or audience</li>
                      <li>• Review and edit AI suggestions before using them</li>
                      <li>• Remember that Copilot learns from your feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Good vs Bad Prompts */}
          <AccordionItem value="prompts" className="bg-white rounded-xl shadow-sm border border-gray-200">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">Good vs Bad Prompts</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    7 min read
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-8">
                {goodPrompts.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{example.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      {/* Good Example */}
                      <div className="bg-corporate-green/5 border border-corporate-green/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="h-5 w-5 text-corporate-green mr-2" />
                          <span className="font-medium text-corporate-green">Good Example</span>
                        </div>
                        <p className="text-gray-700 italic">{example.good}</p>
                      </div>

                      {/* Bad Example */}
                      <div className="bg-corporate-red/5 border border-corporate-red/20 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <X className="h-5 w-5 text-corporate-red mr-2" />
                          <span className="font-medium text-corporate-red">Bad Example</span>
                        </div>
                        <p className="text-gray-700 italic">{example.bad}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-600">
                        <strong>Why this works:</strong> {example.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Common Mistakes */}
          <AccordionItem value="mistakes" className="bg-white rounded-xl shadow-sm border border-gray-200">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">Common Mistakes</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    4 min read
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6">
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-corporate-red mb-2 flex items-center">
                      <X className="h-5 w-5 mr-2" />
                      {mistake.mistake}
                    </h3>
                    <p className="text-gray-700 mb-3">{mistake.description}</p>
                    <div className="bg-corporate-green/10 rounded-lg p-3">
                      <p className="text-sm text-corporate-green">
                        <strong>Solution:</strong> {mistake.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Productivity Tips */}
          <AccordionItem value="productivity" className="bg-white rounded-xl shadow-sm border border-gray-200">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">Productivity Tips</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    8 min read
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-8">
                {productivityTips.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="bg-corporate-blue/5 rounded-lg p-3">
                          <p className="text-gray-700 text-sm">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Guides;
