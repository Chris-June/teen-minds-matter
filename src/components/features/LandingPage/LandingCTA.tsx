import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/ui/Button';

export const LandingCTA: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
  };

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
            <Button
              variant="default"
              size="lg"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
