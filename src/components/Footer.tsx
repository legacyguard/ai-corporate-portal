
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdate = new Date().toLocaleDateString();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Safety Disclaimer */}
        <div className="bg-corporate-red/10 border border-corporate-red/20 rounded-lg p-4 mb-8">
          <p className="text-sm text-corporate-red font-medium text-center">
            <strong>⚠️ CRITICAL REMINDER:</strong> Never input company data, personal information, or client details into any AI tool except Copilot for Work. 
            For security incidents, contact IT Security immediately at security@company.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Getting Started</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-corporate-blue">Home</Link></li>
              <li><Link to="/tools" className="text-sm text-gray-600 hover:text-corporate-blue">M365 Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/lab" className="text-sm text-gray-600 hover:text-corporate-blue">AI Lab</Link></li>
              <li><Link to="/request" className="text-sm text-gray-600 hover:text-corporate-blue">Request Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Safety</h3>
            <ul className="space-y-2">
              <li><Link to="/safety" className="text-sm text-gray-600 hover:text-corporate-blue">Guidelines</Link></li>
              <li><a href="mailto:security@company.com" className="text-sm text-gray-600 hover:text-corporate-blue">Report Issue</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/guides" className="text-sm text-gray-600 hover:text-corporate-blue">How-to Guides</Link></li>
              <li><Link to="/help" className="text-sm text-gray-600 hover:text-corporate-blue">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="mailto:m365support@company.com" className="text-sm text-gray-600 hover:text-corporate-blue">M365 Support</a></li>
              <li><a href="mailto:ailab@company.com" className="text-sm text-gray-600 hover:text-corporate-blue">AI Lab Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:it@company.com" className="text-sm text-gray-600 hover:text-corporate-blue">IT Team</a></li>
              <li><a href="tel:+1-555-0123" className="text-sm text-gray-600 hover:text-corporate-blue">Help Desk</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Emergency</h3>
            <ul className="space-y-2">
              <li><a href="mailto:security@company.com" className="text-sm text-corporate-red hover:text-corporate-red font-medium">Security Team</a></li>
              <li><a href="tel:+1-555-0911" className="text-sm text-corporate-red hover:text-corporate-red font-medium">Emergency Line</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            <p>© {currentYear} Company Name. All rights reserved.</p>
            <p className="mt-1">Maintained by IT Team • Last updated: {lastUpdate}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-corporate-green text-white px-3 py-1 rounded-full text-xs font-medium">
              M365 E5 Licensed
            </div>
            <div className="bg-corporate-blue text-white px-3 py-1 rounded-full text-xs font-medium">
              Enterprise Secure
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
