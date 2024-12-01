import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search articles..."
        className="h-9 w-[200px] rounded-md border bg-background px-9 text-sm outline-none focus:border-primary"
        aria-label="Search articles"
      />
    </div>
  );
}