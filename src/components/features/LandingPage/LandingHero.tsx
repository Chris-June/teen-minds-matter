import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/ui/Button';

export function LandingHero() {
  const navigate = useNavigate();

  const handleResourcesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/resources');
  };

  const handleCommunityClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/community');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Your Space to Grow
            <span className="block mt-2 text-primary">and Thrive</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            A friendly community where you can be yourself, share your journey, 
            and find support when you need it most. Because everyone deserves 
            to feel awesome! 🌟
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              type="button"
              variant="default"
              size="lg"
              onClick={handleResourcesClick}
              className="w-full sm:w-auto"
            >
              Explore Resources
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleCommunityClick}
              className="w-full sm:w-auto"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
