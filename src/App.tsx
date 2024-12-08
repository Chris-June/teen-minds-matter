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
import { HomeworkHeroes } from '@/pages/chatrooms/HomeworkHeroes';
import { FriendZone } from '@/pages/chatrooms/FriendZone';
import { StressLess } from '@/pages/chatrooms/StressLess';
import { PositiveVibes } from '@/pages/chatrooms/PositiveVibes';
import { ArtAttack } from '@/pages/chatrooms/ArtAttack';
import { MusicMashup } from '@/pages/chatrooms/MusicMashup';
import { GameOn } from '@/pages/chatrooms/GameOn';
import { MemeTeam } from '@/pages/chatrooms/MemeTeam';

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
                  
                  {/* Chatroom Routes */}
                  <Route path="/chat/homework-heroes" element={<HomeworkHeroes />} />
                  <Route path="/chat/friend-zone" element={<FriendZone />} />
                  <Route path="/chat/stress-less" element={<StressLess />} />
                  <Route path="/chat/positive-vibes" element={<PositiveVibes />} />
                  <Route path="/chat/art-attack" element={<ArtAttack />} />
                  <Route path="/chat/music-mashup" element={<MusicMashup />} />
                  <Route path="/chat/game-on" element={<GameOn />} />
                  <Route path="/chat/meme-team" element={<MemeTeam />} />
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