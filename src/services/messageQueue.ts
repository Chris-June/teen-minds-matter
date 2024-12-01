/**
 * MessageQueue Service
 * Handles message queuing and timing for natural conversation flow
 */

interface QueuedMessage {
  id: string;
  content: string;
  priority: number;
  timestamp: Date;
  processingDelay?: number;
}

class MessageQueueService {
  private messageQueue: Map<string, QueuedMessage[]>;
  private processing: Map<string, boolean>;
  private onMessageProcessed: (roomId: string, message: QueuedMessage) => void;

  constructor() {
    this.messageQueue = new Map();
    this.processing = new Map();
    this.onMessageProcessed = () => {};
  }

  /**
   * Add a message to the queue for a specific room
   */
  async queueMessage(
    roomId: string, 
    content: string, 
    priority: number = 1,
    delay?: number
  ): Promise<string> {
    const messageId = `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const message: QueuedMessage = {
      id: messageId,
      content,
      priority,
      timestamp: new Date(),
      processingDelay: delay,
    };

    if (!this.messageQueue.has(roomId)) {
      this.messageQueue.set(roomId, []);
    }

    const roomQueue = this.messageQueue.get(roomId)!;
    roomQueue.push(message);
    roomQueue.sort((a, b) => b.priority - a.priority);

    // Start processing if not already running
    if (!this.processing.get(roomId)) {
      this.processQueue(roomId);
    }

    return messageId;
  }

  /**
   * Process messages in the queue for a specific room
   */
  private async processQueue(roomId: string): Promise<void> {
    if (this.processing.get(roomId)) return;

    this.processing.set(roomId, true);

    while (this.messageQueue.get(roomId)?.length) {
      const message = this.messageQueue.get(roomId)!.shift();
      if (!message) break;

      if (message.processingDelay) {
        await new Promise(resolve => setTimeout(resolve, message.processingDelay));
      }

      this.onMessageProcessed(roomId, message);
    }

    this.processing.set(roomId, false);
  }

  /**
   * Set the message processed callback
   */
  setMessageCallback(callback: (roomId: string, message: QueuedMessage) => void): void {
    this.onMessageProcessed = callback;
  }

  /**
   * Clear the queue for a specific room
   */
  clearQueue(roomId: string): void {
    this.messageQueue.delete(roomId);
    this.processing.delete(roomId);
  }
}

// Export singleton instance
export const messageQueue = new MessageQueueService();
