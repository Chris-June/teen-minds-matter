import React from 'react';
import { X } from 'lucide-react';
import { Article } from '@/types/article';
import { Button } from '@/components/common/ui/Button';
import { ShareArticle } from './ShareArticle';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  // Handle ESC key press
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-card p-6 shadow-lg"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="absolute right-4 top-4 flex items-center gap-2">
            <ShareArticle article={article} />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Article Header */}
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.readTime} min read
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
            <p className="text-lg text-muted-foreground">{article.description}</p>
          </div>

          {/* Article Image */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={article.imageUrl || `https://source.unsplash.com/random/1200x600?${article.category}`}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Author Info */}
          <div className="mb-6 flex items-center gap-3">
            <img
              src={article.author.avatar || `https://ui-avatars.com/api/?name=${article.author.name}`}
              alt={article.author.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{article.author.name}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
