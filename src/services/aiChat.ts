import { openAIService } from './openai';
import { messageQueue } from './messageQueue';

interface ChatSession {
  roomId: string;
  context: string[];
  isTyping: boolean;
}

class AIChatService {
  private sessions: Map<string, ChatSession>;

  constructor() {
    this.sessions = new Map();
  }

  async initiateSession(roomId: string): Promise<string> {
    const sessionId = `session_${Date.now()}`;
    this.sessions.set(sessionId, {
      roomId,
      context: [],
      isTyping: false
    });
    return sessionId;
  }

  private updateContext(session: ChatSession, message: string) {
    session.context.push(message);
    // Keep only last 10 messages for context
    if (session.context.length > 10) {
      session.context.shift();
    }
  }

  private buildPrompt(session: ChatSession): string {
    return `You are a friendly and supportive AI assistant in a teen mental health support chat room. 
Previous conversation:
${session.context.join('\n')}

Please provide a helpful and empathetic response.`;
  }

  private calculateTypingDelay(response: string): number {
    // Simulate natural typing speed (average 40 words per minute)
    const words = response.split(' ').length;
    const baseDelay = 1500; // Base delay of 1.5 seconds
    const typingDelay = (words / 40) * 60 * 1000; // Convert to milliseconds
    return Math.min(baseDelay + typingDelay, 5000); // Cap at 5 seconds
  }

  async generateResponse(sessionId: string, userMessage: string): Promise<string> {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error('Invalid session ID');
    }

    try {
      session.isTyping = true;
      this.updateContext(session, `User: ${userMessage}`);

      const response = await openAIService.generateResponse(
        this.buildPrompt(session),
        {
          temperature: 0.7,
          maxTokens: 150
        }
      );

      if (response.success && response.data) {
        const aiResponse = response.data;
        this.updateContext(session, `AI: ${aiResponse}`);
        
        // Queue the AI response with natural timing
        await messageQueue.queueMessage(
          session.roomId,
          aiResponse,
          1,
          this.calculateTypingDelay(aiResponse)
        );

        return aiResponse;
      } else {
        throw new Error('Failed to generate AI response');
      }
    } finally {
      session.isTyping = false;
    }
  }

  isSessionActive(sessionId: string): boolean {
    return this.sessions.has(sessionId);
  }

  endSession(sessionId: string): void {
    this.sessions.delete(sessionId);
  }
}

export const aiChatService = new AIChatService();
