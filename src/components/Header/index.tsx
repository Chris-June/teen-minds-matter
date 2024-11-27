import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { SearchBar } from './SearchBar';
import { Navigation } from './Navigation';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <a href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Teen Minds Matter</span>
            </a>
          </div>

          <Navigation className="hidden md:flex" />

          <div className="flex items-center gap-4">
            <SearchBar className="hidden md:flex" />
            <ThemeToggle />
            <Button variant="default" size="sm" className="hidden md:flex">
              Sign In
            </Button>
          </div>
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