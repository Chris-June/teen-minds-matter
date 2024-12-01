/**
 * Custom error types for AI Chat functionality
 */
export enum AIChatErrorType {
  SESSION_ERROR = 'SESSION_ERROR',
  GENERATION_ERROR = 'GENERATION_ERROR',
  QUEUE_ERROR = 'QUEUE_ERROR',
  RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR',
  CONTEXT_ERROR = 'CONTEXT_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
}

export class AIChatError extends Error {
  type: AIChatErrorType;
  details?: Record<string, unknown>;
  timestamp: Date;

  constructor(type: AIChatErrorType, message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = 'AIChatError';
    this.type = type;
    this.details = details;
    this.timestamp = new Date();
  }
}

/**
 * Error handling service for AI Chat
 */
export class AIChatErrorHandler {
  private static readonly FALLBACK_MESSAGES = {
    [AIChatErrorType.SESSION_ERROR]: "I'm having trouble maintaining our conversation. Let me restart the chat.",
    [AIChatErrorType.GENERATION_ERROR]: "I'm having difficulty forming a response right now. Could you please try again?",
    [AIChatErrorType.QUEUE_ERROR]: "Your message will be processed shortly. Thank you for your patience.",
    [AIChatErrorType.RATE_LIMIT_ERROR]: "I need a moment to process all the messages. I'll be with you shortly.",
    [AIChatErrorType.CONTEXT_ERROR]: "I lost track of our conversation. Could you remind me what we were discussing?",
    [AIChatErrorType.NETWORK_ERROR]: "I'm having trouble connecting. Please give me a moment.",
  };

  private static errorLog: AIChatError[] = [];
  private static readonly MAX_LOG_SIZE = 100;

  /**
   * Handle an AI chat error and return appropriate user message
   */
  static handleError(error: Error | AIChatError): {
    userMessage: string;
    shouldRetry: boolean;
    retryDelay?: number;
  } {
    let aiChatError: AIChatError;

    // Convert regular errors to AIChatError
    if (!(error instanceof AIChatError)) {
      aiChatError = this.convertError(error);
    } else {
      aiChatError = error;
    }

    // Log the error
    this.logError(aiChatError);

    // Determine retry strategy
    const retryStrategy = this.getRetryStrategy(aiChatError.type);

    return {
      userMessage: this.getFallbackMessage(aiChatError.type),
      ...retryStrategy,
    };
  }

  /**
   * Convert generic error to AIChatError
   */
  private static convertError(error: Error): AIChatError {
    // Convert Error to a Record<string, unknown>
    const errorDetails: Record<string, unknown> = {
      name: error.name,
      message: error.message,
      stack: error.stack
    };

    if (error.message.includes('rate limit')) {
      return new AIChatError(
        AIChatErrorType.RATE_LIMIT_ERROR,
        'Rate limit exceeded',
        errorDetails
      );
    }

    if (error.message.includes('network')) {
      return new AIChatError(
        AIChatErrorType.NETWORK_ERROR,
        'Network error occurred',
        errorDetails
      );
    }

    return new AIChatError(
      AIChatErrorType.GENERATION_ERROR,
      'Error generating response',
      errorDetails
    );
  }

  /**
   * Get retry strategy based on error type
   */
  private static getRetryStrategy(errorType: AIChatErrorType): {
    shouldRetry: boolean;
    retryDelay?: number;
  } {
    switch (errorType) {
      case AIChatErrorType.RATE_LIMIT_ERROR:
        return { shouldRetry: true, retryDelay: 5000 }; // 5 seconds
      case AIChatErrorType.NETWORK_ERROR:
        return { shouldRetry: true, retryDelay: 3000 }; // 3 seconds
      case AIChatErrorType.GENERATION_ERROR:
        return { shouldRetry: true, retryDelay: 1000 }; // 1 second
      default:
        return { shouldRetry: false };
    }
  }

  /**
   * Get user-friendly fallback message
   */
  private static getFallbackMessage(errorType: AIChatErrorType): string {
    return this.FALLBACK_MESSAGES[errorType] || "I'm having trouble right now. Please try again in a moment.";
  }

  /**
   * Log error for monitoring
   */
  private static logError(error: AIChatError): void {
    this.errorLog.push(error);
    if (this.errorLog.length > this.MAX_LOG_SIZE) {
      this.errorLog.shift();
    }
    console.error('AI Chat Error:', {
      type: error.type,
      message: error.message,
      details: error.details,
      timestamp: error.timestamp,
    });
  }

  /**
   * Get error statistics for monitoring
   */
  static getErrorStats(): {
    totalErrors: number;
    errorsByType: Record<AIChatErrorType, number>;
  } {
    const errorsByType = this.errorLog.reduce((acc, error) => {
      acc[error.type] = (acc[error.type] || 0) + 1;
      return acc;
    }, {} as Record<AIChatErrorType, number>);

    return {
      totalErrors: this.errorLog.length,
      errorsByType,
    };
  }
}
