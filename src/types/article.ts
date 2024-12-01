export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: ArticleCategory;
  readTime: number;
  imageUrl?: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  featured?: boolean;
}

export type ArticleCategory = 
  | 'school'
  | 'friends'
  | 'digital'
  | 'family'
  | 'mood'
  | 'confidence'
  | 'all';
