import React, { createContext, useContext, useState } from 'react';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface ChatRoom {
  id: string;
  name: string;
  emoji: string;
  description: string;
  activeUsers: number;
  category: string;
  messages: Message[];
}

interface ChatRoomContextType {
  currentRoom: ChatRoom | null;
  setCurrentRoom: (room: ChatRoom | null) => void;
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  activeUsers: number;
  setActiveUsers: (count: number) => void;
}

const ChatRoomContext = createContext<ChatRoomContextType | undefined>(undefined);

export function ChatRoomProvider({ children }: { children: React.ReactNode }) {
  const [currentRoom, setCurrentRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUsers, setActiveUsers] = useState(0);

  const addMessage = (messageData: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...messageData,
      id: Date.now().toString(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <ChatRoomContext.Provider
      value={{
        currentRoom,
        setCurrentRoom,
        messages,
        addMessage,
        activeUsers,
        setActiveUsers,
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
}

export function useChatRoom() {
  const context = useContext(ChatRoomContext);
  if (context === undefined) {
    throw new Error('useChatRoom must be used within a ChatRoomProvider');
  }
  return context;
}
