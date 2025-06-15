
import React, { useState } from 'react';
import { Calendar as CalendarIcon, List, ChevronLeft, ChevronRight, Clock, MapPin, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

const Events = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [filterType, setFilterType] = useState('all');

  const eventTypes = {
    training: { label: 'Training', color: 'bg-corporate-blue text-white' },
    workshop: { label: 'Workshop', color: 'bg-corporate-green text-white' },
    hackathon: { label: 'Hackathon', color: 'bg-purple-600 text-white' },
    demo: { label: 'Demo Day', color: 'bg-orange-500 text-white' },
    community: { label: 'Community', color: 'bg-corporate-teal text-white' }
  };

  const sampleEvents = [
    {
      id: 1,
      title: 'Industry Hyperscaler Hackathon',
      type: 'hackathon',
      date: '2024-05-22',
      time: '09:00',
      duration: '8 hours',
      location: 'Hybrid',
      speakers: ['Antoine Shagoury (Global CTO)', 'Ismail Amla (Senior VP)'],
      description: 'Join our 24-hour hackathon featuring industry leaders and global technology experts.',
      spots: '45/50',
      timezones: 'APAC, EMEA, USA',
      featured: true
    },
    {
      id: 2,
      title: 'Copilot Basics Training',
      type: 'training',
      date: '2024-05-21',
      time: '14:00',
      duration: '2 hours',
      location: 'Virtual',
      description: 'New to Microsoft Copilot? Learn the fundamentals in this hands-on session.',
      spots: '12/20'
    },
    {
      id: 3,
      title: 'AI Lab Demo Day',
      type: 'demo',
      date: '2024-05-23',
      time: '15:00',
      duration: '1.5 hours',
      location: 'Hybrid',
      description: 'See what our AI Lab participants have built this month.',
      spots: '25/30'
    },
    {
      id: 4,
      title: 'Prompt Engineering Workshop',
      type: 'workshop',
      date: '2024-05-27',
      time: '10:00',
      duration: '3 hours',
      location: 'In-person',
      description: 'Master the art of prompt engineering for better AI outputs.',
      spots: '8/15'
    },
    {
      id: 5,
      title: 'Monthly AI Community Meetup',
      type: 'community',
      date: '2024-05-31',
      time: '16:00',
      duration: '2 hours',
      location: 'In-person',
      description: 'Informal networking and knowledge sharing session.',
      spots: '20/25'
    }
  ];

  const filteredEvents = filterType === 'all' 
    ? sampleEvents 
    : sampleEvents.filter(event => event.type === filterType);

  const featuredEvents = sampleEvents.filter(event => event.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const EventCard = ({ event, featured = false }: { event: any, featured?: boolean }) => (
    <Card className={`hover:shadow-lg transition-shadow duration-200 ${featured ? 'border-2 border-corporate-blue' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge className={eventTypes[event.type as keyof typeof eventTypes].color}>
            {eventTypes[event.type as keyof typeof eventTypes].label}
          </Badge>
          {featured && (
            <Badge variant="outline" className="text-corporate-blue border-corporate-blue">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">{event.title}</CardTitle>
        <CardDescription className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {event.time}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            {event.location} • {event.duration}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            {event.spots} spots
          </div>
          {event.speakers && (
            <div className="text-sm text-gray-600">
              <strong>Speakers:</strong> {event.speakers.join(', ')}
            </div>
          )}
          {event.timezones && (
            <div className="text-sm text-gray-600">
              <strong>Time zones:</strong> {event.timezones}
            </div>
          )}
        </div>
        <Button className="w-full">
          Register Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-corporate-blue to-corporate-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Events & Training Calendar
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Workshops, training sessions, hackathons, and community meetups
            </p>
            
            {/* View Toggle */}
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant={viewMode === 'calendar' ? 'secondary' : 'outline'}
                onClick={() => setViewMode('calendar')}
                className="flex items-center gap-2"
              >
                <CalendarIcon className="h-4 w-4" />
                Calendar View
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'outline'}
                onClick={() => setViewMode('list')}
                className="flex items-center gap-2"
              >
                <List className="h-4 w-4" />
                List View
              </Button>
            </div>

            {/* Filter */}
            <div className="flex justify-center">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-white text-gray-900 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="all">All Events</option>
                <option value="training">Training Sessions</option>
                <option value="workshop">Workshops</option>
                <option value="hackathon">Hackathons</option>
                <option value="demo">Demo Days</option>
                <option value="community">Community Meetups</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'calendar' ? (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Calendar View</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium px-4">
                    {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Calendar
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="w-full"
              />
              
              {/* Event Legend */}
              <div className="mt-6 flex flex-wrap gap-4">
                {Object.entries(eventTypes).map(([key, type]) => (
                  <div key={key} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                    <span className="text-sm text-gray-600">{type.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
