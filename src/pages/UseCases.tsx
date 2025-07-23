
import React, { useState, useEffect, useRef } from 'react';
import { Users, Settings, BarChart2, Megaphone, Crown, BookOpen, FileText, Smile, MessageCircle, Monitor, Layers, FileCheck2, Search, FolderOpen, UserCheck, PieChart, ClipboardList, LayoutDashboard, Briefcase, MessageSquare, Banknote, Factory, Stethoscope, ShoppingBag, Landmark, Phone, Headset, ArrowRightLeft, Book, SmilePlus } from 'lucide-react';

const departments = [
  { key: 'hr', name: 'Human Resources', color: 'from-blue-500 to-blue-700' },
  { key: 'finance', name: 'Finance', color: 'from-cyan-500 to-cyan-700' },
  { key: 'sales', name: 'Sales & Marketing', color: 'from-indigo-500 to-indigo-700' },
  { key: 'operations', name: 'Operations', color: 'from-slate-500 to-slate-700' },
  { key: 'it', name: 'IT & Security', color: 'from-gray-700 to-gray-900' },
];

const departmentCards = [
  {
    key: 'hr',
    name: 'Human Resources (HR)',
    icon: Users,
    description: 'Empowering people, talent, and culture with AI-driven HR solutions.'
  },
  {
    key: 'itops',
    name: 'IT & Operations',
    icon: Settings,
    description: 'Streamlining IT and operational processes for efficiency and security.'
  },
  {
    key: 'customer-service',
    name: 'Customer Service & Support',
    icon: Headset,
    description: 'Delivering exceptional support and satisfaction with intelligent service tools.'
  },
  {
    key: 'finance',
    name: 'Finance & Procurement',
    icon: BarChart2,
    description: 'Optimizing financial management and procurement with intelligent automation.'
  },
  {
    key: 'sales',
    name: 'Sales & Marketing',
    icon: Megaphone,
    description: 'Accelerating growth and engagement through data-driven sales and marketing.'
  },
  {
    key: 'leadership',
    name: 'Leadership & Strategy',
    icon: Crown,
    description: 'Driving vision and strategy with actionable insights and analytics.'
  },
];

const industries = [
  'All Industries',
  'Banking',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Telecommunications',
  'Energy',
];

const useCases = {
  hr: [
    { title: 'Automated Onboarding', description: 'Streamline new employee onboarding with AI-driven document processing and personalized training paths.' },
    { title: 'Employee Sentiment Analysis', description: 'Analyze feedback and engagement surveys to improve workplace satisfaction.' },
  ],
  finance: [
    { title: 'Expense Report Automation', description: 'AI-powered extraction and validation of receipts for faster reimbursement.' },
    { title: 'Fraud Detection', description: 'Real-time anomaly detection in transactions to prevent financial fraud.' },
  ],
  sales: [
    { title: 'Lead Scoring', description: 'Prioritize sales leads using predictive analytics for higher conversion rates.' },
    { title: 'Customer Insights', description: 'Aggregate and analyze customer data for targeted marketing.' },
  ],
  operations: [
    { title: 'Supply Chain Optimization', description: 'AI-driven demand forecasting and inventory management.' },
    { title: 'Process Automation', description: 'Automate repetitive operational tasks to boost efficiency.' },
  ],
  it: [
    { title: 'Threat Detection', description: 'Monitor network activity and detect security threats in real time.' },
    { title: 'Self-Service IT Support', description: 'AI chatbots for instant resolution of common IT issues.' },
  ],
};

