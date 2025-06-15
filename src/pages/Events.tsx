
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [filterType, setFilterType] = useState('all');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const featuredEvents = [
    {
      title: 'Industry Hyperscaler Hackathon',
      description: 'Join global teams in building innovative AI solutions for enterprise challenges with industry leaders.',
      type: 'Hackathon',
      typeColor: 'bg-purple-100 text-purple-500',
      date: '2024-05-22',
      time: 'APAC: 9:00 AM | EMEA: 2:00 PM | USA: 9:00 AM',
      location: 'Global Virtual Event',
      spots: '150 / 200',
      gradient: 'from-purple-400 to-purple-600',
      prerequisites: 'Basic programming knowledge',
      speakers: 'Antoine Shagoury (Global CTO), Ismail Amla (SVP Consult)'
    },
    {
      title: 'AI Fundamentals Workshop',
      description: 'Learn the basics of AI and machine learning in this hands-on workshop.',
      type: 'Training',
      typeColor: 'bg-blue-100 text-blue-500',
      date: '2024-07-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Conference Room A',
      spots: '25 / 30',
      gradient: 'from-blue-400 to-blue-600',
      prerequisites: 'None'
    }
  ];

  const allEvents = [
    {
      title: 'Industry Hyperscaler Hackathon',
      description: 'Join global teams in building innovative AI solutions for enterprise challenges.',
      type: 'Hackathon',
      typeColor: 'bg-purple-100 text-purple-500',
      date: '2024-05-22',
      time: 'APAC: 9:00 AM | EMEA: 2:00 PM | USA: 9:00 AM',
      location: 'Global Virtual Event',
      spots: '150 / 200',
    },
    {
      title: 'AI Fundamentals Workshop',
      description: 'Learn the basics of AI and machine learning in this hands-on workshop.',
      type: 'Training',
      typeColor: 'bg-blue-100 text-blue-500',
      date: '2024-07-15',
      time: '10:00 AM - 12:00 PM',
      location: 'Conference Room A',
      spots: '25 / 30',
    },
    {
      title: 'AI in Healthcare Seminar',
      description: 'Discover how AI is transforming the healthcare industry.',
      type: 'Training',
      typeColor: 'bg-blue-100 text-blue-500',
      date: '2024-07-22',
      time: '2:00 PM - 4:00 PM',
      location: 'Auditorium B',
      spots: '75 / 100',
    },
    {
      title: 'Data Science Bootcamp',
      description: 'Intensive training in data analysis and machine learning techniques.',
      type: 'Training',
      typeColor: 'bg-blue-100 text-blue-500',
      date: '2024-08-10',
      time: '9:00 AM - 5:00 PM',
      location: 'Training Center C',
      spots: '15 / 20',
    },
    {
      title: 'AI for Sustainability Hackathon',
      description: 'Develop AI solutions for environmental challenges.',
      type: 'Hackathon',
      typeColor: 'bg-purple-100 text-purple-500',
      date: '2024-08-05',
      time: '9:00 AM - 5:00 PM',
      location: 'Innovation Lab',
      spots: '45 / 50',
    },
    {
      title: 'AI Demo Day',
      description: 'Showcase of innovative AI projects developed by our community.',
      type: 'Demo Day',
      typeColor: 'bg-orange-100 text-orange-500',
      date: '2024-08-15',
      time: '6:00 PM - 8:00 PM',
      location: 'Event Hall D',
      spots: '90 / 100',
    },
    {
      title: 'AI Community Meetup',
      description: 'Networking and knowledge sharing among AI enthusiasts.',
      type: 'Community',
      typeColor: 'bg-teal-100 text-teal-500',
      date: '2024-08-20',
      time: '7:00 PM - 9:00 PM',
      location: 'Conference Room E',
      spots: '30 / 40',
    },
    {
      title: 'AI-Powered Chatbots Workshop',
      description: 'Learn to build intelligent chatbots using the latest AI technologies.',
      type: 'Workshop',
      typeColor: 'bg-green-100 text-green-500',
      date: '2024-09-02',
      time: '1:00 PM - 3:00 PM',
      location: 'Workshop Room F',
      spots: '18 / 20',
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-3"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const event = allEvents.find(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === currentMonth.getFullYear() &&
          eventDate.getMonth() === currentMonth.getMonth() &&
          eventDate.getDate() === i;
      });

      days.push(
        <div key={i} className="p-3 border border-gray-200 text-center relative">
          {i}
          {event && (
            <div className="absolute top-1 left-1/2 -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-500">
              {event.type}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const filteredEvents = filterType === 'all'
    ? allEvents
    : allEvents.filter(event => event.type === filterType);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Calendar className="h-10 w-10 text-corporate-blue mr-3" />
            AI Events & Training Calendar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Workshops, training sessions, hackathons, and community meetups
          </p>
        </div>

        {/* View Toggle and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'calendar'
                  ? 'bg-white text-corporate-blue shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Calendar View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-corporate-blue shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              List View
            </button>
          </div>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-corporate-blue"
          >
            <option value="all">All Events</option>
            <option value="Training">Training</option>
            <option value="Workshop">Workshop</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Demo Day">Demo Day</option>
            <option value="Community">Community</option>
          </select>
        </div>

        {/* Featured Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Events</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-32 bg-gradient-to-r ${event.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.typeColor}`}>
                      {event.type}
                    </span>
                    <div className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Global Event
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.spots}
                    </div>
                  </div>
                  
                  {event.prerequisites && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Prerequisites:</h4>
                      <p className="text-sm text-gray-600">{event.prerequisites}</p>
                    </div>
                  )}
                  
                  {event.speakers && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Speakers:</h4>
                      <p className="text-sm text-gray-600">{event.speakers}</p>
                    </div>
                  )}
                  
                  <Button className="w-full bg-corporate-blue hover:bg-corporate-blue/90">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar/List View */}
        <section>
          {viewMode === 'calendar' ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-3 text-center font-medium text-gray-500 text-sm">
                    {day}
                  </div>
                ))}
                {renderCalendarDays()}
              </div>

              {/* Event Type Legend */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Event Types</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Training</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Workshop</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Hackathon</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Demo Day</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Community</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <List className="h-6 w-6 mr-2" />
                All Events
              </h2>
              
              <div className="space-y-6">
                {filteredEvents.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-corporate-blue">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="text-sm text-gray-600">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.typeColor}`}>
                          {event.type}
                        </span>
                        <Button size="sm" className="bg-corporate-blue hover:bg-corporate-blue/90">
                          Register
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.spots}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Events;
