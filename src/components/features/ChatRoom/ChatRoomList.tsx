import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../components/common/ui/Button';
import { Users, Star, StarOff, X } from 'lucide-react';

interface ChatRoomData {
  id: string;
  name: string;
  emoji: string;
  description: string;
  activeUsers: number;
  category: string;
  starred?: boolean;
}

const CHAT_ROOMS: ChatRoomData[] = [
  // School & Learning
  {
    id: 'homework-heroes',
    name: 'Homework Heroes',
    emoji: '📚',
    description: 'Get help with homework and share study tips!',
    activeUsers: 42,
    category: 'School'
  },
  {
    id: 'test-prep-squad',
    name: 'Test Prep Squad',
    emoji: '✏️',
    description: 'Study together and share exam strategies!',
    activeUsers: 28,
    category: 'School'
  },
  
  // Friendship & Social
  {
    id: 'friend-zone',
    name: 'Friend Zone',
    emoji: '👋',
    description: 'Make new friends and chat about anything!',
    activeUsers: 78,
    category: 'Social'
  },
  {
    id: 'bff-corner',
    name: 'BFF Corner',
    emoji: '🤝',
    description: 'Talk about friendship and being a good friend!',
    activeUsers: 45,
    category: 'Social'
  },

  // Wellness & Support
  {
    id: 'self-care-squad',
    name: 'Self-Care Squad',
    emoji: '🌈',
    description: 'Share self-care tips and support each other!',
    activeUsers: 35,
    category: 'Wellness'
  },
  {
    id: 'positive-vibes',
    name: 'Positive Vibes',
    emoji: '✨',
    description: 'Spread positivity and lift each other up!',
    activeUsers: 52,
    category: 'Wellness'
  },
  {
    id: 'stress-free-zone',
    name: 'Stress-Free Zone',
    emoji: '🧘‍♀️',
    description: 'Learn stress management techniques together!',
    activeUsers: 31,
    category: 'Wellness'
  },

  // Hobbies & Interests
  {
    id: 'creative-corner',
    name: 'Creative Corner',
    emoji: '🎨',
    description: 'Share your art, writing, and creative projects!',
    activeUsers: 63,
    category: 'Hobbies'
  },
  {
    id: 'music-hangout',
    name: 'Music Hangout',
    emoji: '🎵',
    description: 'Talk about your favorite music and artists!',
    activeUsers: 82,
    category: 'Hobbies'
  },
  {
    id: 'sports-club',
    name: 'Sports Club',
    emoji: '⚽',
    description: 'Chat about sports, fitness, and staying active!',
    activeUsers: 47,
    category: 'Hobbies'
  },

  // Fun & Games
  {
    id: 'fun-and-games',
    name: 'Fun & Games',
    emoji: '🎮',
    description: 'Chat about your favorite games and hobbies!',
    activeUsers: 91,
    category: 'Entertainment'
  },
  {
    id: 'movie-buffs',
    name: 'Movie Buffs',
    emoji: '🎬',
    description: 'Discuss movies, TV shows, and entertainment!',
    activeUsers: 73,
    category: 'Entertainment'
  },

  // Family & Life
  {
    id: 'family-matters',
    name: 'Family Matters',
    emoji: '👨‍👩‍👧‍👦',
    description: 'Talk about family life and relationships!',
    activeUsers: 39,
    category: 'Life'
  },
  {
    id: 'future-goals',
    name: 'Future Goals',
    emoji: '🎯',
    description: 'Share your dreams and plan for the future!',
    activeUsers: 44,
    category: 'Life'
  },

  // Special Interest
  {
    id: 'book-club',
    name: 'Book Club',
    emoji: '📖',
    description: 'Share book recommendations and discuss stories!',
    activeUsers: 33,
    category: 'Special'
  },
  {
    id: 'science-explorers',
    name: 'Science Explorers',
    emoji: '🔬',
    description: 'Explore cool science facts and discoveries!',
    activeUsers: 29,
    category: 'Special'
  }
];

interface ChatRoomListProps {
  onRoomSelect: (room: ChatRoomData) => void;
}

export function ChatRoomList({ onRoomSelect }: ChatRoomListProps) {
  const [rooms, setRooms] = useState<ChatRoomData[]>(CHAT_ROOMS);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showStarredOnly, setShowStarredOnly] = useState(false);
  const [showStarInfo, setShowStarInfo] = useState(() => {
    return localStorage.getItem('starInfoDismissed') !== 'true';
  });

  // Load starred rooms from localStorage
  useEffect(() => {
    const starredRooms = localStorage.getItem('starredRooms');
    if (starredRooms) {
      const starredIds = new Set(JSON.parse(starredRooms));
      setRooms(prevRooms => prevRooms.map(room => ({
        ...room,
        starred: starredIds.has(room.id)
      })));
    }
  }, []);

  const dismissStarInfo = () => {
    setShowStarInfo(false);
    localStorage.setItem('starInfoDismissed', 'true');
  };

  // Toggle star status
  const toggleStar = (roomId: string) => {
    const updatedRooms = rooms.map(room => {
      if (room.id === roomId) {
        return { ...room, starred: !room.starred };
      }
      return room;
    });
    setRooms(updatedRooms);

    // Save to localStorage
    const starredIds = updatedRooms
      .filter(room => room.starred)
      .map(room => room.id);
    localStorage.setItem('starredRooms', JSON.stringify(starredIds));
  };

  // Get unique categories
  const categories = Array.from(new Set(rooms.map(room => room.category)));

  // Filter rooms based on category and starred status
  const filteredRooms = rooms.filter(room => {
    const matchesCategory = selectedCategory ? room.category === selectedCategory : true;
    const matchesStarred = showStarredOnly ? room.starred : true;
    return matchesCategory && matchesStarred;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 max-w-4xl mx-auto"
    >
      {/* Star Feature Info Banner */}
      {showStarInfo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 rounded-lg border bg-blue-50 p-4 text-blue-900 relative"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 pt-0.5">
              <Star className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">New Feature: Star Your Favorite Rooms! ✨</h3>
              <p className="mt-1 text-sm">
                Click the star icon next to any room to mark it as a favorite. Use the "Starred" filter to quickly find your favorite rooms.
                This helps you keep track of the rooms you love most!
              </p>
              <div className="mt-3 flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-700 border-blue-300 hover:bg-blue-100"
                  onClick={() => setShowStarredOnly(true)}
                >
                  View Starred Rooms
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-700 hover:bg-blue-100"
                  onClick={dismissStarInfo}
                >
                  Got it
                </Button>
              </div>
            </div>
            <button
              onClick={dismissStarInfo}
              className="flex-shrink-0 text-blue-500 hover:text-blue-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Chat Rooms</h2>
        
        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              size="sm"
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Starred Filter */}
          <Button
            variant={showStarredOnly ? "default" : "outline"}
            onClick={() => setShowStarredOnly(!showStarredOnly)}
            size="sm"
            className="flex items-center gap-2"
          >
            {showStarredOnly ? (
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ) : (
              <StarOff className="h-4 w-4" />
            )}
            Starred
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredRooms.map((room) => (
          <motion.div
            key={room.id}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    {room.emoji} {room.name}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(room.id);
                    }}
                  >
                    {room.starred ? (
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ) : (
                      <StarOff className="h-5 w-5 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {room.description}
                </p>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{room.activeUsers} online</span>
                </div>
              </div>
              <Button
                onClick={() => onRoomSelect(room)}
                variant="outline"
                size="sm"
              >
                Join Chat
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Message */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
          <span>✨ More awesome rooms coming soon!</span>
        </div>
      </div>
    </motion.div>
  );
}
