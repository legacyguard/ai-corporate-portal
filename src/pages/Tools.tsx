
import React from 'react';
import { CheckCircle, Lock, ExternalLink, Star } from 'lucide-react';

const Tools = () => {
  const m365Tools = [
    {
      name: 'Microsoft Copilot',
      description: 'Your AI assistant across all Microsoft 365 applications',
      features: 'Chat, content generation, data analysis, enterprise security',
      link: 'https://copilot.microsoft.com',
      available: true
    },
    {
      name: 'Copilot in Teams',
      description: 'AI-powered meeting summaries, action items, and chat assistance',
      features: 'Meeting recap, chat summaries, task extraction',
      link: 'https://teams.microsoft.com',
      available: true
    },
    {
      name: 'Copilot in Office',
      description: 'AI directly integrated into Word, Excel, PowerPoint',
      features: 'Document drafting, data insights, presentation design',
      link: 'https://office.com',
      available: true
    },
    {
      name: 'Bing Enterprise Chat',
      description: 'Secure web search with AI, protected by enterprise policies',
      features: 'Web search, fact-checking, research assistance',
      link: 'https://bing.com/chat',
      available: true
    }
  ];

  const externalTools = [
    {
      name: 'Google Gemini',
      description: 'Google\'s advanced AI model for text, code, and multimodal tasks',
      features: 'Large context window, code generation, reasoning',
      provider: 'Google',
      available: false
    },
    {
      name: 'ChatGPT',
      description: 'OpenAI\'s conversational AI for various text-based tasks',
      features: 'Natural conversation, writing assistance, analysis',
      provider: 'OpenAI',
      available: false
    },
    {
      name: 'Perplexity',
      description: 'AI-powered search engine with real-time information',
      features: 'Web search, citations, real-time data',
      provider: 'Perplexity',
      available: false
    },
    {
      name: 'Mistral AI',
      description: 'European AI platform focused on efficiency and privacy',
      features: 'Code generation, multilingual, efficient processing',
      provider: 'Mistral',
      available: false
    },
    {
      name: 'AWS Bedrock',
      description: 'Amazon\'s managed service for foundation models',
      features: 'Multiple models, enterprise integration, scalability',
      provider: 'Amazon',
      available: false
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Tools Overview</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what's already available in your M365 license and what requires additional approval
          </p>
        </div>

        {/* M365 Tools Section */}
        <section className="mb-16">
          <div className="bg-corporate-green/10 rounded-lg p-1 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center py-4 flex items-center justify-center">
              <Star className="h-6 w-6 text-corporate-green mr-2" />
              Included in Your M365 E5 License - Available Now!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {m365Tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-4 w-4 text-corporate-green mr-2" />
                      <span className="text-sm font-medium text-corporate-green">No request needed</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{tool.description}</p>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Features:</strong> {tool.features}
                  </p>
                </div>
                
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-corporate-green hover:bg-corporate-green/90 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Access Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* External Tools Section */}
        <section>
          <div className="bg-corporate-yellow/20 rounded-lg p-1 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center py-4 flex items-center justify-center">
              <Lock className="h-6 w-6 text-corporate-yellow mr-2" />
              Additional Tools - Request Required
            </h2>
          </div>

          {/* Warning Box */}
          <div className="bg-corporate-yellow/10 border border-corporate-yellow/30 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-corporate-yellow mr-3" />
              <p className="text-corporate-yellow font-medium">
                <strong>Important:</strong> You must request and receive approval before using these tools.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow opacity-75">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <div className="flex items-center mb-3">
                      <Lock className="h-4 w-4 text-corporate-yellow mr-2" />
                      <span className="text-sm font-medium text-corporate-yellow">Approval Required</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{tool.description}</p>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Features:</strong> {tool.features}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Provider:</strong> {tool.provider}
                  </p>
                </div>
                
                <a
                  href="/request"
                  className="inline-flex items-center px-4 py-2 bg-corporate-yellow hover:bg-corporate-yellow/90 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Request Access
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tools;
