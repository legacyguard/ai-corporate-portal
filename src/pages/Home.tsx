import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Rocket, FileText, Shield, BookOpen, HelpCircle, Users, Target, Mail, Calendar, Clock, MapPin } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      title: 'AI Newsletter',
      description: 'Weekly insights, tips, and updates from our AI journey',
      icon: Mail,
      link: '/newsletter',
      color: 'corporate-blue'
    },
    {
      title: 'Help & FAQ',
      description: 'Get answers and support for all AI and Data analytics tools',
      icon: HelpCircle,
      link: '/help',
      color: 'gray-600'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Industry Hyperscaler Hackathon',
      type: 'Hackathon',
      date: '2024-05-22',
      time: '09:00',
      typeColor: 'bg-purple-600'
    },
    {
      id: 2,
      title: 'Copilot Basics Training',
      type: 'Training',
      date: '2024-05-21',
      time: '14:00',
      typeColor: 'bg-corporate-blue'
    },
    {
      id: 3,
      title: 'AI Lab Demo Day',
      type: 'Demo Day',
      date: '2024-05-23',
      time: '15:00',
      typeColor: 'bg-orange-500'
    }
  ];

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corporate-blue to-corporate-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Swiss Army Knife for Kyndrylers
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
          <div className="mb-16">
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

      {/* Upcoming Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't Miss Out
            </h2>
            <p className="text-lg text-gray-600">
              Join our upcoming AI events and training sessions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${event.typeColor} text-white`}>
                      {event.type}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {formatEventDate(event.date)}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </span>
                  </div>
                  <Button className="w-full" size="sm">
                    Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-corporate-blue hover:bg-corporate-blue/90 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Calendar className="h-5 w-5 mr-2" />
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get weekly AI tips, tool updates, and success stories delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
