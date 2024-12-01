import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HeaderComponent } from '@/components/layout/Header/HeaderExports';
import { HomePage } from '@/pages/home/HomePage';
import { ArticlesPage } from '@/pages/articles/ArticlesPage';
import { ResourcesPage } from '@/pages/resources/ResourcesPage';
import { SupportPage } from '@/pages/support/SupportPage';
import { CommunityPage } from '@/pages/community/CommunityPage';
import { AboutPage } from '@/pages/about/AboutPage';
import { StressBustersPage } from '@/pages/guides/StressBusters';
import { MoodBoostersPage } from '@/pages/guides/MoodBoosters';
import { FriendDramaPage } from '@/pages/guides/FriendDrama';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
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
              <Route path="/guides/stress-busters" element={<StressBustersPage />} />
              <Route path="/guides/mood-boosters" element={<MoodBoostersPage />} />
              <Route path="/guides/friend-drama" element={<FriendDramaPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}