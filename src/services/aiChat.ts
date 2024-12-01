import { OpenAIService } from './openai';
import { messageQueue } from './messageQueue';

/**
 * Interface for AI Chat Session
 * Maintains the context and state of an AI chat participant
 */
interface AIChatSession {
  sessionId: string;
  roomId: string;
  conversationContext: string[];
  isTyping: boolean;
  lastMessageTimestamp: Date;
  personality?: string;
  contextWindow: number;
}

/**
 * AI Chat Service
 * Handles AI participant behavior and message generation
 */
export class AIChatService {
  private sessions: Map<string, AIChatSession>;
  private openAIService: typeof OpenAIService;
  private readonly DEFAULT_CONTEXT_WINDOW = 10;

  constructor() {
    this.sessions = new Map();
    this.openAIService = OpenAIService;

    // Set up message queue callback
    messageQueue.setMessageCallback(this.handleProcessedMessage.bind(this));
  }

  /**
   * Initiates a new AI chat session for a specific room
   */
  async initiateSession(roomId: string, personality?: string): Promise<string> {
    const sessionId = `ai-${roomId}-${Date.now()}`;
    
    this.sessions.set(sessionId, {
      sessionId,
      roomId,
      conversationContext: [],
      isTyping: false,
      lastMessageTimestamp: new Date(),
      personality,
      contextWindow: this.DEFAULT_CONTEXT_WINDOW
    });

    // Queue welcome message
    await this.queueWelcomeMessage(sessionId);
    
    return sessionId;
  }

  /**
   * Queues a welcome message based on personality
   */
  private async queueWelcomeMessage(sessionId: string): Promise<void> {
    const session = this.sessions.get(sessionId);
    if (!session) return;

    const welcomeMessage = this.getWelcomeMessage(session.personality);
    await messageQueue.queueMessage(
      session.roomId,
      welcomeMessage,
      2, // High priority
      1500 // Natural delay
    );
  }

  /**
   * Generates an AI response based on the current conversation context
   */
  async generateResponse(sessionId: string, userMessage: string): Promise<string> {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error('Invalid session ID');
    }

    try {
      session.isTyping = true;
      this.updateContext(session, `User: ${userMessage}`);

      const response = await this.openAIService.generateResponse(
        this.buildPrompt(session),
        {
          temperature: 0.7,
          maxTokens: 150,
        }
      );

      if (response.success) {
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

  /**
   * Updates the conversation context
   */
  private updateContext(session: AIChatSession, message: string): void {
    session.conversationContext.push(message);
    if (session.conversationContext.length > session.contextWindow) {
      session.conversationContext.shift();
    }
    session.lastMessageTimestamp = new Date();
  }

  /**
   * Builds a prompt for the AI based on personality and context
   */
  private buildPrompt(session: AIChatSession): string {
    const personalityPrompt = this.getPersonalityPrompt(session.personality);
    const recentContext = session.conversationContext.slice(-session.contextWindow);
    
    return `
      ${personalityPrompt}
      Previous conversation:
      ${recentContext.join('\n')}
      
      Respond naturally and supportively:
    `;
  }

  /**
   * Calculates typing delay based on message length
   */
  private calculateTypingDelay(message: string): number {
    // Average typing speed: ~40 words per minute
    const wordsPerMinute = 40;
    const words = message.split(' ').length;
    const baseDelay = (words / wordsPerMinute) * 60 * 1000;
    
    // Add random variation (±20%)
    const variation = baseDelay * 0.2;
    return baseDelay + (Math.random() * variation * 2 - variation);
  }

  /**
   * Handles processed messages from the queue
   */
  private handleProcessedMessage(roomId: string, message: any): void {
    // Implementation specific to your needs
    console.log(`AI message processed in room ${roomId}:`, message);
  }

  /**
   * Gets personality-specific welcome message
   */
  private getWelcomeMessage(personality?: string): string {
    // Can be expanded based on different AI personalities
    return "Hi! I noticed you're here alone. I'd be happy to chat with you!";
  }

  /**
   * Gets personality-specific prompt prefix
   */
  private getPersonalityPrompt(personality?: string): string {
    return `
      You are a friendly and supportive chat participant in a teen mental health support platform.
      Maintain an encouraging and positive tone while being mindful of sensitive topics.
      Keep responses concise and engaging.
    `;
  }

  /**
   * Checks if an AI session is currently "typing"
   */
  isTyping(sessionId: string): boolean {
    return this.sessions.get(sessionId)?.isTyping || false;
  }

  /**
   * Ends an AI chat session
   */
  endSession(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      messageQueue.clearQueue(session.roomId);
      this.sessions.delete(sessionId);
    }
  }
}

// Export singleton instance
export const aiChatService = new AIChatService();
