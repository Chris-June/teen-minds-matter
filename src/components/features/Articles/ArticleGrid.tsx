import React from 'react';
import { ArticleCard } from './ArticleCard';
import { ArticleModal } from './ArticleModal';
import { Article } from '@/types/article';

interface ArticleGridProps {
  articles: Article[];
  view: 'grid' | 'list';
}

export function ArticleGrid({ articles, view }: ArticleGridProps) {
  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(null);

  return (
    <>
      <div 
        className={
          view === 'grid' 
            ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' 
            : 'flex flex-col gap-6'
        }
      >
        {articles.map((article, index) => (
          <ArticleCard 
            key={article.slug} 
            article={article} 
            index={index}
            onArticleClick={setSelectedArticle}
          />
        ))}
      </div>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
