import { Request, Response } from 'express';
import { openAIService } from '../services/openai.service';

export const generateResponse = async (req: Request, res: Response) => {
  try {
    const { prompt, ...params } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: 'Prompt is required'
      });
    }

    const response = await openAIService.generateResponse(prompt, params);
    res.json(response);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const checkRateLimit = async (req: Request, res: Response) => {
  try {
    const status = await openAIService.checkRateLimit();
    res.json(status);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
