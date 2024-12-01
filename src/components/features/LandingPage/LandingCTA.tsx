import React from 'react';
import { Link } from 'react-router-dom';

export const LandingCTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our community today and take the first step towards better mental health.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
