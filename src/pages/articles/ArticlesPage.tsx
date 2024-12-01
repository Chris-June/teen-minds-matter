import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';

export function ArticlesPage() {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [category, setCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'anxiety', name: 'Anxiety' },
    { id: 'depression', name: 'Depression' },
    { id: 'self-care', name: 'Self Care' },
    { id: 'relationships', name: 'Relationships' },
  ];

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold">Articles</h1>
            <p className="text-muted-foreground">
              Explore our collection of articles on mental health and wellness
            </p>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button onClick={toggleView}>
            {view === 'grid' ? 'Switch to List' : 'Switch to Grid'}
          </Button>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={category === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        <div className={view === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-6'}>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.article
              key={i}
              className="group relative overflow-hidden rounded-lg border bg-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/800x600?mental+health&sig=${i}`}
                  alt="Article thumbnail"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Mental Health
                  </span>
                  <span className="text-xs text-muted-foreground">5 min read</span>
                </div>
                <h2 className="mb-2 text-xl font-semibold">
                  Understanding Teenage Anxiety in the Digital Age
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Learn about the impact of social media and digital technology on teenage mental health...
                </p>
                <Button variant="link" className="p-0">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read More
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}