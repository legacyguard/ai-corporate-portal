import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Rocket, FileText, Shield, BookOpen, HelpCircle, Users, Target } from 'lucide-react';

const Home = () => {
  const resourceCards = [
    {
      title: 'How-to Guides',
      description: 'Tutorials for effective AI usage',
      icon: BookOpen,
      link: '/guides',
      color: 'corporate-blue'
    },
    {
      title: 'Copilot Internal Use Cases',
      description: 'Practical examples for daily usage',
      icon: Users,
      link: '/use-cases',
      color: 'corporate-green'
    },
    {
      title: 'AI Career Path',
      description: 'Join our 5-phase journey from learning to leading in AI & Data',
      icon: Target,
      link: '/career',
      color: 'corporate-teal'
    },
    {
      title: 'AI Lab Program',
      description: 'Join our exclusive Azure sandbox for hands-on experience',
      icon: Rocket,
      link: '/lab',
      color: 'corporate-teal'
    },
    {
      title: 'Request Tools',
      description: 'Need Google, AWS, or other platforms? Submit request for approval',
      icon: FileText,
      link: '/request',
      color: 'corporate-yellow'
    },
    {
      title: 'Safety Rules',
      description: 'Essential guidelines for secure AI usage in corporate environment',
      icon: Shield,
      link: '/safety',
      color: 'corporate-red'
    },
    {
      title: 'Help & FAQ',
      description: 'Get answers and support for all AI and Data analytics tools',
      icon: HelpCircle,
      link: '/help',
      color: 'gray-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corporate-blue to-corporate-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Tools for Employees
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Full AI access included in your M365 E5 license
          </p>
          
          {/* Success Banner */}
          <div className="bg-corporate-green rounded-lg p-4 mb-4 text-left max-w-4xl mx-auto">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
              <span className="font-semibold text-lg">
                You already have FULL access to Microsoft AI tools - no request needed!
              </span>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="bg-corporate-red rounded-lg p-4 text-left max-w-4xl mx-auto">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0" />
              <span className="font-semibold text-lg">
                WARNING: Never input company data, personal information, or client details into any AI tool except Copilot for Work!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* M365 Section */}
          <div className="mb-16">
            <div className="bg-corporate-green/10 border border-corporate-green rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Microsoft AI Suite - Ready to Use Now!
                </h2>
                <div className="inline-flex items-center bg-corporate-green text-white px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Included in Your M365 E5 License
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Your M365 E5 license includes complete access to:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-corporate-green mr-3" />
                      Microsoft Copilot (formerly Bing Chat Enterprise)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-corporate-green mr-3" />
                      Copilot in Microsoft 365 apps
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-corporate-green mr-3" />
                      AI features in Teams, Word, Excel, PowerPoint
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-corporate-green mr-3" />
                      Enterprise-grade security and compliance
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    No request needed - start using today!
                  </p>
                </div>
                
                <div className="text-center">
                  <Link
                    to="/tools"
                    className="inline-flex items-center px-8 py-4 bg-corporate-green hover:bg-corporate-green/90 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
                  >
                    Start Using Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Additional Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Link
                    key={index}
                    to={card.link}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 p-6 hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-${card.color}/10`}>
                        <IconComponent className={`h-6 w-6 text-${card.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-corporate-blue transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
