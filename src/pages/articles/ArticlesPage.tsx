import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Star, Heart, Users, Smile, Home, School } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import { ArticleGrid } from '@/components/features/Articles/ArticleGrid';
import { articles } from '@/data/articles';
import { ArticleCategory } from '@/types/article';

export function ArticlesPage() {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = React.useState<ArticleCategory>('all');

  const categories = [
    { id: 'all', name: 'All Stories', icon: Star },
    { id: 'friends', name: 'Friends & Fun', icon: Users },
    { id: 'mood', name: 'Feel Good', icon: Smile },
    { id: 'school', name: 'School Life', icon: School },
    { id: 'family', name: 'Family Stuff', icon: Home },
    { id: 'confidence', name: 'Be Yourself', icon: Heart },
  ] as const;

  const filteredArticles = React.useMemo(() => {
    if (selectedCategory === 'all') return articles;
    return articles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold">Cool Stories For You 📚</h1>
            <p className="text-muted-foreground">
              Find awesome tips and stories from people just like you!
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Filter className="mr-2 h-4 w-4" />
              Show Me
            </Button>
            <Button onClick={toggleView} size="sm">
              {view === 'grid' ? '📱 List View' : '📱 Grid View'}
            </Button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.id as ArticleCategory)}
              className="flex items-center gap-2"
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </Button>
          ))}
        </div>

        <ArticleGrid articles={filteredArticles} view={view} />
      </motion.div>
    </div>
  );
}