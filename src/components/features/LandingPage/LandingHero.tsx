import React from 'react';
import { Link } from 'react-router-dom';

export const LandingHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Supporting Teen Mental Health
            <span className="text-primary block mt-2">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            A safe space for teens, parents, and professionals to connect, learn, and support each other through mental health journeys.
          </p>
          <div className="flex gap-4">
            <Link
              to="/resources"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Find Resources
            </Link>
            <Link
              to="/community"
              className="px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
