import {
  LandingHero,
  LandingFeatures,
  LandingCTA,
} from '@/components/features/LandingPage/LandingExports';
import { BlogGrid } from '@/components/features/BlogGrid/BlogGridExports';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <LandingFeatures />
      <BlogGrid />
      <LandingCTA />
    </div>
  );
}