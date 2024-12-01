// Shared utilities for ChatRoomContext
import { aiChatService } from '@/services/aiChat';

// Utility functions for AI chat interactions
export const initializeAIChat = async (roomId: string): Promise<string> => {
  try {
    return await aiChatService.initiateSession(roomId);
  } catch (error) {
    console.error('Failed to initialize AI chat:', error);
    throw error;
  }
};

export const generateAIResponse = async (sessionId: string, messageContent: string): Promise<string> => {
  try {
    return await aiChatService.generateResponse(sessionId, messageContent);
  } catch (error) {
    console.error('Failed to generate AI response:', error);
    throw error;
  }
};

// Move any non-React specific logic here if needed
