import { RateLimiter } from 'limiter';
import { Cache } from '@/utils/cache';
import { RequestQueue } from '@/utils/requestQueue';
import { StreamParser } from '@/utils/streamParser';

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

interface ModelParams {
  temperature?: number;      // Controls randomness (0-2)
  presencePenalty?: number; // Controls topic diversity (-2 to 2)
  frequencyPenalty?: number; // Controls word repetition (-2 to 2)
  maxTokens?: number;       // Max response length
}

const DEFAULT_PARAMS: ModelParams = {
  temperature: 0.7,
  presencePenalty: 0.6,
  frequencyPenalty: 0.5,
  maxTokens: 150
};

// Create a rate limiter: 3 requests per minute
const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "minute"
});

// Initialize cache with 60 minutes TTL
const responseCache = new Cache<string>(60);

// Initialize request queue with concurrent limit of 1
const requestQueue = new RequestQueue<{
  success: boolean;
  data?: string;
  error?: string;
  fromCache?: boolean;
  fallbackResponse?: string;
}>(1);

export const openAIService = {
  generateResponse: async (
    prompt: string,
    params: ModelParams = {},
    onStream?: (chunk: string) => void
  ) => {
    // Don't use cache for streaming requests
    if (!onStream) {
      const cacheKey = prompt.trim().toLowerCase();
      const cachedResponse = responseCache.get(cacheKey);
      if (cachedResponse) {
        return {
          success: true,
          data: cachedResponse,
          fromCache: true
        };
      }
    }

    // Add request to queue
    try {
      const result = await requestQueue.add(async () => {
        const hasToken = await limiter.tryRemoveTokens(1);
        if (!hasToken) {
          throw new Error('Rate limit exceeded. Please try again in a minute.');
        }

        const modelParams = { ...DEFAULT_PARAMS, ...params };
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            temperature: modelParams.temperature,
            max_tokens: modelParams.maxTokens,
            presence_penalty: modelParams.presencePenalty,
            frequency_penalty: modelParams.frequencyPenalty,
            stream: !!onStream
          })
        });

        if (response.status === 429) {
          throw new Error('OpenAI rate limit reached. Please try again later.');
        }

        if (!response.ok) {
          throw new Error(`OpenAI API request failed: ${response.statusText}`);
        }

        // Handle streaming response
        if (onStream && response.body) {
          const parser = new StreamParser();
          const reader = response.body.getReader();
          let fullResponse = '';

          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const chunks = parser.parseChunk(value);
              for (const chunk of chunks) {
                fullResponse += chunk;
                onStream(chunk);
              }
            }
          } finally {
            reader.releaseLock();
          }

          return {
            success: true,
            data: fullResponse
          };
        }

        // Handle regular response
        const data = await response.json();
        const generatedResponse = data.choices[0].message.content;

        // Cache only non-streaming responses
        if (!onStream) {
          responseCache.set(prompt.trim().toLowerCase(), generatedResponse);
        }

        return {
          success: true,
          data: generatedResponse
        };
      });

      return result;

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error calling OpenAI API:', error);
        return {
          success: false,
          error: error.message,
          fallbackResponse: 'I apologize, but I am temporarily unavailable. Please try again in a moment.'
        };
      }
      // Handle other potential error types
      return {
        success: false,
        error: String(error),
        fallbackResponse: 'An unexpected error occurred.'
      };
    }
  },

  // Method to check current rate limit status
  checkRateLimit: async () => {
    return {
      remainingTokens: await limiter.getTokensRemaining(),
      resetIn: await limiter.tryRemoveTokens(0),
      queueLength: requestQueue.length,
      activeRequests: requestQueue.active
    };
  },

  // Method to clear cache
  clearCache: () => {
    responseCache.clear();
  },

  // Method to clear request queue
  clearQueue: () => {
    requestQueue.clear();
  }
};
