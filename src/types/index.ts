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