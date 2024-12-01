import Hero from '@/components/features/Hero/HeroSection';
import { BlogGrid } from '@/components/features/BlogGrid/BlogGridExports';

export function HomePage() {
  return (
    <>
      <Hero />
      <BlogGrid />
    </>
  );
}