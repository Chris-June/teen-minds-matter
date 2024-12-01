// Shared types for ChatRoom and Message

export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isCurrentUser: boolean;
  isAI?: boolean;
}

export interface ChatRoom {
  id: string;
  name: string;
  emoji: string;
  description: string;
  activeUsers: number;
  category: string;
  messages: Message[];
  hasAIParticipant?: boolean;
  aiSessionId?: string;
}

export interface ChatRoomContextType {
  currentRoom: ChatRoom | null;
  setCurrentRoom: (room: ChatRoom | null) => void;
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  activeUsers: number;
  setActiveUsers: (count: number) => void;
  isAITyping: boolean;
}
