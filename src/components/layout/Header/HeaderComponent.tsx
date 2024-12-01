import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
          <ThemeToggle />
        </div>
        <Navigation className="hidden md:flex" />
        <div className="flex items-center space-x-4">
          <SearchBar className="hidden md:flex" />
          <Button variant="default" size="sm" className="hidden md:flex">
            Sign In
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto px-4 py-4">
            <Navigation className="flex flex-col space-y-4" />
            <div className="mt-4 space-y-4">
              <SearchBar />
              <Button variant="default" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}