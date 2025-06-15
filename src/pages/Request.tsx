import React, { useState } from 'react';
import { Info, Clock } from 'lucide-react';

const Request = () => {
  const [formData, setFormData] = useState({
    tool: '',
    justification: '',
    department: '',
    usage: '',
    managerEmail: '',
    otherTool: ''
  });

  const tools = [
    { value: 'google-gemini', label: 'Google Gemini' },
    { value: 'chatgpt', label: 'ChatGPT' },
    { value: 'perplexity', label: 'Perplexity' },
    { value: 'mistral-ai', label: 'Mistral AI' },
    { value: 'aws-bedrock', label: 'AWS Bedrock' },
    { value: 'other', label: 'Other (specify)' }
  ];

  const departments = [
    'Finance',
    'Marketing',
    'Sales',
    'Operations',
    'Human Resources',
    'IT',
    'Legal',
    'Customer Service',
    'Research & Development',
    'Other'
  ];

  const usageFrequencies = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'project-specific', label: 'Project-specific' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to a backend API
    console.log('Form submitted:', formData);
    alert('Request submitted successfully! You will receive confirmation via email.');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request Access to Additional AI Tools</h1>
          <p className="text-xl text-gray-600">
            Submit a request for tools not included in your M365 E5 license
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-corporate-blue/10 border border-corporate-blue/20 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-corporate-blue mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Before You Request</h3>
              <p className="text-gray-700">
                Remember: You already have full M365 AI access including Copilot, Teams AI, and Office AI features. 
                Only request additional tools if M365 doesn't meet your specific business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tool Selection */}
            <div>
              <label htmlFor="tool" className="block text-sm font-medium text-gray-700 mb-2">
                Which tool do you need access to? *
              </label>
              <select
                id="tool"
                name="tool"
                required
                value={formData.tool}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
              >
                <option value="">Select a tool...</option>
                {tools.map((tool) => (
                  <option key={tool.value} value={tool.value}>{tool.label}</option>
                ))}
              </select>
            </div>

            {/* Other Tool Specification */}
            {formData.tool === 'other' && (
              <div>
                <label htmlFor="otherTool" className="block text-sm font-medium text-gray-700 mb-2">
                  Please specify the tool name *
                </label>
                <input
                  type="text"
                  id="otherTool"
                  name="otherTool"
                  required
                  value={formData.otherTool}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                  placeholder="Enter tool name"
                />
              </div>
            )}

            {/* Business Justification */}
            <div>
              <label htmlFor="justification" className="block text-sm font-medium text-gray-700 mb-2">
                Business Justification *
              </label>
              <textarea
                id="justification"
                name="justification"
                required
                rows={4}
                minLength={100}
                value={formData.justification}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                placeholder="Explain why you need this specific tool and how it will benefit your work. Please describe what M365 AI tools cannot accomplish for your use case. (Minimum 100 characters)"
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.justification.length}/100 characters minimum
              </p>
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <select
                id="department"
                name="department"
                required
                value={formData.department}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
              >
                <option value="">Select your department...</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Usage Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Expected Usage Frequency *
              </label>
              <div className="space-y-2">
                {usageFrequencies.map((freq) => (
                  <label key={freq.value} className="flex items-center">
                    <input
                      type="radio"
                      name="usage"
                      value={freq.value}
                      checked={formData.usage === freq.value}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-corporate-blue focus:ring-corporate-blue border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{freq.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Manager Email */}
            <div>
              <label htmlFor="managerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Manager Email (for approval) *
              </label>
              <input
                type="email"
                id="managerEmail"
                name="managerEmail"
                required
                value={formData.managerEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent"
                placeholder="manager@company.com"
              />
              <p className="text-sm text-gray-500 mt-1">
                Your manager will receive an email to approve this request
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-corporate-blue hover:bg-corporate-blue/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Submit Request
              </button>
            </div>
          </form>

          {/* Note */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-600 mr-2" />
              <p className="text-sm text-gray-600">
                <strong>Processing Time:</strong> Requests are reviewed within 2-3 business days. 
                You'll receive email confirmation once your request is processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
