import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/common/ui/Button';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
  index: number;
  onArticleClick: (article: Article) => void;
}

export function ArticleCard({ article, index, onArticleClick }: ArticleCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={article.imageUrl || '/images/placeholders/article-placeholder.svg'}
          alt={`${article.title} thumbnail`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {article.readTime} min read
          </span>
        </div>
        <h2 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
          {article.title}
        </h2>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {article.description}
        </p>
        <Button 
          variant="link" 
          className="p-0 group flex items-center text-primary hover:text-primary/80"
          onClick={() => onArticleClick(article)}
        >
          <BookOpen className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          Check it out!
        </Button>
      </div>
    </motion.article>
  );
}
