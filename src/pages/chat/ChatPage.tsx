import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChatRoom, ChatRoomList } from '@/components/features/ChatRoom';

interface ChatRoomData {
  id: string;
  name: string;
  emoji: string;
  description: string;
  activeUsers: number;
  category: string;
}

export const ChatPage: FC = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();
  
  const handleRoomSelect = (room: ChatRoomData) => {
    navigate(`/chat/${room.id}`);
  };

  // If we have a roomId, show the chat room, otherwise show the room list
  return (
    <div className="min-h-screen bg-background pt-20">
      {roomId ? (
        <ChatRoom
          roomName="Loading..." // This will be replaced with actual room data
          roomEmoji="💭"
          description="Loading room details..."
        />
      ) : (
        <ChatRoomList onRoomSelect={handleRoomSelect} />
      )}
    </div>
  );
}
