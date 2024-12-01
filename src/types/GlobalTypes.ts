export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  readTime: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export type Theme = 'light' | 'dark';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
}

export interface NavigationItem {
  name: string;
  path: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'podcast' | 'document';
  url: string;
  tags: string[];
  createdAt: string;
}

export interface NewsletterSubscription {
  email: string;
  topics?: string[];
  subscribedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}