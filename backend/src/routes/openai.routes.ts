import { Router } from 'express';
import * as openaiController from '../controllers/openai.controller';

const router = Router();

router.post('/generate', openaiController.generateResponse);
router.get('/rate-limit', openaiController.checkRateLimit);

export default router;
