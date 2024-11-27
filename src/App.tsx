import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from '@/components/Header';
import { HomePage } from '@/pages/HomePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { SupportPage } from '@/pages/SupportPage';
import { CommunityPage } from '@/pages/CommunityPage';
import { AboutPage } from '@/pages/AboutPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}