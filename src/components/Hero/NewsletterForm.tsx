import React from 'react';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="rounded-lg bg-muted/50 p-6">
      <h3 className="mb-2 text-lg font-semibold">Stay Updated</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Get weekly insights and resources for mental wellness.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:border-primary"
            required
          />
        </div>
        <Button 
          type="submit" 
          disabled={status === 'loading'}
          className="group"
        >
          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          Subscribe
        </Button>
      </form>
      
      {status === 'success' && (
        <p className="mt-2 text-sm text-primary">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-sm text-destructive">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}