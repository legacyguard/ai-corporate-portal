
import React from 'react';
import { Shield, CheckCircle, X, AlertTriangle, Lock } from 'lucide-react';

const Safety = () => {
  const goldenRules = [
    {
      icon: X,
      title: 'No Login Required',
      description: 'Never create accounts or log into external AI tools with company credentials'
    },
    {
      icon: Lock,
      title: 'Protect Company Data',
      description: 'Never input confidential company information, client data, or personal details'
    },
    {
      icon: CheckCircle,
      title: 'Verify All Outputs',
      description: 'Always fact-check and verify AI-generated content before using it'
    },
    {
      icon: AlertTriangle,
      title: 'Review Before Use',
      description: 'Review all AI outputs for accuracy, bias, and appropriateness before sharing'
    }
  ];

  const dosAndDonts = {
    dos: [
      'Use M365 AI tools for enterprise-protected work',
      'Ask general questions about processes or procedures',
      'Request help with writing and editing',
      'Use AI for research and information gathering',
      'Verify information from multiple sources',
      'Report security concerns immediately'
    ],
    donts: [
      'Share customer information or client details',
      'Input financial data or sensitive numbers',
      'Upload company documents to external tools',
      'Share employee personal information',
      'Input passwords or login credentials',
      'Trust AI outputs without verification'
    ]
  };

  const prohibitedData = [
    'Customer names, addresses, or contact information',
    'Financial data, revenue figures, or budget information',
    'Employee personal details or HR records',
    'Proprietary algorithms or trade secrets',
    'Security procedures or access credentials',
    'Legal documents or confidential agreements',
    'Medical information or health records',
    'Social Security numbers or tax information'
  ];

  const safetyChecklist = [
    'Is this information public or general knowledge?',
    'Would I be comfortable sharing this in a public forum?',
    'Does this contain any company-specific data?',
    'Am I using approved M365 tools when possible?',
    'Have I verified the AI output before using it?',
    'Is my usage compliant with company policies?'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Shield className="h-10 w-10 text-corporate-blue mr-3" />
            AI Safety Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential security and compliance guidelines for safe AI usage in our corporate environment
          </p>
        </div>

        {/* M365 Special Section */}
        <section className="mb-16">
          <div className="bg-corporate-green/10 border border-corporate-green/30 rounded-xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 text-corporate-green mr-2" />
                M365 AI Tools - Enterprise Protected
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-corporate-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-corporate-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Built-in Data Protection</h3>
                <p className="text-sm text-gray-600">Your data stays within our Microsoft tenant</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-corporate-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-corporate-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Guaranteed</h3>
                <p className="text-sm text-gray-600">Meets all enterprise security standards</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-corporate-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-corporate-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Audit Trails</h3>
                <p className="text-sm text-gray-600">All interactions are logged and monitored</p>
              </div>
            </div>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Usage Guidelines</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-corporate-green/5 border border-corporate-green/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-corporate-green mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                DO's - Safe Practices
              </h3>
              <ul className="space-y-3">
                {dosAndDonts.dos.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-corporate-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-corporate-red/5 border border-corporate-red/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-corporate-red mb-6 flex items-center">
                <X className="h-6 w-6 mr-2" />
                DON'Ts - Avoid These
              </h3>
              <ul className="space-y-3">
                {dosAndDonts.donts.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-5 w-5 text-corporate-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Golden Rules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Four Golden Rules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goldenRules.map((rule, index) => {
              const IconComponent = rule.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-corporate-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{rule.title}</h3>
                  <p className="text-gray-600 text-sm">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Prohibited Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What NOT to Share</h2>
          
          <div className="bg-corporate-red/5 border border-corporate-red/20 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedData.map((item, index) => (
                <div key={index} className="flex items-start">
                  <X className="h-5 w-5 text-corporate-red mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Safety Checklist</h2>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <p className="text-gray-600 mb-6 text-center">
              Before using any AI tool, ask yourself these questions:
            </p>
            
            <div className="space-y-4">
              {safetyChecklist.map((item, index) => (
                <label key={index} className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-corporate-green focus:ring-corporate-green border-gray-300 rounded mt-0.5 mr-3"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900">{item}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-corporate-green/10 rounded-lg">
              <p className="text-sm text-corporate-green font-medium text-center">
                ✅ All boxes should be checked before proceeding with AI tool usage
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section>
          <div className="bg-corporate-red/10 border border-corporate-red/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Incident?</h2>
            <p className="text-gray-700 mb-6">
              If you accidentally shared sensitive information or suspect a security issue:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@company.com"
                className="inline-flex items-center px-6 py-3 bg-corporate-red hover:bg-corporate-red/90 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Email Security Team
              </a>
              <a
                href="tel:+1-555-0911"
                className="inline-flex items-center px-6 py-3 border border-corporate-red text-corporate-red font-semibold rounded-lg hover:bg-corporate-red/5 transition-colors duration-200"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Safety;
