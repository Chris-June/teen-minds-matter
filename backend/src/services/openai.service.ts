import OpenAI from 'openai';
import { RateLimiter } from 'limiter';

class OpenAIService {
  private openai: OpenAI;
  private rateLimiter: RateLimiter;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    this.rateLimiter = new RateLimiter({
      tokensPerInterval: 50,
      interval: "minute"
    });
  }

  async generateResponse(prompt: string, params: {
    temperature?: number;
    presencePenalty?: number;
    frequencyPenalty?: number;
    maxTokens?: number;
  } = {}) {
    try {
      // Check rate limit
      const hasToken = await this.rateLimiter.tryRemoveTokens(1);
      if (!hasToken) {
        throw new Error('Rate limit exceeded. Please try again in a minute.');
      }

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: params.temperature ?? 0.7,
        presence_penalty: params.presencePenalty ?? 0.6,
        frequency_penalty: params.frequencyPenalty ?? 0.5,
        max_tokens: params.maxTokens ?? 150
      });

      return {
        success: true,
        data: completion.choices[0].message.content
      };

    } catch (error: any) {
      console.error('Error calling OpenAI API:', error);
      return {
        success: false,
        error: error.message,
        fallbackResponse: 'I apologize, but I am temporarily unavailable. Please try again in a moment.'
      };
    }
  }

  async checkRateLimit() {
    return {
      remainingTokens: await this.rateLimiter.getTokensRemaining(),
      resetIn: (await this.rateLimiter.tryRemoveTokens(0)) ? 0 : 60000
    };
  }
}

export const openAIService = new OpenAIService();
