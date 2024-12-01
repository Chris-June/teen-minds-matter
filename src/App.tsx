import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HeaderComponent } from '@/components/layout/Header/HeaderExports';
import { HomePage } from '@/pages/home/HomePage';
import { ArticlesPage } from '@/pages/articles/ArticlesPage';
import { ResourcesPage } from '@/pages/resources/ResourcesPage';
import { SupportPage } from '@/pages/support/SupportPage';
import { CommunityPage } from '@/pages/community/CommunityPage';
import { ChatPage } from '@/pages/chat/ChatPage';
import { ChatRoomProvider } from '@/contexts/ChatRoomContext';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChatRoomProvider>
          <div className="min-h-screen bg-background font-sans antialiased">
            <HeaderComponent />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/chat/:roomId" element={<ChatPage />} />
              </Routes>
            </main>
          </div>
        </ChatRoomProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}