const departmentDetails = [
  {
    key: 'hr',
    name: 'Human Resources (HR)',
    bg: 'bg-blue-50',
    useCases: [
      {
        icon: UserCheck,
        title: 'Smart Onboarding',
        description: 'Automated task assignment, documents and training for new employees',
      },
      {
        icon: BookOpen,
        title: 'Internal Knowledge Base',
        description: 'Central location for employees to find internal guidelines and procedures',
      },
      {
        icon: Smile,
        title: 'Employee Satisfaction Analysis',
        description: 'AI analyzes surveys to identify key trends and issues',
      },
    ],
  },
  {
    key: 'itops',
    name: 'IT & Operations',
    bg: 'bg-cyan-50',
    useCases: [
      {
        icon: MessageCircle,
        title: 'IT Support Automation',
        description: 'Chatbot handles common IT issues and escalates complex requests',
      },
      {
        icon: Monitor,
        title: 'System Health Monitoring',
        description: 'Personalized dashboard showing key metrics from various systems',
      },
      {
        icon: Layers,
        title: 'License & Asset Management',
        description: 'AI helps optimize software license usage and track hardware lifecycle',
      },
    ],
  },
  {
    key: 'customer-service',
    name: 'Customer Service & Support',
    bg: 'bg-teal-50',
    useCases: [
      {
        icon: ArrowRightLeft,
        title: 'Smart Ticket Management',
        description: 'AI automatically categorizes and routes customer inquiries to the right support specialist based on issue type, priority, and agent expertise',
      },
      {
        icon: Book,
        title: 'AI-Powered Help Center',
        description: 'Customers get instant answers from an intelligent knowledge base that learns from past interactions and continuously improves responses',
      },
      {
        icon: SmilePlus,
        title: 'Real-time Satisfaction Monitoring',
        description: 'Monitor customer satisfaction in real-time through conversation analysis, enabling proactive intervention and service improvement',
      },
    ],
  },
  {
    key: 'finance',
    name: 'Finance & Procurement',
    bg: 'bg-indigo-50',
    useCases: [
      {
        icon: BarChart2,
        title: 'Automated Reporting',
        description: 'AI portal automatically generates and distributes financial reports',
      },
      {
        icon: FileCheck2,
        title: 'Invoice Approval Acceleration',
        description: 'Intelligent workflow routing invoices to correct approvers',
      },
      {
        icon: Search,
        title: 'Contract Search',
        description: 'AI enables quick search of key clauses and terms in supplier contracts',
      },
    ],
  },
  {
    key: 'sales',
    name: 'Sales & Marketing',
    bg: 'bg-slate-50',
    useCases: [
      {
        icon: FolderOpen,
        title: 'Marketing Materials Repository',
        description: 'Sales teams have instant access to latest presentations and case studies',
      },
      {
        icon: Megaphone,
        title: 'Key Customer Personalization',
        description: 'Secure micro-portals for strategic clients with relevant information',
      },
      {
        icon: PieChart,
        title: 'Campaign Performance Analysis',
        description: 'Dashboard aggregating data from various marketing platforms',
      },
    ],
  },
  {
    key: 'leadership',
    name: 'Leadership & Strategy',
    bg: 'bg-gray-50',
    useCases: [
      {
        icon: LayoutDashboard,
        title: 'Executive Dashboard',
        description: 'Consolidated view of key performance indicators in real-time',
      },
      {
        icon: ClipboardList,
        title: 'Strategic Project Management',
        description: 'Central place for tracking progress, risks and budgets',
      },
      {
        icon: MessageSquare,
        title: 'Communication Portal',
        description: 'Efficient channel for management to communicate company vision',
      },
    ],
  },
];

const industriesShowcase = [
  { key: 'finance', name: 'Finance', icon: Banknote, color: 'from-blue-500 to-blue-700' },
  { key: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'from-cyan-500 to-cyan-700' },
  { key: 'healthcare', name: 'Healthcare', icon: Stethoscope, color: 'from-green-500 to-green-700' },
  { key: 'retail', name: 'Retail', icon: ShoppingBag, color: 'from-indigo-500 to-indigo-700' },
  { key: 'public', name: 'Public Sector', icon: Landmark, color: 'from-yellow-500 to-yellow-700' },
  { key: 'telecom', name: 'Telecommunications', icon: Phone, color: 'from-purple-500 to-purple-700' },
];

