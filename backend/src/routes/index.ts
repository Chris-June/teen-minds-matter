import { Router } from 'express';
import openaiRoutes from './openai.routes';

const router = Router();

router.use('/openai', openaiRoutes);

export default router;
