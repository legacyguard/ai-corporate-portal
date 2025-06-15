
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Search, Users, FileText, TrendingUp } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const Newsletter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');

  const categories = ['All', 'AI Tools', 'Success Stories', 'Tech Updates', 'Tips & Tricks'];
  const dateFilters = ['All', 'Last Month', 'Last 3 Months', 'Last 6 Months', 'All Time'];

  const newsletters = [
    {
      id: '003',
      title: 'Copilot Tips That Save Hours Daily',
      date: 'Dec 14, 2024',
      category: 'Tips & Tricks',
      preview: 'Discover 5 hidden Copilot features that our team uses to automate repetitive tasks and boost productivity by 40%...',
      readTime: '5 min read',
      isLatest: true
    },
    {
      id: '002',
      title: 'From Zero to AI Hero: Jana\'s Journey',
      date: 'Dec 7, 2024',
      category: 'Success Stories',
      preview: 'Meet Jana from Finance who transformed her workflow using AI tools from our portal, reducing monthly reporting time from 8 hours to 2...',
      readTime: '7 min read',
      isLatest: false
    },
    {
      id: '001',
      title: 'Welcome to AI Weekly',
      date: 'Nov 30, 2024',
      category: 'Tech Updates',
      preview: 'Introducing your weekly dose of AI insights. Learn what\'s new in Microsoft 365 AI tools and how our team is leveraging them...',
      readTime: '6 min read',
      isLatest: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Tools': 'bg-corporate-blue text-white',
      'Success Stories': 'bg-corporate-green text-white',
      'Tech Updates': 'bg-corporate-teal text-white',
      'Tips & Tricks': 'bg-corporate-yellow text-black'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  const filteredNewsletters = newsletters.filter(newsletter => {
    const matchesSearch = newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsletter.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || newsletter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const latestNewsletter = newsletters.find(n => n.isLatest);

  const scrollToSubscription = () => {
    document.getElementById('subscription')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corporate-blue to-corporate-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Weekly Newsletter
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your guide to AI adoption and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToSubscription}
              className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold py-3 px-8 text-lg"
            >
              Subscribe Now
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-corporate-blue font-semibold py-3 px-8 text-lg"
            >
              View Archive
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Current Edition */}
            {latestNewsletter && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Edition</h2>
                <Card className="hover:shadow-lg transition-shadow duration-300 border-corporate-blue border-2">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-corporate-green text-white">Latest Edition</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {latestNewsletter.date}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{latestNewsletter.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge className={getCategoryColor(latestNewsletter.category)}>
                        {latestNewsletter.category}
                      </Badge>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {latestNewsletter.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{latestNewsletter.preview}</p>
                    <Button className="bg-corporate-blue hover:bg-corporate-blue/90">
                      Read Full Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Newsletter Archive */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Newsletter Archive</h2>
              
              {/* Filter Bar */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Search newsletters..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        Topic: {category}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                  >
                    {dateFilters.map(filter => (
                      <option key={filter} value={filter}>
                        Date: {filter}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Newsletter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredNewsletters.map((newsletter) => (
                  <Card key={newsletter.id} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">#{newsletter.id}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {newsletter.date}
                        </div>
                      </div>
                      <CardTitle className="text-lg mb-2">{newsletter.title}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={getCategoryColor(newsletter.category)}>
                          {newsletter.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {newsletter.readTime}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{newsletter.preview}</p>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Subscription Section */}
            <section id="subscription" className="mt-16 bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Don't Miss Next Week's Edition
                </h2>
                <div className="max-w-2xl mx-auto">
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center">
                      <span className="text-corporate-green mr-2">•</span>
                      Latest AI tool reviews and tutorials
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-green mr-2">•</span>
                      Success stories from your colleagues
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-green mr-2">•</span>
                      Tips from AI Lab participants
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-green mr-2">•</span>
                      Industry news and updates
                    </li>
                    <li className="flex items-center">
                      <span className="text-corporate-green mr-2">•</span>
                      Exclusive training announcements
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <NewsletterSignup />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Newsletter Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-corporate-blue mr-2" />
                    <span className="text-sm text-gray-600">Total Subscribers</span>
                  </div>
                  <span className="font-semibold">1,247</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-corporate-green mr-2" />
                    <span className="text-sm text-gray-600">Issues Published</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-corporate-teal mr-2" />
                    <span className="text-sm text-gray-600">Most Popular</span>
                  </div>
                  <span className="font-semibold text-sm">Tips & Tricks</span>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-1">Next Issue:</div>
                  <div className="font-semibold text-corporate-blue">Every Thursday</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