export default function UseCases() {
  const [selectedDept, setSelectedDept] = useState('hr');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [activeSection, setActiveSection] = useState('hr');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Smooth scroll and hash update
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // Set up Intersection Observer for fade-in and active section
  useEffect(() => {
    const sections = departmentDetails.map((dept) => document.getElementById(`dept-${dept.key}`));
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadein');
          const id = entry.target.getAttribute('id')?.replace('dept-', '');
          if (id) setActiveSection(id);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.3,
    });
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Handle URL hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100);
    }
  }, []);

  // Keyboard navigation for department nav
  const handleDeptNavKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, deptKey: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedDept(deptKey);
      scrollToSection(`dept-${deptKey}`);
    }
  };

  return (
    <main className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
        aria-label="Hero section"
      >
        {/* Background image with gradient overlay */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
          alt="Abstract AI and data background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-gray-900/90" aria-hidden="true" />
        {/* Content */}
        <div
          className="relative z-10 w-full max-w-3xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center animate-fadein"
          style={{ minHeight: '70vh' }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Solutions Designed for Your Customer Needs
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow">
            Explore how Kyndryl AI services address specific challenges in your client's business model and industry. Find your use case and unlock your customer's potential benefit from Kyndryl's AI services.
          </p>
          <a
            href="mailto:ai-solutions@company.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 text-lg"
            role="button"
            aria-label="Bring your AI use case proposal"
          >
            Bring your AI use case proposal
          </a>
        </div>
        {/* Fade-in animation keyframes */}
        <style>{`
          .animate-fadein {
            opacity: 0;
            animation: fadein 1.2s ease 0.1s forwards;
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: none; }
          }
        `}</style>
      </section>

      {/* Department Navigation Section */}
      <nav
        className="max-w-6xl mx-auto px-4 py-12"
        aria-label="Department navigation"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {departmentCards.map((dept) => {
            const Icon = dept.icon;
            const isActive = activeSection === dept.key;
            return (
              <a
                key={dept.key}
                href={`#dept-${dept.key}`}
                onClick={e => {
                  e.preventDefault();
                  setSelectedDept(dept.key);
                  scrollToSection(`dept-${dept.key}`);
                }}
                onKeyDown={e => handleDeptNavKeyDown(e, dept.key)}
                className={
                  `group focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-2xl transition-all duration-200 ${isActive ? 'ring-4 ring-blue-400 scale-105 bg-blue-50 border-blue-200' : ''}`
                }
                tabIndex={0}
                aria-label={`Go to ${dept.name}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <div
                  className={
                    `flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 p-8 h-full border border-gray-100 group-hover:scale-105 group-hover:bg-blue-50 group-hover:border-blue-200 group-focus:scale-105 group-focus:bg-blue-50 group-focus:border-blue-200 ${isActive ? 'border-blue-400' : ''}`
                  }
                  style={{ minHeight: 240 }}
                >
                  <div className="mb-4">
                    <Icon className={`h-12 w-12 ${isActive ? 'text-blue-800' : 'text-blue-600'} group-hover:text-blue-800 group-focus:text-blue-800 transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-800 group-focus:text-blue-800 transition-colors duration-200 text-center ${isActive ? 'text-blue-800' : ''}`}>
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 text-center text-base">
                    {dept.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Industry Filtering/Showcase Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20 pt-2 pb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Examples from Industries</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {industriesShowcase.map((industry) => {
            const Icon = industry.icon;
            return (
              <button
                key={industry.key}
                type="button"
                className={
                  `group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${industry.color} text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base md:text-lg` +
                  ' cursor-pointer select-none'
                }
                tabIndex={0}
                aria-label={industry.name}
                style={{ minWidth: 160 }}
              >
                <Icon className="h-6 w-6 text-white group-hover:text-gray-100 transition-colors duration-200" aria-hidden="true" />
                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Navigation Section */}
      <nav id="departments" className="max-w-5xl mx-auto mt-[-60px] mb-12 px-4 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {departments.map((dept) => (
            <button
              key={dept.key}
              onClick={() => {
                setSelectedDept(dept.key);
                scrollToSection(`dept-${dept.key}`);
              }}
              className={`group flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br ${dept.color} text-white shadow-md hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${selectedDept === dept.key ? 'ring-4 ring-blue-300' : ''}`}
              aria-label={dept.name}
            >
              <span className="text-lg font-semibold mb-2">{dept.name}</span>
              <span className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white mt-2" />
            </button>
          ))}
        </div>
      </nav>

      {/* Industry Filtering Section */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between bg-white rounded-xl shadow p-6">
          <label htmlFor="industry" className="font-medium text-gray-700">Filter by Industry:</label>
          <select
            id="industry"
            value={selectedIndustry}
            onChange={e => setSelectedIndustry(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Detailed Use Cases Sections */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        {departmentDetails.map((dept, i) => (
          <section
            key={dept.key}
            id={`dept-${dept.key}`}
            className={`${dept.bg} mb-12 py-12 px-4 rounded-3xl shadow-sm transition-colors duration-300`}
            aria-labelledby={`heading-${dept.key}`}
          >
            <header className="mb-8 flex items-center gap-4">
              <div className="w-3 h-12 rounded bg-gradient-to-b from-blue-400 to-blue-700" />
              <h2 id={`heading-${dept.key}`} className="text-2xl md:text-3xl font-bold text-gray-800">{dept.name}</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dept.useCases.map((uc, idx) => {
                const Icon = uc.icon;
                return (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 border border-gray-100 flex flex-col items-center p-8 group focus-within:ring-4 focus-within:ring-blue-200 animate-fadein"
                    tabIndex={0}
                  >
                    <Icon className="h-10 w-10 text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-200" aria-hidden="true" />
                    <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{uc.title}</h3>
                    <p className="text-gray-600 text-center mb-6 flex-1">{uc.description}</p>
                    <a
                      href="#"
                      className="inline-block mt-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 text-base"
                      tabIndex={0}
                      aria-label={`Learn more about ${uc.title}`}
                    >
                      Learn More
                    </a>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </section>

      {/* Call-to-Action Footer Section */}
      <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20 px-4 mt-16 overflow-hidden">
        {/* Optional subtle pattern/gradient overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">Have Your Own Idea or Need Consultation?</h2>
          <p className="mb-8 text-blue-100 text-lg md:text-xl max-w-xl mx-auto">Our team of experts is ready to discuss your specific requirements and propose a tailored solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
            <a
              href="mailto:ai-solutions@company.com?subject=Schedule%20a%20Consultation"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-200 text-lg animate-fadein"
              role="button"
              aria-label="Schedule a Consultation"
            >
              Schedule a Consultation
            </a>
            <a
              href="mailto:ai-solutions@kyndryl.com"
              className="inline-block px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 text-lg animate-fadein"
              role="button"
              aria-label="Bring your AI use case proposal"
            >
              Bring your AI use case proposal
            </a>
          </div>
          {/* Optional trust/contact info */}
          <div className="text-blue-200 text-sm mt-2">
            <span className="inline-block mr-2">Trusted by Kyndryl's customers</span>
            <span className="inline-block">| ai-solutions@kyndryl.com</span>
          </div>
        </div>
        <style>{`
          .animate-fadein {
            opacity: 0;
            animation: fadein 1.2s ease 0.1s forwards;
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: none; }
          }
        `}</style>
      </footer>
    </main>
  );
}
