import React, { createContext, useState, useEffect } from 'react';
import { aiChatService } from '@/services/aiChat';
import { Message, ChatRoom, ChatRoomContextType } from '@/types/chatRoom';

// Create and export the context
export const ChatRoomContext = createContext<ChatRoomContextType | undefined>(undefined);

export function ChatRoomProvider({ children }: { children: React.ReactNode }) {
  const [currentRoom, setCurrentRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUsers, setActiveUsers] = useState(0);
  const [isAITyping, setIsAITyping] = useState(false);

  useEffect(() => {
    if (!currentRoom) return;

    const handleUserCount = async () => {
      if (activeUsers === 1 && !currentRoom.hasAIParticipant) {
        setTimeout(async () => {
          try {
            const sessionId = await aiChatService.initiateSession(currentRoom.id);
            setCurrentRoom((prev) => prev ? {
              ...prev,
              hasAIParticipant: true,
              aiSessionId: sessionId
            } : null);

            addMessage({
              content: "Hi! I noticed you're here alone. I'd be happy to chat with you!",
              sender: 'AI Assistant',
              isCurrentUser: false, 
              isAI: true
            });
          } catch (error) {
            console.error('Failed to initialize AI chat:', error);
          }
        }, 2000);
      }
    };

    handleUserCount();
  }, [activeUsers, currentRoom]);

  useEffect(() => {
    if (!currentRoom?.hasAIParticipant || !currentRoom.aiSessionId) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage && !lastMessage.isAI && !lastMessage.isCurrentUser) {
      setIsAITyping(true);

      const typingDelay = Math.random() * 2000 + 1000;
      setTimeout(async () => {
        try {
          const response = await aiChatService.generateResponse(
            currentRoom.aiSessionId!,
            lastMessage.content
          );

          addMessage({
            content: response,
            sender: 'AI Assistant',
            isCurrentUser: false,
            isAI: true
          });
        } catch (error) {
          console.error('Failed to generate AI response:', error);
        } finally {
          setIsAITyping(false);
        }
      }, typingDelay);
    }
  }, [messages, currentRoom]);

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
        isAITyping,
      }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
}
