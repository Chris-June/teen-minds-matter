import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HeaderComponent } from '@/components/layout/Header/HeaderExports';
import { HomePage } from '@/pages/home/HomePage';
import { ArticlesPage } from '@/pages/articles/ArticlesPage';
import { ResourcesPage } from '@/pages/resources/ResourcesPage';
import { SupportPage } from '@/pages/support/SupportPage';
import { CommunityPage } from '@/pages/community/CommunityPage';
import { AboutPage } from '@/pages/about/AboutPage';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { ToastProvider, ToastViewport } from '@/components/common/ui/Toast';

const queryClient = new QueryClient();

// Configure router with future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

export function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <BrowserRouter future={router.future}>
            <div className="min-h-screen bg-background">
              <HeaderComponent />
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
          </BrowserRouter>
          <ToastViewport />
        </ToastProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}