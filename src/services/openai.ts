import { Cache } from '@/utils/cache';

const API_URL = 'http://localhost:3000/api';

interface ModelParams {
  temperature?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  maxTokens?: number;
}

export class OpenAIService {
  private cache: Cache<string>;

  constructor() {
    this.cache = new Cache<string>(60);
  }

  async generateResponse(
    prompt: string,
    params: ModelParams = {}
  ): Promise<{
    success: boolean;
    data?: string;
    error?: string;
    fromCache?: boolean;
    fallbackResponse?: string;
  }> {
    // Check cache first
    const cacheKey = prompt.trim().toLowerCase();
    const cachedResponse = this.cache.get(cacheKey);
    if (cachedResponse) {
      return {
        success: true,
        data: cachedResponse,
        fromCache: true
      };
    }

    try {
      const response = await fetch(`${API_URL}/openai/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          ...params
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();

      // Cache successful responses
      if (data.success) {
        this.cache.set(cacheKey, data.data);
      }

      return data;

    } catch (error: unknown) {
      console.error('Error calling API:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        fallbackResponse: 'I apologize, but I am temporarily unavailable. Please try again in a moment.'
      };
    }
  }

  async checkRateLimit(): Promise<{
    remainingTokens: number;
    resetIn: number;
  }> {
    try {
      const response = await fetch(`${API_URL}/openai/rate-limit`);
      if (!response.ok) {
        throw new Error('Failed to fetch rate limit status');
      }
      return await response.json();
    } catch (error) {
      console.error('Error checking rate limit:', error);
      return {
        remainingTokens: 0,
        resetIn: 60000
      };
    }
  }

  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const openAIService = new OpenAIService();
