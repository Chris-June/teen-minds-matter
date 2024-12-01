import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/ui/Button';
import { Users } from 'lucide-react';

interface ChatRoomData {
  id: string;
  name: string;
  emoji: string;
  description: string;
  activeUsers: number;
  category: string;
}

const CHAT_ROOMS: ChatRoomData[] = [
  {
    id: 'homework-heroes',
    name: 'Homework Heroes',
    emoji: '📚',
    description: 'Get help with homework and study tips!',
    activeUsers: 42,
    category: 'Study'
  },
  {
    id: 'friend-zone',
    name: 'Friend Zone',
    emoji: '👋',
    description: 'Make new friends and chat about anything!',
    activeUsers: 78,
    category: 'Social'
  },
  {
    id: 'self-care-squad',
    name: 'Self-Care Squad',
    emoji: '🌈',
    description: 'Share self-care tips and support each other!',
    activeUsers: 35,
    category: 'Wellness'
  },
  {
    id: 'fun-and-games',
    name: 'Fun & Games',
    emoji: '🎮',
    description: 'Chat about your favorite games and hobbies!',
    activeUsers: 91,
    category: 'Entertainment'
  },
];

interface ChatRoomListProps {
  onRoomSelect: (room: ChatRoomData) => void;
}

export function ChatRoomList({ onRoomSelect }: ChatRoomListProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = Array.from(new Set(CHAT_ROOMS.map(room => room.category)));
  const filteredRooms = selectedCategory
    ? CHAT_ROOMS.filter(room => room.category === selectedCategory)
    : CHAT_ROOMS;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full bg-background p-4"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Chat Rooms 💭</h1>
        <p className="text-muted-foreground">
          Join a room and start chatting with other amazing teens!
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            size="sm"
          >
            All Rooms
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
      </div>

      {/* Room List */}
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
                <h3 className="text-lg font-semibold">
                  {room.emoji} {room.name}
                </h3>
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
    </motion.div>
  );
}
