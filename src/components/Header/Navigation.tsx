import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const links = [
    { href: '/articles', label: 'Articles' },
    { href: '/resources', label: 'Resources' },
    { href: '/support', label: 'Support' },
    { href: '/community', label: 'Community' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className={cn('items-center gap-6', className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            useLocation().pathname === link.href
              ? 'text-primary'
              : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}