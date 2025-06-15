
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Mail } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'compact' | 'full';
  className?: string;
}

const NewsletterSignup = ({ variant = 'full', className = '' }: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className={`text-center p-4 ${className}`}>
        <CheckCircle className="h-8 w-8 text-corporate-green mx-auto mb-2" />
        <p className="text-corporate-green font-medium">
          ✅ Successfully subscribed! Check your inbox for confirmation.
        </p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="your.email@kyndryl.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={!email || !agreed || isLoading}
          className="bg-corporate-blue hover:bg-corporate-blue/90"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="email"
            placeholder="your.email@kyndryl.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <Button 
          type="submit" 
          disabled={!email || !agreed || isLoading}
          className="bg-corporate-blue hover:bg-corporate-blue/90 px-8"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="newsletter-agreement"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-4 w-4 text-corporate-blue focus:ring-corporate-blue border-gray-300 rounded"
          required
        />
        <label htmlFor="newsletter-agreement" className="text-sm text-gray-600">
          I agree to receive weekly AI newsletters
        </label>
      </div>
      
      <p className="text-xs text-gray-500">
        Unsubscribe anytime. We respect your privacy.
      </p>
    </form>
  );
};

export default NewsletterSignup;
